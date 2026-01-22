
/* ==========================================
   GAMIFICATION ENGINE
   ========================================== */

// Point system configuration
const Points = {
  NEW_REPORT: 10,
  VERIFIED_REPORT: 5,
  NEW_COMMENT: 2,
  FALSE_REPORT: -5,
  INITIAL_SCORE: 0,
};

/**
 * Updates a user's score in Firestore.
 * @param {string} userId - The ID of the user to update.
 * @param {number} points - The number of points to add (can be negative).
 */
async function updateUserScore(userId, points) {
  if (!userId || !points) return;

  const userRef = doc(db, 'users', userId);

  try {
    await runTransaction(db, async (transaction) => {
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists()) {
        // If the user document doesn't exist, create it with the initial score.
        transaction.set(userRef, { score: Points.INITIAL_SCORE + points });
      } else {
        // Otherwise, update the existing score.
        const newScore = (userDoc.data().score || 0) + points;
        transaction.update(userRef, { score: newScore });
      }
    });
    console.log(`User ${userId} score updated by ${points}.`);
  } catch (error) {
    console.error("Failed to update user score:", error);
  }
}

/**
 * Retrieves and displays a user's score on their profile.
 * @param {string} userId - The ID of the user.
 */
async function displayUserScore(userId) {
  if (!userId) return;

  const userRef = doc(db, 'users', userId);
  const scoreElement = document.getElementById('user-score');

  if (!scoreElement) return;

  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const score = userDoc.data().score || 0;
      scoreElement.textContent = `Reputation: ${score}`;
    } else {
      scoreElement.textContent = `Reputation: ${Points.INITIAL_SCORE}`;
    }
  } catch (error) {
    console.error("Failed to get user score:", error);
  }
}
