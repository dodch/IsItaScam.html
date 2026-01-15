const functions = require("firebase-functions");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors")({ origin: true });

exports.checkLink = functions.runWith({ maxInstances: 10 }).https.onRequest((req, res) => {
  cors(req, res, async () => {
    const url = req.query.url;
    if (!url) {
      return res.status(400).send({ error: "URL parameter is required." });
    }

    try {
      // Fetch the HTML content of the URL
      const response = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
      });

      // Load HTML into Cheerio
      const $ = cheerio.load(response.data);

      const getMetaTag = (name) => {
        return (
          $(`meta[property="og:${name}"]`).attr("content") ||
          $(`meta[name="twitter:${name}"]`).attr("content") ||
          $(`meta[name="${name}"]`).attr("content")
        );
      };

      const previewData = {
        title: getMetaTag("title") || $("title").first().text(),
        description: getMetaTag("description"),
        image: getMetaTag("image"),
        url: url,
      };

      res.status(200).send(previewData);
    } catch (error) {
      console.error("Error fetching URL", error);
      res.status(500).send({ error: "Failed to fetch or parse the URL." });
    }
  });
});
