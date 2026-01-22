/* ==========================================
   LANGUAGE TRANSLATION SYSTEM
   ========================================== */
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-login': 'Login',
    'hero-title': 'Before You Buy, Ask One Question',
    'hero-subtitle': 'Is it a scam?',
    'search-placeholder': 'Website, username, phone number...',
    'search-results': 'Search Results',
    'community-reports': 'Community Reports',
    'seller-ratings': 'Seller Ratings',
    'trending': '🔥 Trending',
    'most-recent': '🕒 Most Recent',
    'highest-risk': '⚠️ Highest Risk',
    'load-more': 'Load More',
    'notifications': 'Notifications',
    'rate-seller': 'Rate Seller',
    'report-scam': 'Report Scam',
    'submit-rating': 'Submit Rating',
    'submit-report': 'Submit Report',
    'trust-score': 'Trust Score',
    'paid-no-delivery': 'Paid, No Delivery',
    'user-paid-d17': 'User paid via D17 and got blocked.',
    'rate-or-report': 'Rate or Report',
    'admin-dashboard': 'Admin Dashboard',
    'manage-verified': 'Manage verified community members.',
    'search-name-uid': 'Search by Name or UID...',
    'add-seller': 'Add Seller',
    'verified-users': 'Verified Users',
    'banned-users': 'Banned Users',
    'add-seller-profile': 'Add Seller Profile to Database',
    'add-seller-desc': 'Add a seller without requiring reports or ratings. Set initial trust score.',
    'manually-verify': 'Manually Verify User',
    'grant-verification': 'Grant Verification',
    'manually-ban': 'Manually Ban User',
    'ban-user': 'Ban User',
    'user-uid': 'User UID (Required)',
    'display-name': 'Display Name (Optional)',
    'ban-reason': 'Reason for ban (e.g. Spamming)',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
    'contact-support': 'Contact Support',
    'about-us': 'About Us',
    'about-desc': 'IsItAScam is a community-driven platform dedicated to identifying and reporting online scams. Our mission is to create a safer digital environment by sharing real user experiences.',
    'about-us-title': 'About Us',
    'report': 'Report',
    'banned': 'Banned',
    'privacy-policy-title': 'Privacy Policy',
    'terms-of-service-title': 'Terms of Service',
    'profile-tab': 'Profile',
    'activity-tab': 'Activity',
    'rate-link-placeholder': 'Link / username / phone',
    'scam-link-placeholder': 'Link / username / phone',
    'rate-good-placeholder': 'What was good? (e.g. Fast delivery)',
    'rate-bad-placeholder': 'What was bad? (e.g. Packaging)',
    'scammer-name-placeholder': 'Display Name (e.g. Shop Name)',
    'scammer-desc-placeholder': 'Describe what happened...',
    'upload-proof': 'Upload Proof (Optional)',
    'login-title': 'Login',
    'login-subtitle': 'Sign in to submit and track reports.',
    'continue-with-google': 'Continue with Google',
    'firebase-note': 'Firebase authentication is active.',
    'cancel-deletion': 'Cancel',
    'make-contribution': 'Make a Contribution',
    'contribution-desc': 'Help the community by reporting a scam or rating a trusted seller.',
    'report-a-scam': 'Report a Scam',
    'seller-analysis': 'Seller Analysis',
    'insufficient-data': 'Insufficient data for advanced AI analysis.',
    'critical-threat': '🚨 CRITICAL THREAT DETECTED: Advanced analysis identified a high-velocity scam pattern ({count} reports in 30 days). The profile exhibits behavior consistent with fraudulent operations. Do not engage.',
    'risk-advisory': '⚠ Risk Advisory: Historical analysis found {count} confirmed scam reports. Although recent activity is lower, the account has a compromised trust history. Proceed with extreme caution.',
    'inconclusive-analysis': 'Detailed text analysis was inconclusive due to brief reviews.',
    'login-to-report': 'You must be logged in to report a scam.',
    'login-to-report-content': 'Please login to report content.',
    'my-activity': 'My Activity',
    'my-reports': 'My Reports',
    'my-ratings': 'My Ratings',
    'select-rating': 'Select Rating',
    'help-community': 'Help community stay safe by reporting suspicious activity.',
    'results-disclaimer': 'Results are based on community reports and public data.',
    'rate': 'Rate',
    'share': 'Share',
    'edit': 'Edit',
    'delete': 'Delete',
    'trusted': 'Trusted',
    'scam': 'Scam',
    'ai-summary-title': 'AI Review Summary',
    'ai-elite': '<strong>Elite Status:</strong> This profile maintains a near-perfect {score}/5 rating.',
    'ai-trusted': '<strong>Trusted Seller:</strong> Analysis shows generally positive feedback ({score}/5).',
    'ai-mixed': '<strong>Mixed Reputation:</strong> Feedback is inconsistent ({score}/5).',
    'ai-poor': '<strong>Poor Standing:</strong> User satisfaction is low ({score}/5).',
    'ai-high-risk': '<strong>High Risk:</strong> Extremely negative feedback detected ({score}/5).',
    'ai-flagged-failures': 'The AI engine flagged critical failures in <strong>{0}</strong>.',
    'ai-flagged-failures-2': 'The AI engine flagged critical failures in <strong>{0}</strong> and <strong>{1}</strong>.',
    'ai-positive-negligible': 'Positive feedback is negligible or suspicious.',
    'ai-complaints-generic': 'Multiple complaints analyzed regarding service and delivery.',
    'ai-praise': 'Buyers consistently praise the <strong>{0}</strong>.',
    'ai-praise-2': 'Buyers consistently praise the <strong>{0}</strong> and <strong>{1}</strong>.',
    'ai-minor-issues': 'However, a minority of users reported issues with <strong>{0}</strong>.',
    'ai-no-issues': 'No significant recurring issues found.',
    'ai-mixed-good-bad': 'While <strong>{0}</strong> is a strength, there are persistent concerns regarding <strong>{1}</strong>.',
    'ai-mixed-good': '<strong>{0}</strong> is a highlight, but overall consistency varies.',
    'ai-mixed-bad': '<strong>{0}</strong> is a primary pain point for buyers.',
    'ai-trend-up': 'Trending Up 📈.',
    'ai-trend-down': 'Trending Down 📉.',
    'ai-historical': '<strong>⚠ Note:</strong> This profile has {count} historical report(s), but recent reputation is generally positive.',
    'verified-alert': '⚠ Verified Source Alert: Trusted community members have flagged this profile.',
    'verified-endorsement': '✓ Verified Endorsement: Trusted members have vouched for this seller.',
    'welcome': 'Welcome,',
    'logged-in-msg': 'You are currently logged in.',
    'logout': 'Logout',
    'open-admin': 'Open Admin Dashboard',
    'reports-count-label': 'reports',
    'visit-profile': 'Visit Profile ↗',
    'avg-from-ratings': 'avg. from {count} ratings',
    'status-no-info': 'Not Enough Info',
    'status-trusted': 'Trusted Business',
    'status-low-risk': 'Low Risk',
    'status-potential-risk': 'Potential Risk',
    'status-high-risk': 'High Risk',
    'stat-trust-score': 'Trust Score',
    'stat-reports': 'Reports',
    'stat-ratings': 'Ratings',
    'view-history': 'View Full History',
    'hide-history': 'Hide History'
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-login': 'Connexion',
    'hero-title': 'Avant d\'acheter, posez une question',
    'hero-subtitle': 'Est-ce une arnaque ?',
    'search-placeholder': 'Site web, nom d\'utilisateur, numéro de téléphone...',
    'search-results': 'Résultats de recherche',
    'community-reports': 'Rapports communautaires',
    'seller-ratings': 'Évaluations des vendeurs',
    'trending': '🔥 Tendance',
    'most-recent': '🕒 Plus récent',
    'highest-risk': '⚠️ Risque le plus élevé',
    'load-more': 'Charger plus',
    'notifications': 'Notifications',
    'rate-seller': 'Évaluer le vendeur',
    'report-scam': 'Signaler une arnaque',
    'submit-rating': 'Soumettre l\'évaluation',
    'submit-report': 'Soumettre le rapport',
    'trust-score': 'Score de confiance',
    'paid-no-delivery': 'Payé, non livré',
    'user-paid-d17': 'L\'utilisateur a payé via D17 et a été bloqué.',
    'rate-or-report': 'Évaluer ou signaler',
    'admin-dashboard': 'Tableau de bord administrateur',
    'manage-verified': 'Gérer les membres communautaires vérifiés.',
    'search-name-uid': 'Rechercher par nom ou UID...',
    'add-seller': 'Ajouter un vendeur',
    'verified-users': 'Utilisateurs vérifiés',
    'banned-users': 'Utilisateurs bannis',
    'add-seller-profile': 'Ajouter un profil de vendeur à la base de données',
    'add-seller-desc': 'Ajouter un vendeur sans exiger de rapports ou d\'évaluations. Définir le score de confiance initial.',
    'manually-verify': 'Vérifier manuellement l\'utilisateur',
    'grant-verification': 'Accorder la vérification',
    'manually-ban': 'Bannir manuellement l\'utilisateur',
    'ban-user': 'Bannir l\'utilisateur',
    'user-uid': 'UID de l\'utilisateur (obligatoire)',
    'display-name': 'Nom d\'affichage (facultatif)',
    'ban-reason': 'Raison du bannissement (ex: Spam)',
    'privacy-policy': 'Politique de confidentialité',
    'terms-of-service': 'Conditions d\'utilisation',
    'contact-support': 'Contacter le support',
    'about-us': 'À propos de nous',
    'about-desc': 'IsItAScam est une plateforme communautaire dédiée à l\'identification et au signalement des arnaques en ligne. Notre mission est de créer un environnement numérique plus sûr en partageant de véritables expériences utilisateur.',
    'about-us-title': 'À propos de nous',
    'report': 'Signaler',
    'banned': 'Banni',
    'privacy-policy-title': 'Politique de confidentialité',
    'terms-of-service-title': 'Conditions d\'utilisation',
    'profile-tab': 'Profil',
    'activity-tab': 'Activité',
    'rate-link-placeholder': 'Lien / nom d\'utilisateur / téléphone...',
    'scam-link-placeholder': 'Lien / nom d\'utilisateur / téléphone...',
    'rate-good-placeholder': 'Qu\'est-ce qui était bon ? (ex: Livraison rapide)',
    'rate-bad-placeholder': 'Qu\'est-ce qui était mauvais ? (ex: Emballage)',
    'scammer-name-placeholder': 'Nom d\'affichage (ex: Nom du magasin)',
    'scammer-desc-placeholder': 'Décrivez ce qui s\'est passé...',
    'upload-proof': 'Télécharger la preuve (Optionnel)',
    'login-title': 'Connexion',
    'login-subtitle': 'Connectez-vous pour soumettre et suivre les rapports.',
    'continue-with-google': 'Continuer avec Google',
    'firebase-note': 'L\'authentification Firebase est active.',
    'cancel-deletion': 'Annuler',
    'make-contribution': 'Faire une contribution',
    'contribution-desc': 'Aidez la communauté en signalant une arnaque ou en évaluant un vendeur de confiance.',
    'report-a-scam': 'Signaler une arnaque',
    'seller-analysis': 'Analyse du vendeur',
    'insufficient-data': 'Données insuffisantes pour l\'analyse IA avancée.',
    'critical-threat': '🚨 MENACE CRITIQUE DÉTECTÉE : L\'analyse avancée a identifié un modèle d\'arnaque à haute vélocité ({count} signalements en 30 jours). Le profil présente un comportement cohérent avec des opérations frauduleuses. Ne pas engager.',
    'risk-advisory': '⚠ Avis de risque : L\'analyse historique a trouvé {count} signalements d\'arnaque confirmés. Bien que l\'activité récente soit plus faible, le compte a un historique de confiance compromis. Procédez avec une prudence extrême.',
    'inconclusive-analysis': 'L\'analyse de texte détaillée était inconclusive en raison de brèves critiques.',
    'login-to-report': 'Vous devez être connecté pour signaler une arnaque.',
    'login-to-report-content': 'Veuillez vous connecter pour signaler du contenu.',
    'my-activity': 'Mon activité',
    'my-reports': 'Mes rapports',
    'my-ratings': 'Mes évaluations',
    'select-rating': 'Sélectionner la note',
    'help-community': 'Aidez la communauté à rester en sécurité en signalant les activités suspectes.',
    'results-disclaimer': 'Les résultats sont basés sur les rapports communautaires et les données publiques.',
    'rate': 'Évaluer',
    'share': 'Partager',
    'edit': 'Modifier',
    'delete': 'Supprimer',
    'trusted': 'Fiable',
    'scam': 'Arnaque',
    'ai-summary-title': 'Résumé IA',
    'ai-elite': '<strong>Statut Élite :</strong> Ce profil maintient une note quasi parfaite de {score}/5.',
    'ai-trusted': '<strong>Vendeur de Confiance :</strong> L\'analyse montre des retours généralement positifs ({score}/5).',
    'ai-mixed': '<strong>Réputation Mitigée :</strong> Les retours sont incohérents ({score}/5).',
    'ai-poor': '<strong>Mauvaise Posture :</strong> La satisfaction des utilisateurs est faible ({score}/5).',
    'ai-high-risk': '<strong>Haut Risque :</strong> Des retours extrêmement négatifs détectés ({score}/5).',
    'ai-flagged-failures': 'L\'IA a signalé des échecs critiques dans <strong>{0}</strong>.',
    'ai-flagged-failures-2': 'L\'IA a signalé des échecs critiques dans <strong>{0}</strong> et <strong>{1}</strong>.',
    'ai-positive-negligible': 'Les retours positifs sont négligeables ou suspects.',
    'ai-complaints-generic': 'Multiples plaintes analysées concernant le service et la livraison.',
    'ai-praise': 'Les acheteurs louent constamment <strong>{0}</strong>.',
    'ai-praise-2': 'Les acheteurs louent constamment <strong>{0}</strong> et <strong>{1}</strong>.',
    'ai-minor-issues': 'Cependant, une minorité d\'utilisateurs a signalé des problèmes avec <strong>{0}</strong>.',
    'ai-no-issues': 'Aucun problème récurrent significatif trouvé.',
    'ai-mixed-good-bad': 'Bien que <strong>{0}</strong> soit une force, il y a des préoccupations persistantes concernant <strong>{1}</strong>.',
    'ai-mixed-good': '<strong>{0}</strong> est un point fort, mais la cohérence globale varie.',
    'ai-mixed-bad': '<strong>{0}</strong> est un point douloureux majeur pour les acheteurs.',
    'ai-trend-up': 'Tendance à la hausse 📈.',
    'ai-trend-down': 'Tendance à la baisse 📉.',
    'ai-historical': '<strong>⚠ Note :</strong> Ce profil a {count} rapport(s) historique(s), mais la réputation récente est généralement positive.',
    'verified-alert': '⚠ Alerte Source Vérifiée : Des membres de confiance ont signalé ce profil.',
    'verified-endorsement': '✓ Approbation Vérifiée : Des membres de confiance ont recommandé ce vendeur.',
    'welcome': 'Bienvenue,',
    'logged-in-msg': 'Vous êtes actuellement connecté.',
    'logout': 'Déconnexion',
    'open-admin': 'Ouvrir le tableau de bord admin',
    'reports-count-label': 'rapports',
    'visit-profile': 'Visiter le profil ↗',
    'avg-from-ratings': 'moy. de {count} évaluations',
    'status-no-info': 'Infos insuffisantes',
    'status-trusted': 'Commerce de confiance',
    'status-low-risk': 'Faible risque',
    'status-potential-risk': 'Risque potentiel',
    'status-high-risk': 'Risque élevé',
    'stat-trust-score': 'Score de confiance',
    'stat-reports': 'Rapports',
    'stat-ratings': 'Évaluations',
    'view-history': 'Voir l\'historique complet',
    'hide-history': 'Masquer l\'historique'
  },
  ar: {
    'nav-home': 'الرئيسية',
    'nav-login': 'تسجيل الدخول',
    'hero-title': 'قبل الشراء، اسأل سؤالاً واحداً',
    'hero-subtitle': 'هل هي عملية احتيال؟',
    'search-placeholder': 'الموقع الإلكتروني، اسم المستخدم، رقم الهاتف...',
    'search-results': 'نتائج البحث',
    'community-reports': 'تقارير المجتمع',
    'seller-ratings': 'تقييمات البائعين',
    'trending': '🔥 الشائع',
    'most-recent': '🕒 الأحدث',
    'highest-risk': '⚠️ أعلى مخاطرة',
    'load-more': 'تحميل المزيد',
    'notifications': 'الإشعارات',
    'rate-seller': 'تقييم البائع',
    'report-scam': 'الإبلاغ عن احتيال',
    'submit-rating': 'إرسال التقييم',
    'submit-report': 'إرسال التقرير',
    'trust-score': 'نقاط الثقة',
    'paid-no-delivery': 'مدفوع، لم يتم التسليم',
    'user-paid-d17': 'المستخدم دفع عبر D17 وتم حظره.',
    'rate-or-report': 'قيم أو أبلغ',
    'admin-dashboard': 'لوحة التحكم',
    'manage-verified': 'إدارة الأعضاء الموثوقين.',
    'search-name-uid': 'البحث بالاسم أو UID...',
    'add-seller': 'إضافة بائع',
    'verified-users': 'المستخدمون الموثوقون',
    'banned-users': 'المستخدمون المحظورون',
    'add-seller-profile': 'إضافة ملف تعريف بائع إلى قاعدة البيانات',
    'add-seller-desc': 'إضافة بائع دون الحاجة إلى تقارير أو تقييمات. تعيين نقاط الثقة الأولية.',
    'manually-verify': 'التحقق من المستخدم يدوياً',
    'grant-verification': 'منح التحقق',
    'manually-ban': 'حظر المستخدم يدوياً',
    'ban-user': 'حظر المستخدم',
    'user-uid': 'UID المستخدم (مطلوب)',
    'display-name': 'اسم العرض (اختياري)',
    'ban-reason': 'سبب الحظر (مثال: الرسائل المزعجة)',
    'privacy-policy': 'سياسة الخصوصية',
    'terms-of-service': 'شروط الخدمة',
    'contact-support': 'اتصل بالدعم',
    'about-us': 'من نحن',
    'about-desc': 'IsItAScam هي منصة مجتمعية مخصصة لتحديد والإبلاغ عن عمليات الاحتيال عبر الإنترنت. مهمتنا هي خلق بيئة رقمية أكثر أماناً من خلال مشاركة تجارب المستخدمين الحقيقية.',
    'about-us-title': 'من نحن',
    'report': 'إبلاغ',
    'banned': 'محظور',
    'privacy-policy-title': 'سياسة الخصوصية',
    'terms-of-service-title': 'شروط الخدمة',
    'profile-tab': 'الملف الشخصي',
    'activity-tab': 'النشاط',
    'rate-link-placeholder': 'الرابط / اسم المستخدم / رقم الهاتف...',
    'scam-link-placeholder': 'الرابط / اسم المستخدم / رقم الهاتف...',
    'rate-good-placeholder': 'ما كان جيداً؟ (مثال: توصيل سريع)',
    'rate-bad-placeholder': 'ما كان سيئاً؟ (مثال: التغليف)',
    'scammer-name-placeholder': 'اسم العرض (مثال: اسم المتجر)',
    'scammer-desc-placeholder': 'صف ما حدث...',
    'upload-proof': 'رفع الدليل (اختياري)',
    'login-title': 'تسجيل الدخول',
    'login-subtitle': 'سجل الدخول لإرسال وتتبع التقارير.',
    'continue-with-google': 'المتابعة مع جوجل',
    'firebase-note': 'مصادقة Firebase نشطة.',
    'cancel-deletion': 'إلغاء',
    'make-contribution': 'قدم مساهمة',
    'contribution-desc': 'ساعد المجتمع من خلال الإبلاغ عن عملية احتيال أو تقييم بائع موثوق.',
    'report-a-scam': 'الإبلاغ عن احتيال',
    'seller-analysis': 'تحليل البائع',
    'insufficient-data': 'بيانات غير كافية للتحليل المتقدم بالذكاء الاصطناعي.',
    'critical-threat': '🚨 تم اكتشاف تهديد حرج: التحليل المتقدم حدد نمط احتيال عالي السرعة ({count} تقارير في 30 يومًا). الملف الشخصي يظهر سلوكًا متسقًا مع العمليات الاحتيالية. لا تتفاعل.',
    'risk-advisory': '⚠ تحذير المخاطر: التحليل التاريخي وجد {count} تقارير احتيال مؤكدة. على الرغم من أن النشاط الحالي أقل، الحساب لديه تاريخ ثقة compromised. تقدم بحذر شديد.',
    'inconclusive-analysis': 'التحليل النصي المفصل كان غير حاسم بسبب المراجعات القصيرة.',
    'login-to-report': 'يجب أن تكون مسجلاً للدخول للإبلاغ عن عملية احتيال.',
    'login-to-report-content': 'يرجى تسجيل الدخول للإبلاغ عن المحتوى.',
    'my-activity': 'نشاطي',
    'my-reports': 'تقاريري',
    'my-ratings': 'تقييماتي',
    'select-rating': 'اختر التقييم',
    'help-community': 'ساعد المجتمع على البقاء آمناً من خلال الإبلاغ عن الأنشطة المشبوهة.',
    'results-disclaimer': 'النتائج مبنية على تقارير المجتمع والبيانات العامة.',
    'rate': 'تقييم',
    'share': 'مشاركة',
    'edit': 'تعديل',
    'delete': 'حذف',
    'trusted': 'موثوق',
    'scam': 'احتيال',
    'ai-summary-title': 'ملخص الذكاء الاصطناعي',
    'ai-elite': '<strong>حالة النخبة:</strong> هذا الملف الشخصي يحافظ على تقييم شبه مثالي {score}/5.',
    'ai-trusted': '<strong>بائع موثوق:</strong> التحليل يظهر ردود فعل إيجابية بشكل عام ({score}/5).',
    'ai-mixed': '<strong>سمعة مختلطة:</strong> ردود الفعل غير متسقة ({score}/5).',
    'ai-poor': '<strong>وضع ضعيف:</strong> رضا المستخدم منخفض ({score}/5).',
    'ai-high-risk': '<strong>مخاطرة عالية:</strong> تم اكتشاف ردود فعل سلبية للغاية ({score}/5).',
    'ai-flagged-failures': 'حدد محرك الذكاء الاصطناعي إخفاقات حرجة في <strong>{0}</strong>.',
    'ai-flagged-failures-2': 'حدد محرك الذكاء الاصطناعي إخفاقات حرجة في <strong>{0}</strong> و <strong>{1}</strong>.',
    'ai-positive-negligible': 'ردود الفعل الإيجابية ضئيلة أو مشبوهة.',
    'ai-complaints-generic': 'تم تحليل شكاوى متعددة بخصوص الخدمة والتسليم.',
    'ai-praise': 'المشترون يثنون باستمرار على <strong>{0}</strong>.',
    'ai-praise-2': 'المشترون يثنون باستمرار على <strong>{0}</strong> و <strong>{1}</strong>.',
    'ai-minor-issues': 'ومع ذلك، أبلغت أقلية من المستخدمين عن مشاكل مع <strong>{0}</strong>.',
    'ai-no-issues': 'لم يتم العثور على مشاكل متكررة كبيرة.',
    'ai-mixed-good-bad': 'بينما <strong>{0}</strong> نقطة قوة، هناك مخاوف مستمرة بشأن <strong>{1}</strong>.',
    'ai-mixed-good': '<strong>{0}</strong> نقطة مضيئة، لكن الاتساق العام يختلف.',
    'ai-mixed-bad': '<strong>{0}</strong> نقطة ألم رئيسية للمشترين.',
    'ai-trend-up': 'اتجاه صاعد 📈.',
    'ai-trend-down': 'اتجاه هابط 📉.',
    'ai-historical': '<strong>⚠ ملاحظة:</strong> هذا الملف لديه {count} تقرير تاريخي، لكن السمعة الأخيرة إيجابية بشكل عام.',
    'verified-alert': '⚠ تنبيه مصدر موثوق: قام أعضاء موثوقون بالإبلاغ عن هذا الملف الشخصي.',
    'verified-endorsement': '✓ تأييد موثوق: قام أعضاء موثوقون بتزكية هذا البائع.',
    'welcome': 'مرحباً،',
    'logged-in-msg': 'أنت مسجل الدخول حالياً.',
    'logout': 'تسجيل الخروج',
    'open-admin': 'فتح لوحة التحكم',
    'reports-count-label': 'تقارير',
    'visit-profile': 'زيارة الملف الشخصي ↗',
    'avg-from-ratings': 'متوسط من {count} تقييمات',
    'status-no-info': 'معلومات غير كافية',
    'status-trusted': 'عمل موثوق',
    'status-low-risk': 'مخاطرة منخفضة',
    'status-potential-risk': 'مخاطرة محتملة',
    'status-high-risk': 'مخاطرة عالية',
    'stat-trust-score': 'نقاط الثقة',
    'stat-reports': 'تقارير',
    'stat-ratings': 'تقييمات',
    'view-history': 'عرض السجل الكامل',
    'hide-history': 'إخفاء السجل'
  },
  tn: {
    'nav-home': 'الصفحة الرئيسية',
    'nav-login': 'دخول',
    'hero-title': 'قبل ما تشري، سول سؤال وحد',
    'hero-subtitle': 'واش هي نصابة؟',
    'search-placeholder': 'الموقع، اسم المستخدم، رقم الهاتف...',
    'search-results': 'نتايج البحث',
    'community-reports': 'تقارير المجتمع',
    'seller-ratings': 'تقييمات البائعين',
    'trending': '🔥 الشائع',
    'most-recent': '🕒 الجدد',
    'highest-risk': '⚠️ أكبر خطر',
    'load-more': 'حمل أكثر',
    'notifications': 'الإشعارات',
    'rate-seller': 'قيم البائع',
    'report-scam': 'بلغ عن نصابة',
    'submit-rating': 'بعث التقييم',
    'submit-report': 'بعث التقرير',
    'trust-score': 'نقاط الثقة',
    'paid-no-delivery': 'دفع، ما وصلتش',
    'user-paid-d17': 'المستخدم دفع ب D17 و تبلغع.',
    'rate-or-report': 'قيم ولا بلغ',
    'admin-dashboard': 'لوحة التحكم',
    'manage-verified': 'تصرف في الأعضاء الموثوقين.',
    'search-name-uid': 'بحث بالاسم ولا UID...',
    'add-seller': 'زيد بائع',
    'verified-users': 'المستخدمين الموثوقين',
    'banned-users': 'المستخدمين المحظورين',
    'add-seller-profile': 'زيد ملف بائع ف قاعدة البيانات',
    'add-seller-desc': 'زيد بائع ما يلزموش تقارير ولا تقييمات. خلي نقاط ثقة أولية.',
    'manually-verify': 'تحقق من المستخدم يدوياً',
    'grant-verification': 'منح التحقق',
    'manually-ban': 'حظر المستخدم يدوياً',
    'ban-user': 'حظر المستخدم',
    'user-uid': 'UID المستخدم (ضروري)',
    'display-name': 'اسم العرض (اختياري)',
    'ban-reason': 'سبب الحظر (مثال: سبام)',
    'privacy-policy': 'سياسة الخصوصية',
    'terms-of-service': 'شروط الخدمة',
    'contact-support': 'اتصل بالدعم',
    'about-us': 'عنينا',
    'about-desc': 'IsItAScam هي منصة مجتمعية مخصصة لتحديد والتبليغ عن النصابات عبر الإنترنت. مهمتنا هي خلق بيئة رقمية أكثر أماناً من خلال مشاركة تجارب المستخدمين الحقيقية.',
    'my-activity': 'نشاطي',
    'my-reports': 'تقاريري',
    'my-ratings': 'تقييماتي',
    'select-rating': 'اختر التقييم',
    'help-community': 'ساعد المجتمع يبقى آمن بالتبليغ على الأنشطة المشبوهة.',
    'rate': 'قيم',
    'share': 'بارتاجي',
    'edit': 'بدل',
    'delete': 'فسخ',
    'trusted': 'ثيقة',
    'scam': 'قلبة',
    'ai-summary-title': 'ملخص IA',
    'ai-elite': '<strong>نخبة:</strong> البروفيل هذا عندو تقييم طيارة {score}/5.',
    'ai-trusted': '<strong>بائع ثيقة:</strong> التحليل يوري اللي الناس فرحانة ({score}/5).',
    'ai-mixed': '<strong>نص نص:</strong> التقييمات مخلطة ({score}/5).',
    'ai-poor': '<strong>حالة حليلة:</strong> الناس موش عاجبها ({score}/5).',
    'ai-high-risk': '<strong>خطر كبير:</strong> فما برشا كلام خايب ({score}/5).',
    'ai-flagged-failures': 'الذكاء الاصطناعي لقى مشاكل كبيرة في <strong>{0}</strong>.',
    'ai-flagged-failures-2': 'الذكاء الاصطناعي لقى مشاكل كبيرة في <strong>{0}</strong> و <strong>{1}</strong>.',
    'ai-positive-negligible': 'الكلام الباهي شوية ولا مشكوك فيه.',
    'ai-complaints-generic': 'فما برشا تشكيات على الخدمة والتوصيل.',
    'ai-praise': 'المشترين ديما يشكرو في <strong>{0}</strong>.',
    'ai-praise-2': 'المشترين ديما يشكرو في <strong>{0}</strong> و <strong>{1}</strong>.',
    'ai-minor-issues': 'أما فما شوية عباد تشكاو من <strong>{0}</strong>.',
    'ai-no-issues': 'ما فماش مشاكل كبيرة تتعاود.',
    'ai-mixed-good-bad': 'صحيح <strong>{0}</strong> باهي، أما فما مشاكل في <strong>{1}</strong>.',
    'ai-mixed-good': '<strong>{0}</strong> حاجة باهية، أما الباقي يختلف.',
    'ai-mixed-bad': '<strong>{0}</strong> هي المشكلة الكبيرة عند الشراية.',
    'ai-trend-up': 'طالع 📈.',
    'ai-trend-down': 'هابط 📉.',
    'ai-historical': '<strong>⚠ رد بالك:</strong> البروفيل هذا عندو {count} تقارير قديمة، أما توا تحسن.',
    'report': 'بلغ',
    'banned': 'مبلكي',
    'verified-alert': '⚠ رد بالك: أعضاء ثيقة بلغوا على البروفيل هذا.',
    'verified-endorsement': '✓ جوك باهي: أعضاء ثيقة شكروا البائع هذا.',
    'welcome': 'مرحباً،',
    'logged-in-msg': 'راك مكونكتي.',
    'logout': 'اخرج',
    'open-admin': 'حل لوحة التحكم',
    'reports-count-label': 'تقارير',
    'visit-profile': 'شوف البروفيل ↗',
    'avg-from-ratings': 'معدل من {count} تقييمات',
    'status-no-info': 'معلومات ناقصة',
    'status-trusted': 'خدام ثيقة',
    'status-low-risk': 'خطر ضعيف',
    'status-potential-risk': 'ينجم يكون خطر',
    'status-high-risk': 'خطر كبير',
    'stat-trust-score': 'نقاط الثقة',
    'stat-reports': 'تقارير',
    'stat-ratings': 'تقييمات',
    'view-history': 'شوف السجل الكامل',
    'hide-history': 'خبي السجل'
  }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

function changeLanguage(lang) {
  console.log('Changing language to:', lang); // Debug log
  
  if (currentLanguage !== lang) {
    localStorage.setItem('selectedLanguage', lang);
    location.reload();
    return;
  }

  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  
  // Update current language display
  const languageNames = {
    'en': 'English',
    'fr': 'Français', 
    'ar': 'العربية',
    'tn': 'تونسي'
  };
  document.getElementById('current-language').textContent = languageNames[lang];
  
  // Set language attribute only - DO NOT set dir to prevent layout shifts
  document.documentElement.setAttribute('lang', lang);
  
  // Update all translatable elements
  updateTranslations();
  
  // Close dropdown
  document.getElementById('language-dropdown').classList.add('hidden');
}

function updateTranslations() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
  
  // Update select options
  document.querySelectorAll('option[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

function toggleLanguageDropdown() {
  console.log('Toggling language dropdown'); // Debug log
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
    console.log('Dropdown classes after toggle:', dropdown.className); // Debug log
  } else {
    console.error('Language dropdown not found!');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const selector = document.querySelector('.language-selector');
  if (!selector.contains(event.target)) {
    document.getElementById('language-dropdown').classList.add('hidden');
  }
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing language system'); // Debug log
  changeLanguage(currentLanguage);
  
  // Test if elements exist
  const langDropdown = document.getElementById('language-dropdown');
  const langBtn = document.querySelector('.language-btn');
  console.log('Language dropdown element:', langDropdown);
  console.log('Language button element:', langBtn);
  
  // Add click listeners manually as backup
  if (langBtn) {
    langBtn.addEventListener('click', function(e) {
      console.log('Language button clicked via addEventListener'); // Debug log
      e.preventDefault();
      e.stopPropagation();
      toggleLanguageDropdown();
    });
  }
  
  // Add language option listeners manually
  document.querySelectorAll('.language-option').forEach((btn, index) => {
    const lang = ['en', 'fr', 'ar', 'tn'][index];
    console.log(`Adding listener to ${lang} button`); // Debug log
    btn.addEventListener('click', function(e) {
      console.log(`${lang} button clicked via addEventListener`); // Debug log
      e.preventDefault();
      e.stopPropagation();
      changeLanguage(lang);
    });
  });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, deleteDoc, doc, onSnapshot, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKWeJs1dbtuVAV6S5smtHqlHiU8SiY7V8",
  authDomain: "isitascam-c4a5c.firebaseapp.com",
  projectId: "isitascam-c4a5c",
  storageBucket: "isitascam-c4a5c.appspot.com",
  messagingSenderId: "808456257466",
  appId: "1:808456257466:web:25dff8b7748f1503802783",
  measurementId: "G-P90Z7KYW70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// ADMIN CONFIGURATION
const ADMIN_UID = "RDfLIxyEC1SZxNA7GphhTNGWi7A2";

/* BACKGROUND ANIMATION HELPERS */
let vantaAnimationId = null;

// Helper to interpolate between two hex colors
function interpolateColor(color1, color2, factor) {
    const r1 = (color1 >> 16) & 255;
    const g1 = (color1 >> 8) & 255;
    const b1 = color1 & 255;

    const r2 = (color2 >> 16) & 255;
    const g2 = (color2 >> 8) & 255;
    const b2 = color2 & 255;

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return (r << 16) | (g << 8) | b;
}

function animateVantaColor(targetColor) {
    if (!window.vantaEffect) return;

    // Cancel any ongoing animation
    if (vantaAnimationId) {
        cancelAnimationFrame(vantaAnimationId);
    }

    const startColor = window.vantaEffect.options.color;
    const duration = 1500; // A bit slow as requested
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const newColor = interpolateColor(startColor, targetColor, progress);

        window.vantaEffect.setOptions({ color: newColor });

        if (progress < 1) {
            vantaAnimationId = requestAnimationFrame(step);
        } else {
            vantaAnimationId = null;
        }
    }

    vantaAnimationId = requestAnimationFrame(step);
}

/* BACKGROUND EFFECT CONTROLLER */
function updateBackgroundEffect(type, customColor = null) {
  if (!window.vantaEffect) return;

  let targetColor;

  switch (type) {
    case 'rate':
      targetColor = 0xffaa00; // Gold
      break;
    case 'report':
      targetColor = 0xff4d4d; // Red
      break;
    case 'settings':
      targetColor = 0x2979ff; // Blue
      break;
    case 'trust':
      targetColor = customColor ? parseInt(customColor.replace('#', '0x')) : 0x8b5cf6;
      break;
    case 'default':
    default:
      targetColor = 0x8b5cf6; // Default Purple
      break;
  }
  
  // Animate only the 'color' property, keeping the background dark as requested.
  animateVantaColor(targetColor);
}

/* PAGE NAVIGATION */
function showPage(page, defaultTab = 'profile', activitySubTab = 'reports') {
  // Handle Background Blur for specific pages (Profile, Login, Text Pages)
  const blurredPages = ['profile', 'login', 'privacy', 'terms', 'admin-dashboard'];
  window.isBlurredPage = blurredPages.includes(page);

  // Update Background based on Page - Moved to top to ensure execution
  if (page === 'home') {
    updateBackgroundEffect('default');
  } else if (page === 'profile') {
    updateBackgroundEffect('settings');
  } else if (page === 'report') {
    const rateBtn = document.getElementById('tab-rate');
    if (rateBtn && rateBtn.classList.contains('active')) updateBackgroundEffect('rate');
    else updateBackgroundEffect('report');
  } else if (page === 'details-view') {
    // details-view is handled by populateDetailsView
  } else {
    // Login, Admin, etc. -> Default Purple
    updateBackgroundEffect('default');
  }

  if (page === 'report' && !auth.currentUser) {
    showToast(translations[currentLanguage]['login-to-report'] || "You must be logged in to report a scam.", "error");
    showPage('login');
    return;
  }

  // Ensure the page starts at the top when navigating
  if (!window.skipScrollReset) {
    window.scrollTo(0, 0);
  }
  window.skipScrollReset = false; // Reset flag

  document.getElementById('home').classList.add('hidden');
  document.getElementById('profile').classList.add('hidden');
  document.getElementById('report').classList.add('hidden');
  document.getElementById('login').classList.add('hidden');
  document.getElementById('details-view').classList.add('hidden');
  if(document.getElementById('admin-dashboard')) document.getElementById('admin-dashboard').classList.add('hidden');
  if(document.getElementById('privacy')) document.getElementById('privacy').classList.add('hidden');
  if(document.getElementById('terms')) document.getElementById('terms').classList.add('hidden');

  document.getElementById(page).classList.remove('hidden');

  // Show FAB only on home page
  const fab = document.querySelector('.floating-pill-btn');
  if (fab) {
    if (page === 'home') {
      fab.classList.remove('hidden-fab');
    } else {
      fab.classList.add('hidden-fab');
    }
  }

  // Refresh reports when going home
  if (page === 'home') {
    // Reset Search UI
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    const sortSelect = document.getElementById('sort-filter');
    if (sortSelect) sortSelect.value = 'trending';
    
    const countrySelect = document.getElementById('country-filter');
    if (countrySelect) countrySelect.value = 'GLOBAL';
    
    const verifiedBtn = document.getElementById('verified-filter-btn');
    if (verifiedBtn) {
        verifiedBtn.classList.remove('active');
        Object.assign(verifiedBtn.style, { background: '#0d1117', color: '#8b949e', borderColor: '#30363d' });
    }
    
    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) clearBtn.classList.add('hidden');
    
    const searchLabel = document.getElementById('search-results-label');
    if (searchLabel) searchLabel.classList.add('hidden');

    // Kick off search index population if it hasn't started
    if (!searchIndexReadyPromise) {
        searchIndexReadyPromise = populateSearchIndex();
    }

    renderReports();
    renderRatings();
    switchHomeTab('reports');
    animateHeroText();
    requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));
  }
  if (page === 'login') {
    renderActivity();
    if (auth.currentUser) {
      switchProfileTab(defaultTab);
      switchActivityTab(activitySubTab);
      requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));
    }
  }
  if (page === 'admin-dashboard') {
    renderAdminDashboard();
    switchAdminTab('verified');
    requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));
  }
}

/* HERO TEXT ANIMATION */
function animateHeroText() {
  const styleId = 'hero-anim-style-v2';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .hero-fade-in {
        opacity: 0;
        animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .typing-cursor {
        border-right: 3px solid #8b5cf6;
        animation: blinkCursor 0.8s step-end infinite;
        padding-right: 4px;
      }
      @keyframes blinkCursor {
        from, to { border-color: #8b5cf6; }
        50% { border-color: transparent; }
      }
    `;
    document.head.appendChild(style);
  }

  // 1. Animate "Before You Buy..." (Fade In)
  const phrase1 = "Before You Buy, Ask One Question";
  const xpath1 = `//*[contains(text(), "${phrase1}")]`;
  const result1 = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const el1 = result1.singleNodeValue;
  
  if (el1) {
    el1.classList.remove('hero-text-anim'); // Cleanup old
    el1.classList.remove('hero-fade-in');
    void el1.offsetWidth;
    el1.classList.add('hero-fade-in');
  }

  // 2. Animate "Is it a scam?" (Typewriter Effect)
  let el2 = document.getElementById('hero-typing-target');
  
  // If not tagged yet, find it by text
  if (!el2) {
      const phrase2 = "Is it a scam?";
      const xpath2 = `//*[contains(text(), "${phrase2}")]`;
      const result2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      el2 = result2.singleNodeValue;
      if (el2) el2.id = 'hero-typing-target';
  }

  if (el2) {
      el2.classList.remove('hero-text-anim'); // Cleanup old
      
      // Clear any existing typing timeout to prevent conflicts
      if (el2.typeTimeout) clearTimeout(el2.typeTimeout);
      
      const text = "Is it a scam?";
      el2.textContent = ""; // Clear text
      el2.classList.add('typing-cursor');
      el2.style.display = 'inline-block'; // Ensure cursor behaves
      el2.style.opacity = '1'; // Ensure visibility
      
      let charIndex = 0;
      
      function typeChar() {
          if (charIndex < text.length) {
              el2.textContent += text.charAt(charIndex);
              charIndex++;
              // Randomize speed for "human" feel (30ms to 90ms)
              const randomSpeed = 30 + Math.random() * 60; 
              el2.typeTimeout = setTimeout(typeChar, randomSpeed);
          }
      }
      
      // Start typing after the first line has started fading in
      el2.typeTimeout = setTimeout(typeChar, 600);
  }
}

/* GOOGLE LOGIN PLACEHOLDER */
function googleLogin() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User logged in:", user);
      showToast("Logged in as: " + user.displayName, "success");
      showPage('home');
    }).catch((error) => {
      console.error("Login failed:", error);
      showToast("Login failed: " + error.message, "error");
    });
}

/* LOGOUT FUNCTION */
function logout() {
  signOut(auth).then(() => {
    showToast("Logged out successfully.", "info");
    showPage('home');
  }).catch((error) => {
    console.error("Logout failed:", error);
  });
}

/* AUTH STATE OBSERVER */
onAuthStateChanged(auth, (user) => {
  const navLogin = document.getElementById('nav-login');
  const authContainer = document.querySelector('.auth-container');
  const activitySection = document.getElementById('user-activity-section');
  const profileTabs = document.getElementById('profile-tabs');

  // Prevent updateTranslations from overwriting HTML structure with text
  if (navLogin.hasAttribute('data-translate')) {
      navLogin.removeAttribute('data-translate');
  }

  if (user) {
    // User is signed in: Show profile pic in navbar
    navLogin.innerHTML = `<img src="${user.photoURL}" alt="Profile" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border: 2px solid var(--accent-primary); display:block;">`;
    navLogin.classList.remove('nav-login-btn');
    
    // Update Login Page UI to show Logout option
    if (authContainer) {
      authContainer.innerHTML = `
        <h1>${translations[currentLanguage]['welcome'] || 'Welcome,'} ${user.displayName.split(' ')[0]}</h1>
        <img src="${user.photoURL}" style="width:80px; height:80px; border-radius:50%; margin: 20px 0;">
        <p data-translate="logged-in-msg">${translations[currentLanguage]['logged-in-msg'] || 'You are currently logged in.'}</p>
        <button class="google-btn" onclick="logout()" style="background: #ff4d4d; color: white;"><span data-translate="logout">${translations[currentLanguage]['logout'] || 'Logout'}</span></button>
      `;
      
      // Admin Dashboard Button
      if (user.uid === ADMIN_UID) {
          authContainer.innerHTML += `<button onclick="showPage('admin-dashboard')" class="visit-btn" style="width:100%; margin-top:10px; background:linear-gradient(135deg, #6d28d9, #9333ea); border:none; color:white;" data-translate="open-admin">${translations[currentLanguage]['open-admin'] || 'Open Admin Dashboard'}</button>`;
      }
    }

    // Show tabs and set default view
    if (profileTabs) profileTabs.classList.remove('hidden');
    switchProfileTab('profile');
    switchActivityTab('reports');
    renderActivity();
  } else {
    // User is signed out: Show "Login" button
    navLogin.innerHTML = `<svg viewBox="0 0 24 24" style="width:18px; height:18px; fill:currentColor;"><path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"></path></svg> <span data-translate="nav-login">${translations[currentLanguage]['nav-login'] || 'Login'}</span>`;
    navLogin.classList.add('nav-login-btn');
    
    if (authContainer) {
      authContainer.innerHTML = `
        <h1 data-translate="login-title">${translations[currentLanguage]['login-title'] || 'Login'}</h1>
        <p data-translate="login-subtitle">${translations[currentLanguage]['login-subtitle'] || 'Sign in to submit and track reports.'}</p>
        <button class="google-btn" onclick="googleLogin()">
            <svg viewBox="0 0 24 24" style="width:20px; height:20px;"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            <span data-translate="continue-with-google">${translations[currentLanguage]['continue-with-google'] || 'Continue with Google'}</span>
        </button>
        <small style="opacity:0.6;" data-translate="firebase-note">${translations[currentLanguage]['firebase-note'] || 'Firebase authentication is active.'}</small>
      `;
    }

    // Hide Activity Section
    if (profileTabs) profileTabs.classList.add('hidden');
    authContainer.classList.remove('hidden'); // Ensure login box is visible
  }
});

/* COUNTRY CODES FOR PHONE INPUT */
const countryCodes = [
    { code: '+1', iso: 'us', flag: '🇺🇸', name: 'USA/CA' },
    { code: '+44', iso: 'gb', flag: '🇬🇧', name: 'UK' },
    { code: '+33', iso: 'fr', flag: '🇫🇷', name: 'France' },
    { code: '+49', iso: 'de', flag: '🇩🇪', name: 'Germany' },
    { code: '+216', iso: 'tn', flag: '🇹🇳', name: 'Tunisia' },
    { code: '+213', iso: 'dz', flag: '🇩🇿', name: 'Algeria' },
    { code: '+212', iso: 'ma', flag: '🇲🇦', name: 'Morocco' },
    { code: '+20', iso: 'eg', flag: '🇪🇬', name: 'Egypt' },
    { code: '+971', iso: 'ae', flag: '🇦🇪', name: 'UAE' },
    { code: '+966', iso: 'sa', flag: '🇸🇦', name: 'KSA' },
    { code: '+91', iso: 'in', flag: '🇮🇳', name: 'India' },
    { code: '+86', iso: 'cn', flag: '🇨🇳', name: 'China' },
    { code: '+7', iso: 'ru', flag: '🇷🇺', name: 'Russia' },
    { code: '+81', iso: 'jp', flag: '🇯🇵', name: 'Japan' },
    { code: '+39', iso: 'it', flag: '🇮🇹', name: 'Italy' },
    { code: '+34', iso: 'es', flag: '🇪🇸', name: 'Spain' },
    { code: '+55', iso: 'br', flag: '🇧🇷', name: 'Brazil' },
    { code: '+61', iso: 'au', flag: '🇦🇺', name: 'Australia' },
    { code: '+90', iso: 'tr', flag: '🇹🇷', name: 'Turkey' },
    { code: '+234', iso: 'ng', flag: '🇳🇬', name: 'Nigeria' }
];

function initCountrySelects() {
    const selects = [document.getElementById('rate-country-select'), document.getElementById('scam-country-select')];
    const optionsHTML = countryCodes.map(c => `<option value="${c.code}">${c.flag} ${c.code}</option>`).join('');
    
    selects.forEach(sel => {
        if (sel) {
            sel.innerHTML = optionsHTML;
            // Try to set default based on user locale or just default to first
            sel.value = '+1'; 
        }
    });
}

/* COUNTRY FILTER & IP DETECTION */
async function initCountryFilter() {
    const sortSelect = document.getElementById('sort-filter');
    if (!sortSelect || document.getElementById('country-filter')) return;

    const parent = sortSelect.parentNode;
    
    // Wrapper for positioning arrow relative to filters, not the whole header
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.flex = '1';
    wrapper.style.minWidth = '0'; // Flexbox overflow fix
    
    // Create wrapper for scrollable filters
    const container = document.createElement('div');
    container.classList.add('filter-scroll-container');
    Object.assign(container.style, {
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        paddingBottom: '5px',
        scrollbarWidth: 'none'
    });

    // Move sortSelect into wrapper
    parent.insertBefore(wrapper, sortSelect);
    wrapper.appendChild(container);
    container.appendChild(sortSelect);

    // Add Scroll Indicator Arrow
    const arrow = document.createElement('div');
    arrow.innerHTML = `<svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:#8b5cf6; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8));"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`;
    Object.assign(arrow.style, {
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '10',
        cursor: 'pointer',
        display: 'none',
        animation: 'pulseArrow 1.5s infinite'
    });
    
    arrow.onclick = (e) => {
        e.stopPropagation();
        container.scrollBy({ left: 150, behavior: 'smooth' });
    };
    
    // Inject animation
    if (!document.getElementById('arrow-anim-style')) {
        const s = document.createElement('style');
        s.id = 'arrow-anim-style';
        s.textContent = `@keyframes pulseArrow { 0% { opacity: 0.6; transform: translateY(-50%) translateX(0); } 50% { opacity: 1; transform: translateY(-50%) translateX(3px); } 100% { opacity: 0.6; transform: translateY(-50%) translateX(0); } }`;
        document.head.appendChild(s);
    }
    wrapper.appendChild(arrow);

    const updateArrow = () => {
        if (container.scrollWidth > container.clientWidth && (container.scrollWidth - container.scrollLeft - container.clientWidth) > 5) {
            arrow.style.display = 'block';
            container.style.maskImage = 'linear-gradient(to right, black 85%, transparent 100%)';
            container.style.webkitMaskImage = 'linear-gradient(to right, black 85%, transparent 100%)';
        } else {
            arrow.style.display = 'none';
            container.style.maskImage = 'none';
            container.style.webkitMaskImage = 'none';
        }
    };
    container.addEventListener('scroll', updateArrow);
    window.addEventListener('resize', updateArrow);
    setTimeout(updateArrow, 500);

    const select = document.createElement('select');
    select.id = 'country-filter';
    
    // Style to match the dark theme
    Object.assign(select.style, {
        padding: '8px',
        borderRadius: '6px',
        background: '#0d1117',
        color: '#eaeaea',
        border: '1px solid #30363d',
        marginLeft: '10px',
        cursor: 'pointer'
    });

    // Add Global Option (Top)
    let optionsHTML = `<option value="GLOBAL">🌍 Global (All)</option>`;
    optionsHTML += countryCodes.map(c => `<option value="${c.iso}">${c.flag} ${c.name}</option>`).join('');
    select.innerHTML = optionsHTML;

    select.addEventListener('change', performSearch);
    container.insertBefore(select, sortSelect.nextSibling);

    // Verified Filter Button
    const verifiedBtn = document.createElement('button');
    verifiedBtn.id = 'verified-filter-btn';
    verifiedBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor; margin-right:4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Verified`;
    verifiedBtn.title = "Show Verified Sellers Only";
    Object.assign(verifiedBtn.style, {
        padding: '8px 12px',
        borderRadius: '6px',
        background: '#0d1117',
        color: '#8b949e',
        border: '1px solid #30363d',
        marginLeft: '10px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9em',
        fontWeight: '600',
        transition: 'all 0.2s ease'
    });
    verifiedBtn.onclick = () => {
        const isActive = verifiedBtn.classList.toggle('active');
        Object.assign(verifiedBtn.style, isActive ? { background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderColor: '#38bdf8' } : { background: '#0d1117', color: '#8b949e', borderColor: '#30363d' });
        performSearch();
    };
    container.insertBefore(verifiedBtn, select.nextSibling);

    // Clear Filters Button
    const clearBtn = document.createElement('button');
    clearBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`;
    clearBtn.title = "Reset Filters";
    Object.assign(clearBtn.style, {
        padding: '8px',
        borderRadius: '6px',
        background: '#0d1117',
        color: '#8b949e',
        border: '1px solid #30363d',
        marginLeft: '10px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
    clearBtn.onmouseover = () => { clearBtn.style.color = '#eaeaea'; clearBtn.style.borderColor = '#8b5cf6'; };
    clearBtn.onmouseout = () => { clearBtn.style.color = '#8b949e'; clearBtn.style.borderColor = '#30363d'; };
    clearBtn.onclick = () => {
        document.getElementById('search-input').value = '';
        sortSelect.value = 'trending';
        select.value = 'GLOBAL';
        verifiedBtn.classList.remove('active');
        Object.assign(verifiedBtn.style, { background: '#0d1117', color: '#8b949e', borderColor: '#30363d' });
        performSearch();
    };
    container.insertBefore(clearBtn, verifiedBtn.nextSibling);

    // Share Search Button
    const shareBtn = document.createElement('button');
    shareBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>`;
    shareBtn.title = "Share Search";
    Object.assign(shareBtn.style, {
        padding: '8px',
        borderRadius: '6px',
        background: '#0d1117',
        color: '#8b949e',
        border: '1px solid #30363d',
        marginLeft: '10px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
    shareBtn.onmouseover = () => { shareBtn.style.color = '#eaeaea'; shareBtn.style.borderColor = '#8b5cf6'; };
    shareBtn.onmouseout = () => { shareBtn.style.color = '#8b949e'; shareBtn.style.borderColor = '#30363d'; };
    shareBtn.onclick = () => {
        const q = document.getElementById('search-input').value.trim();
        const s = sortSelect.value;
        const c = select.value;
        const v = verifiedBtn.classList.contains('active');
        const url = new URL(window.location.href);
        if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
        if (s && s !== 'trending') url.searchParams.set('sort', s); else url.searchParams.delete('sort');
        if (c && c !== 'GLOBAL') url.searchParams.set('country', c); else url.searchParams.delete('country');
        if (v) url.searchParams.set('verified', 'true'); else url.searchParams.delete('verified');
        
        const shareData = {
            title: 'IsItAScam Search',
            text: 'Check out these search results on IsItAScam',
            url: url.toString()
        };

        if (navigator.share) {
            navigator.share(shareData).catch(console.error);
        } else {
            copyToClipboard(url.toString());
            showToast("Search link copied!", "success");
        }
    };
    container.insertBefore(shareBtn, clearBtn.nextSibling);

    // Check URL Params
    const urlParams = new URLSearchParams(window.location.search);
    const paramQ = urlParams.get('q');
    const paramSort = urlParams.get('sort');
    const paramCountry = urlParams.get('country');
    const paramVerified = urlParams.get('verified');
    
    if (paramQ || paramSort || paramCountry || paramVerified) {
        if (paramQ) document.getElementById('search-input').value = paramQ;
        if (paramSort) sortSelect.value = paramSort;
        if (paramCountry) select.value = paramCountry;
        if (paramVerified === 'true') {
            verifiedBtn.classList.add('active');
            Object.assign(verifiedBtn.style, { background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderColor: '#38bdf8' });
        }
        performSearch();
    }

    // Auto-detect User Country via IP (Only if no URL country param)
    if (!paramCountry) {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            if (data.country_code) {
                const userIso = data.country_code.toLowerCase();
                
                // Set Country Filter
                if (countryCodes.some(c => c.iso === userIso)) {
                    select.value = userIso;
                    performSearch(); // Refresh with local filter
                }

                // Auto-set Language for MENA (if no preference)
                if (!localStorage.getItem('selectedLanguage')) {
                    const menaCountries = ['dz', 'bh', 'eg', 'iq', 'jo', 'kw', 'lb', 'ly', 'ma', 'om', 'ps', 'qa', 'sa', 'sd', 'sy', 'tn', 'ae', 'ye'];
                    if (menaCountries.includes(userIso)) {
                        changeLanguage('ar');
                    }
                }
            }
        } catch (e) {
            console.warn("Country detection failed, defaulting to Global.");
        }
    }
}

/* INJECT GLOBAL STYLES */
function injectGlobalStyles() {
  const styleId = 'global-dynamic-styles';
  if (document.getElementById(styleId)) return;
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    .preview-widget, .phone-card {
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .preview-widget:hover, .phone-card:hover {
      transform: translateY(-2px);
      border-color: #8b5cf6 !important;
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
    }

    .mini-card {
      background: rgba(22, 27, 34, 0.7) !important;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(48, 54, 61, 0.6) !important;
    }
    
    #notification-list {
      padding-top: 10px !important;
    }
    
    /* Mobile Optimizations */
    @media (max-width: 600px) {
        .details-header-title { font-size: 1.25rem !important; }
        .details-header-title { 
            font-size: 1.25rem !important;
            flex-direction: column;
            gap: 5px !important;
        }
        .details-header-buttons { flex-wrap: wrap; }
        .details-header-buttons button { 
            flex: 1; 
            min-width: 100px; 
            font-size: 0.85rem !important;
        }
        .filter-scroll-container::-webkit-scrollbar { display: none; }
    }
  `;
  document.head.appendChild(style);
}

/* REAL-TIME CHECKER */
let typingTimer;

function handleInput(inputId, previewId) {
  clearTimeout(typingTimer);
  
  // Phone Number Logic: Show/Hide Country Selector
  const input = document.getElementById(inputId);
  const val = input.value.trim();
  const isRate = inputId === 'rate-link';
  const selectId = isRate ? 'rate-country-select' : 'scam-country-select';
  const select = document.getElementById(selectId);

  if (select) {
      // If starts with a digit (0-9), show selector. If starts with '+' or text, hide it.
      if (/^\d/.test(val)) {
          select.classList.remove('hidden');
      } else {
          select.classList.add('hidden');
      }
  }

  const preview = document.getElementById(previewId);
  if (preview) preview.classList.add('hidden');

  if (val) {
    typingTimer = setTimeout(() => checkLink(inputId, previewId), 800);
  }
}

/* LINK CHECKER FUNCTION */
async function checkLink(inputId, previewId) {
  const inputEl = document.getElementById(inputId);
  const inputVal = inputEl.value.trim();
  const preview = document.getElementById(previewId);

  // Handle Country Code Prepend for Preview
  let val = inputVal;
  const isRate = inputId === 'rate-link';
  const selectId = isRate ? 'rate-country-select' : 'scam-country-select';
  const select = document.getElementById(selectId);
  
  if (select && !select.classList.contains('hidden')) {
      val = select.value + val;
  }

  if (!val) {
    preview.classList.add('hidden');
    return;
  }

  preview.classList.remove('hidden');

  // 1. Initial Local Render (Fast)
  const username = extractUsername(val);
  const platform = getPlatformInfo(val);

  renderPreview({
    username: username,
    platform: platform,
    loading: true
  }, preview);

  // 2. Fetch Real Metadata (Microlink)
  // Skip for phone numbers
  if (platform.type === 'phone') {
      renderPreview({ username, platform, loading: false }, preview);
      return;
  }

  try {
      const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(val)}`);
      const json = await response.json();
      
      // Check if input hasn't changed significantly while fetching
      if (document.getElementById(inputId).value.trim() !== inputVal) return;

      if (json.status === 'success') {
          const meta = json.data;
          
          // --- INTELLIGENT PARSING ---
          let realName = null;
          let profilePic = meta.image ? meta.image.url : null;
          
          // 1. Name Extraction Strategy
          // Try Author first (often cleaner for articles/blogs)
          if (meta.author && typeof meta.author === 'string' && meta.author.length > 1 && meta.author.length < 50) {
              if (!meta.author.toLowerCase().includes(platform.name.toLowerCase())) {
                  realName = meta.author;
              }
          }

          // If no author, try Title with heavy cleaning
          if (!realName && meta.title) {
              let t = meta.title;
              const pName = platform.name;
              
              // Platform Specific Regex to extract Name from "Name (@user) | Platform"
              if (pName === 'Instagram' || pName === 'X' || pName === 'Twitter' || pName === 'TikTok') {
                  const match = t.match(/^(.+?) \(@/);
                  if (match) t = match[1];
              }
              
              if (pName === 'Facebook') t = t.replace(/ \| Facebook$/, '').replace(/ - Home$/, '');
              if (pName === 'LinkedIn') t = t.split(' - ')[0];
              if (pName === 'YouTube') t = t.replace(/ - YouTube$/, '');
              if (pName === 'TikTok') t = t.replace(/ \| TikTok$/, '');

              // Generic Publisher Cleanup (e.g. "Article Title | CNN")
              if (meta.publisher) {
                  const escPub = meta.publisher.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape regex chars
                  const regex = new RegExp(` [\\|\\-] ${escPub}$`, 'i');
                  t = t.replace(regex, '');
              }
              
              realName = t.trim();
          }

          // 2. Name Validation (Filter out junk)
          const badNames = ['Login', 'Sign Up', 'Welcome', 'Home', 'Profile', 'Page Not Found', '404', platform.name, 'Index', 'Main Page'];
          if (realName) {
              const lower = realName.toLowerCase();
              // Reject if generic, too long (headline), or looks like a URL
              if (badNames.some(b => lower === b.toLowerCase()) || lower.includes('login') || realName.length > 60 || realName.includes('http')) {
                  realName = null;
              }
          }

          // 3. Image Intelligence (Strict Mode)
          // If the image URL contains "logo", "favicon", or matches the site logo, it's likely not a profile pic.
          if (profilePic) {
              const lowerImg = profilePic.toLowerCase();
              if (lowerImg.includes('logo.') || lowerImg.includes('favicon') || lowerImg.includes('assets/brand') || (meta.logo && profilePic === meta.logo.url)) {
                  profilePic = null; // Discard logo, fallback to platform icon/unavatar
              }
          }

          // 4. Date / Age Extraction
          let dateDisplay = null;
          if (meta.date) {
              const d = new Date(meta.date);
              if (!isNaN(d.getTime())) dateDisplay = "📅 " + d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
          }
          if (meta.description) {
              const joinedMatch = meta.description.match(/(?:Joined|Member since|Born)\s+([A-Z][a-z]+(?:\s+\d{1,2})?,?\s+\d{4})/i);
              if (joinedMatch) dateDisplay = "🎂 " + joinedMatch[0];
          }

          // Store Metadata for Submission
          if (inputEl) {
              inputEl.dataset.enrichedData = JSON.stringify({
                  realName: realName,
                  platformImage: profilePic,
                  metaDescription: meta.description,
                  metaTitle: meta.title
              });
          }

          renderPreview({
            username: username,
            realName: realName,
            image: profilePic,
            description: meta.description,
            date: dateDisplay,
            platform: platform,
            loading: false
          }, preview);
      } else {
          renderPreview({ username, platform, loading: false }, preview);
      }
  } catch (e) {
      console.warn("Metadata fetch failed", e);
      renderPreview({ username, platform, loading: false }, preview);
  }
}

/* RENDER UI */
function renderPreview(data, container) {
  const { username, platform, realName, image, description, date, loading } = data;
  
  const flagDisplay = platform.flagImg 
    ? `<img src="${platform.flagImg}" style="width:20px; height:14px; object-fit:cover; border-radius:2px; display:inline-block; vertical-align:middle; margin-right:6px;">` 
    : (platform.flag ? `<span style="font-size: 1.2em; margin-right:4px;">${platform.flag}</span>` : '');

  const displayTitle = realName || username;
  const displayDesc = description ? description : (loading ? 'Fetching preview...' : 'No description available.');

  container.innerHTML = `
    <div class="preview-widget" style="background:#050608; border-radius: 12px; border: 1px solid #30363d; overflow:hidden; transition: all 0.2s ease; ${loading ? 'opacity:0.8' : ''}">
      ${image ? `
      <div style="width:100%; height:160px; overflow:hidden; border-bottom:1px solid #30363d; position:relative;">
        <img src="${image}" style="width:100%; height:100%; object-fit:cover;">
        ${loading ? '<div style="position:absolute; inset:0; background:rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;"><span class="typing-cursor">...</span></div>' : ''}
      </div>
      ` : ''}
      
      <div style="padding:12px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
           <div style="width:36px; height:36px; background:${platform.color}; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
             ${platform.icon}
           </div>
           <div style="min-width:0; flex:1;">
               <strong style="display:block; font-size:1.1em; color:#f0f6fc; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${displayTitle}</strong>
               <small style="color:#8b949e; font-size:0.85em;">${platform.type === 'phone' ? '' : 'via ' + platform.name}</small>
           </div>
        </div>
        
        ${(!image || description) ? `
        <p style="font-size:0.9em; color:#b0b8c3; margin:0 0 12px 0; line-height:1.5; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">
           ${displayDesc}
        </p>
        ` : ''}
        
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8em; color:#8b949e; border-top:1px solid #21262d; padding-top:8px;">
           <span style="display:flex; align-items:center;">${flagDisplay}${platform.type === 'phone' ? platform.name : 'Link Preview'}</span>
           ${date ? `<span style="background:#1f2937; padding:2px 8px; border-radius:12px; color:#e5e7eb; font-weight:500;">${date}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

/* TABS & RATING LOGIC */
function switchTab(tab) {
  const rateForm = document.getElementById('form-rate');
  const scamForm = document.getElementById('form-scam');
  const rateBtn = document.getElementById('tab-rate');
  const scamBtn = document.getElementById('tab-scam');

  if (tab === 'rate') {
    rateForm.classList.remove('hidden');
    scamForm.classList.add('hidden');
    rateBtn.classList.add('active');
    scamBtn.classList.remove('active');
    updateBackgroundEffect('rate');
  } else {
    rateForm.classList.add('hidden');
    scamForm.classList.remove('hidden');
    rateBtn.classList.remove('active');
    scamBtn.classList.add('active');
    updateBackgroundEffect('report');
  }
}

function setRating(stars) {
  document.getElementById('rating-input').value = stars;
  const starElements = document.querySelectorAll('.star');
  starElements.forEach((el, index) => {
    el.classList.toggle('filled', index < stars);
  });
}

/* HOME PAGE TABS */
function switchHomeTab(tab) {
  const reportsGrid = document.getElementById('local-reports-grid');
  const ratingsGrid = document.getElementById('local-ratings-grid');
  const reportsBtn = document.getElementById('home-reports-tab-btn');
  const ratingsBtn = document.getElementById('home-ratings-tab-btn');

  if (!reportsGrid || !ratingsGrid || !reportsBtn || !ratingsBtn) return;

  if (tab === 'reports') {
    reportsGrid.classList.remove('hidden');
    ratingsGrid.classList.add('hidden');
    reportsBtn.classList.add('active');
    ratingsBtn.classList.remove('active');
    
    // Animation: Slide in from Left
    reportsGrid.classList.remove('animate-slide-left', 'animate-slide-right');
    void reportsGrid.offsetWidth; // Trigger reflow
    reportsGrid.classList.add('animate-slide-left');
    requestAnimationFrame(() => {
        resizeAllGridItems();
        setTimeout(resizeAllGridItems, 300);
    });

  } else { // ratings
    reportsGrid.classList.add('hidden');
    ratingsGrid.classList.remove('hidden');
    reportsBtn.classList.remove('active');
    ratingsBtn.classList.add('active');
    
    // Animation: Slide in from Right
    ratingsGrid.classList.remove('animate-slide-left', 'animate-slide-right');
    void ratingsGrid.offsetWidth; // Trigger reflow
    ratingsGrid.classList.add('animate-slide-right');
    requestAnimationFrame(() => {
        resizeAllGridItems();
        setTimeout(resizeAllGridItems, 300);
    });
  }
  
  requestAnimationFrame(updateTabIndicator);
}

function updateTabIndicator() {
  const selectors = document.querySelectorAll('.home-tab-selector');
  selectors.forEach(selector => {
    const activeBtn = selector.querySelector('.home-tab-btn.active');
    const indicator = selector.querySelector('.tab-indicator');
    
    if (activeBtn && indicator) {
      const containerRect = selector.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      
      if (containerRect.width > 0) {
        const left = btnRect.left - containerRect.left;
        indicator.style.width = `${btnRect.width}px`;
        indicator.style.left = `${left}px`;
      }
    }
  });
}

/* PROFILE PAGE TABS */
function switchProfileTab(tab) {
  const profileContent = document.querySelector('.auth-container');
  const activityContent = document.getElementById('user-activity-section');
  const profileTabBtn = document.getElementById('profile-tab-btn');
  const activityTabBtn = document.getElementById('activity-tab-btn');

  if (!profileContent || !activityContent || !profileTabBtn || !activityTabBtn) return;

  if (tab === 'profile') {
    profileContent.classList.remove('hidden');
    activityContent.classList.add('hidden');
    profileTabBtn.classList.add('active');
    activityTabBtn.classList.remove('active');
  } else { // activity
    profileContent.classList.add('hidden');
    activityContent.classList.remove('hidden');
    profileTabBtn.classList.remove('active');
    activityTabBtn.classList.add('active');
    requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));

    // Fix Grid Layout on Tab Switch
    requestAnimationFrame(() => {
        resizeAllGridItems();
        setTimeout(resizeAllGridItems, 300);
    });
  }
}

/* ACTIVITY PAGE TABS */
function switchActivityTab(tab) {
  const reportsGrid = document.getElementById('activity-reports');
  const ratingsGrid = document.getElementById('activity-ratings');
  const reportsBtn = document.getElementById('activity-reports-tab-btn');
  const ratingsBtn = document.getElementById('activity-ratings-tab-btn');

  if (!reportsGrid || !ratingsGrid || !reportsBtn || !ratingsBtn) return;

  if (tab === 'reports') {
    reportsGrid.classList.remove('hidden');
    ratingsGrid.classList.add('hidden');
    reportsBtn.classList.add('active');
    ratingsBtn.classList.remove('active');

    // Animation: Slide in from Left
    reportsGrid.classList.remove('animate-slide-left', 'animate-slide-right');
    void reportsGrid.offsetWidth; // Trigger reflow
    reportsGrid.classList.add('animate-slide-left');
    requestAnimationFrame(() => {
        resizeAllGridItems();
        setTimeout(resizeAllGridItems, 300);
    });

  } else { // ratings
    reportsGrid.classList.add('hidden');
    ratingsGrid.classList.remove('hidden');
    reportsBtn.classList.remove('active');
    ratingsBtn.classList.add('active');

    // Animation: Slide in from Right
    ratingsGrid.classList.remove('animate-slide-left', 'animate-slide-right');
    void ratingsGrid.offsetWidth; // Trigger reflow
    ratingsGrid.classList.add('animate-slide-right');
    requestAnimationFrame(() => {
        resizeAllGridItems();
        setTimeout(resizeAllGridItems, 300);
    });
  }
  requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));
}

/* ADMIN DASHBOARD TABS */
function switchAdminTab(tab) {
  const sellersSection = document.getElementById('admin-sellers-section');
  const verifiedSection = document.getElementById('admin-verified-section');
  const bannedSection = document.getElementById('admin-banned-section');
  const blacklistSection = document.getElementById('admin-blacklist-section');
  const abuseSection = document.getElementById('admin-abuse-section');
  
  const sellersBtn = document.getElementById('admin-sellers-tab-btn');
  const verifiedBtn = document.getElementById('admin-verified-tab-btn');
  const bannedBtn = document.getElementById('admin-banned-tab-btn');
  const blacklistBtn = document.getElementById('admin-blacklist-tab-btn');
  const abuseBtn = document.getElementById('admin-abuse-tab-btn');
  
  const subtitle = document.getElementById('admin-dashboard-subtitle');

  if (!verifiedSection || !bannedSection || !verifiedBtn || !bannedBtn) return;

  // Reset all
  if (sellersSection) sellersSection.classList.add('hidden');
  verifiedSection.classList.add('hidden');
  bannedSection.classList.add('hidden');
  if (blacklistSection) blacklistSection.classList.add('hidden');
  if (abuseSection) abuseSection.classList.add('hidden');
  
  if (sellersBtn) sellersBtn.classList.remove('active');
  verifiedBtn.classList.remove('active');
  bannedBtn.classList.remove('active');
  if (blacklistBtn) blacklistBtn.classList.remove('active');
  if (abuseBtn) abuseBtn.classList.remove('active');

  if (tab === 'sellers') {
    if (sellersSection) {
        sellersSection.classList.remove('hidden');
        if (sellersBtn) sellersBtn.classList.add('active');
        if (subtitle) subtitle.innerText = "Add new seller profiles to the database.";
        
        sellersSection.classList.remove('animate-slide-left', 'animate-slide-right');
        void sellersSection.offsetWidth;
        sellersSection.classList.add('animate-slide-left');
    }
  } else if (tab === 'verified') {
    verifiedSection.classList.remove('hidden');
    verifiedBtn.classList.add('active');
    if (subtitle) subtitle.innerText = "Manage verified community members.";
    
    // Animation
    verifiedSection.classList.remove('animate-slide-left', 'animate-slide-right');
    void verifiedSection.offsetWidth;
    verifiedSection.classList.add('animate-slide-left');
  } else if (tab === 'banned') {
    bannedSection.classList.remove('hidden');
    bannedBtn.classList.add('active');
    if (subtitle) subtitle.innerText = "Manage restricted and banned users.";

    // Animation
    bannedSection.classList.remove('animate-slide-left', 'animate-slide-right');
    void bannedSection.offsetWidth;
    bannedSection.classList.add('animate-slide-right');
  } else if (tab === 'blacklist') {
    if (blacklistSection) {
        blacklistSection.classList.remove('hidden');
        if (blacklistBtn) blacklistBtn.classList.add('active');
        if (subtitle) subtitle.innerText = "Manage blacklisted domains.";
        
        blacklistSection.classList.remove('animate-slide-left', 'animate-slide-right');
        void blacklistSection.offsetWidth;
        blacklistSection.classList.add('animate-slide-right');
    }
  } else if (tab === 'abuse') {
    if (abuseSection) {
        abuseSection.classList.remove('hidden');
        if (abuseBtn) abuseBtn.classList.add('active');
        if (subtitle) subtitle.innerText = "Review and resolve abuse reports.";

        abuseSection.classList.remove('animate-slide-left', 'animate-slide-right');
        void abuseSection.offsetWidth;
        abuseSection.classList.add('animate-slide-right');
    }
  }
  else if (tab === 'recently_deleted') {
    const recentlyDeletedSection = document.getElementById('admin-recently-deleted-section');
    const recentlyDeletedBtn = document.getElementById('admin-recently-deleted-tab-btn');

    if (recentlyDeletedSection) {
        recentlyDeletedSection.classList.remove('hidden');
        if (recentlyDeletedBtn) recentlyDeletedBtn.classList.add('active');
        if (subtitle) subtitle.innerText = "View and manage recently deleted profiles.";

        recentlyDeletedSection.classList.remove('animate-slide-left', 'animate-slide-right');
        void recentlyDeletedSection.offsetWidth;
        recentlyDeletedSection.classList.add('animate-slide-right');
    }
  }
  requestAnimationFrame(updateTabIndicator);

  // Fix Grid Layout on Tab Switch (Recalculate heights for newly visible items)
  setTimeout(resizeAllGridItems, 50);
  setTimeout(resizeAllGridItems, 300);
}

/* ==========================================
   INTELLIGENT SEARCH SYSTEM (AI-ENHANCED)
   ========================================== */
let searchIndexReadyPromise = null; // Promise to track when the index is populated

async function populateSearchIndex() {
    // Prevent re-fetching if already populated
    if (SearchSystem.index.length > 0) return;

    const qReports = query(collection(db, "reports"));
    const qRatings = query(collection(db, "ratings"));

    try {
        const [reportsSnap, ratingsSnap] = await Promise.all([getDocs(qReports), getDocs(qRatings)]);

        const reports = [];
        reportsSnap.forEach(doc => reports.push(doc.data()));
        SearchSystem.ingest(reports, 'report');

        const ratings = [];
        ratingsSnap.forEach(doc => ratings.push(doc.data()));
        SearchSystem.ingest(ratings, 'rating');
        
        // Calculate Trending (Most Reported URLs)
        const counts = {};
        reports.forEach(r => {
            const u = r.url ? r.url.toLowerCase() : '';
            if(u) counts[u] = (counts[u] || 0) + 1;
        });
        
        const topUrls = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 5);
        SearchSystem.trending = topUrls.map(url => SearchSystem.index.find(i => i.url === url)).filter(Boolean);

    } catch (error) {
        console.error("Failed to populate search index:", error);
        // We still resolve so we don't block the search UI forever, it will just have no results.
    }
}

const SearchSystem = {
    index: [],
    trending: [],
    
    // Knowledge Graph / Synonyms for "AI" Understanding
    synonyms: {
        'scam': ['fake', 'fraud', 'money', 'theft', 'liar', 'unsafe', 'risk', 'bad', 'scheme', 'phishing'],
        'fake': ['replica', 'knockoff', 'counterfeit', 'copy', 'dupe', 'scam', 'bogus', 'faux'],
        'shipping': ['delivery', 'late', 'arrived', 'wait', 'tracking', 'ship', 'package', 'order', 'dispatch'],
        'money': ['refund', 'paid', 'cost', 'price', 'charge', 'bank', 'card', 'dollar', 'currency', 'wallet'],
        'service': ['rude', 'reply', 'response', 'ignore', 'blocked', 'support', 'chat', 'ghosted'],
        'quality': ['broken', 'damaged', 'material', 'plastic', 'condition', 'poor', 'cheap', 'ruined']
    },

    // Ingest data into the search index
    ingest: function(items, type) {
        items.forEach(item => {
            const url = item.url ? item.url.toLowerCase() : '';
            // Avoid duplicates based on URL in the index
            if (!this.index.some(i => i.url === url)) {
                this.index.push({
                    url: url,
                    name: (item.displayName || item.realName || '').toLowerCase(),
                    type: type, // 'report' or 'rating'
                    data: item
                });
            }
        });
    },

    // Intelligent Scoring Algorithm
    score: function(item, queryTokens) {
        let score = 0;
        const url = item.url;
        const name = item.name;
        const desc = item.desc; // Description passed during search check

        queryTokens.forEach(token => {
            if (!token) return;
            
            // 1. Exact/Partial Matches (High Weight)
            if (url.includes(token)) score += 30;
            if (name.includes(token)) score += 20;
            
            // 2. Description/Context Match (Medium Weight)
            if (desc && desc.includes(token)) score += 10;

            // 3. Synonym/Intent Match (AI Layer)
            for (const [key, words] of Object.entries(this.synonyms)) {
                if (key === token || words.includes(token)) {
                    // If the user typed a synonym (e.g. "fake"), check if the item contains related words
                    if (url.includes(key) || name.includes(key)) score += 15;
                    if (desc && desc.includes(key)) score += 8;
                    
                    // Check cross-synonyms in description
                    if (desc) {
                        words.forEach(syn => {
                            if (desc.includes(syn)) score += 5;
                        });
                    }
                }
            }
        });

        return score;
    },

    // Levenshtein Distance for Typos
    levenshtein: function(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
        for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }
        return matrix[b.length][a.length];
    },

    // Fuzzy Search for "Did you mean?"
    getDidYouMean: function(query) {
        if (!query || query.length < 3) return null;
        const lowerQ = query.toLowerCase();
        let bestMatch = null;
        let minDist = 4; // Max distance allowed

        this.index.forEach(item => {
            // Check Name
            const distName = this.levenshtein(lowerQ, item.name);
            if (distName < minDist) {
                minDist = distName;
                bestMatch = item;
            }
            // Check URL parts (e.g. username)
            let user = item.url;
            try { user = extractUsername(item.url).toLowerCase(); } catch(e) {}
            
            const distUser = this.levenshtein(lowerQ, user);
            if (distUser < minDist) {
                minDist = distUser;
                bestMatch = item;
            }
        });
        return bestMatch;
    },

    // Get Suggestions
    getSuggestions: function(query) {
        if (!query || query.length < 2) return [];
        const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
        
        // Score all indexed items
        const results = this.index.map(item => {
            // For suggestions, we only check URL and Name (no description for speed/layout)
            return { item, score: this.score({ ...item, desc: '' }, tokens) };
        });

        // Filter by relevance and sort
        return results
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5) // Top 5 suggestions
            .map(r => r.item);
    },

    // Get Counts for Tab Switching
    getCounts: function(query) {
        if (!query) return { reports: 0, ratings: 0 };
        const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
        
        let reports = 0;
        let ratings = 0;

        this.index.forEach(item => {
            let desc = '';
            if (item.type === 'report') desc = item.data.description || '';
            else if (item.type === 'rating') desc = (item.data.good || '') + ' ' + (item.data.bad || '');
            
            const score = this.score({ ...item, desc: desc.toLowerCase() }, tokens);
            
            if (score > 0) {
                if (item.type === 'report') reports++;
                else if (item.type === 'rating') ratings++;
            }
        });
        return { reports, ratings };
    }
};

/* SEARCH PLACEHOLDER ANIMATION */
function animateSearchPlaceholder() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const phrases = [
        "Search for a website...",
        "Check a phone number...",
        "Verify a seller...",
        "Paste a link..."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // Pause if user is focused on input
        if (document.activeElement === input) {
             setTimeout(type, 1000);
             return;
        }

        const currentPhrase = phrases[phraseIndex];
        let typeSpeed = 100;
        
        if (isDeleting) {
            input.setAttribute('placeholder', currentPhrase.substring(0, charIndex - 1));
            charIndex--;
            typeSpeed = 50; 
        } else {
            input.setAttribute('placeholder', currentPhrase.substring(0, charIndex + 1));
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2500; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

function initSearchUI() {
    const input = document.getElementById('search-input');
    if (!input) return;

    animateSearchPlaceholder();

    // Disable browser autocomplete to prevent overlap
    input.setAttribute('autocomplete', 'off');

    // Create Suggestions Container
    let suggestions = document.getElementById('search-suggestions');
    if (!suggestions) {
        suggestions = document.createElement('div');
        suggestions.id = 'search-suggestions';
        suggestions.className = 'search-suggestions hidden';
        document.body.appendChild(suggestions); // Append to body to avoid clipping
    }

    const positionSuggestions = () => {
        const rect = input.getBoundingClientRect();
        suggestions.style.top = `${rect.bottom + window.scrollY + 12}px`;
        suggestions.style.left = `${rect.left + window.scrollX}px`;
        suggestions.style.width = `${rect.width}px`;
    };

    const renderRecent = () => {
        const searches = JSON.parse(localStorage.getItem('recent_searches') || '[]');
        const trending = SearchSystem.trending || [];
        
        if (searches.length === 0 && trending.length === 0) {
            suggestions.classList.add('hidden');
            return;
        }
        
        let html = '';

        if (searches.length > 0) {
            html += `
            <div style="padding:8px 12px; font-size:0.85em; color:#8b949e; font-weight:600; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #30363d;">
                <span>Recent Searches</span>
                <button id="clear-recent-btn" style="background:none; border:none; color:#8b949e; cursor:pointer; font-size:inherit;">Clear</button>
            </div>
            ` + searches.map(s => `
            <div class="suggestion-item recent-item" data-val="${escapeHTML(s)}">
                <span class="s-icon" style="color:#8b949e; display:flex; align-items:center; justify-content:center;">
                    <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                </span>
                <div class="s-info">
                    <div class="s-name" style="color:#c9d1d9;">${escapeHTML(s)}</div>
                </div>
            </div>
            `).join('');
        }

        if (trending.length > 0) {
             html += `
            <div style="padding:8px 12px; font-size:0.85em; color:#8b5cf6; font-weight:600; border-bottom:1px solid #30363d; margin-top:${searches.length ? '0' : '0'}; border-top:${searches.length ? '1px solid #30363d' : 'none'};">
                Trending Now 📈
            </div>
            ` + trending.map(m => {
                const icon = m.type === 'report' 
                    ? `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>`
                    : `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
                const iconClass = m.type === 'report' ? 'report-icon' : 'rating-icon';
                const display = m.data.displayName || m.data.realName || extractUsername(m.url);
                return `
                    <div class="suggestion-item trending-item" onclick="applySuggestion('${escapeHTML(m.url)}', '${m.type}')">
                        <span class="s-icon ${iconClass}" style="display:flex; align-items:center; justify-content:center;">${icon}</span>
                        <div class="s-info">
                            <div class="s-name">${escapeHTML(display)}</div>
                            <div class="s-url" style="word-break: break-all;">${escapeHTML(m.url)}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        suggestions.innerHTML = html;
        
        suggestions.querySelectorAll('.recent-item').forEach(el => {
            el.onclick = () => applySuggestion(el.dataset.val);
        });

        const clearBtn = document.getElementById('clear-recent-btn');
        if (clearBtn) {
            clearBtn.onclick = (e) => {
                e.stopPropagation();
                localStorage.removeItem('recent_searches');
                renderRecent();
            };
            clearBtn.onmouseover = () => clearBtn.style.color = '#ff4d4d';
            clearBtn.onmouseout = () => clearBtn.style.color = '#8b949e';
        }

        positionSuggestions();
        suggestions.classList.remove('hidden');
    };

    // Input Listener
    input.addEventListener('input', async (e) => {
        const val = e.target.value.trim();

        // Check if search is expanded on mobile and expansion might still be in progress
        const searchBox = document.querySelector('.search-box');
        const isMobileAndExpanded = window.innerWidth <= 600 && searchBox && searchBox.classList.contains('search-expanded');

        if (val.length < 2) {
            if (val.length === 0) {
                // Only render recent if expansion is complete (wait a bit on mobile)
                if (isMobileAndExpanded) {
                    setTimeout(() => {
                        renderRecent();
                    }, 300);
                } else {
                    renderRecent();
                }
            } else {
                suggestions.classList.add('hidden');
            }
            return;
        }

        // Ensure the search index is ready before proceeding.
        if (searchIndexReadyPromise) {
            await searchIndexReadyPromise;
        }

        const matches = SearchSystem.getSuggestions(val);

        // On mobile, if search is expanded, wait for expansion to complete
        if (isMobileAndExpanded) {
            setTimeout(() => {
                if (matches.length > 0) {
                    suggestions.innerHTML = matches.map(m => {
                        const icon = m.type === 'report'
                            ? `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>`
                            : `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
                        const iconClass = m.type === 'report' ? 'report-icon' : 'rating-icon';
                        const display = m.data.displayName || m.data.realName || extractUsername(m.url);
                        return `
                            <div class="suggestion-item" onclick="applySuggestion('${escapeHTML(m.url)}', '${m.type}')">
                                <span class="s-icon ${iconClass}" style="display:flex; align-items:center; justify-content:center;">${icon}</span>
                                <div class="s-info">
                                    <div class="s-name">${escapeHTML(display)}</div>
                                    <div class="s-url" style="word-break: break-all;">${escapeHTML(m.url)}</div>
                                </div>
                            </div>
                        `;
                    }).join('');
                    positionSuggestions();
                    suggestions.classList.remove('hidden');
                } else {
                    const fuzzy = SearchSystem.getDidYouMean(val);
                    if (fuzzy) {
                        const display = fuzzy.data.displayName || fuzzy.data.realName || extractUsername(fuzzy.url);
                        suggestions.innerHTML = `
                            <div class="suggestion-item no-results" style="border-bottom:1px solid #30363d; color:#8b949e;">No exact matches found.</div>
                            <div class="suggestion-item" onclick="applySuggestion('${escapeHTML(fuzzy.url)}', '${fuzzy.type}')">
                                <span class="s-icon" style="display:flex; align-items:center; justify-content:center;">
                                    <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:#8b5cf6;"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                                </span>
                                <div class="s-info">
                                    <div class="s-name" style="color:#c9d1d9;">Did you mean: <strong style="color:#8b5cf6;">${escapeHTML(display)}</strong>?</div>
                                </div>
                            </div>
                        `;
                        positionSuggestions();
                        suggestions.classList.remove('hidden');
                    } else
                    if (val.length >= 2) {
                        suggestions.innerHTML = `<div class="suggestion-item no-results">No matches found for "${escapeHTML(val)}"</div>`;
                        positionSuggestions();
                        suggestions.classList.remove('hidden');
                    } else {
                        suggestions.classList.add('hidden');
                    }
                }
            }, 300); // Wait for expansion animation to complete
        } else {
            // On desktop or when not expanded, show immediately
            if (matches.length > 0) {
                suggestions.innerHTML = matches.map(m => {
                    const icon = m.type === 'report'
                        ? `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>`
                        : `<svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
                    const iconClass = m.type === 'report' ? 'report-icon' : 'rating-icon';
                    const display = m.data.displayName || m.data.realName || extractUsername(m.url);
                    return `
                        <div class="suggestion-item" onclick="applySuggestion('${escapeHTML(m.url)}', '${m.type}')">
                            <span class="s-icon ${iconClass}" style="display:flex; align-items:center; justify-content:center;">${icon}</span>
                            <div class="s-info">
                                <div class="s-name">${escapeHTML(display)}</div>
                                <div class="s-url" style="word-break: break-all;">${escapeHTML(m.url)}</div>
                            </div>
                        </div>
                    `;
                }).join('');
                positionSuggestions();
                suggestions.classList.remove('hidden');
            } else {
                const fuzzy = SearchSystem.getDidYouMean(val);
                if (fuzzy) {
                    const display = fuzzy.data.displayName || fuzzy.data.realName || extractUsername(fuzzy.url);
                    suggestions.innerHTML = `
                        <div class="suggestion-item no-results" style="border-bottom:1px solid #30363d; color:#8b949e;">No exact matches found.</div>
                        <div class="suggestion-item" onclick="applySuggestion('${escapeHTML(fuzzy.url)}', '${fuzzy.type}')">
                            <span class="s-icon" style="display:flex; align-items:center; justify-content:center;">
                                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:#8b5cf6;"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                            </span>
                            <div class="s-info">
                                <div class="s-name" style="color:#c9d1d9;">Did you mean: <strong style="color:#8b5cf6;">${escapeHTML(display)}</strong>?</div>
                            </div>
                        </div>
                    `;
                    positionSuggestions();
                    suggestions.classList.remove('hidden');
                } else
                if (val.length >= 2) {
                    suggestions.innerHTML = `<div class="suggestion-item no-results">No matches found for "${escapeHTML(val)}"</div>`;
                    positionSuggestions();
                    suggestions.classList.remove('hidden');
                } else {
                    suggestions.classList.add('hidden');
                }
            }
        }
    });

    // Handle touchstart for immediate keyboard and expansion on mobile
    input.addEventListener('touchstart', (e) => {
        if (window.innerWidth <= 600) {
            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                // Expand search immediately
                searchBox.classList.add('search-expanded');

                // Hide navbar immediately on mobile
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.add('hidden');
                }

                // Hide suggestions immediately to prevent overlay on mobile
                const suggestions = document.getElementById('search-suggestions');
                if (suggestions) {
                    suggestions.classList.add('hidden');
                }
            }

            // Focus the input immediately to bring up keyboard
            input.focus();
        }
    });

    // Also handle mousedown for immediate response on all devices
    input.addEventListener('mousedown', (e) => {
        if (window.innerWidth <= 600) {
            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                // Expand search immediately
                searchBox.classList.add('search-expanded');

                // Hide navbar immediately on mobile
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.add('hidden');
                }

                // Hide suggestions immediately to prevent overlay on mobile
                const suggestions = document.getElementById('search-suggestions');
                if (suggestions) {
                    suggestions.classList.add('hidden');
                }
            }

            // Focus the input immediately to bring up keyboard
            input.focus();
        }
    });

    // On focus, handle expansion and show recent searches after expansion finishes
    input.addEventListener('focus', (e) => {
        const val = input.value.trim();

        if (window.innerWidth <= 600) {
            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                // Ensure search is expanded when focused
                searchBox.classList.add('search-expanded');

                // Hide navbar when search is expanded
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.add('hidden');
                }

                // Wait for expansion to finish before showing suggestions
                setTimeout(() => {
                    if (val.length === 0) {
                        renderRecent();
                    } else if (val.length >= 2) {
                        // Trigger input event to show suggestions after expansion
                        const event = new Event('input', { bubbles: true });
                        input.dispatchEvent(event);
                    }
                }, 300); // Wait for expansion animation (300ms matches CSS transition)
            }
        } else {
            // On desktop, show immediately
            if (val.length === 0) renderRecent();
        }
    });

    // Hide keyboard on user scroll
    window.addEventListener('touchmove', () => {
        if (document.activeElement === input) {
            input.blur();
        }
    }, { passive: true });

    // Reposition on scroll/resize
    window.addEventListener('scroll', () => {
        if (!suggestions.classList.contains('hidden')) positionSuggestions();
    });
    window.addEventListener('resize', () => {
        if (!suggestions.classList.contains('hidden')) positionSuggestions();
    });

    // Hide on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.add('hidden');

            // Also remove expanded class if clicked outside search box on mobile
            const searchBox = document.querySelector('.search-box');
            const isMobile = window.innerWidth <= 600;
            if (searchBox && isMobile && searchBox.classList.contains('search-expanded')) {
                searchBox.classList.remove('search-expanded');

                // Show navbar when search is no longer expanded
                const navbar = document.querySelector('.navbar');
                if (navbar) navbar.classList.remove('hidden');
            }
        }
    });

    // Hide on Enter
    input.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            suggestions.classList.add('hidden');
            const val = input.value.trim();

            if (val) {
                if (searchIndexReadyPromise) await searchIndexReadyPromise;

                const counts = SearchSystem.getCounts(val);

                if (counts.reports > 0 && counts.ratings === 0) {
                    switchHomeTab('reports');
                } else if (counts.ratings > 0 && counts.reports === 0) {
                    switchHomeTab('ratings');
                }
            }
            performSearch();
        }
    });

    // Remove expanded class on blur and hide suggestions
    input.addEventListener('blur', () => {
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            searchBox.classList.remove('search-expanded');

            // Fix: Remove sticky class if near top to prevent navbar overlap
            if (window.scrollY <= 150) {
                searchBox.classList.remove('sticky-search');
                const navbar = document.querySelector('.navbar');
                if (navbar) navbar.classList.remove('hidden');
            }

            // Hide suggestions when search loses focus
            suggestions.classList.add('hidden');
        }
    });
}

function applySuggestion(url, type) {
    const input = document.getElementById('search-input');
    input.value = url;
    document.getElementById('search-suggestions').classList.add('hidden');
    
    if (type === 'rating') {
        switchHomeTab('ratings');
    } else if (type === 'report') {
        switchHomeTab('reports');
    }

    performSearch();
}

/* ==========================================
   FIREBASE DATABASE LOGIC
   ========================================== */

// Helper: Extract username from URL
function extractUsername(url) {
  try {
    // If it's a phone number, just return it
    if (/^[\+]?[\d\s\-\(\)]{7,}$/.test(url) && !/[a-z]/i.test(url)) return url;

    let clean = url.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, '');
    clean = clean.split('?')[0].replace(/\/$/, '');
    
    const parts = clean.split('/');
    
    // Handle Platform Specifics (Ignore non-profile paths)
    if (parts[0].includes('instagram.com') || parts[0].includes('facebook.com') || parts[0].includes('twitter.com') || parts[0].includes('x.com') || parts[0].includes('tiktok.com')) {
        if (parts.length > 1) {
            const segment = parts[1];
            if (['p', 'reel', 'reels', 'stories', 'explore', 'tv', 'watch', 'groups', 'marketplace', 'photo', 'video'].includes(segment)) {
                return parts[0]; // Return domain if path is not a profile
            }
            return segment.replace(/^@/, '');
        }
    }

    if (parts.length > 1 && parts[1]) {
        return parts[1];
    }
    return parts[0];
  } catch (e) {
    return url;
  }
}

// Helper: Get Country from Phone
function getPhoneCountry(number) {
    const clean = number.replace(/\D/g, '');
    // Sort by length desc to match longest prefix first
    const sorted = countryCodes.sort((a, b) => b.code.length - a.code.length);
    
    for (const c of sorted) {
        const cleanCode = c.code.replace(/\D/g, '');
        if (clean.startsWith(cleanCode)) {
            return { 
                name: c.name, 
                flag: c.flag, 
                iso: c.iso,
                img: `https://flagcdn.com/w80/${c.iso}.png` 
            };
        }
    }
    return { name: 'International', flag: '🌍', iso: null, img: null };
}

// Helper: Detect Platform
function getPlatformInfo(url) {
  // 1. Check for Phone Number
  if (/^[\+]?[\d\s\-\(\)]{4,}$/.test(url) && !/[a-z]/i.test(url)) {
      const info = getPhoneCountry(url);
      return { 
          icon: `<svg viewBox="0 0 24 24" style="width:100%;height:100%;fill:#8b949e;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`, 
          color: 'transparent', 
          name: info.name,
          flag: info.flag,
          flagImg: info.img,
          type: 'phone'
      };
  }

  const lower = url.toLowerCase();
  
  const icons = {
    instagram: `<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white;"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white;"><path d="M12 2.04C6.5 2.04 2.54 6.5 2.54 12c0 4.97 3.63 9.11 8.44 9.88v-7.03h-2.54v-2.85h2.54V9.75c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.65.77-1.65 1.56v1.88h2.76l-.44 2.85h-2.32v7.03c4.81-.77 8.44-4.91 8.44-9.88 0-5.5-4.46-9.96-9.96-9.96z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:white;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white;"><path d="M12.5 3v12.5a3.5 3.5 0 1 1-3.5-3.5c.2 0 .4.03.59.08V8.56a7.01 7.01 0 0 0-4.09 6.94c0 3.87 3.13 7 7 7s7-3.13 7-7V7.5a8.9 8.9 0 0 0 4.5 2.5V6.5a5.5 5.5 0 0 1-5.5-5.5h-3.5z"/></svg>`,
    website: `<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
  };

  let platformData = null;

  if (lower.includes('instagram')) platformData = { icon: icons.instagram, color: '#E1306C', name: 'Instagram' };
  else if (lower.includes('facebook')) platformData = { icon: icons.facebook, color: '#1877F2', name: 'Facebook' };
  else if (lower.includes('twitter') || lower.includes('x.com')) platformData = { icon: icons.x, color: '#000000', name: 'X' };
  else if (lower.includes('tiktok')) platformData = { icon: icons.tiktok, color: '#000000', name: 'TikTok' };

  if (platformData) {
      // Try to fetch Social Avatar
      const username = extractUsername(url);
      
      // Skip if username looks like a domain (extraction failed or it's a root link)
      if (username.includes('.') && !username.includes(' ')) {
          return platformData;
      }

      let avatarUrl = null;

      // Use fallback=false to trigger onerror if image not found
      if (lower.includes('instagram')) avatarUrl = `https://unavatar.io/instagram/${username}?fallback=false`;
      else if (lower.includes('twitter') || lower.includes('x.com')) avatarUrl = `https://unavatar.io/twitter/${username}?fallback=false`;
      else if (lower.includes('facebook')) avatarUrl = `https://unavatar.io/facebook/${username}?fallback=false`;
      else if (lower.includes('tiktok')) avatarUrl = `https://unavatar.io/tiktok/${username}?fallback=false`;
      
      if (avatarUrl) {
          const originalIcon = platformData.icon;
          platformData.icon = `
            <div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:inherit;">
                <img src="${avatarUrl}" 
                     style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:2;" 
                     onload="this.nextElementSibling.style.opacity='0'"
                     onerror="this.style.display='none'"
                     referrerpolicy="no-referrer"
                     loading="lazy">
                <div style="transition:opacity 0.2s; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
                    ${originalIcon}
                </div>
            </div>
          `;
      }
      return platformData;
  }
  
  // Fallback: Use Real Favicon
  let domain = url;
  try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      domain = urlObj.hostname;
  } catch (e) {
      domain = url.split('/')[0];
  }

  // Use Google's favicon service
  return { icon: `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" style="width:100%; height:100%; object-fit:contain;">`, color: '#21262d', name: 'Website' };
}

// Image Preview Handler
async function previewImage(input) {
  const previewContainer = document.getElementById('upload-preview-container');
  const previewImg = document.getElementById('upload-preview');
  
  if (input.files && input.files[0]) {
    const file = input.files[0];
    
    // 1. Basic Size/Type Check
    if (!file.type.startsWith('image/')) {
        showToast("Please upload an image file.", "error");
        input.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(e) {
      previewImg.src = e.target.result;
      
      // 2. AI Verification (NSFW Check)
      try {
          const model = await nsfwjs.load();
          const predictions = await model.classify(previewImg);
          const isSafe = !predictions.some(p => (p.className === 'Porn' || p.className === 'Hentai') && p.probability > 0.5);
          
          if (!isSafe) {
              showToast("Security Alert: Image flagged as inappropriate.", "error");
              input.value = ''; // Clear input
              previewContainer.classList.add('hidden');
              return;
          }
      } catch (err) {
          console.warn("AI Image check failed, proceeding with caution.", err);
      }

      previewContainer.classList.remove('hidden');
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    previewContainer.classList.add('hidden');
  }
}

// Helper: Process Image (Compress & Read)
async function processImage(file) {
  if (!file) return null;
  
  const options = {
    // OPTIMIZED FOR FIRESTORE (Database Storage)
    // We keep images under 100KB to avoid hitting the 1MB document limit
    maxSizeMB: 0.1, 
    maxWidthOrHeight: 600,
    useWebWorker: true,
    fileType: 'image/jpeg'
  };

  let imageFile = file;
  try {
    if (window.imageCompression) {
      imageFile = await window.imageCompression(file, options);
    }
  } catch (err) {
    console.warn("Compression failed, using original.", err);
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
}

/* ==========================================
   AI CONTENT GUARD (Security & Moderation)
   ========================================== */
const AI_ContentGuard = {
    // Multilingual Blocklist (EN, FR, TN/Derja)
    // Client-side filter to prevent abuse and maintain platform quality.
    offensiveTerms: [
        // EN
        'fuck', 'shit', 'bitch', 'asshole', 'cunt', 'dick', 'pussy', 'nigger', 'faggot', 'retard', 'kill yourself', 'suicide',
        // FR
        'merde', 'putain', 'connard', 'salope', 'encule', 'fils de pute', 'bite', 'couille', 'nique',
        // TN (Derja)
        'zebbi', 'nammi', '3asba', 'nayek', '9a7ba', 'sorm', 'zabbour', 'tahan', 'mnayek', '3as', 'zob', 'terma', 'farch'
    ],
    
    spamTriggers: [
        'buy now', 'click here', 'free money', 'crypto', 'investment', 'forex', 'whatsapp me', 
        'gagnez de l\'argent', 'investissez', 'bitcoin', 'lottery', 'prize',
        'rba7', 'flous', 'clicki houni', 'connectez-vous'
    ],

    analyze: function(text) {
        if (!text) return { safe: true };
        const lower = text.toLowerCase();
        // Normalize to handle accents (e.g., 'béhi' -> 'behi')
        const normalized = lower.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // 1. Offensive Content Check
        const foundOffensive = this.offensiveTerms.find(term => {
            // Check for exact word boundaries or specific dialect patterns
            return new RegExp(`\\b${term}\\b`, 'i').test(normalized) || normalized.includes(term);
        });

        if (foundOffensive) {
            return { safe: false, reason: "Your text contains inappropriate or offensive language." };
        }

        // 2. Spam Detection
        if (this.spamTriggers.some(trigger => normalized.includes(trigger))) {
            return { safe: false, reason: "Your text resembles spam or promotional content." };
        }

        // 3. Gibberish / Repetition (e.g., "aaaaaaa")
        if (/(.)\1{4,}/.test(text)) {
            return { safe: false, reason: "Text contains excessive repeated characters." };
        }

        return { safe: true };
    }
};

// Submit Local Report
async function submitReport() {
  const linkInput = document.getElementById('scammer-link');
  let link = linkInput.value.trim();
  const nameInput = document.getElementById('scammer-name');
  const descInput = document.getElementById('scammer-desc');
  const name = nameInput.value.trim();
  const description = descInput.value.trim();
  
  // Prepend Country Code if visible
  let countryIso = null;
  const select = document.getElementById('scam-country-select');
  if (select && !select.classList.contains('hidden')) {
      const code = select.value;
      const cObj = countryCodes.find(c => c.code === code);
      if (cObj) countryIso = cObj.iso;
      link = select.value + link;
  }
  
  // New Fields
  const typeSelect = document.getElementById('scam-type-selector');
  const scamType = typeSelect ? typeSelect.value : 'other';
  const fileExpected = document.getElementById('file-expected');
  const fileGot = document.getElementById('file-got');

  const user = auth.currentUser;
  const btn = document.querySelector('#form-scam .submit-btn');

  // Check Ban Status (Server-Side Check)
  const banSnap = await getDoc(doc(db, "banned_users", user.uid));
  if (banSnap.exists()) {
      const reason = banSnap.data().reason || "Violation of Terms";
      throw new Error(`You are banned from posting. Reason: ${reason}`);
  }

  if (!link || !name || !description) {
    const missing = [];
    if (!link) missing.push(linkInput);
    if (!name) missing.push(nameInput);
    if (!description) missing.push(descInput);
    
    triggerShake(missing);
    showToast("Please provide a link, display name, and description.", "error");
    return;
  }

  // UI Loading State
  const originalText = btn.innerText;
  btn.classList.add('loading');
  btn.disabled = true;

  try {
    // 0. AI Content Guard Check
    const safetyCheck = AI_ContentGuard.analyze(description);
    if (!safetyCheck.safe) {
        throw new Error(`Security Alert: ${safetyCheck.reason}`);
    }

    // 1. Verify Link & Safety
    link = await verifyUrl(link);

    // Retrieve Metadata
    let enrichedData = {};
    if (linkInput.dataset.enrichedData) {
        try {
            enrichedData = JSON.parse(linkInput.dataset.enrichedData);
        } catch (e) {
            console.warn("Error parsing metadata", e);
        }
    }

    // 2. Prepare Data
    const report = {
      url: link,
      displayName: name,
      description: description,
      country: countryIso,
      scamType: scamType,
      imageExpected: null,
      imageGot: null,
      image: null, // Backward compatibility / Thumbnail
      realName: enrichedData.realName || null,
      platformImage: enrichedData.platformImage || null,
      metaTitle: enrichedData.metaTitle || null,
      metaDescription: enrichedData.metaDescription || null,
      timestamp: Date.now(),
      uid: user.uid,
      userEmail: user.email,
      reporterName: user.displayName || 'Anonymous',
      reporterPhoto: user.photoURL || 'https://via.placeholder.com/150'
    };

    // 3. Handle Images
    if (fileExpected && fileExpected.files[0]) report.imageExpected = await processImage(fileExpected.files[0]);
    if (fileGot && fileGot.files[0]) report.imageGot = await processImage(fileGot.files[0]);
    
    // Set main image for feed (prioritize 'Expected' as it's usually the clean product shot, or 'Got' if that's all we have)
    report.image = report.imageExpected || report.imageGot || null;

    // 4. Save to Firebase
    await addDoc(collection(db, "reports"), report);
    showToast("Report submitted successfully!", "success");
    document.getElementById('form-scam').reset();
    
    // Reset previews
    document.querySelectorAll('.proof-preview').forEach(el => {
        el.src = '';
        el.classList.remove('visible');
    });
    document.getElementById('dynamic-proof-container').classList.add('hidden');

    // Reset Description Field State
    const descInput = document.getElementById('scammer-desc');
    if (descInput) {
        descInput.disabled = true;
        descInput.placeholder = "Please select a scam type above first...";
        descInput.style.opacity = "0.5";
        descInput.style.cursor = "not-allowed";
    }
    
    showPage('home');

  } catch (e) {
    console.error("Submission error: ", e);
    showToast(e.message || "Error submitting report.", "error");
  } finally {
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.innerText = originalText;
  }
}

// --- TRUST SCORE HELPERS ---
function calculateTrustScore(reports, ratings, verifiedUsers = new Set()) {
  // Weighted Trust Algorithm: Trust = Positive / (Positive + Negative)
  let posMass = 50; // Base inertia (Increased for stability)
  let negMass = 50;
  let consecutiveReports = 0;
  const reportTimestamps = [];
  let consecutivePositives = 0;
  const positiveTimestamps = [];

  const items = [
    ...reports.map(r => ({...r, type: 'report'})),
    ...ratings.map(r => ({...r, type: 'rating'}))
  ].sort((a, b) => a.timestamp - b.timestamp);

  items.forEach(item => {
    const isVerified = verifiedUsers.has(item.uid);
    const multiplier = isVerified ? 3 : 1; // Verified users have 3x impact

    if (item.type === 'report') {
      consecutivePositives = 0; // Reset positive streak
      consecutiveReports++;
      let penalty = 15; // Base Penalty (Reduced from 30)

      // 1. Velocity Penalty: Higher if multiple reports in 24h
      const oneDay = 24 * 60 * 60 * 1000;
      const recentCount = reportTimestamps.filter(t => (item.timestamp - t) < oneDay).length;
      penalty += (recentCount * 10);

      // 2. Stacking Penalty: Higher if reports are consecutive
      if (consecutiveReports > 1) {
          penalty += (consecutiveReports - 1) * 10;
      }

      negMass += (penalty * multiplier);
      reportTimestamps.push(item.timestamp);
    } else if (item.type === 'rating') {
      consecutiveReports = 0; // Reset report stack
      const stars = parseInt(item.rating);
      
      if (stars >= 4) {
          consecutivePositives++;
          let reward = (stars === 5) ? 5 : 3;

          // 1. Velocity Reward: Higher if multiple positive ratings in 24h
          const oneDay = 24 * 60 * 60 * 1000;
          const recentCount = positiveTimestamps.filter(t => (item.timestamp - t) < oneDay).length;
          reward += (recentCount * 5);

          // 2. Stacking Reward: Higher if ratings are consecutive
          if (consecutivePositives > 1) {
              reward += (consecutivePositives - 1) * 5;
          }

          // Cap max reward per rating to prevent abuse
          if (reward > 55) reward = 55;

          posMass += (reward * multiplier);
          positiveTimestamps.push(item.timestamp);
      } else {
          consecutivePositives = 0;
          if (stars === 3) posMass += (1 * multiplier); // Neutral/Okay is still proof of delivery
          else if (stars === 2) negMass += (5 * multiplier);
          else if (stars === 1) negMass += (10 * multiplier);
      }
    }
  });
  
  const total = posMass + negMass;
  return Math.round((posMass / total) * 100);
}

function getTrustStatus(score, reportCount = 0, ratingCount = 0) {
    // Handle "New / Insufficient Data" case
    // If no scam reports and score is in the neutral range (50-59), it means they have some positive ratings
    // but not enough to break into "Low Risk" (60+), or just started.
    if (reportCount === 0 && score >= 50 && score < 60) {
        return { color: '#9ca3af', textKey: 'status-no-info' };
    }
    if (score >= 80) return { color: '#00e676', textKey: 'status-trusted' };
    if (score >= 60) return { color: '#2979ff', textKey: 'status-low-risk' };
    if (score >= 30) return { color: '#ffaa00', textKey: 'status-potential-risk' };
    return { color: '#ff3d00', textKey: 'status-high-risk' };
}

// PAGINATION STATE
let allReportGroups = [];
let currentReportLimit = 12;
const REPORTS_PER_PAGE = 12;

// Render Reports
async function renderReports(searchQuery = "", sortType = "trending", countryFilter = "GLOBAL", verifiedOnly = false) {
  const container = document.getElementById('local-reports-grid');
  const loadMoreBtn = document.getElementById('reports-load-more-container');
  if (!container) return;

  container.innerHTML = getSkeletonHTML(4);
  if (loadMoreBtn) loadMoreBtn.classList.add('hidden');

  const q = query(collection(db, "reports"), orderBy("timestamp", "desc"));
  const qRatings = query(collection(db, "ratings")); // Fetch ratings for accurate scoring
  const qVerified = query(collection(db, "verified_users"));
  
  const [querySnapshot, ratingsSnapshot, verifiedSnapshot] = await Promise.all([getDocs(q), getDocs(qRatings), getDocs(qVerified)]);
  const allRatings = [];
  ratingsSnapshot.forEach(doc => allRatings.push(doc.data()));
  
  const verifiedUsers = new Set();
  verifiedSnapshot.forEach(doc => verifiedUsers.add(doc.id));

  const reports = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.displayName) {
      // Country Filter Logic
      if (countryFilter !== 'GLOBAL') {
          const filterIso = countryFilter.toLowerCase();
          const itemIso = (data.country || '').toLowerCase();
          let match = itemIso === filterIso;
          
          // Fallback: Check phone number prefix if no explicit country
          if (!match && !data.country && data.url) {
               const cObj = countryCodes.find(c => c.iso === filterIso);
               if (cObj && data.url.startsWith(cObj.code)) match = true;
          }
          if (!match) return;
      }

      if (searchQuery) {
        const tokens = searchQuery.toLowerCase().split(/\s+/);
        const score = SearchSystem.score({
            url: data.url ? data.url.toLowerCase() : '',
            name: (data.displayName || '').toLowerCase(),
            desc: (data.description || '').toLowerCase()
        }, tokens);
        if (score <= 0) return;
        data._searchScore = score; // Store for sorting
      }
      reports.push(data);
    }
  });
  
  const emptyMsg = searchQuery ? "No results found for your search." : "No community reports found.";
  
  if (reports.length === 0) {
      container.innerHTML = `<p style="opacity:0.6; text-align:center;">${emptyMsg}</p>`;
      return;
  }

  // Group by URL to calculate "Known As"
  const grouped = {};
  reports.forEach(r => {
    if (!r.url) return;
    // Normalize URL slightly to group better
    const key = r.url.toLowerCase().replace(/\/$/, ''); 
    if (!grouped[key]) grouped[key] = { url: r.url, names: [], images: [], timestamps: [], reports: [] };
    grouped[key].names.push(r.displayName);
    grouped[key].reports.push(r);
    if (r.image) grouped[key].images.push(r.image);
    grouped[key].timestamps.push(r.timestamp || 0);
  });

  // Pre-calculate metrics for sorting
  const groups = Object.values(grouped).map(group => {
      const key = group.url.toLowerCase().replace(/\/$/, '');
      const relatedRatings = allRatings.filter(r => r.url && r.url.toLowerCase().replace(/\/$/, '') === key);
      const score = calculateTrustScore(group.reports, relatedRatings, verifiedUsers);
      const latestTimestamp = Math.max(...group.timestamps);
      
      // Trending Metric
      const cutoff = Date.now() - (49 * 24 * 60 * 60 * 1000);
      const recentCount = group.timestamps.filter(t => t > cutoff).length;

      // Calculate aggregate search relevance if searching
      let relevance = 0;
      if (searchQuery) {
          // Use max score found in reports or re-score group
          relevance = Math.max(...group.reports.map(r => r._searchScore || 0));
          if (relevance === 0) {
             // Fallback if group matched but individual report score wasn't captured (edge case)
             relevance = 1; 
          }
      }

      return { ...group, score, latestTimestamp, recentCount, relatedRatings, relevance };
  });

  // Apply Sort
  groups.sort((a, b) => {
      if (searchQuery && (a.relevance || b.relevance)) return b.relevance - a.relevance;
      if (sortType === 'risk') return a.score - b.score; // Lower score = Higher Risk (Ascending)
      if (sortType === 'recent') return b.latestTimestamp - a.latestTimestamp; // Newest first
      return b.recentCount !== a.recentCount ? b.recentCount - a.recentCount : b.names.length - a.names.length; // Trending
  });

  // Filter Verified (Trusted Business)
  if (verifiedOnly) {
      groups = groups.filter(g => g.score >= 80);
  }

  if (groups.length === 0) {
      container.innerHTML = `<p style="opacity:0.6; text-align:center; padding: 40px;">No verified reports found.</p>`;
      return;
  }

  // Store processed groups and render first batch
  allReportGroups = groups;
  currentReportLimit = REPORTS_PER_PAGE;
  renderReportBatch(true);
}

function renderReportBatch(reset = false) {
  const container = document.getElementById('local-reports-grid');
  const loadMoreBtn = document.getElementById('reports-load-more-container');
  
  if (reset) container.innerHTML = '';

  const start = reset ? 0 : container.children.length;
  const end = currentReportLimit;
  const batch = allReportGroups.slice(start, end);

  batch.forEach(group => {
    // Calculate most common name
    const nameCounts = group.names.reduce((acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    const mostCommonName = Object.keys(nameCounts).reduce((a, b) => nameCounts[a] > nameCounts[b] ? a : b);
    
    // Check for Enriched Data (Real Name / Image)
    let enrichedName = null;
    let enrichedImage = null;
    let metaTitle = null;
    let metaDesc = null;

    const sortedGroupReports = group.reports.sort((a,b) => b.timestamp - a.timestamp);
    for (const r of sortedGroupReports) {
        if (r.realName) { enrichedName = r.realName; break; }
    }
    for (const r of sortedGroupReports) {
        if (r.platformImage) { enrichedImage = r.platformImage; break; }
        if (r.metaTitle) { metaTitle = r.metaTitle; metaDesc = r.metaDescription; }
    }

    const finalDisplayName = escapeHTML(enrichedName || mostCommonName);

    const platform = getPlatformInfo(group.url);
    const originalIcon = platform.icon;
    if (enrichedImage) {
        platform.icon = `
            <img src="${enrichedImage}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block;" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${originalIcon}</div>
        `;
    }

    const username = extractUsername(group.url);
    const displayImage = group.images.length > 0 ? group.images[group.images.length - 1] : null; // Use latest image
    
    // Calculate Dynamic Risk Status
    // Use pre-calculated score and ratings
    const statusInfo = getTrustStatus(group.score, group.reports.length, group.relatedRatings.length);
    const statusText = translations[currentLanguage][statusInfo.textKey] || statusInfo.textKey;

    const card = document.createElement('div');

    // --- LINK PREVIEW LAYOUT (If Metadata Exists) ---
    if (metaTitle && (enrichedImage || metaDesc)) {
        card.className = 'mini-card link-preview-card';
        card.style.padding = '0';
        card.style.overflow = 'hidden';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';

        let imgHtml = '';
        if (enrichedImage) {
            imgHtml = `<div style="width:100%; height:140px; overflow:hidden; background:#0d1117; position:relative; border-bottom:1px solid #30363d;">
                        <img src="${enrichedImage}" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.style.display='none'">
                       </div>`;
        }

        card.innerHTML = `
           ${imgHtml}
           <div style="padding:20px; flex:1; display:flex; flex-direction:column;">
               <div style="font-weight:bold; font-size:1em; margin-bottom:6px; line-height:1.3; color:#f0f6fc; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${escapeHTML(metaTitle)}</div>
               ${metaDesc ? `<div style="font-size:0.85em; color:#8b949e; margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${escapeHTML(metaDesc)}</div>` : ''}
               
               <div style="margin-top:auto; display:flex; align-items:center; justify-content:space-between;">
                   <div style="display:flex; align-items:center; gap:6px; font-size:0.75em; color:#8b949e;">
                       <div style="width:16px; height:16px;">${platform.icon}</div>
                       <span style="max-width:100px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${platform.name}</span>
                   </div>
                   <div style="display:flex; align-items:center; gap:8px;">
                       <button onclick="event.stopPropagation(); shareItem('${escapeHTML(group.url)}', '${escapeHTML(finalDisplayName)}', '${statusText}')" style="background:none; border:none; color:#8b949e; cursor:pointer; padding:0;" title="${translations[currentLanguage]['share'] || 'Share'}">
                           <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                       </button>
                       <div class="warning-label" style="color:${statusInfo.color}; font-size:0.75em; margin:0; background:${statusInfo.color}15;">
                           ${statusText}
                       </div>
                   </div>
               </div>
           </div>
        `;
    } else 
    if (platform.type === 'phone') {
        const flagDisplay = platform.flagImg 
            ? `<img src="${platform.flagImg}" style="width:18px; height:13px; object-fit:cover; border-radius:2px; display:inline-block; vertical-align:middle; margin-right:6px;">` 
            : platform.flag + ' ';

        // --- PHONE LAYOUT ---
        card.className = 'mini-card phone-card';
        card.innerHTML = `
          <div class="card-header" style="align-items:flex-start; justify-content:space-between;">
            <div style="display:flex; align-items:flex-start;">
                <div style="width:44px; height:44px; margin-right:12px; flex-shrink:0;">${platform.icon}</div>
                <div>
                      <div class="phone-number" style="word-break: break-word;">${escapeHTML(username)}</div>
                    <div class="location-badge">${flagDisplay}${platform.name}</div>
                </div>
            </div>
            <button onclick="event.stopPropagation(); shareItem('${escapeHTML(group.url)}', '${escapeHTML(username)}', '${statusText}')" style="background:none; border:none; color:#8b949e; cursor:pointer; padding:4px;" title="${translations[currentLanguage]['share'] || 'Share'}">
                <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </button>
          </div>
            <div class="known-as" style="margin-top:5px;">Reported as: <strong style="color:#f0f6fc;">${escapeHTML(mostCommonName)}</strong></div>
          <div class="warning-label" style="color:${statusInfo.color}; margin-top:auto; background:${statusInfo.color}15;">
            <span style="width:8px; height:8px; background:${statusInfo.color}; border-radius:50%; display:inline-block; margin-right:6px; box-shadow:0 0 5px ${statusInfo.color};"></span>
            ${statusText}
          </div>
        `;
    } else {
        // --- STANDARD LAYOUT ---
        card.className = 'mini-card';
        card.innerHTML = `
          <div class="card-header">
            <div class="platform-icon" style="background:${platform.color}">${platform.icon}</div>
            <div class="card-user" style="word-break: break-word;">${finalDisplayName}</div>
          </div>
          <div class="known-as">Profile: <strong>${escapeHTML(username)}</strong> (${group.names.length} ${translations[currentLanguage]['reports-count-label'] || 'reports'})</div>
          ${displayImage ? `<img src="${displayImage}" style="border-radius:16px; margin-top:12px;">` : ''}
          <div class="warning-label" style="color:${statusInfo.color}; background:${statusInfo.color}15;">
            <span style="width:8px; height:8px; background:${statusInfo.color}; border-radius:50%; display:inline-block; margin-right:6px; box-shadow:0 0 5px ${statusInfo.color};"></span>
            ${statusText}
          </div>
          <div style="display:flex; gap:10px; margin-top:10px;">
            <a href="${group.url.startsWith('http') ? group.url : 'https://' + group.url}" onclick="interceptLink(event, this.href, '${statusText}')" class="visit-btn" style="flex:1; margin-top:0;">${translations[currentLanguage]['visit-profile'] || 'Visit Profile ↗'}</a>
            <button onclick="event.stopPropagation(); shareItem('${escapeHTML(group.url)}', '${escapeHTML(finalDisplayName)}', '${statusText}')" class="visit-btn" style="width:auto; margin-top:0; padding:0 16px; display:flex; align-items:center; justify-content:center;" title="${translations[currentLanguage]['share'] || 'Share'}">
                <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </button>
          </div>
        `;
    }
    
    card.onclick = (e) => {
      if (e.target.tagName === 'A') return; // Allow clicking the link without opening details
      window.lastClickedGridItem = card; // Track item immediately
      window.lastGridScrollY = window.scrollY; // Save exact scroll position
      openDetails(group.url, 'reports');
    };
    container.appendChild(card);
    
    // Masonry Resize Logic
    const img = card.querySelector('img');
    if (img) {
        if (img.complete) resizeGridItem(card);
        else img.onload = () => resizeGridItem(card);
    }
    resizeGridItem(card);
  });

  // Handle Load More Button Visibility
  if (loadMoreBtn) {
      if (currentReportLimit >= allReportGroups.length) {
          loadMoreBtn.classList.add('hidden');
      } else {
          loadMoreBtn.classList.remove('hidden');
      }
  }

  setTimeout(resizeAllGridItems, 100);
}

async function loadMoreReports() {
  const btnContainer = document.getElementById('reports-load-more-container');
  const btn = btnContainer ? btnContainer.querySelector('button') : null;
  const grid = document.getElementById('local-reports-grid');
  
  if (btn) {
    btn.innerText = "Loading...";
    btn.disabled = true;
    btn.style.opacity = "0.7";
  }

  const temp = document.createElement('div');
  temp.innerHTML = getSkeletonHTML(4);
  const skeletons = Array.from(temp.children);
  skeletons.forEach(s => grid.appendChild(s));

  await new Promise(r => setTimeout(r, 800));

  skeletons.forEach(s => s.remove());

  currentReportLimit += REPORTS_PER_PAGE;
  renderReportBatch(false);
  
  if (btn) {
    btn.innerText = "Load More";
    btn.disabled = false;
    btn.style.opacity = "1";
  }
}
window.loadMoreReports = loadMoreReports;

async function renderRatings(searchQuery = "", sortType = "trending", countryFilter = "GLOBAL", verifiedOnly = false) {
  const container = document.getElementById('local-ratings-grid');
  if (!container) return;

  container.innerHTML = getSkeletonHTML(4);

  const q = query(collection(db, "ratings"), orderBy("timestamp", "desc"));
  const qReports = query(collection(db, "reports")); // Fetch reports for accurate scoring
  const qVerified = query(collection(db, "verified_users"));
  
  const [querySnapshot, reportsSnapshot, verifiedSnapshot] = await Promise.all([getDocs(q), getDocs(qReports), getDocs(qVerified)]);
  const allReports = [];
  reportsSnapshot.forEach(doc => allReports.push(doc.data()));

  const verifiedUsers = new Set();
  verifiedSnapshot.forEach(doc => verifiedUsers.add(doc.id));

  const ratings = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.rating) {
      // Country Filter Logic
      if (countryFilter !== 'GLOBAL') {
          const filterIso = countryFilter.toLowerCase();
          const itemIso = (data.country || '').toLowerCase();
          let match = itemIso === filterIso;
          
          // Fallback: Check phone number prefix
          if (!match && !data.country && data.url) {
               const cObj = countryCodes.find(c => c.iso === filterIso);
               if (cObj && data.url.startsWith(cObj.code)) match = true;
          }
          if (!match) return;
      }

      if (searchQuery) {
        const tokens = searchQuery.toLowerCase().split(/\s+/);
        const score = SearchSystem.score({
            url: data.url ? data.url.toLowerCase() : '',
            name: (data.realName || '').toLowerCase(),
            desc: (data.good || data.bad || '').toLowerCase()
        }, tokens);
        if (score <= 0) return;
        data._searchScore = score;
      }
      ratings.push(data);
    }
  });
  
  const emptyMsg = searchQuery ? "No results found for your search." : "No seller ratings found.";
  container.innerHTML = ratings.length ? '' : `<p style="opacity:0.6; text-align:center;">${emptyMsg}</p>`;

  // Group ratings by URL
  const grouped = {};
  ratings.forEach(r => {
      if (!r.url) return;
      const key = r.url.toLowerCase().replace(/\/$/, '');
      if (!grouped[key]) {
          grouped[key] = { url: r.url, ratings: [], goods: [], bads: [], timestamps: [], rawRatings: [] };
      }
      grouped[key].ratings.push(parseInt(r.rating));
      if (r.good) grouped[key].goods.push(r.good);
      if (r.bad) grouped[key].bads.push(r.bad);
      grouped[key].rawRatings.push(r);
      grouped[key].timestamps.push(r.timestamp || 0);
  });

  // Pre-calculate metrics
  const groups = Object.values(grouped).map(group => {
      const key = group.url.toLowerCase().replace(/\/$/, '');
      const relatedReports = allReports.filter(r => r.url && r.url.toLowerCase().replace(/\/$/, '') === key);
      const score = calculateTrustScore(relatedReports, group.rawRatings, verifiedUsers);
      const latestTimestamp = Math.max(...group.timestamps);
      
      // Trending Metric
      const cutoff = Date.now() - (49 * 24 * 60 * 60 * 1000);
      const recentCount = group.timestamps.filter(t => t > cutoff).length;

      let relevance = 0;
      if (searchQuery) {
          relevance = Math.max(...group.rawRatings.map(r => r._searchScore || 0));
      }

      return { ...group, score, latestTimestamp, recentCount, relatedReports, relevance };
  });

  // Apply Sort
  groups.sort((a, b) => {
      if (searchQuery && (a.relevance || b.relevance)) return b.relevance - a.relevance;
      if (sortType === 'risk') return a.score - b.score; // Lower score = Higher Risk
      if (sortType === 'recent') return b.latestTimestamp - a.latestTimestamp;
      return b.recentCount !== a.recentCount ? b.recentCount - a.recentCount : b.ratings.length - a.ratings.length;
  });

  // Filter Verified (Trusted Business)
  if (verifiedOnly) {
      groups = groups.filter(g => g.score >= 80);
  }

  if (groups.length === 0) {
      container.innerHTML = `<p style="opacity:0.6; text-align:center; padding: 40px;">No verified ratings found.</p>`;
      return;
  }

  groups.forEach(group => {
      const avgRating = group.ratings.reduce((a, b) => a + b, 0) / group.ratings.length;
      const stars = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));
      const platform = getPlatformInfo(group.url);
      const username = extractUsername(group.url);

      // Check for Enriched Data
      let enrichedName = null;
      let enrichedImage = null;
      let metaTitle = null;
      let metaDesc = null;

      const sortedGroupRatings = group.rawRatings.sort((a,b) => b.timestamp - a.timestamp);
      for (const r of sortedGroupRatings) {
          if (r.realName) { enrichedName = r.realName; break; }
      }
      for (const r of sortedGroupRatings) {
          if (r.platformImage) { enrichedImage = r.platformImage; break; }
          if (r.metaTitle) { metaTitle = r.metaTitle; metaDesc = r.metaDescription; }
      }
      const originalIcon = platform.icon;
      if (enrichedImage) {
          platform.icon = `
            <img src="${enrichedImage}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block;" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${originalIcon}</div>
          `;
      }
      const displayTitle = escapeHTML(enrichedName || username);

      // Calculate Dynamic Risk Status
      const statusInfo = getTrustStatus(group.score, group.relatedReports.length, group.rawRatings.length);
      const statusText = translations[currentLanguage][statusInfo.textKey] || statusInfo.textKey;

      const card = document.createElement('div');

      // --- LINK PREVIEW LAYOUT ---
      if (metaTitle && (enrichedImage || metaDesc)) {
          card.className = 'mini-card link-preview-card';
          card.style.padding = '0';
          card.style.overflow = 'hidden';
          card.style.display = 'flex';
          card.style.flexDirection = 'column';

          let imgHtml = '';
          if (enrichedImage) {
              imgHtml = `<div style="width:100%; height:140px; overflow:hidden; background:#0d1117; position:relative; border-bottom:1px solid #30363d;">
                          <img src="${enrichedImage}" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.style.display='none'">
                         </div>`;
          }

          card.innerHTML = `
             ${imgHtml}
             <div style="padding:20px; flex:1; display:flex; flex-direction:column;">
                 <div style="font-weight:bold; font-size:1em; margin-bottom:6px; line-height:1.3; color:#f0f6fc; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${escapeHTML(metaTitle)}</div>
                 <div style="font-size: 1.1em; color: #ffaa00; margin-bottom:8px;">${stars}</div>
                 
                 <div style="margin-top:auto; display:flex; align-items:center; justify-content:space-between;">
                     <div style="display:flex; align-items:center; gap:6px; font-size:0.75em; color:#8b949e;">
                         <div style="width:16px; height:16px;">${platform.icon}</div>
                         <span style="max-width:100px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${platform.name}</span>
                     </div>
                     <div class="warning-label" style="color:${statusInfo.color}; font-size:0.75em; margin:0; background:${statusInfo.color}15;">
                         ${statusText}
                     </div>
                 </div>
             </div>
          `;
      } else 
      if (platform.type === 'phone') {
          const flagDisplay = platform.flagImg 
            ? `<img src="${platform.flagImg}" style="width:18px; height:13px; object-fit:cover; border-radius:2px; display:inline-block; vertical-align:middle; margin-right:6px;">` 
            : platform.flag + ' ';

          card.className = 'mini-card phone-card';
          card.innerHTML = `
              <div class="card-header" style="align-items:flex-start;">
                  <div style="width:44px; height:44px; margin-right:12px; flex-shrink:0;">${platform.icon}</div>
                  <div>
                      <div class="phone-number" style="word-break: break-word;">${escapeHTML(username)}</div>
                      <div class="location-badge">${flagDisplay}${platform.name}</div>
                  </div>
              </div>
              <div class="known-as" style="font-size: 1.2em; color: #ffaa00; margin-top:10px;">${stars}</div>
              <div class="warning-label" style="color:${statusInfo.color}; margin-top:auto; background:${statusInfo.color}15;">
                <span style="width:8px; height:8px; background:${statusInfo.color}; border-radius:50%; display:inline-block; margin-right:6px; box-shadow:0 0 5px ${statusInfo.color};"></span>
                ${statusText}
              </div>
          `;
      } else {
          const avgRatingText = (translations[currentLanguage]['avg-from-ratings'] || 'avg. from {count} ratings').replace('{count}', group.ratings.length);
          card.className = 'mini-card';
          card.innerHTML = `
              <div class="card-header">
                  <div class="platform-icon" style="background:${platform.color}">${platform.icon}</div>
                  <div class="card-user" style="word-break: break-word;">${displayTitle}</div>
              </div>
              <div class="known-as" style="font-size: 1.2em; color: #ffaa00;">${stars} <span style="font-size: 0.7em; color: #8b949e;">(${avgRating.toFixed(1)} ${avgRatingText})</span></div>
              <div class="warning-label" style="color:${statusInfo.color}; margin-top:8px; background:${statusInfo.color}15;">
                <span style="width:8px; height:8px; background:${statusInfo.color}; border-radius:50%; display:inline-block; margin-right:6px; box-shadow:0 0 5px ${statusInfo.color};"></span>
                ${statusText}
              </div>
              <a href="${group.url.startsWith('http') ? group.url : 'https://' + group.url}" onclick="interceptLink(event, this.href, '${statusText}')" class="visit-btn">${translations[currentLanguage]['visit-profile'] || 'Visit Profile ↗'}</a>
          `;
      }

      card.onclick = (e) => {
        if (e.target.tagName === 'A') return;
        window.lastClickedGridItem = card; // Track item immediately
        window.lastGridScrollY = window.scrollY; // Save exact scroll position
        openDetails(group.url, 'ratings');
      };
      container.appendChild(card);
      
      // Masonry Resize Logic
      const img = card.querySelector('img');
      if (img) {
          if (img.complete) resizeGridItem(card);
          else img.onload = () => resizeGridItem(card);
      }
      resizeGridItem(card);
  });
  setTimeout(resizeAllGridItems, 100);
}

/* ==========================================
   DETAILS VIEW LOGIC
   ========================================== */

async function openDetails(url, type, highlightId = null) {
  // Capture current page state before opening details
  const pages = ['home', 'login', 'admin-dashboard'];
  let activeId = 'home';
  for (const id of pages) {
      const el = document.getElementById(id);
      if (el && !el.classList.contains('hidden')) {
          activeId = id;
          break;
      }
  }
  window.lastActivePage = activeId;
  
  // Capture Tab State for Login/Profile Section
  if (window.lastActivePage === 'login') {
      const activitySection = document.getElementById('user-activity-section');
      // Check if activity section is visible
      if (activitySection && !activitySection.classList.contains('hidden')) {
          window.lastProfileTab = 'activity';
          
          // Capture Activity Sub-tab
          const reportsGrid = document.getElementById('activity-reports');
          if (reportsGrid && !reportsGrid.classList.contains('hidden')) {
              window.lastActivitySubTab = 'reports';
          } else {
              window.lastActivitySubTab = 'ratings';
          }
      } else {
          window.lastProfileTab = 'profile';
      }
  }

  const detailsView = document.getElementById('details-view');
  const card = window.lastClickedGridItem;
  
  window.lastDetailsArgs = { url, type, highlightId }; // Store for refreshing

  // Create or get a transition container for the card clone
  let cloneContainer = document.getElementById('card-clone-container');
  if (!cloneContainer && detailsView) {
      cloneContainer = document.createElement('div');
      cloneContainer.id = 'card-clone-container';
      // Apply mini-card class to inherit styles, but override layout for fullscreen
      cloneContainer.className = 'mini-card'; 
      Object.assign(cloneContainer.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          margin: '0',
          borderRadius: 'inherit',
          zIndex: '1',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column'
      });
      detailsView.appendChild(cloneContainer);
  }
  
  const contentContainer = detailsView ? detailsView.querySelector('.content-container') : null;

  // Animation Logic
  if (card && detailsView) {
      const rect = card.getBoundingClientRect();
      window.lastGridItemRect = rect; // Store exact position for closing animation
      
      // 1. Setup Clone (The "Real" Grid Item Look)
      if (cloneContainer) {
          cloneContainer.innerHTML = card.innerHTML;
          cloneContainer.style.opacity = '1';
          cloneContainer.style.display = 'flex';
          
          // Fade out text elements to prevent glitchy reflow
          requestAnimationFrame(() => {
              Array.from(cloneContainer.children).forEach(child => {
                  if (child.tagName !== 'IMG') {
                      child.style.transition = 'opacity 0.2s ease';
                      child.style.opacity = '0';
                  }
              });
          });
      }
      
      // 2. Prepare Details View
      detailsView.classList.remove('hidden');
      
      // Hide actual content initially so we see the clone expanding
      if (contentContainer) {
          contentContainer.style.opacity = '0';
          contentContainer.style.position = 'relative';
          contentContainer.style.zIndex = '2'; // Ensure content sits above clone
      }

      Object.assign(detailsView.style, {
          position: 'fixed',
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          borderRadius: getComputedStyle(card).borderRadius,
          overflow: 'hidden',
          opacity: '1',
          transform: 'translateZ(0)', // Hardware acceleration
          transition: 'none',
          zIndex: '9999',
          backgroundColor: 'rgba(22, 27, 34, 0.95)',
          backdropFilter: 'blur(16px)',
          webkitBackdropFilter: 'blur(16px)'
      });

      // 3. Force Reflow
      void detailsView.offsetWidth;

      // 4. Animate to Full Screen
      requestAnimationFrame(() => {
          Object.assign(detailsView.style, {
              transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '0'
          });
      });

      // 5. Crossfade & Load Content
      setTimeout(() => {
          populateDetailsView(url, type, highlightId);
          
          // Fade in real content
          if (contentContainer) {
              contentContainer.style.transition = 'opacity 0.4s ease';
              contentContainer.style.opacity = '1';
          }
          // Fade out clone
          if (cloneContainer) {
              cloneContainer.style.transition = 'opacity 0.4s ease';
              cloneContainer.style.opacity = '0';
          }
      }, 300); // Start fading in halfway through

      // 6. Cleanup after animation
      setTimeout(() => {
          showPage('details-view');
          detailsView.style = ''; // Reset inline styles
          if (contentContainer) {
              contentContainer.style.opacity = '';
              contentContainer.style.transition = '';
          }
          if (cloneContainer) cloneContainer.style.display = 'none';
      }, 600);
  } else {
      showPage('details-view');
      populateDetailsView(url, type, highlightId);
  }

  // Logic moved inside animation flow
}

async function populateDetailsView(url, type, highlightId = null) {
  const container = document.getElementById('details-list');
  const title = document.getElementById('details-title');
  
  // Show Skeleton for Details
  container.innerHTML = getSkeletonHTML(1) + `
    <div class="review-card">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:15px;">
        <div class="skeleton" style="width:40px; height:40px; border-radius:50%;"></div>
        <div class="skeleton" style="width:150px; height:20px;"></div>
      </div>
      <div class="skeleton" style="width:100%; height:80px;"></div>
    </div>
  `;

  title.innerText = translations[currentLanguage]['seller-analysis'] || 'Seller Analysis';

  const targetKey = url.toLowerCase().replace(/\/$/, '');

  try {
    // Fetch BOTH reports and ratings to build a full history
    const qReports = query(collection(db, "reports"), orderBy("timestamp", "asc"));
    const qRatings = query(collection(db, "ratings"), orderBy("timestamp", "asc"));
    
    const [reportsSnap, ratingsSnap] = await Promise.all([getDocs(qReports), getDocs(qRatings)]);
    
    const items = [];
    
    reportsSnap.forEach((doc) => {
      const data = doc.data();
      if (data.url && data.url.toLowerCase().replace(/\/$/, '') === targetKey) {
        items.push({ ...data, type: 'report', id: doc.id });
      }
    });

    ratingsSnap.forEach((doc) => {
      const data = doc.data();
      if (data.url && data.url.toLowerCase().replace(/\/$/, '') === targetKey) {
        items.push({ ...data, type: 'rating', id: doc.id });
      }
    });

    // Sort combined items by timestamp (oldest first for calculation, then we reverse for display)
    items.sort((a, b) => a.timestamp - b.timestamp);

    if (items.length === 0) {
      container.innerHTML = '<p style="text-align:center;">No details found.</p>';
      return;
    }

    // --- FETCH VERIFIED & BANNED USERS ---
    const uniqueUids = [...new Set(items.map(i => i.uid))];
    const verifiedUsers = new Set();
    const bannedUsers = new Set();
    
    await Promise.all(uniqueUids.map(async (uid) => {
        try {
            const snap = await getDoc(doc(db, "verified_users", uid));
            if (snap.exists()) verifiedUsers.add(uid);
            
            const banSnap = await getDoc(doc(db, "banned_users", uid));
            if (banSnap.exists()) bannedUsers.add(uid);
        } catch (e) { console.warn("Verification fetch failed", e); }
    }));

    // --- INTELLIGENT TRUST ALGORITHM ---
    let posMass = 50;
    let negMass = 50;
    const historyPoints = [];
    let reportCount = 0;
    let ratingCount = 0;
    let consecutiveReports = 0;
    const reportTimestamps = [];
    let consecutivePositives = 0;
    const positiveTimestamps = [];

    items.forEach(item => {
      const isVerified = verifiedUsers.has(item.uid);
      const multiplier = isVerified ? 3 : 1;

      if (item.type === 'report') {
        consecutivePositives = 0;
        reportCount++;
        consecutiveReports++;
        
        let penalty = 15; // Base
        
        // Velocity Check
        const oneDay = 24 * 60 * 60 * 1000;
        const recentCount = reportTimestamps.filter(t => (item.timestamp - t) < oneDay).length;
        penalty += (recentCount * 10);

        // Stacking Check
        if (consecutiveReports > 1) {
            penalty += (consecutiveReports - 1) * 10;
        }

        negMass += (penalty * multiplier);
        reportTimestamps.push(item.timestamp);
        
        // Attach dynamic impact for display
        item.dynamicImpact = `Critical (-${penalty * multiplier})`;

      } else if (item.type === 'rating') {
        ratingCount++;
        consecutiveReports = 0;
        const stars = parseInt(item.rating);
        
        if (stars >= 4) {
            consecutivePositives++;
            let reward = (stars === 5) ? 5 : 3;
            
            // Velocity
            const oneDay = 24 * 60 * 60 * 1000;
            const recentCount = positiveTimestamps.filter(t => (item.timestamp - t) < oneDay).length;
            reward += (recentCount * 5);

            // Stacking
            if (consecutivePositives > 1) {
                reward += (consecutivePositives - 1) * 5;
            }
            
            // Cap max reward per rating to prevent abuse
            if (reward > 55) reward = 55;
            
            posMass += (reward * multiplier);
            positiveTimestamps.push(item.timestamp);
            
            const baseText = (stars === 5) ? 'Strong' : 'Good';
            item.dynamicImpact = `${baseText} (+${reward * multiplier})`;
        } else {
            consecutivePositives = 0;
            if (stars === 3) { posMass += (1 * multiplier); item.dynamicImpact = `Neutral (+${1 * multiplier})`; }
            else if (stars === 2) { negMass += (5 * multiplier); item.dynamicImpact = `Poor (-${5 * multiplier})`; }
            else if (stars === 1) { negMass += (10 * multiplier); item.dynamicImpact = `Bad (-${10 * multiplier})`; }
        }
      }
      
      const total = posMass + negMass;
      const score = Math.round((posMass / total) * 100);
      historyPoints.push({ date: item.timestamp, score: score });
    });

    const currentScore = historyPoints.length > 0 ? historyPoints[historyPoints.length - 1].score : 50;

    // Check for Verified Status (High Trust > 3 Months)
    let isVerified = false;
    const threeMonths = 90 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    
    if (historyPoints.length > 0) {
        const cutoff = now - threeMonths;
        const pointsBefore = historyPoints.filter(p => p.date < cutoff);
        const pointsAfter = historyPoints.filter(p => p.date >= cutoff);
        
        if (pointsBefore.length > 0) {
             const lastScoreBefore = pointsBefore[pointsBefore.length - 1].score;
             // Must have entered the window with high score and maintained it
             if (lastScoreBefore >= 80) {
                 const hasDip = pointsAfter.some(p => p.score < 80);
                 if (!hasDip && currentScore >= 80) {
                     isVerified = true;
                 }
             }
        }
    }

    // Determine Status Color
    const statusInfo = getTrustStatus(currentScore, reportCount, ratingCount);
    const statusColor = statusInfo.color;
    const statusText = translations[currentLanguage][statusInfo.textKey] || statusInfo.textKey;

    // Update Background to Trust Color
    if (!document.getElementById('details-view').classList.contains('hidden')) {
        updateBackgroundEffect('trust', statusColor);
    }

    container.innerHTML = '';
    
    // Render Header Info
    const username = extractUsername(url);
    const platform = getPlatformInfo(url);

    // Check for Enriched Data (Real Name / Image)
    let enrichedName = null;
    let enrichedImage = null;
    // Items are sorted old -> new. Iterate backwards to find latest info.
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].realName && !enrichedName) enrichedName = items[i].realName;
        if (items[i].platformImage && !enrichedImage) enrichedImage = items[i].platformImage;
        if (enrichedName && enrichedImage) break;
    }

    const displayTitle = escapeHTML(enrichedName || username);
    const originalIcon = platform.icon;
    if (enrichedImage) {
        platform.icon = `
            <img src="${enrichedImage}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block;" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${originalIcon}</div>
        `;
    }
    
    // Ensure URL has protocol
    let displayUrl = url;
    const isPhone = /^[\+]?[\d\s\-\(\)]{7,}$/.test(url) && !/[a-z]/i.test(url);
    
    if (isPhone) {
        displayUrl = 'tel:' + url;
    } else if (!/^https?:\/\//i.test(displayUrl)) {
        displayUrl = 'https://' + displayUrl;
    }
    
    let verifiedBadge = '';
    if (isVerified) {
        verifiedBadge = `
            <div class="verified-badge-container" title="Verified: High trust maintained for 3+ months">
                <div class="verified-badge-icon">
                    <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:#0d1117;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div class="verified-dust" style="--dx: 12px; --dy: -12px; animation-delay: 0s;"></div>
                <div class="verified-dust" style="--dx: -10px; --dy: -14px; animation-delay: 0.4s;"></div>
                <div class="verified-dust" style="--dx: 14px; --dy: 8px; animation-delay: 0.8s;"></div>
                <div class="verified-dust" style="--dx: -12px; --dy: 10px; animation-delay: 1.2s;"></div>
                <div class="verified-dust" style="--dx: 0px; --dy: -18px; animation-delay: 1.6s;"></div>
            </div>
        `;
    }

    container.innerHTML += `
      <div style="text-align:center; padding:16px; margin-bottom: 24px; width: 100%; position:relative; background:rgba(22, 27, 34, 0.9); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); border-radius:24px; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
        <a href="${displayUrl}" ${isPhone ? '' : `onclick="interceptLink(event, this.href, '${statusText}')"`} class="details-header-title" style="display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:10px; text-decoration:none; color:${isVerified ? '#ffd700' : '#eaeaea'}; font-size:1.3rem; font-weight:bold; transition: opacity 0.2s; max-width: 100%;">
          <div class="platform-icon" style="background:${platform.color}; width:42px; height:42px; font-size:22px; display:flex; align-items:center; justify-content:center; border-radius:14px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); flex-shrink:0;">${platform.icon}</div>
          <span style="word-break: break-word; text-align: center;">${displayTitle}</span>
          ${verifiedBadge}
          <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:#38bdf8; opacity:0.8;"><path d="M18 13v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h6v2H5v11h11v-6h2zm-1.5-9H11v2h3.59l-4.83 4.83 1.41 1.41L16 7.41V11h2V4z"/></svg>
        </a>
        <div style="font-size:0.85rem; color:#8b949e; margin-top:4px; margin-bottom:12px;">${platform.name}</div>
        <div class="details-header-buttons" style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
             <button onclick="rateLinkFromModal(decodeURIComponent(&quot;${encodeURIComponent(url)}&quot;))" style="background:rgba(255, 170, 0, 0.1); border:1px solid rgba(255, 170, 0, 0.3); color:#ffaa00; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 140px;">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor; transform:translateY(-1px);"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ${translations[currentLanguage]['rate'] || 'Rate'}
            </button>
             <button onclick="reportLinkFromModal(decodeURIComponent(&quot;${encodeURIComponent(url)}&quot;))" style="background:rgba(255, 77, 77, 0.1); border:1px solid rgba(255, 77, 77, 0.3); color:#ff4d4d; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 140px;">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>
                ${translations[currentLanguage]['report'] || 'Report'}
            </button>
             <button onclick="shareItem(decodeURIComponent(&quot;${encodeURIComponent(url)}&quot;), decodeURIComponent(&quot;${encodeURIComponent(enrichedName || username)}&quot;), '${statusText}')" style="background:rgba(139, 92, 246, 0.1); border:1px solid rgba(139, 92, 246, 0.3); color:#8b5cf6; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 80px; max-width: 100px;">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                ${translations[currentLanguage]['share'] || 'Share'}
            </button>
            ${auth.currentUser?.uid === ADMIN_UID ? `
             <button onclick="openAdminEditModal('${escapeHTML(url)}', '${escapeHTML(enrichedName || username)}', '${escapeHTML(enrichedImage || '')}')" style="background:rgba(139, 92, 246, 0.2); border:1px solid #8b5cf6; color:#8b5cf6; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 120px;" title="Admin: Edit seller details">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                ${translations[currentLanguage]['edit'] || 'Edit'}
            </button>
             <button onclick="markSellerTrust('${escapeHTML(url)}', 'trusted')" style="background:rgba(0, 230, 118, 0.15); border:1px solid rgba(0, 230, 118, 0.4); color:#00e676; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 120px;" title="Admin: Mark as Trusted (+100)">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                ${translations[currentLanguage]['trusted'] || 'Trusted'}
            </button>
             <button onclick="markSellerTrust('${escapeHTML(url)}', 'scam')" style="background:rgba(255, 77, 77, 0.15); border:1px solid rgba(255, 77, 77, 0.4); color:#ff4d4d; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 120px;" title="Admin: Mark as Scam (-100)">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                ${translations[currentLanguage]['scam'] || 'Scam'}
            </button>
             <button onclick="deleteSellerProfile('${escapeHTML(url)}', '${escapeHTML(enrichedName || username)}')" style="background:rgba(255, 77, 77, 0.2); border:1px solid #ff4d4d; color:#ff4d4d; padding:8px 16px; border-radius:12px; font-size:0.85rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; flex: 1; justify-content: center; min-width: 100px; max-width: 120px;" title="Admin: Delete entire profile">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                ${translations[currentLanguage]['delete'] || 'Delete'}
            </button>
            ` : ''}
        </div>
      </div>
    `;
    
    // Render Trust Chart & Stats
    const chartSVG = generateTrustChart(historyPoints, statusColor);
    const historyLogHTML = generateHistoryLogHTML(items);
    const aiSummary = generateAISummary(items, verifiedUsers);
    
    container.innerHTML += `
      <div class="trust-score-container">
        <div class="trust-stats">
          <div class="stat-item">
            <div class="stat-value" style="color:${statusColor}">${currentScore}</div>
            <div class="stat-label">${translations[currentLanguage]['stat-trust-score'] || 'Trust Score'}</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${reportCount}</div>
            <div class="stat-label">${translations[currentLanguage]['stat-reports'] || 'Reports'}</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${ratingCount}</div>
            <div class="stat-label">${translations[currentLanguage]['stat-ratings'] || 'Ratings'}</div>
          </div>
        </div>
        <div class="chart-wrapper">
          ${chartSVG}
        </div>
        
        <div class="ai-summary-box">
            <h3 style="margin: 0 0 8px 0; font-size: 0.95rem; color: #8b5cf6; display: flex; align-items: center; gap: 8px;">
               <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><path d="M11.25 5h1.5v4.25L16 8l-2.25 4.5h-2.5L13.5 8 11.25 5z"/></svg> ${translations[currentLanguage]['ai-summary-title'] || 'AI Review Summary'}
            </h3>
            <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: #b0b8c3;">${aiSummary}</p>
        </div>

        <div style="display:flex; justify-content:center; margin-top:15px;">
            <span style="background:${statusColor}22; color:${statusColor}; padding:6px 16px; border-radius:50px; border:1px solid ${statusColor}44; font-weight:bold; font-size:0.9em; display:flex; align-items:center; gap:6px;">
                <span style="width:8px; height:8px; border-radius:50%; background:${statusColor}; box-shadow:0 0 8px ${statusColor};"></span>
                ${statusText}
            </span>
        </div>
        
        <button id="expand-history-btn" class="expand-history-btn" onclick="toggleHistoryLog()">${translations[currentLanguage]['view-history'] || 'View Full History'}</button>
        <div id="history-log-container" class="hidden history-log">
           ${historyLogHTML}
        </div>
      </div>
    `;

    // Render List (Admin First, then Newest)
    items.sort((a, b) => {
        const aIsAdmin = a.uid === ADMIN_UID;
        const bIsAdmin = b.uid === ADMIN_UID;
        
        if (aIsAdmin && !bIsAdmin) return -1;
        if (!aIsAdmin && bIsAdmin) return 1;
        return b.timestamp - a.timestamp;
    });

    items.forEach(item => {
      const date = new Date(item.timestamp).toLocaleDateString();
      
      // Fallback for old data: Use email username if reporterName is missing
      let rName = item.reporterName;
      if (!rName && item.userEmail) {
        rName = item.userEmail.split('@')[0];
      }
      rName = rName || 'Anonymous';

      const rPhoto = item.reporterPhoto || 'https://via.placeholder.com/40';
      const isAdmin = item.uid === ADMIN_UID;
      const isVerifiedUser = verifiedUsers.has(item.uid);
      const isBanned = bannedUsers.has(item.uid);
      
      // Admin Controls (Only visible to you)
      const currentUser = auth.currentUser;
      const showAdminControls = currentUser && currentUser.uid === ADMIN_UID;
      
      // Escape name for onclick
      const safeName = escapeHTML(rName).replace(/'/g, "\\'");
      
      const userHtml = `
        <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="showUserProfile('${item.uid}', '${safeName}', '${rPhoto}')" title="View Profile">
          <img src="${rPhoto}" alt="${escapeHTML(rName)}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
          <span style="color:${isVerifiedUser ? '#ffd700' : '#eaeaea'}; font-weight:bold;">${escapeHTML(rName)}</span>
          ${isBanned ? '<span style="color:#ff4d4d; font-size:0.8em; font-weight:bold; border:1px solid #ff4d4d; padding:0 4px; border-radius:4px;">BANNED</span>' : ''}
          ${isVerifiedUser ? `
            <div class="verified-badge-container small" title="Verified Community Member">
                <div class="verified-badge-icon">
                    <svg viewBox="0 0 24 24" style="width:10px; height:10px; fill:#0d1117;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div class="verified-dust" style="--dx: 8px; --dy: -8px; animation-delay: 0s;"></div>
                <div class="verified-dust" style="--dx: -6px; --dy: -10px; animation-delay: 0.4s;"></div>
                <div class="verified-dust" style="--dx: 10px; --dy: 6px; animation-delay: 0.8s;"></div>
            </div>
          ` : ''}
          ${isAdmin ? `
            <div class="admin-badge-container" title="Administrator">
                <div class="admin-dust" style="left: 20%; animation-delay: 0s;"></div>
                <div class="admin-dust" style="left: 50%; animation-delay: 0.8s;"></div>
                <div class="admin-dust" style="left: 80%; animation-delay: 1.6s;"></div>
                <svg class="admin-shield-icon" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="silverMetal_${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#e6e6e6" />
                            <stop offset="25%" stop-color="#b0b0b0" />
                            <stop offset="50%" stop-color="#ffffff" />
                            <stop offset="75%" stop-color="#808080" />
                            <stop offset="100%" stop-color="#505050" />
                        </linearGradient>
                        <linearGradient id="shieldReflect_${item.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="rgba(255,255,255,0)" />
                            <stop offset="50%" stop-color="rgba(255,255,255,0.9)" />
                            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                            <animate attributeName="x1" from="-150%" to="150%" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="-50%" to="250%" dur="2s" repeatCount="indefinite" />
                        </linearGradient>
                    </defs>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="url(#silverMetal_${item.id})" stroke="#666" stroke-width="0.5"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="url(#shieldReflect_${item.id})" style="mix-blend-mode: overlay;" />
                </svg>
                <span class="admin-text">ADMIN</span>
            </div>
          ` : ''}
          ${showAdminControls && !isAdmin ? `
             <button onclick="toggleUserVerification('${item.uid}', ${isVerifiedUser}, '${safeName}', '${rPhoto}')" style="background:none; border:1px solid #30363d; border-radius:12px; cursor:pointer; color:#8b949e; padding:4px 10px; font-size:0.7em; margin-left:5px;" title="${isVerifiedUser ? 'Revoke Verification' : 'Grant Verification'}">
                ${isVerifiedUser ? 'Unverify' : 'Verify'}
             </button>
             <button onclick="toggleUserBan('${item.uid}', ${isBanned}, '${safeName}', '${rPhoto}')" style="background:none; border:1px solid #ff4d4d; border-radius:12px; cursor:pointer; color:#ff4d4d; padding:4px 10px; font-size:0.7em; margin-left:5px;" title="${isBanned ? 'Unban User' : 'Ban User'}">
                ${isBanned ? 'Unban' : 'Ban'}
             </button>
          ` : ''}
          ${showAdminControls ? `
             <button onclick="deleteActivityItem('${item.type}s', '${item.id}')" style="background:none; border:1px solid #ff4d4d; border-radius:4px; cursor:pointer; color:#ff4d4d; padding:2px 6px; font-size:0.7em; margin-left:5px;" title="Delete Item">
                Delete
             </button>
          ` : ''}
          ${(auth.currentUser && auth.currentUser.uid === item.uid && item.type === 'report' && (Date.now() - item.timestamp < 86400000)) ? `
             <button onclick="editReport('${item.id}')" style="background:none; border:1px solid #38bdf8; border-radius:4px; cursor:pointer; color:#38bdf8; padding:2px 6px; font-size:0.7em; margin-left:5px;" title="Edit Report">
                Edit
             </button>
          ` : ''}
          ${(auth.currentUser && auth.currentUser.uid !== item.uid) ? `
             <button onclick="reportAbuse('${item.id}', '${item.type}', '${item.uid}')" style="background:none; border:none; cursor:pointer; color:#8b949e; padding:2px 6px; margin-left:5px; opacity:0.6;" title="Report Abuse">
                <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
             </button>
          ` : ''}
        </div>
      `;

      let content = '';

      if (item.type === 'report') {
        // Determine Scam Type Label
        const typeLabels = {
            'not_delivered': 'Paid but not delivered',
            'fake_item': 'Fake / Low Quality',
            'wrong_item': 'Wrong Item Sent',
            'phishing': 'Phishing Link',
            'other': 'Scam Report'
        };
        const typeLabel = typeLabels[item.scamType] || 'Scam Report';

        // Build Image Section
        let imagesHtml = '';
        if (item.imageExpected || item.imageGot) {
             imagesHtml = '<div class="comparison-view">';
             if (item.imageExpected) {
                 imagesHtml += `
                    <div class="comparison-item">
                        <div class="scam-badge" style="background:#21262d; color:#8b949e;">Expected</div>
                        <img src="${item.imageExpected}" onclick="window.open(this.src)">
                    </div>`;
             }
             if (item.imageGot) {
                 imagesHtml += `
                    <div class="comparison-item">
                        <div class="scam-badge" style="background:#ff4d4d; color:white;">Received</div>
                        <img src="${item.imageGot}" onclick="window.open(this.src)">
                    </div>`;
             }
             imagesHtml += '</div>';
        } else if (item.image) {
            // Fallback for old reports
            imagesHtml = `<img src="${item.image}" style="max-width:100%; border-radius:6px; margin-top:10px;">`;
        }

        content = `
          <div class="review-header" style="align-items:center;">
            ${userHtml}
            <div style="text-align:right;">
                <div>${date}</div>
                ${item.lastEdited ? `<div style="font-size:0.75em; color:#8b949e; font-style:italic;">Edited: ${new Date(item.lastEdited).toLocaleDateString()}</div>` : ''}
            </div>
          </div>
          <div style="margin-bottom:10px; font-size:0.9em;">
            <span class="scam-type-tag">${typeLabel}</span><br>
            <span style="opacity:0.8">Reported Name: ${escapeHTML(item.displayName)}</span>
          </div>
          ${item.description ? `<p style="margin:10px 0; font-size:0.95em; color:#eaeaea; line-height:1.5;">${escapeHTML(item.description)}</p>` : ''}
          ${imagesHtml ? `<div style="margin-top:12px; border-radius:12px; overflow:hidden;">${imagesHtml}</div>` : ''}
        `;
      } else {
        const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
        content = `
          <div class="review-header" style="align-items:center;">
            ${userHtml}
            <div style="text-align:right;">
              <div style="color:#ffaa00;">${stars}</div>
              <span style="font-size:0.8em;">${date}</span>
            </div>
          </div>
          ${item.good ? `<p style="margin:5px 0; font-size:0.9em;"><strong style="color:#4dff88">Pros:</strong> ${escapeHTML(item.good)}</p>` : ''}
          ${item.bad ? `<p style="margin:5px 0; font-size:0.9em;"><strong style="color:#ff4d4d">Cons:</strong> ${escapeHTML(item.bad)}</p>` : ''}
        `;
      }

      const div = document.createElement('div');
      div.className = 'review-card';
      
      // Highlight Logic
      if (highlightId && item.id === highlightId) {
          div.id = 'highlight-target';
          div.style.border = '1px solid #8b5cf6';
          div.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.15), inset 0 0 20px rgba(139, 92, 246, 0.05)';
          div.style.position = 'relative';
          div.style.zIndex = '10';
      }

      div.innerHTML = content;
      container.appendChild(div);
    });

    // Scroll to highlight
    if (highlightId) {
        setTimeout(() => {
            const el = document.getElementById('highlight-target');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 600);
    }
  } catch (e) {
    console.error("Error loading details:", e);
    container.innerHTML = '<p style="text-align:center; color:#ff4d4d;">Error loading details.</p>';
  }
}

/* UPDATE NOTIFICATION */
function showUpdateNotification() {
  let notification = document.getElementById('update-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.className = 'update-notification';
    notification.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px; flex:1;">
        <div style="width:40px; height:40px; background:rgba(56, 189, 248, 0.15); border-radius:12px; display:flex; align-items:center; justify-content:center; color:#38bdf8; flex-shrink:0;">
            <svg viewBox="0 0 24 24" style="width:22px; height:22px; fill:currentColor;"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.51-3.47-3.51-9.11 0-12.58 3.51-3.47 9.14-3.47 12.65 0l3.65-3.75v8.06zM14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/></svg>
        </div>
        <div>
            <div style="font-weight:bold; color:#f0f6fc; font-size:0.95rem;">Update Available</div>
            <div style="font-size:0.85em; color:#8b949e;">A new version is available.</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="update-btn" onclick="window.location.reload()">Refresh</button>
        <button class="update-close" onclick="document.getElementById('update-notification').classList.remove('active')" title="Dismiss">
            <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    `;
    document.body.appendChild(notification);
  }
  
  // Force reflow to ensure transition plays
  void notification.offsetWidth;
  notification.classList.add('active');
}

/* BETA INFO MODAL */
function showBetaInfo() {
    const existing = document.getElementById('beta-info-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'beta-info-modal';
    overlay.className = 'custom-modal-overlay active';

    overlay.innerHTML = `
        <div class="custom-modal">
            <div style="color: #38bdf8; font-size: 2.5rem; margin-bottom: 15px;">
                <svg viewBox="0 0 24 24" style="width:48px; height:48px; fill:currentColor;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            <div class="modal-title" style="color: #38bdf8;">Welcome to the Beta!</div>
            <div class="modal-message" style="text-align: left; line-height: 1.6;">
                <p>This platform is currently in <strong>exclusive beta testing</strong>. We're working hard to build the best experience for you.</p>
                <p>You may encounter some bugs or unexpected behavior. Your feedback is invaluable to us!</p>
                <p>If you have any issues or suggestions, please don't hesitate to reach out.</p>
                <div style="margin-top: 20px; padding: 12px; background: #0d1117; border-radius: 8px; text-align: center;">
                    <strong>Contact:</strong> <a href="mailto:contact@isitascam.com" style="color: #38bdf8; font-weight: bold;">contact@isitascam.com</a>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-confirm" style="background: #38bdf8; color: #0d1117;" onclick="document.getElementById('beta-info-modal').remove()">Got it</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Add a click listener to the overlay itself to close the modal
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

/* SHOW USER PROFILE MODAL */
async function showUserProfile(uid, name, photo) {
    const existing = document.getElementById('user-profile-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'user-profile-modal';
    overlay.className = 'custom-modal-overlay active';
    
    // Initial Skeleton with Cleaner Layout
    overlay.innerHTML = `
        <div class="custom-modal" style="max-width:500px; width:95%; max-height:90vh; display:flex; flex-direction:column; padding:0; overflow:hidden; background:#0d1117; border:1px solid #30363d; border-radius:12px;">
            <!-- Header -->
            <div style="padding:24px; background:linear-gradient(180deg, #161b22 0%, #0d1117 100%); border-bottom:1px solid #30363d; text-align:center; position:relative;">
                <button onclick="document.getElementById('user-profile-modal').remove()" style="position:absolute; top:15px; right:15px; background:none; border:none; color:#8b949e; cursor:pointer; padding:5px;">
                    <svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:currentColor;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
                
                <div style="position:relative; display:inline-block; margin-bottom:12px;">
                    <img src="${photo}" style="width:80px; height:80px; border-radius:50%; object-fit:cover; border:3px solid #30363d; background:#0d1117;">
                    <div id="profile-status-indicator" style="position:absolute; bottom:2px; right:2px; width:16px; height:16px; border-radius:50%; border:2px solid #0d1117; display:none;"></div>
                </div>
                
                <h2 style="margin:0 0 4px 0; font-size:1.5rem; color:#f0f6fc; display:flex; align-items:center; justify-content:center; gap:8px;">
                    ${escapeHTML(name)}
                    <span id="profile-badges-inline"></span>
                </h2>
                
                <div id="profile-meta" style="color:#8b949e; font-size:0.9em; margin-bottom:15px;">Loading profile...</div>
                
                <div id="profile-stats" style="display:flex; justify-content:center; gap:20px; opacity:0.5;">
                    <div style="text-align:center;">
                        <div style="font-size:1.2em; font-weight:bold; color:#f0f6fc;">-</div>
                        <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Reports</div>
                    </div>
                    <div style="text-align:center; padding:0 15px; border-left:1px solid #30363d; border-right:1px solid #30363d;">
                        <div style="font-size:1.2em; font-weight:bold; color:#f0f6fc;">-</div>
                        <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Ratings</div>
                    </div>
                    <div style="text-align:center;">
                        <div style="font-size:1.2em; font-weight:bold; color:#8b949e;">-</div>
                        <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Trust</div>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div id="user-profile-content" style="padding:0; overflow-y:auto; flex:1; background:#0d1117;">
                <div style="padding:20px;">
                    <div class="skeleton" style="width:100%; height:80px; margin-bottom:10px;"></div>
                    <div class="skeleton" style="width:100%; height:80px;"></div>
                </div>
            </div>
            
            <!-- Footer Actions -->
            <div id="profile-footer" style="padding:15px 20px; border-top:1px solid #30363d; background:#161b22; display:flex; justify-content:flex-end; display:none;">
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    try {
        // Fetch Data
        const [reportsSnap, ratingsSnap, verifySnap, banSnap] = await Promise.all([
            getDocs(query(collection(db, "reports"), where("uid", "==", uid))),
            getDocs(query(collection(db, "ratings"), where("uid", "==", uid))),
            getDoc(doc(db, "verified_users", uid)),
            getDoc(doc(db, "banned_users", uid))
        ]);

        const activities = [];
        reportsSnap.forEach(doc => activities.push({ ...doc.data(), type: 'report', id: doc.id }));
        ratingsSnap.forEach(doc => activities.push({ ...doc.data(), type: 'rating', id: doc.id }));
        
        // Sort combined
        activities.sort((a, b) => b.timestamp - a.timestamp);

        // Stats
        const reportCount = reportsSnap.size;
        const ratingCount = ratingsSnap.size;
        
        // Determine Joined Date (Oldest activity)
        let joinedDate = "Unknown";
        if (activities.length > 0) {
            const oldest = activities[activities.length - 1].timestamp;
            joinedDate = new Date(oldest).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
        }

        // Badges Logic
        const isAdmin = (uid === ADMIN_UID);
        const isVerified = verifySnap.exists();
        const isBanned = banSnap.exists();
        
        const badgesInline = document.getElementById('profile-badges-inline');
        
        if (isAdmin) {
            badgesInline.innerHTML = `
            <div class="admin-badge-container" title="Administrator" style="transform:scale(0.8); margin:0;">
                <div class="admin-dust" style="left: 20%; animation-delay: 0s;"></div>
                <div class="admin-dust" style="left: 50%; animation-delay: 0.8s;"></div>
                <div class="admin-dust" style="left: 80%; animation-delay: 1.6s;"></div>
                <svg class="admin-shield-icon" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="silverMetal_profile" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#e6e6e6" />
                            <stop offset="25%" stop-color="#b0b0b0" />
                            <stop offset="50%" stop-color="#ffffff" />
                            <stop offset="75%" stop-color="#808080" />
                            <stop offset="100%" stop-color="#505050" />
                        </linearGradient>
                        <linearGradient id="shieldReflect_profile" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="rgba(255,255,255,0)" />
                            <stop offset="50%" stop-color="rgba(255,255,255,0.9)" />
                            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                            <animate attributeName="x1" from="-150%" to="150%" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="-50%" to="250%" dur="2s" repeatCount="indefinite" />
                        </linearGradient>
                    </defs>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="url(#silverMetal_profile)" stroke="#666" stroke-width="0.5"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="url(#shieldReflect_profile)" style="mix-blend-mode: overlay;" />
                </svg>
            </div>`;
        }
        
        if (isVerified) {
            badgesInline.innerHTML += `
            <div class="verified-badge-container small" title="Verified Community Member" style="transform:scale(1.2);">
                <div class="verified-badge-icon">
                    <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:#0d1117;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div class="verified-dust" style="--dx: 8px; --dy: -8px; animation-delay: 0s;"></div>
                <div class="verified-dust" style="--dx: -6px; --dy: -10px; animation-delay: 0.4s;"></div>
                <div class="verified-dust" style="--dx: 10px; --dy: 6px; animation-delay: 0.8s;"></div>
            </div>`;
        }

        // Status Indicator (Online/Banned/Verified color ring)
        const statusInd = document.getElementById('profile-status-indicator');
        if (isBanned) {
            statusInd.style.display = 'block';
            statusInd.style.background = '#ff4d4d';
            badgesInline.innerHTML += `<span style="background:rgba(255, 77, 77, 0.15); color:#ff4d4d; border:1px solid rgba(255, 77, 77, 0.3); padding:2px 6px; border-radius:4px; font-size:0.6em; font-weight:bold; vertical-align:middle; margin-left:5px;">BANNED</span>`;
        } else if (isVerified || isAdmin) {
            statusInd.style.display = 'block';
            statusInd.style.background = isAdmin ? '#e6e6e6' : '#ffd700';
        }

        // Update Meta
        document.getElementById('profile-meta').innerText = `Joined ${joinedDate}`;

        // Update Stats
        const statsEl = document.getElementById('profile-stats');
        statsEl.style.opacity = '1';
        statsEl.innerHTML = `
            <div style="text-align:center;">
                <div style="font-size:1.2em; font-weight:bold; color:#f0f6fc;">${reportCount}</div>
                <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Reports</div>
            </div>
            <div style="text-align:center; padding:0 15px; border-left:1px solid #30363d; border-right:1px solid #30363d;">
                <div style="font-size:1.2em; font-weight:bold; color:#f0f6fc;">${ratingCount}</div>
                <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Ratings</div>
            </div>
            <div style="text-align:center;">
                <div style="font-size:1.2em; font-weight:bold; color:${isAdmin ? '#e6e6e6' : (isVerified ? '#ffd700' : '#8b949e')}">${isAdmin ? '∞' : (isVerified ? 'High' : 'N/A')}</div>
                <div style="font-size:0.75em; color:#8b949e; text-transform:uppercase; letter-spacing:0.5px;">Trust</div>
            </div>
        `;

        // Footer Actions
        const footer = document.getElementById('profile-footer');
        if (auth.currentUser && auth.currentUser.uid !== uid) {
            footer.style.display = 'flex';
            footer.innerHTML = `
                 <button onclick="reportAbuse('${uid}', 'user', '${uid}')" style="background:none; border:none; color:#ff4d4d; cursor:pointer; font-size:0.9em; display:flex; align-items:center; gap:6px; opacity:0.8; transition:opacity 0.2s;">
                    <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                    Report User
                 </button>
            `;
        }

        // Render Content
        const contentContainer = document.getElementById('user-profile-content');
        if (activities.length === 0) {
            contentContainer.innerHTML = `
                <div style="padding:40px 20px; text-align:center; color:#8b949e;">
                    <svg viewBox="0 0 24 24" style="width:40px; height:40px; fill:currentColor; opacity:0.3; margin-bottom:10px;"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
                    <p style="margin:0;">No public activity yet.</p>
                </div>`;
        } else {
            contentContainer.innerHTML = `<div style="padding:0;">`;
            
            activities.forEach((item, index) => {
                const date = new Date(item.timestamp).toLocaleDateString();
                const platform = getPlatformInfo(item.url);
                const targetName = extractUsername(item.url);
                const isLast = index === activities.length - 1;
                
                let itemHtml = '';
                if (item.type === 'report') {
                    itemHtml = `
                        <div style="padding:15px 20px; border-bottom:${isLast ? 'none' : '1px solid #21262d'}; display:flex; gap:12px; align-items:flex-start;">
                            <div style="width:32px; height:32px; background:rgba(255, 77, 77, 0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#ff4d4d; flex-shrink:0;">
                                <svg viewBox="0 0 24 24" style="width:18px; height:18px; fill:currentColor;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                            </div>
                            <div style="flex:1; min-width:0;">
                                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                                    <span style="color:#f0f6fc; font-weight:600; font-size:0.95em;">Reported Scam</span>
                                    <span style="color:#8b949e; font-size:0.75em;">${date}</span>
                                </div>
                                <div style="display:flex; align-items:center; gap:6px; margin-bottom:6px;">
                                    <div style="width:14px; height:14px;">${platform.icon}</div>
                                    <span style="color:#8b949e; font-size:0.85em; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHTML(targetName)}</span>
                                </div>
                                <p style="font-size:0.9em; color:#b0b8c3; margin:0; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${escapeHTML(item.description)}</p>
                            </div>
                        </div>
                    `;
                } else {
                    const stars = '★'.repeat(item.rating);
                    const isPositive = item.rating >= 4;
                    const color = isPositive ? '#4dff88' : (item.rating <= 2 ? '#ff4d4d' : '#ffaa00');
                    
                    itemHtml = `
                        <div style="padding:15px 20px; border-bottom:${isLast ? 'none' : '1px solid #21262d'}; display:flex; gap:12px; align-items:flex-start;">
                            <div style="width:32px; height:32px; background:${color}1a; border-radius:8px; display:flex; align-items:center; justify-content:center; color:${color}; flex-shrink:0;">
                                <svg viewBox="0 0 24 24" style="width:18px; height:18px; fill:currentColor;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            </div>
                            <div style="flex:1; min-width:0;">
                                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                                    <span style="color:${color}; font-size:0.9em;">${stars}</span>
                                    <span style="color:#8b949e; font-size:0.75em;">${date}</span>
                                </div>
                                <div style="display:flex; align-items:center; gap:6px; margin-bottom:6px;">
                                    <div style="width:14px; height:14px;">${platform.icon}</div>
                                    <span style="color:#8b949e; font-size:0.85em; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHTML(targetName)}</span>
                                </div>
                                ${item.good ? `<p style="font-size:0.85em; color:#b0b8c3; margin:0;">"${escapeHTML(item.good)}"</p>` : ''}
                            </div>
                        </div>
                    `;
                }
                contentContainer.innerHTML += itemHtml;
            });
            contentContainer.innerHTML += `</div>`;
        }

    } catch (e) {
        console.error("Profile load error:", e);
        showToast("Failed to load user profile.", "error");
        document.getElementById('user-profile-modal').remove();
    }
}

/* CHART GENERATOR */
function generateTrustChart(data, color) {
  if (data.length < 2) return '<p style="text-align:center; padding-top:60px; opacity:0.5;">Not enough data for chart</p>';

  const width = 300;
  const height = 100;
  const maxScore = 100;
  
  const startTime = data[0].date;
  const endTime = data[data.length - 1].date;
  const duration = endTime - startTime || 1;

  // Normalize points
  const pointsData = data.map(d => {
    const x = ((d.date - startTime) / duration) * width;
    const y = height - (d.score / maxScore) * height;
    return { x, y, score: d.score, date: d.date };
  });

  const points = pointsData.map(p => `${p.x},${p.y}`).join(' ');

  // Create Area Path (for gradient fill)
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  const startDateStr = new Date(startTime).toLocaleDateString(undefined, {month:'short', year:'2-digit'});
  const endDateStr = new Date(endTime).toLocaleDateString(undefined, {month:'short', year:'2-digit'});
  
  // Generate interactive points
  const pointsHTML = pointsData.map(p => `
    <g class="point-group">
      <line x1="${p.x}" y1="0" x2="${p.x}" y2="${height}" stroke="${color}" stroke-width="1" stroke-dasharray="4" class="point-line" />
      <circle cx="${p.x}" cy="${p.y}" r="10" fill="transparent" style="cursor:pointer" />
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="#050608" stroke-width="2" class="point-dot" />
      <title>Score: ${p.score}\nDate: ${new Date(p.date).toLocaleDateString()}</title>
    </g>
  `).join('');

  return `
    <svg viewBox="0 -10 ${width} ${height + 30}" preserveAspectRatio="none" style="width:100%; overflow: hidden;">
      <style>
        .chart-line {
          fill: none;
          stroke-width: 2.5px;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .chart-area {
          opacity: 0;
          animation: fadeInArea 2s ease-in-out 0.5s forwards;
        }
        .point-dot {
          opacity: 0;
          transition: all 0.2s ease;
        }
        .point-line {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .point-group:hover .point-line {
          opacity: 0.6;
        }
        .point-group:hover .point-dot {
          opacity: 1;
          r: 6;
        }
        .chart-points {
            opacity: 0;
            animation: fadeInArea 2s ease-in-out 1s forwards;
        }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes fadeInArea { to { opacity: 1; } }
      </style>
      <defs>
        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      <line x1="0" y1="0" x2="${width}" y2="0" stroke="#30363d" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="${height/2}" x2="${width}" y2="${height/2}" stroke="#30363d" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="${height}" x2="${width}" y2="${height}" stroke="#30363d" stroke-width="1" />

      <polygon points="${areaPoints}" class="chart-area" fill="url(#chartGradient)" />
      <polyline points="${points}" class="chart-line" stroke="${color}" />
      
      <g class="chart-points">
        ${pointsHTML}
      </g>
      
      <!-- Date Labels -->
      <text x="0" y="${height + 20}" fill="#8b949e" font-size="12">${startDateStr}</text>
      <text x="${width}" y="${height + 20}" fill="#8b949e" font-size="12" text-anchor="end">${endDateStr}</text>
    </svg>
  `;
}

/* ADMIN: TOGGLE USER VERIFICATION */
async function toggleUserVerification(uid, currentStatus, displayName = 'Unknown', photoURL = '') {
    const action = async () => {
      try {
        if (currentStatus) {
            await deleteDoc(doc(db, "verified_users", uid));
        } else {
            await setDoc(doc(db, "verified_users", uid), {
                timestamp: Date.now(),
                grantedBy: auth.currentUser.uid,
                displayName: displayName,
                photoURL: photoURL
            });
        }
        // Refresh details view
        if (window.lastDetailsArgs) {
            populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
        }
        // Refresh dashboard if open
        if (!document.getElementById('admin-dashboard').classList.contains('hidden')) {
            renderAdminDashboard();
        }
      } catch(e) {
        showToast("Action failed: " + e.message, "error");
      }
    };

    if (currentStatus) {
        // Revoking (Deleting) -> Use Timer
        startDeletionTimer(action, "Revoking verification");
    } else {
        // Granting -> Use Confirm
        if (await showConfirm("Grant 'Verified' badge to this user?", "Verify User")) action();
    }
}

/* ADMIN: TOGGLE USER BAN */
async function toggleUserBan(uid, currentStatus, displayName = 'Unknown', photoURL = '', reason = '', skipConfirm = false) {
    const action = async () => {
      try {
        if (currentStatus) {
            await deleteDoc(doc(db, "banned_users", uid));
        } else {
            if (!reason) {
                reason = prompt("Enter reason for ban:", "Violation of Terms");
                if (reason === null) return; // Cancelled
            }

            await setDoc(doc(db, "banned_users", uid), {
                timestamp: Date.now(),
                bannedBy: auth.currentUser.uid,
                displayName: displayName,
                photoURL: photoURL,
                reason: reason
            });
        }
        // Refresh details view
        if (window.lastDetailsArgs) {
            populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
        }
        // Refresh dashboard if open
        if (!document.getElementById('admin-dashboard').classList.contains('hidden')) {
            renderAdminDashboard();
        }
      } catch(e) {
        showToast("Action failed: " + e.message, "error");
      }
    };

    if (currentStatus) {
        // Unbanning (Deleting) -> Use Timer
        startDeletionTimer(action, "Unbanning user");
    } else {
        // Banning -> Use Confirm
        if (skipConfirm || await showConfirm("Ban this user? They will be unable to post.", "Ban User", true)) {
            await action();
        }
    }
}

/* ADMIN: MANUAL BAN */
async function manualBanUser() {
    const uidInput = document.getElementById('admin-ban-uid');
    const nameInput = document.getElementById('admin-ban-name');
    const reasonInput = document.getElementById('admin-ban-reason');
    const reasonSelect = document.getElementById('admin-ban-reason-select');
    
    const uid = uidInput.value.trim();
    const name = nameInput.value.trim() || 'Unknown User';
    let reason = reasonInput.value.trim();
    
    if (reasonSelect && reasonSelect.value !== 'Other') {
        reason = reasonSelect.value;
    }
    if (!reason) reason = 'Violation of Terms';
    
    if (!uid) { showToast("Please enter a User UID.", "error"); return; }
    
    // Confirmation Modal
    const confirmMsg = `Are you sure you want to ban this user?<br><br><strong>UID:</strong> ${uid}<br><strong>Name:</strong> ${name}<br><strong>Reason:</strong> ${reason}`;
    if (!await showConfirm(confirmMsg, "Confirm Manual Ban", true)) return;

    await toggleUserBan(uid, false, name, 'https://via.placeholder.com/40', reason, true);
    uidInput.value = '';
    nameInput.value = '';
    
    if (reasonSelect) {
        reasonSelect.value = 'Violation of Terms';
        reasonInput.style.display = 'none';
        reasonInput.value = 'Violation of Terms';
    } else {
        reasonInput.value = '';
    }
}

/* ADMIN: MANUAL VERIFY */
async function manualVerifyUser() {
    const uidInput = document.getElementById('admin-verify-uid');
    const nameInput = document.getElementById('admin-verify-name');
    
    const uid = uidInput.value.trim();
    const name = nameInput.value.trim() || 'Unknown User';
    
    if (!uid) {
        showToast("Please enter a User UID.", "error");
        return;
    }
    
    await toggleUserVerification(uid, false, name, 'https://via.placeholder.com/40');
    
    // Clear inputs
    uidInput.value = '';
    nameInput.value = '';
}

function initAdminBanControls() {
    const reasonInput = document.getElementById('admin-ban-reason');
    if (!reasonInput || document.getElementById('admin-ban-reason-select')) return;

    const select = document.createElement('select');
    select.id = 'admin-ban-reason-select';
    select.className = 'scam-type-select';
    select.style.marginBottom = '10px';
    
    const options = [
        "Violation of Terms",
        "Spam / Scam Activity",
        "Harassment / Abuse",
        "Fake Proof / False Reporting",
        "Other"
    ];

    options.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt;
        el.innerText = opt;
        select.appendChild(el);
    });

    reasonInput.parentNode.insertBefore(select, reasonInput);
    reasonInput.style.display = 'none';
    reasonInput.value = options[0];

    select.onchange = () => {
        if (select.value === 'Other') {
            reasonInput.style.display = 'block';
            reasonInput.value = '';
            reasonInput.placeholder = "Enter custom reason...";
            reasonInput.focus();
        } else {
            reasonInput.style.display = 'none';
            reasonInput.value = select.value;
        }
    };
}

/* ADMIN: BLACKLIST LOGIC */
async function addBlacklistDomain() {
    if (!auth.currentUser) { showToast("Session expired. Please login.", "error"); return; }

    const input = document.getElementById('admin-blacklist-input');
    let rawDomain = input.value.trim().toLowerCase();
    
    if (!rawDomain) { showToast("Please enter a domain.", "error"); return; }
    
    // Clean domain (remove http://, path, www., etc)
    try {
        if (!/^https?:\/\//i.test(rawDomain)) {
            rawDomain = 'https://' + rawDomain;
        }
        const urlObj = new URL(rawDomain);
        rawDomain = urlObj.hostname;
        if (rawDomain.startsWith('www.')) rawDomain = rawDomain.substring(4);
    } catch (e) { /* Fallback to raw input if parsing fails */ }

    if (!rawDomain.includes('.') || rawDomain.includes(' ')) { showToast("Invalid domain format.", "error"); return; }

    try {
        // Check if exists
        const q = query(collection(db, "blacklist"), where("domain", "==", rawDomain));
        const snap = await getDocs(q);
        if (!snap.empty) { showToast("Domain already blacklisted.", "error"); return; }

        await addDoc(collection(db, "blacklist"), {
            domain: rawDomain,
            addedBy: auth.currentUser.uid,
            timestamp: Date.now()
        });
        
        input.value = '';
        showToast(`Blocked: ${rawDomain}`, "success");
        renderBlacklist();
    } catch (e) {
        if (e.code === 'permission-denied') {
            showToast("Permission denied. Check Firestore Rules.", "error");
        } else {
            showToast("Error adding domain: " + e.message, "error");
        }
    }
}

async function removeBlacklistDomain(id) {
    if (!await showConfirm("Remove this domain from blacklist?", "Confirm Removal")) return;
    try {
        await deleteDoc(doc(db, "blacklist", id));
        showToast("Domain removed.", "success");
        renderBlacklist();
    } catch (e) {
        showToast("Error removing domain: " + e.message, "error");
    }
}

async function renderBlacklist() {
    const container = document.getElementById('admin-blacklist-list');
    if (!container) return;
    
    container.innerHTML = getSkeletonHTML(2);
    
    try {
        const q = query(collection(db, "blacklist"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            container.innerHTML = '<p style="text-align:center; opacity:0.7;">No blacklisted domains.</p>';
            return;
        }
        
        container.innerHTML = '';
        snapshot.forEach(doc => {
            const data = doc.data();
            const card = document.createElement('div');
            card.className = 'mini-card';
            card.style.borderColor = '#ff4d4d';
            card.innerHTML = `
            <div class="card-header" style="justify-content:space-between;">
                <div class="card-user" style="color:#ff4d4d;">${escapeHTML(data.domain)}</div>
                <button onclick="removeBlacklistDomain('${doc.id}')" style="background:none; border:none; color:#8b949e; cursor:pointer;">
                    <svg viewBox="0 0 24 24" style="width:18px; height:18px; fill:currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
            </div>
            <div style="font-size:0.8em; color:#8b949e; margin-top:4px;">Added: ${new Date(data.timestamp).toLocaleDateString()}</div>
            `;
            container.appendChild(card);
            resizeGridItem(card);
        });
        setTimeout(resizeAllGridItems, 100);
    } catch (e) {
        console.error("Blacklist render error:", e);
        if (e.code === 'permission-denied') {
             const projectId = firebaseConfig.projectId;
             container.innerHTML = `
                <div style="text-align:center; color:#ff4d4d; padding:20px; border:1px dashed #ff4d4d; border-radius:8px;">
                    <p><strong>Permission Denied</strong></p>
                    <p style="font-size:0.9em; opacity:0.8;">1. Go to <a href="https://console.firebase.google.com/project/${projectId}/firestore/rules" target="_blank" style="color:#38bdf8; text-decoration:underline;">Firestore Rules</a></p>
                    <p style="font-size:0.9em; opacity:0.8;">2. Add this rule for 'blacklist':</p>
                    <div style="background:#0d1117; padding:10px; margin-top:10px; text-align:left; font-family:monospace; font-size:0.8em; overflow-x:auto; color:#eaeaea; user-select:all;">
                        match /blacklist/{docId} {<br>
                        &nbsp;&nbsp;allow read: if true;<br>
                        &nbsp;&nbsp;allow write: if request.auth.uid == '${ADMIN_UID}';<br>
                        }
                    </div>
                </div>`;
        } else {
            container.innerHTML = `<div style="text-align:center; color:#ff4d4d; padding:20px;"><p>Failed to load blacklist.</p><small style="opacity:0.7">${e.message}</small></div>`;
        }
    }
}

function initAdminBlacklistUI() {
    // Inject Tab Button
    const verifiedBtn = document.getElementById('admin-verified-tab-btn');
    if (verifiedBtn && verifiedBtn.parentNode && !document.getElementById('admin-blacklist-tab-btn')) {
        const btn = document.createElement('button');
        btn.id = 'admin-blacklist-tab-btn';
        btn.className = 'home-tab-btn';
        btn.onclick = () => switchAdminTab('blacklist');
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> Blacklist`;
        verifiedBtn.parentNode.appendChild(btn);
    }

    // Inject Section
    const verifiedSection = document.getElementById('admin-verified-section');
    if (verifiedSection && verifiedSection.parentNode && !document.getElementById('admin-blacklist-section')) {
        const section = document.createElement('div');
        section.id = 'admin-blacklist-section';
        section.className = 'hidden';
        section.innerHTML = `
            <div class="card" style="margin-bottom:20px; border-color:#ff4d4d;">
                <h3 style="margin-top:0; color:#ff4d4d;">Add to Blacklist</h3>
                <div style="display:flex; gap:10px;">
                    <input type="text" id="admin-blacklist-input" placeholder="example.com" style="margin-bottom:0;">
                    <button onclick="addBlacklistDomain()" class="visit-btn" style="width:auto; margin-top:0; background:#ff4d4d; color:white;">Block</button>
                </div>
            </div>
            <div id="admin-blacklist-list" class="report-grid"></div>
        `;
        verifiedSection.parentNode.appendChild(section);
    }
}

function initAdminRecentlyDeletedUI() {
    // Inject Tab Button
    const blacklistBtn = document.getElementById('admin-blacklist-tab-btn');
    if (blacklistBtn && blacklistBtn.parentNode && !document.getElementById('admin-recently-deleted-tab-btn')) {
        const btn = document.createElement('button');
        btn.id = 'admin-recently-deleted-tab-btn';
        btn.className = 'home-tab-btn';
        btn.onclick = () => switchAdminTab('recently_deleted');
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg> Recently Deleted`;
        blacklistBtn.parentNode.appendChild(btn);
    }

    // Inject Section
    const blacklistSection = document.getElementById('admin-blacklist-section');
    if (blacklistSection && blacklistSection.parentNode && !document.getElementById('admin-recently-deleted-section')) {
        const section = document.createElement('div');
        section.id = 'admin-recently-deleted-section';
        section.className = 'hidden';
        section.innerHTML = `
            <div class="card" style="margin-bottom:20px; border-color:#ffaa00;">
                <h3 style="margin-top:0; color:#ffaa00;">Recently Deleted Profiles</h3>
                <p style="font-size:0.9em; color:#8b949e;">Profiles deleted in the last 30 days that can be restored.</p>
            </div>
            <div id="admin-recently-deleted-list" class="report-grid"></div>
            <button onclick="showRecentlyDeleted()" class="visit-btn" style="width:100%; margin-top:20px; background:rgba(255, 170, 0, 0.1); border:1px solid rgba(255, 170, 0, 0.3); color:#ffaa00;">View All Recently Deleted</button>
        `;
        blacklistSection.parentNode.appendChild(section);
    }
}

/* ADMIN: ABUSE REPORTS LOGIC */
async function resolveAbuseReport(reportId, action, targetCollection, targetId, reportedUid) {
    if (!auth.currentUser) return;

    try {
        if (action === 'dismiss') {
            if (!await showConfirm("Dismiss this report? It will be removed.", "Dismiss Report")) return;
            await deleteDoc(doc(db, "abuse_reports", reportId));
            showToast("Report dismissed.", "success");
        } 
        else if (action === 'delete_content') {
            if (!await showConfirm("Delete the reported content? This cannot be undone.", "Delete Content", true)) return;
            // Delete target content
            await deleteDoc(doc(db, targetCollection, targetId));
            // Update abuse report status or delete it
            await updateDoc(doc(db, "abuse_reports", reportId), { status: 'resolved', resolution: 'Content Deleted' });
            showToast("Content deleted.", "success");
        }
        else if (action === 'ban_user') {
            // Ban logic
             if (!await showConfirm("Ban the reported user?", "Ban User", true)) return;
             await toggleUserBan(reportedUid, false, 'Reported User', '', 'Abuse Report Resolution', true);
             await updateDoc(doc(db, "abuse_reports", reportId), { status: 'resolved', resolution: 'User Banned' });
             showToast("User banned.", "success");
        }
        renderAbuseReports();
    } catch (e) {
        console.error("Error resolving abuse report:", e);
        showToast("Action failed: " + e.message, "error");
    }
}

async function renderAbuseReports() {
    const container = document.getElementById('admin-abuse-list');
    if (!container) return;

    container.innerHTML = getSkeletonHTML(2);

    try {
        const q = query(collection(db, "abuse_reports"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            container.innerHTML = '<p style="text-align:center; opacity:0.7;">No abuse reports found.</p>';
            return;
        }

        container.innerHTML = '';
        
        for (const docSnap of snapshot.docs) {
            const data = docSnap.data();
            if (data.status === 'resolved') continue;

            // Fetch target content for context
            let contentPreview = "Loading content...";
            try {
                const targetSnap = await getDoc(doc(db, data.targetCollection, data.targetId));
                if (targetSnap.exists()) {
                    const tData = targetSnap.data();
                    contentPreview = escapeHTML(tData.description || tData.good || tData.bad || tData.url || "No text content");
                } else {
                    contentPreview = "<em style='color:#ff4d4d'>Content already deleted</em>";
                }
            } catch (e) {
                contentPreview = "Error loading content";
            }

            const card = document.createElement('div');
            card.className = 'mini-card';
            card.style.borderColor = '#ffaa00';
            card.innerHTML = `
                <div class="card-header" style="flex-direction:column; align-items:flex-start; gap:5px;">
                    <div style="font-weight:bold; color:#ffaa00;">Reason: ${escapeHTML(data.reason)}</div>
                    <div style="font-size:0.8em; color:#8b949e;">Reported by UID: ${data.reporterUid}</div>
                    <div style="font-size:0.8em; color:#8b949e;">Target UID: ${data.reportedUid}</div>
                </div>
                <div style="background:#0d1117; padding:8px; border-radius:6px; margin:10px 0; font-size:0.9em; color:#eaeaea; border:1px solid #30363d;">
                    <strong>Content Preview:</strong><br>
                    ${contentPreview}
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <button onclick="resolveAbuseReport('${docSnap.id}', 'dismiss')" style="flex:1; background:none; border:1px solid #8b949e; color:#8b949e; padding:6px; border-radius:4px; cursor:pointer;">Dismiss</button>
                    <button onclick="resolveAbuseReport('${docSnap.id}', 'delete_content', '${data.targetCollection}', '${data.targetId}')" style="flex:1; background:none; border:1px solid #ff4d4d; color:#ff4d4d; padding:6px; border-radius:4px; cursor:pointer;">Delete Content</button>
                    <button onclick="resolveAbuseReport('${docSnap.id}', 'ban_user', '${data.targetCollection}', '${data.targetId}', '${data.reportedUid}')" style="flex:1; background:#ff4d4d; border:none; color:white; padding:6px; border-radius:4px; cursor:pointer;">Ban User</button>
                </div>
                <div style="font-size:0.75em; color:#8b949e; margin-top:8px; text-align:right;">${new Date(data.timestamp).toLocaleString()}</div>
            `;
            container.appendChild(card);
            resizeGridItem(card);
        }
        setTimeout(resizeAllGridItems, 100);

    } catch (e) {
        console.error("Error rendering abuse reports:", e);
        container.innerHTML = '<p style="text-align:center; color:#ff4d4d;">Error loading reports.</p>';
    }
}

function initAdminAbuseUI() {
    const parent = document.getElementById('admin-verified-tab-btn')?.parentNode;
    
    if (parent && !document.getElementById('admin-abuse-tab-btn')) {
        const btn = document.createElement('button');
        btn.id = 'admin-abuse-tab-btn';
        btn.className = 'home-tab-btn';
        btn.onclick = () => switchAdminTab('abuse');
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> Abuse Reports`;
        parent.appendChild(btn);
    }

    const sectionParent = document.getElementById('admin-verified-section')?.parentNode;

    if (sectionParent && !document.getElementById('admin-abuse-section')) {
        const section = document.createElement('div');
        section.id = 'admin-abuse-section';
        section.className = 'hidden';
        section.innerHTML = `
            <div class="card" style="margin-bottom:20px; border-color:#ffaa00;">
                <h3 style="margin-top:0; color:#ffaa00;">Abuse Reports Queue</h3>
                <p style="font-size:0.9em; color:#8b949e;">Review and resolve user reports regarding spam or harassment.</p>
            </div>
            <div id="admin-abuse-list" class="report-grid"></div>
        `;
        sectionParent.appendChild(section);
    }
}

/* DELETION TIMER LOGIC */
let pendingDeletion = null;

function startDeletionTimer(callback, message = "Deleting item") {
    if (pendingDeletion) cancelDeletion();

    const toast = document.getElementById('undo-toast');
    const msgEl = document.getElementById('undo-message');
    const progress = document.getElementById('undo-progress');
    
    if (!toast) {
        showConfirm("Are you sure?", "Confirm Action", true).then(yes => {
            if(yes) callback();
        });
        return;
    }

    let timeLeft = 4; // 4 seconds
    
    const updateMsg = () => {
        msgEl.innerHTML = `${message} in <span style="font-weight:bold; color:#ff4d4d;">${timeLeft}s</span>`;
    };
    updateMsg();

    toast.classList.remove('hidden');
    
    // Reset and Start Animation
    progress.style.transition = 'none';
    progress.style.width = '100%';
    void progress.offsetWidth; // Force reflow
    progress.style.transition = `width ${timeLeft}s linear`;
    progress.style.width = '0%';

    const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) updateMsg();
    }, 1000);

    const timeout = setTimeout(() => {
        clearInterval(interval);
        toast.classList.add('hidden');
        pendingDeletion = null;
        callback();
    }, timeLeft * 1000);

    pendingDeletion = { timeout, interval };
}

function cancelDeletion() {
    if (pendingDeletion) {
        clearTimeout(pendingDeletion.timeout);
        clearInterval(pendingDeletion.interval);
        pendingDeletion = null;
    }
    const toast = document.getElementById('undo-toast');
    if (toast) toast.classList.add('hidden');
    
    const progress = document.getElementById('undo-progress');
    if(progress) {
        progress.style.transition = 'none';
        progress.style.width = '100%';
    }
}

/* ADMIN: RENDER DASHBOARD */
async function renderAdminDashboard() {
    const container = document.getElementById('admin-user-list');
    const banContainer = document.getElementById('admin-banned-list');
    if (!container || !banContainer) return;

    initAdminBanControls();
    initAdminBlacklistUI();
    initAdminAbuseUI();
    initAdminRecentlyDeletedUI();
    
    container.innerHTML = getSkeletonHTML(3);
    banContainer.innerHTML = getSkeletonHTML(3);
    
    // 1. Render Verified Users
    const q = query(collection(db, "verified_users"), orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
        container.innerHTML = '<p style="text-align:center; opacity:0.7;">No verified users found.</p>';
    } else {
        container.innerHTML = '';
    }
    snapshot.forEach(doc => {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'mini-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${data.photoURL || 'https://via.placeholder.com/40'}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
                <div class="card-user" style="color:#ffd700; word-break: break-word;">${escapeHTML(data.displayName || 'Unknown User')}</div>
            </div>
            <div style="font-size:0.9em; color:#8b949e; margin-top:5px;">
                <div style="word-break: break-all;">UID: <span style="font-family:monospace;">${doc.id}</span>
                    <button onclick="copyToClipboard('${doc.id}')" style="background:none; border:none; cursor:pointer; padding:0 4px; color:#8b5cf6; vertical-align:middle;" title="Copy UID">
                        <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    </button>
                </div>
                <div>Verified: ${new Date(data.timestamp).toLocaleDateString()}</div>
            </div>
            <button class="delete-btn" onclick="toggleUserVerification('${doc.id}', true)">Revoke Verification</button>
        `;
        container.appendChild(card);
        const img = card.querySelector('img');
        if (img) {
            if (img.complete) resizeGridItem(card);
            else img.onload = () => resizeGridItem(card);
        }
        resizeGridItem(card);
    });

    // 2. Render Banned Users
    const qBan = query(collection(db, "banned_users"), orderBy("timestamp", "desc"));
    const snapBan = await getDocs(qBan);

    if (snapBan.empty) {
        banContainer.innerHTML = '<p style="text-align:center; opacity:0.7;">No banned users found.</p>';
    } else {
        banContainer.innerHTML = '';
    }
    snapBan.forEach(doc => {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'mini-card';
        card.style.borderColor = '#ff4d4d';
        card.innerHTML = `
            <div class="card-header">
                <img src="${data.photoURL || 'https://via.placeholder.com/40'}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
                <div class="card-user" style="word-break: break-word;">${escapeHTML(data.displayName || 'Unknown User')}</div>
            </div>
            <div style="font-size:0.9em; color:#ff4d4d; margin-top:5px;">BANNED: ${new Date(data.timestamp).toLocaleDateString()}<br>Reason: ${escapeHTML(data.reason || 'N/A')}</div>
            <button class="visit-btn" onclick="toggleUserBan('${doc.id}', true)" style="margin-top:10px;">Unban User</button>
        `;
        banContainer.appendChild(card);
        const img = card.querySelector('img');
        if (img) {
            if (img.complete) resizeGridItem(card);
            else img.onload = () => resizeGridItem(card);
        }
        resizeGridItem(card);
    });
    
    filterAdminList(); // Re-apply filter if search text exists
    renderBlacklist();
    renderAbuseReports();
    setTimeout(resizeAllGridItems, 100);
}

/* AI SUMMARY GENERATOR (Client-Side NLP) */
function generateAISummary(items, verifiedUsers = new Set()) {
  // 1. Data Selection: Analyze last 100 interactions for relevance
  const analysisWindow = items.slice(-100);
  const ratings = analysisWindow.filter(i => i.type === 'rating');
  const reports = analysisWindow.filter(i => i.type === 'report');

  // Helper for localized strings
  const t = (key, params = {}) => {
      let str = translations[currentLanguage][key] || translations['en'][key] || '';
      Object.keys(params).forEach(k => str = str.replace(`{${k}}`, params[k]));
      return str;
  };
  
  if (ratings.length === 0 && reports.length === 0) return "Insufficient data for advanced AI analysis.";

  // --- ASPECT ANALYSIS ENGINE ---
  // Expanded Knowledge Base (Multilingual: EN, FR, TN/Derja)
  const aspects = {
      shipping: { 
          score: 0, mentions: 0, 
          keywords: [
              'shipping', 'delivery', 'arrived', 'package', 'time', 'fast', 'slow', 'late', 'tracking', 'ship', 'received', 'wait', 'lost', 'customs',
              'livraison', 'recu', 'rapide', 'lent', 'retard', 'colis', 'envoi', 'expedition', 'jamais', 'attendre', 'perdu', 'douane', 'suivi',
              'wsol', 'wsel', 'bta', 'yebta', 'sri3', 'ta3til', 'livreur', 'jeb', 'ywasel', 'twasil', 'estanna', 'jeni', 'dhaya3', 'diwana', 'masrou9'
          ] 
      },
      quality: { 
          score: 0, mentions: 0, 
          keywords: [
              'quality', 'product', 'item', 'material', 'authentic', 'fake', 'condition', 'broken', 'damaged', 'looks', 'real', 'good', 'bad', 'working', 'size', 'color', 'plastic',
              'qualite', 'produit', 'article', 'matiere', 'authentique', 'faux', 'contrefacon', 'casse', 'abime', 'mauvais', 'bon', 'marche', 'panne', 'taille', 'couleur', 'plastique',
              'sel3a', 'behia', 'khayba', 'mouch', 'madhroub', 'original', 's7i7', '9mech', 'mgarba3', 'falsou', 'dorigine', 'behi', '7ala', 'tayara', 'mriguel', '3al 7it', '9yes', 'loun', 'sghir', 'kbir', '7did'
          ] 
      },
      service: { 
          score: 0, mentions: 0, 
          keywords: [
              'service', 'communication', 'seller', 'reply', 'response', 'rude', 'helpful', 'friendly', 'ignore', 'support', 'scam', 'liar', 'blocked', 'respect', 'professional',
              'service', 'vendeur', 'reponse', 'repond', 'aimable', 'poli', 'arnaque', 'voleur', 'client', 'support', 'bloque', 'menteur', 'impoli', 'respect',
              'service', 'yjaweb', 'message', 'tel', 'haz', '9dar', 'thaya9', 'galleb', 'sara9', 'kadeb', 'yghoch', 'ma yrod', 'block', '9lebni', 'sra9ni', '7ram', 'msattek', 'i7tiram', 'm3allem', 'pro'
          ] 
      },
      price: { 
          score: 0, mentions: 0, 
          keywords: [
              'price', 'cost', 'value', 'worth', 'cheap', 'expensive', 'deal', 'refund', 'money', 'paid', 'scam', 'steal',
              'prix', 'cout', 'cher', 'remboursement', 'argent', 'valeur', 'paye', 'arnaque', 'vol',
              'soum', 'ghali', 'rkhis', 'flous', 'rajja3', 'ha9', 'mleyen', 'dinar', 'dafa3t', '5allast', '9alba', 'sra9'
          ] 
      }
  };
  
  const aspectNames = {
      en: { shipping: 'shipping', quality: 'quality', service: 'service', price: 'price' },
      fr: { shipping: 'la livraison', quality: 'la qualité', service: 'le service', price: 'le prix' },
      ar: { shipping: 'الشحن', quality: 'الجودة', service: 'الخدمة', price: 'السعر' },
      tn: { shipping: 'التوصيل', quality: 'السلعة', service: 'السرفيس', price: 'السوم' }
  };

  // Helper: Normalize text (remove accents, lowercase)
  const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

  const analyzeText = (text, sentimentMultiplier) => {
      if (!text) return;
      const normText = normalize(text);
      Object.keys(aspects).forEach(key => {
          if (aspects[key].keywords.some(kw => normText.includes(kw))) {
              aspects[key].score += sentimentMultiplier;
              aspects[key].mentions++;
          }
      });
  };

  let totalStars = 0;
  ratings.forEach(r => {
      totalStars += parseInt(r.rating);
      analyzeText(r.good, 1);
      analyzeText(r.bad, -1.5);
  });

  // Analyze Reports (Deep Content Understanding)
  reports.forEach(r => {
      // Reports are inherently negative context
      analyzeText(r.description, -2.0); 
      analyzeText(r.scamType, -2.0);
  });

  const avgStars = ratings.length ? (totalStars / ratings.length) : 0;
  
  // Filter and Sort Aspects
  const significantAspects = Object.entries(aspects).filter(([k, v]) => v.mentions > 0);
  significantAspects.sort((a, b) => Math.abs(b[1].score) - Math.abs(a[1].score));

  // Check for Verified Sources
  const verifiedReports = reports.filter(r => verifiedUsers.has(r.uid));
  const verifiedRatings = ratings.filter(r => verifiedUsers.has(r.uid));
  let verifiedNote = "";

  if (verifiedReports.length > 0) {
      verifiedNote = ` <span style="color:#ff4d4d; font-weight:bold;">${t('verified-alert')}</span>`;
  } else if (verifiedRatings.length > 0 && avgStars >= 4.0) {
      verifiedNote = ` <span style="color:#4dff88; font-weight:bold;">${t('verified-endorsement')}</span>`;
  }


  // 2. Critical Risk Analysis (Reports)
  if (reports.length > 0) {
      const recentReports = reports.filter(r => (Date.now() - r.timestamp) < (30 * 24 * 60 * 60 * 1000));
      
      // Smart Override: If the profile has a strong positive history that outweighs reports
      // (Avg > 3.7 stars AND Ratings count is at least 3x Report count)
      const isResilient = avgStars >= 3.7 && ratings.length >= (reports.length * 3);

      if (!isResilient) {
          let msg = "";
          if (recentReports.length > 0) {
              msg = translations[currentLanguage]['critical-threat'] || `<strong>🚨 CRITICAL THREAT DETECTED:</strong> Advanced analysis identified a high-velocity scam pattern (${recentReports.length} reports in 30 days). The profile exhibits behavior consistent with fraudulent operations. <strong>Do not engage.</strong>`;
          } else {
              msg = translations[currentLanguage]['risk-advisory'] || `<strong>⚠ Risk Advisory:</strong> Historical analysis found ${reports.length} confirmed scam reports. Although recent activity is lower, the account has a compromised trust history. Proceed with extreme caution.`;
          }

          // If we have ratings data, append the CONS only (since it's high risk)
          if (ratings.length > 0) {
              const negatives = significantAspects.filter(([k, v]) => v.score < 0);
              if (negatives.length > 0) {
                  const aspectName = aspectNames[currentLanguage][negatives[0][0]] || negatives[0][0];
                  msg += ` ` + t('ai-minor-issues', { 0: aspectName });
              }
          }
          return msg + verifiedNote;
      }
  }

  // 3. Advanced Sentiment & Trend Analysis
  
  // Trend Calculation (Linear Regression)
  const trendItems = [...ratings, ...reports].sort((a, b) => a.timestamp - b.timestamp);
  let trendSlope = 0;
  let recentAvg = 0;
  let hasTrend = false;

  if (trendItems.length >= 3) {
      const scores = trendItems.map(i => i.type === 'report' ? 1 : (parseInt(i.rating) || 3));
      
      // Linear Regression (Least Squares)
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      const n = scores.length;
      
      scores.forEach((y, x) => {
          sumX += x;
          sumY += y;
          sumXY += x * y;
          sumX2 += x * x;
      });
      
      const numerator = (n * sumXY) - (sumX * sumY);
      const denominator = (n * sumX2) - (sumX * sumX);
      
      if (denominator !== 0) {
          trendSlope = numerator / denominator;
          hasTrend = true;
      }

      // Calculate Recent Average (Last 3 items or 30%)
      const recentCount = Math.max(3, Math.floor(n * 0.3));
      const recentScores = scores.slice(-recentCount);
      recentAvg = recentScores.reduce((a, b) => a + b, 0) / recentScores.length;
  }

  let summary = "";

  // A. Reputation Overview with Trend
  const scoreStr = avgStars.toFixed(1);
  if (avgStars >= 4.8) summary += t('ai-elite', { score: scoreStr }) + ' ';
  else if (avgStars >= 4.0) summary += t('ai-trusted', { score: scoreStr }) + ' ';
  else if (avgStars >= 3.0) summary += t('ai-mixed', { score: scoreStr }) + ' ';
  else if (avgStars >= 2.0) summary += t('ai-poor', { score: scoreStr }) + ' ';
  else summary += t('ai-high-risk', { score: scoreStr }) + ' ';

  // B. Smart Pros/Cons Logic
  if (significantAspects.length > 0) {
      const getAspectName = (key) => aspectNames[currentLanguage][key] || key;
      
      // HIGH RISK (Scam Rate High / Low Stars) -> Focus on Cons, suppress Pros
      if (avgStars < 3.0) {
          const negatives = significantAspects.filter(([k, v]) => v.score < 0);
          if (negatives.length > 0) {
              if (negatives.length > 1) {
                  summary += t('ai-flagged-failures-2', { 0: getAspectName(negatives[0][0]), 1: getAspectName(negatives[1][0]) });
              } else {
                  summary += t('ai-flagged-failures', { 0: getAspectName(negatives[0][0]) });
              }
              summary += ` ` + t('ai-positive-negligible');
          } else {
              summary += t('ai-complaints-generic');
          }
      }
      // TRUSTED (High Stars) -> Focus on Pros, only mention repeated Cons
      else if (avgStars >= 4.0) {
          const positives = significantAspects.filter(([k, v]) => v.score > 0);
          const negatives = significantAspects.filter(([k, v]) => v.score < 0);
          
          if (positives.length > 0) {
              if (positives.length > 1) {
                  summary += t('ai-praise-2', { 0: getAspectName(positives[0][0]), 1: getAspectName(positives[1][0]) });
              } else {
                  summary += t('ai-praise', { 0: getAspectName(positives[0][0]) });
              }
              summary += ` `;
          }
          
          // Only mention cons if they are significant (repeated)
          // Threshold: score <= -2 (meaning at least 2 bad reviews or 1 very bad weighted)
          const seriousNegatives = negatives.filter(([k, v]) => v.score <= -2);
          if (seriousNegatives.length > 0) {
              summary += t('ai-minor-issues', { 0: getAspectName(seriousNegatives[0][0]) });
          } else {
              summary += t('ai-no-issues');
          }
      }
      // MIXED/BALANCED (3.0 - 3.9) -> Show both if close
      else {
          const topPositive = significantAspects.find(([k, v]) => v.score > 0);
          const topNegative = significantAspects.find(([k, v]) => v.score < 0);
          
          if (topPositive && topNegative) {
              summary += t('ai-mixed-good-bad', { 0: getAspectName(topPositive[0]), 1: getAspectName(topNegative[0]) });
          } else if (topPositive) {
              summary += t('ai-mixed-good', { 0: getAspectName(topPositive[0]) });
          } else if (topNegative) {
              summary += t('ai-mixed-bad', { 0: getAspectName(topNegative[0]) });
          }
      }
  } else {
      summary += translations[currentLanguage]['inconclusive-analysis'] || "Detailed text analysis was inconclusive due to brief reviews.";
  }

  // C. Trend Insight
  if (hasTrend) {
      if (trendSlope > 0.05) {
          summary += ` <span style="color:#4dff88">${t('ai-trend-up')}</span>`;
      } else if (trendSlope < -0.05) {
          // Context Aware: Only flag "Trending Down" if recent performance is actually poor (< 4.0)
          // This prevents flagging a drop from 5.0 to 4.5 as a "negative trend"
          if (recentAvg < 4.0) {
              summary += ` <span style="color:#ff4d4d">${t('ai-trend-down')}</span>`;
          }
      }
  }

  // D. Historical Report Note (if critical warning was skipped)
  if (reports.length > 0) {
      summary += ` <span style="color:#ffaa00; display:block; margin-top:8px; font-size:0.9em;">${t('ai-historical', { count: reports.length })}</span>`;
  }

  return summary + verifiedNote;
}

function generateHistoryLogHTML(items) {
    let html = '';
    // Create a copy and reverse to show newest first
    [...items].reverse().forEach(item => {
        const date = new Date(item.timestamp).toLocaleDateString();
        let action = '';
        let impact = '';
        let color = '';
        
        if (item.type === 'report') {
            action = 'Scam Report';
            impact = item.dynamicImpact || 'Critical (-15)';
            color = '#ff4d4d';
        } else {
            const stars = parseInt(item.rating);
            action = `${stars}-Star Rating`;
            impact = item.dynamicImpact || (stars >= 3 ? 'Positive' : 'Negative');
            
            if (stars >= 4) color = '#4dff88';
            else if (stars === 3) color = '#8b949e';
            else if (stars === 2) color = '#ffaa00';
            else color = '#ff4d4d';
        }
        
        html += `
            <div class="history-item">
                <span class="history-date">${date}</span>
                <span>${action}</span>
                <span style="color:${color}">${impact}</span>
            </div>
        `;
    });
    return html;
}

function toggleHistoryLog() {
  const log = document.getElementById('history-log-container');
  const btn = document.getElementById('expand-history-btn');
  if (log) {
    log.classList.toggle('hidden');
    if (btn) {
        btn.innerText = log.classList.contains('hidden') ? (translations[currentLanguage]['view-history'] || 'View Full History') : (translations[currentLanguage]['hide-history'] || 'Hide History');
    }
  }
}

/* ==========================================
   ACTIVITY & RATINGS LOGIC
   ========================================== */

async function submitRating() {
  const linkInput = document.getElementById('rate-link');
  let link = linkInput.value.trim();
  const rating = document.getElementById('rating-input').value;
  
  // Prepend Country Code if visible
  let countryIso = null;
  const select = document.getElementById('rate-country-select');
  if (select && !select.classList.contains('hidden')) {
      const code = select.value;
      const cObj = countryCodes.find(c => c.code === code);
      if (cObj) countryIso = cObj.iso;
      link = select.value + link;
  }

  const good = document.getElementById('rate-good').value.trim();
  const bad = document.getElementById('rate-bad').value.trim();
  const user = auth.currentUser;
  const btn = document.querySelector('#form-rate .submit-btn');

  // Check Ban Status (Server-Side Check)
  const banSnap = await getDoc(doc(db, "banned_users", user.uid));
  if (banSnap.exists()) {
      const reason = banSnap.data().reason || "Violation of Terms";
      throw new Error(`You are banned from posting. Reason: ${reason}`);
  }

  if (!link || rating == 0) {
    const missing = [];
    if (!link) missing.push(linkInput);
    if (rating == 0) missing.push(document.querySelector('.rating-container'));
    
    triggerShake(missing);
    showToast("Please provide a link and a star rating.", "error");
    return;
  }

  // UI Loading State
  const originalText = btn.innerText;
  btn.classList.add('loading');
  btn.disabled = true;

  try {
    // 0. AI Content Guard Check
    const goodCheck = AI_ContentGuard.analyze(good);
    const badCheck = AI_ContentGuard.analyze(bad);
    
    if (!goodCheck.safe) throw new Error(`Security Alert (Pros): ${goodCheck.reason}`);
    if (!badCheck.safe) throw new Error(`Security Alert (Cons): ${badCheck.reason}`);

    // 1. Verify Link
    link = await verifyUrl(link);

    // Retrieve Metadata
    let enrichedData = {};
    if (linkInput.dataset.enrichedData) {
        try {
            enrichedData = JSON.parse(linkInput.dataset.enrichedData);
        } catch (e) {
            console.warn("Error parsing metadata", e);
        }
    }

    const review = {
      url: link,
      rating: rating,
      good: good,
      bad: bad,
      country: countryIso,
      timestamp: Date.now(),
      uid: user.uid,
      realName: enrichedData.realName || null,
      platformImage: enrichedData.platformImage || null,
      metaTitle: enrichedData.metaTitle || null,
      metaDescription: enrichedData.metaDescription || null,
      userEmail: user.email,
      reporterName: user.displayName || 'Anonymous',
      reporterPhoto: user.photoURL || 'https://via.placeholder.com/150'
    };

    await addDoc(collection(db, "ratings"), review);
    showToast("Rating submitted successfully!", "success");
    document.getElementById('form-rate').reset();
    setRating(0); // Reset stars
    showPage('login', 'activity');
  } catch (e) {
    console.error("Submission error: ", e);
    showToast(e.message || "Error submitting rating.", "error");
  } finally {
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.innerText = originalText;
  }
}

/* EDIT REPORT LOGIC */
async function editReport(id) {
    if (!auth.currentUser) return;
    
    // Fetch current data to ensure validity
    try {
        const docRef = doc(db, "reports", id);
        const snap = await getDoc(docRef);
        
        if (!snap.exists()) {
            showToast("Report not found.", "error");
            return;
        }
        
        const data = snap.data();
        
        // Authorization Check
        if (data.uid !== auth.currentUser.uid) {
            showToast("You can only edit your own reports.", "error");
            return;
        }
        
        // Time Limit Check (24 hours)
        if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) {
            showToast("Reports can only be edited within 24 hours.", "error");
            return;
        }
        
        showEditModal(id, data);
        
    } catch (e) {
        console.error("Edit fetch error:", e);
        showToast("Error loading report for editing.", "error");
    }
}

function showEditModal(id, data) {
    const existing = document.getElementById('edit-report-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'edit-report-modal';
    overlay.className = 'custom-modal-overlay active';
    
    const typeOptions = [
        {v: 'not_delivered', l: 'Paid but item never arrived'},
        {v: 'fake_item', l: 'Item received was fake / Low quality'},
        {v: 'wrong_item', l: 'Received completely different item'},
        {v: 'phishing', l: 'Phishing / Suspicious Link'},
        {v: 'other', l: 'Other'}
    ];
    
    const optionsHtml = typeOptions.map(o => 
        `<option value="${o.v}" ${data.scamType === o.v ? 'selected' : ''}>${o.l}</option>`
    ).join('');

    overlay.innerHTML = `
        <div class="custom-modal" style="max-width:500px; width:90%;">
            <div class="modal-title">Edit Report</div>
            <div class="modal-message" style="text-align:left;">
                <label style="display:block; margin-bottom:5px; color:#8b949e; font-size:0.9em;">Display Name</label>
                <input type="text" id="edit-name" value="${escapeHTML(data.displayName)}" style="width:100%; margin-bottom:15px; padding:10px; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px;">
                
                <label style="display:block; margin-bottom:5px; color:#8b949e; font-size:0.9em;">Scam Type</label>
                <select id="edit-type" style="width:100%; margin-bottom:15px; padding:10px; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px;">
                    ${optionsHtml}
                </select>

                <label style="display:block; margin-bottom:5px; color:#8b949e; font-size:0.9em;">Description</label>
                <textarea id="edit-desc" style="width:100%; height:120px; padding:10px; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px; resize:vertical;">${escapeHTML(data.description)}</textarea>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="document.getElementById('edit-report-modal').remove()">Cancel</button>
                <button class="modal-btn btn-confirm" onclick="saveReportEdit('${id}')">Save Changes</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

async function saveReportEdit(id) {
    const name = document.getElementById('edit-name').value.trim();
    const type = document.getElementById('edit-type').value;
    const desc = document.getElementById('edit-desc').value.trim();
    
    if (!name || !desc) {
        showToast("Fields cannot be empty.", "error");
        return;
    }
    
    // AI Content Guard
    const safetyCheck = AI_ContentGuard.analyze(desc);
    if (!safetyCheck.safe) {
        showToast(safetyCheck.reason, "error");
        return;
    }

    const btn = document.querySelector('#edit-report-modal .btn-confirm');
    const originalText = btn.innerText;
    btn.innerText = "Saving...";
    btn.disabled = true;

    try {
        await updateDoc(doc(db, "reports", id), {
            displayName: name,
            scamType: type,
            description: desc,
            lastEdited: Date.now()
        });
        
        showToast("Report updated successfully.", "success");
        document.getElementById('edit-report-modal').remove();
        
        // Refresh Views
        if (!document.getElementById('user-activity-section').classList.contains('hidden')) renderActivity();
        if (!document.getElementById('details-view').classList.contains('hidden') && window.lastDetailsArgs) {
             populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
        }
        if (!document.getElementById('home').classList.contains('hidden')) renderReports();

    } catch(e) {
        console.error("Update failed:", e);
        showToast("Failed to update report.", "error");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

/* REPORT ABUSE LOGIC */
function reportAbuse(docId, type, reportedUid) {
    if (!auth.currentUser) {
        showToast(translations[currentLanguage]['login-to-report-content'] || "Please login to report content.", "error");
        return;
    }
    
    const existing = document.getElementById('report-abuse-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'report-abuse-modal';
    overlay.className = 'custom-modal-overlay active';
    
    overlay.innerHTML = `
        <div class="custom-modal" style="max-width:400px; width:90%;">
            <div class="modal-title">Report Content</div>
            <div class="modal-message" style="text-align:left;">
                <p style="color:#8b949e; font-size:0.9em; margin-bottom:15px;">Why are you reporting this?</p>
                <select id="report-reason" style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px; margin-bottom:15px;">
                    <option value="Spam">Spam</option>
                    <option value="Harassment">Harassment / Hate Speech</option>
                    <option value="False Information">False Information</option>
                    <option value="Inappropriate Content">Inappropriate Content</option>
                    <option value="Other">Other</option>
                </select>
                <textarea id="report-details" placeholder="Additional details (optional)..." style="width:100%; height:80px; padding:10px; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px; resize:vertical;"></textarea>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="document.getElementById('report-abuse-modal').remove()">Cancel</button>
                <button class="modal-btn btn-confirm danger" onclick="submitAbuseReport('${docId}', '${type}', '${reportedUid}')">Report</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

async function submitAbuseReport(docId, type, reportedUid) {
    const reasonSelect = document.getElementById('report-reason');
    const detailsInput = document.getElementById('report-details');
    
    const reason = reasonSelect.value;
    const details = detailsInput.value.trim();
    const fullReason = details ? `${reason}: ${details}` : reason;

    const btn = document.querySelector('#report-abuse-modal .btn-confirm');
    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
        await addDoc(collection(db, "abuse_reports"), {
            targetId: docId,
            targetCollection: type + 's', // 'reports' or 'ratings'
            reportedUid: reportedUid,
            reporterUid: auth.currentUser.uid,
            reason: fullReason,
            timestamp: Date.now(),
            status: 'pending'
        });
        showToast("Report submitted. Thank you.", "success");
        document.getElementById('report-abuse-modal').remove();
    } catch (e) {
        console.error("Error reporting abuse:", e);
        showToast("Failed to submit report.", "error");
        btn.innerText = "Report";
        btn.disabled = false;
    }
}

async function renderActivity() {
  const reportsContainer = document.getElementById('activity-reports');
  const ratingsContainer = document.getElementById('activity-ratings');
  const user = auth.currentUser;

  if (!user) return;

  // Show Skeletons while loading
  reportsContainer.innerHTML = getSkeletonHTML(2);
  ratingsContainer.innerHTML = getSkeletonHTML(2);

  try {
    // Fetch User Reports
    // Removed orderBy from query to avoid Firestore Index requirement. Sorting client-side instead.
    const qReports = query(collection(db, "reports"), where("uid", "==", user.uid));
    const reportsSnap = await getDocs(qReports);
    const reports = [];
    reportsSnap.forEach((doc) => {
      const data = doc.data();
      if (data.displayName) reports.push({ id: doc.id, ...data });
    });
    // Sort by timestamp descending (newest first)
    reports.sort((a, b) => b.timestamp - a.timestamp);

    // Update Reports Tab Count
    const reportsTab = document.getElementById('activity-reports-tab-btn');
    if (reportsTab) {
      const span = reportsTab.querySelector('span');
      if (span) span.innerText = `My Reports (${reports.length})`;
    }

    // Render Reports
    reportsContainer.innerHTML = reports.length ? '' : '<p style="opacity:0.6">No reports yet.</p>';
    reports.forEach((r, index) => {
      const platform = getPlatformInfo(r.url);
      const originalIcon = platform.icon;
      if (r.platformImage) {
          platform.icon = `
            <img src="${r.platformImage}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block;" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${originalIcon}</div>
          `;
      }
      const displayTitle = escapeHTML(r.realName || r.displayName);

      const card = document.createElement('div');
      card.className = 'mini-card';
      card.style.cursor = 'pointer';
      
      // Click Handler
      card.onclick = (e) => {
          if (e.target.closest('button')) return;
          window.lastClickedGridItem = card;
          window.lastGridScrollY = window.scrollY;
          openDetails(r.url, 'reports', r.id);
      };
      
      // Activity Link Preview
      if (r.metaTitle && (r.platformImage || r.metaDescription)) {
          card.style.padding = '0';
          card.style.overflow = 'hidden';
          card.innerHTML = `
            ${r.platformImage ? `<div style="width:100%; height:120px; overflow:hidden; background:#0d1117; border-bottom:1px solid #30363d;"><img src="${r.platformImage}" style="width:100%; height:100%; object-fit:cover;"></div>` : ''}
            <div style="padding:12px;">
                <div style="font-weight:bold; font-size:1em; margin-bottom:4px; color:#f0f6fc;">${escapeHTML(r.metaTitle)}</div>
                <div style="font-size:0.85em; color:#8b949e; margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${escapeHTML(r.metaDescription || r.url)}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:6px; font-size:0.75em; color:#8b949e;">
                        <div style="width:16px; height:16px;">${platform.icon}</div>
                        <span>${platform.name}</span>
                    </div>
                    <button class="delete-btn" onclick="event.stopPropagation(); deleteActivityItem('reports', '${r.id}')" style="margin:0; padding:4px 8px; font-size:0.75em; width:auto;">Delete</button>
                </div>
            </div>
          `;
      } else {
          card.innerHTML = `
            <div class="card-header">
              <div class="platform-icon" style="background:${platform.color}">${platform.icon}</div>
              <div class="card-user" style="word-break: break-word;">${displayTitle}</div>
            </div>
            <small style="opacity:0.7; word-break:break-all;">${r.url}</small>
            ${r.lastEdited ? `<div style="font-size:0.75em; color:#8b949e; margin-top:2px; font-style:italic;">Edited: ${new Date(r.lastEdited).toLocaleDateString()}</div>` : ''}
            ${r.image ? `<img src="${r.image}" style="width:100%; border-radius:6px; margin-top:10px; object-fit:cover;">` : ''}
            <div style="display:flex; gap:10px; margin-top:auto;">
                ${(Date.now() - r.timestamp) < 86400000 ? `<button class="visit-btn" onclick="event.stopPropagation(); editReport('${r.id}')" style="margin:0; padding:6px 12px; font-size:0.8em; width:auto; background:none; border:1px solid #38bdf8; color:#38bdf8;">Edit</button>` : ''}
                <button class="delete-btn" onclick="event.stopPropagation(); deleteActivityItem('reports', '${r.id}')" style="margin:0; padding:6px 12px; font-size:0.8em; width:auto;">Delete</button>
            </div>
          `;
      }
      
      reportsContainer.appendChild(card);
      
      const img = card.querySelector('img');
      if (img) {
          if (img.complete) resizeGridItem(card);
          else img.onload = () => resizeGridItem(card);
      }
      resizeGridItem(card);
    });

    // Fetch User Ratings
    const qRatings = query(collection(db, "ratings"), where("uid", "==", user.uid));
    const ratingsSnap = await getDocs(qRatings);
    const ratings = [];
    ratingsSnap.forEach((doc) => {
      const data = doc.data();
      if (data.rating) ratings.push({ id: doc.id, ...data });
    });
    // Sort by timestamp descending
    ratings.sort((a, b) => b.timestamp - a.timestamp);

    // Update Ratings Tab Count
    const ratingsTab = document.getElementById('activity-ratings-tab-btn');
    if (ratingsTab) {
      const span = ratingsTab.querySelector('span');
      if (span) span.innerText = `My Ratings (${ratings.length})`;
    }

    // Render Ratings
    ratingsContainer.innerHTML = ratings.length ? '' : '<p style="opacity:0.6">No ratings yet.</p>';
    ratings.forEach((r, index) => {
      const platform = getPlatformInfo(r.url);
      const originalIcon = platform.icon;
      if (r.platformImage) {
          platform.icon = `
            <img src="${r.platformImage}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block;" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${originalIcon}</div>
          `;
      }
      const username = extractUsername(r.url);
      const displayTitle = escapeHTML(r.realName || username);

      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      const card = document.createElement('div');
      card.className = 'mini-card';
      card.style.cursor = 'pointer';

      // Click Handler
      card.onclick = (e) => {
          if (e.target.closest('button')) return;
          window.lastClickedGridItem = card;
          window.lastGridScrollY = window.scrollY;
          openDetails(r.url, 'ratings', r.id);
      };
      
      // Activity Link Preview
      if (r.metaTitle && (r.platformImage || r.metaDescription)) {
          card.style.padding = '0';
          card.style.overflow = 'hidden';
          card.innerHTML = `
            ${r.platformImage ? `<div style="width:100%; height:120px; overflow:hidden; background:#0d1117; border-bottom:1px solid #30363d;"><img src="${r.platformImage}" style="width:100%; height:100%; object-fit:cover;"></div>` : ''}
            <div style="padding:12px;">
                <div style="font-weight:bold; font-size:1em; margin-bottom:4px; color:#f0f6fc;">${escapeHTML(r.metaTitle)}</div>
                <div style="color:#ffaa00; font-size:1.1em; margin-bottom:6px;">${stars}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:6px; font-size:0.75em; color:#8b949e;">
                        <div style="width:16px; height:16px;">${platform.icon}</div>
                        <span>${platform.name}</span>
                    </div>
                    <button class="delete-btn" onclick="event.stopPropagation(); deleteActivityItem('ratings', '${r.id}')" style="margin:0; padding:4px 8px; font-size:0.75em; width:auto;">Delete</button>
                </div>
            </div>
          `;
      } else {
          card.innerHTML = `
            <div class="card-header">
              <div class="platform-icon" style="background:${platform.color}">${platform.icon}</div>
              <div class="card-user" style="word-break: break-word;">${displayTitle}</div>
            </div>
            <div style="color:#ffaa00; font-size:1.2em; margin-bottom:5px;">${stars}</div>
            <small style="opacity:0.7; word-break:break-all;">${r.url}</small>
            ${r.good ? `<p style="font-size:0.9em; margin:5px 0;"><strong style="color:#4dff88">Good:</strong> ${escapeHTML(r.good)}</p>` : ''}
            ${r.bad ? `<p style="font-size:0.9em; margin:5px 0;"><strong style="color:#ff4d4d">Bad:</strong> ${escapeHTML(r.bad)}</p>` : ''}
            <button class="delete-btn" onclick="event.stopPropagation(); deleteActivityItem('ratings', '${r.id}')" style="margin-top:auto;">Delete Rating</button>
          `;
      }

      ratingsContainer.appendChild(card);
      const img = card.querySelector('img');
      if (img) {
          if (img.complete) resizeGridItem(card);
          else img.onload = () => resizeGridItem(card);
      }
      resizeGridItem(card);
    });
    setTimeout(resizeAllGridItems, 100);
  } catch (error) {
    console.error("Error fetching activity:", error);
    reportsContainer.innerHTML = '<p style="color:#ff4d4d">Error loading reports.</p>';
    ratingsContainer.innerHTML = '<p style="color:#ff4d4d">Error loading ratings.</p>';
  }
}

async function deleteActivityItem(collectionName, docId) {
  startDeletionTimer(async () => {
      try {
        await deleteDoc(doc(db, collectionName, docId));
        // alert("Deleted successfully."); // Removed for smoother UX
        renderActivity();
        // Update home grid if item deleted
        if (collectionName === 'reports') renderReports();
        if (collectionName === 'ratings') renderRatings();
        
        // Refresh details view if open
        const detailsView = document.getElementById('details-view');
        if (detailsView && !detailsView.classList.contains('hidden') && window.lastDetailsArgs) {
            populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
        }
      } catch (e) {
        console.error("Error deleting document: ", e);
        showToast("Error deleting item.", "error");
      }
  }, "Deleting item");
}

/* ==========================================
   NOTIFICATIONS LOGIC
   ========================================== */

function toggleNotifications() {
  const dropdown = document.getElementById('notification-dropdown');
  const btn = document.querySelector('.notification-btn');
  if (dropdown) {
    dropdown.classList.remove('hidden'); // Ensure legacy hidden class is removed
    const isActive = dropdown.classList.toggle('active');
    if (btn) btn.classList.toggle('active', isActive);
    
    // Dynamic Arrow Positioning
    if (isActive && btn) {
        const btnRect = btn.getBoundingClientRect();
        let dropRight;
        let dropWidth;

        // Determine Dropdown Geometry based on Viewport (Ignore transform scale)
        if (window.innerWidth <= 600) {
            // Mobile: Fixed position (left:16px, right:16px)
            dropRight = window.innerWidth - 16;
            dropWidth = window.innerWidth - 32;
        } else {
            // Desktop: Absolute right:0 relative to wrapper
            // We assume the wrapper wraps the button tightly or aligns with it
            const wrapper = btn.closest('.notification-wrapper');
            dropRight = wrapper ? wrapper.getBoundingClientRect().right : btnRect.right;
            dropWidth = 320; // Fixed width from CSS
        }

        const btnCenter = btnRect.left + (btnRect.width / 2);
        // Calculate 'right' value: Distance from right edge of dropdown to center of button, minus half arrow width (6px)
        const arrowRight = (dropRight - btnCenter) - 6;
        
        // Clamp value to keep arrow within rounded corners (approx 24px radius)
        const finalRight = Math.max(24, Math.min(arrowRight, dropWidth - 24));
        dropdown.style.setProperty('--arrow-pos', `${finalRight}px`);
    }
    
    // If opening, mark all as read
    if (isActive && auth.currentUser) {
        const badge = document.getElementById('notification-badge');
        if (badge) badge.classList.add('hidden');
        localStorage.setItem('lastReadTime_' + auth.currentUser.uid, Date.now());
    }
  }
}

function loadNotifications() {
  const list = document.getElementById('notification-list');
  const badge = document.getElementById('notification-badge');
  if (!list || !badge) return;

  // State to hold data from listeners
  let reports = [];
  let ratings = [];
  let reportsLoaded = false;
  let ratingsLoaded = false;
  let currentUserBan = null;
  let currentUserVerified = null;

  // Function to analyze data and render notifications
  const runAnalysis = () => {
    // Only run if we have data from both collections (or at least attempted to load)
    if (!reportsLoaded || !ratingsLoaded) return;

    const notifications = [];
    const now = Date.now();
    const user = auth.currentUser;
    const lastRead = user ? (parseInt(localStorage.getItem('lastReadTime_' + user.uid)) || 0) : 0;
    const twoDays = 48 * 60 * 60 * 1000;

    // Data Aggregation & Scoring
    const sellers = {};

    const getSeller = (url) => {
        // Normalize URL to group effectively
        const key = url.toLowerCase().replace(/\/$/, '').replace(/^(?:https?:\/\/)?(?:www\.)?/, '');
        if (!sellers[key]) {
            sellers[key] = {
                url: url,
                displayName: '',
                positiveScore: 0,
                negativeScore: 0,
                recentNegativeScore: 0,
                reportCount: 0,
                ratingCount: 0
            };
        }
        return sellers[key];
    };

    // 0. Check Ban Status (Highest Priority)
    if (currentUserBan) {
        notifications.push({
            type: 'ban',
            title: '🚫 Account Suspended',
            message: `You have been banned from posting.<br><strong>Reason:</strong> ${currentUserBan.reason || 'Violation of Terms'}`,
            timestamp: Date.now() + 10000 // Ensure it stays at top
        });
    }

    // 0.5. Check Verification Status
    if (currentUserVerified) {
        notifications.push({
            type: 'verified',
            title: 'You are Verified! ✓',
            message: 'Congratulations! You have been recognized as a trusted community member.',
            timestamp: currentUserVerified.timestamp
        });
    }

    // 1. Process Reports (High Negative Impact)
    reports.forEach(r => {
        if (!r.url) return;
        const s = getSeller(r.url);
        s.displayName = r.displayName || s.displayName;
        s.reportCount++;
        
        // Weight: -7 per report (Heavy penalty)
        s.negativeScore += 7;
        
        if (now - r.timestamp < twoDays) {
            s.recentNegativeScore += 7;
        }
    });

    // 2. Process Ratings (Nuanced Impact)
    ratings.forEach(r => {
        if (!r.url) return;
        const s = getSeller(r.url);
        s.ratingCount++;
        const stars = parseInt(r.rating);

        if (stars === 5) {
            s.positiveScore += 2; // +2 for 5 stars
        } else if (stars === 4) {
            s.positiveScore += 1; // +1 for 4 stars
        } else if (stars === 2) {
            s.negativeScore += 2; // -2 for 2 stars
        } else if (stars === 1) {
            // Treat 1-star as a "soft" report (Potential Spam/Scam)
            // Weighted -5 (Half as bad as a full report)
            s.negativeScore += 5; 
            if (now - r.timestamp < twoDays) {
                s.recentNegativeScore += 5;
            }
        }
        // 3 stars is neutral (0 points)
    });

    // 3. Smart Analysis Algorithm
    Object.values(sellers).forEach(s => {
        const totalImpact = s.positiveScore + s.negativeScore;
        // Safety Percentage (0% = Scam, 100% = Safe)
        // Default to 50% (Neutral) if no data
        const safetyRatio = totalImpact === 0 ? 0.5 : (s.positiveScore / totalImpact);
        const safetyPercent = Math.round(safetyRatio * 100);

        // --- ALGORITHM RULES ---

        // A. HIGH RISK / URGENT
        // Trigger if recent negativity is high (Velocity check).
        // FAIRNESS: If the seller has a high safety % (long good history), 
        // we require a much higher spike in recent reports to flag them as "Urgent".
        
        let riskThreshold = 15; // Base: ~1.5 reports or 3 1-star ratings in 48h
        
        // Fairness Buffer: Trusted sellers need more reports to trigger an alert
        if (safetyPercent > 80 && s.positiveScore > 20) {
            riskThreshold = 40; // Needs ~4 reports to flag a trusted seller
        } else if (safetyPercent > 60) {
            riskThreshold = 25;
        }

        if (s.recentNegativeScore >= riskThreshold) {
            let title = '🚨 High Risk Alert';
            let msg = `<strong>${s.displayName || s.url}</strong> has received multiple reports recently.`;
            
            // Different message for usually trusted sellers
            if (safetyPercent > 70) {
                title = '⚠ Unusual Activity';
                msg = `<strong>${s.displayName}</strong> is usually trusted (${safetyPercent}% safe), but has a sudden spike in reports.`;
            }

            notifications.push({
                type: 'urgent',
                title: title,
                message: msg,
                timestamp: now // Top priority
            });
        }

        // B. TOP RATED
        // Must have high positive score, high safety ratio, and NO recent negativity.
        if (s.positiveScore >= 20 && safetyPercent >= 90 && s.recentNegativeScore === 0) {
            notifications.push({
                type: 'good',
                title: '🏆 Top Rated Seller',
                message: `<strong>${s.displayName || s.url}</strong> maintains a ${safetyPercent}% safety rating with ${s.ratingCount} reviews.`,
                timestamp: now - 1000
            });
        }
    });

    // Sort notifications by importance/time
    notifications.sort((a, b) => b.timestamp - a.timestamp);

    // Calculate Unread Count
    const unreadCount = notifications.filter(n => n.timestamp > lastRead).length;

    // Update Banned UI (FAB & Bell)
    const fab = document.querySelector('.floating-pill-btn');
    const bellBtn = document.querySelector('.notification-btn');
    
    if (currentUserBan) {
        if (fab) {
            fab.classList.add('banned-fab');
            fab.dataset.banReason = currentUserBan.reason || 'Violation of Terms';
            const reportSpan = fab.querySelector('.fab-content-report');
            if (reportSpan) {
                reportSpan.innerHTML = `
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                    <span>${translations[currentLanguage]['banned'] || 'Banned'}</span>
                `;
            }
        }
        if (bellBtn) bellBtn.classList.add('banned-bell');
    } else {
        if (fab) {
            fab.classList.remove('banned-fab');
            delete fab.dataset.banReason;
            const reportSpan = fab.querySelector('.fab-content-report');
            if (reportSpan) {
                reportSpan.innerHTML = `
                    <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    <span>${translations[currentLanguage]['report'] || 'Report'}</span>
                `;
            }
        }
        if (bellBtn) bellBtn.classList.remove('banned-bell');
    }

    // Render UI
    list.innerHTML = notifications.length ? '' : '<p style="padding:15px; text-align:center; opacity:0.6; font-size:0.9em;">No new alerts.</p>';
    badge.innerText = unreadCount > 9 ? '9+' : unreadCount;
    badge.classList.toggle('hidden', unreadCount === 0);

    notifications.forEach(n => {
      const color = n.type === 'ban' ? '#ff4d4d' : (n.type === 'urgent' ? '#ff4d4d' : (n.type === 'verified' ? '#38bdf8' : '#ffaa00'));
      
      let icon = '';
      if (n.type === 'ban') icon = `<svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/></svg>`;
      else if (n.type === 'urgent') icon = `<svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`;
      else if (n.type === 'verified') icon = `<svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
      else icon = `<svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M20.2 2H3.8c-1.1 0-2 .9-2 2v5.5c0 1.3.5 2.5 1.4 3.4 1.3 1.3 3.2 1.8 5 1.1.6 2.7 2.6 4.8 5.3 5.4V21H9v2h6v-2h-4.5v-1.6c2.7-.6 4.7-2.7 5.3-5.4 1.8.7 3.7.2 5-1.1.9-.9 1.4-2.1 1.4-3.4V4c0-1.1-.9-2-2-2zm-1.7 5.5c0 .6-.2 1.1-.6 1.5-.9.9-2.3.9-3.2 0-.2-.2-.3-.4-.4-.6v-4h4.2v3.1zM5.5 9c-.4-.4-.6-.9-.6-1.5V4.4h4.2v4c-.1.2-.2.4-.4.6-.9.9-2.3.9-3.2 0z"/></svg>`;

      list.innerHTML += `
        <div class="notification-item" style="${n.type === 'ban' ? 'background:rgba(255, 77, 77, 0.1); border:1px solid rgba(255, 77, 77, 0.3);' : ''}">
          <div class="notif-icon" style="color:${color}; display:flex; align-items:center; justify-content:center;">${icon}</div>
          <div class="notif-content" style="font-size:0.9em;">
            <strong style="color:${color}; display:block; margin-bottom:2px;">${n.title}</strong>
            ${n.message}
          </div>
        </div>
      `;
    });
  };

  // Real-time listener for Reports
  const qReports = query(collection(db, "reports"), orderBy("timestamp", "desc"));
  onSnapshot(qReports, (snapshot) => {
    reports = [];
    snapshot.forEach(doc => reports.push(doc.data()));
    reportsLoaded = true;
    runAnalysis();
  });

  // Real-time listener for Ratings
  const qRatings = query(collection(db, "ratings"), orderBy("timestamp", "desc"));
  onSnapshot(qRatings, (snapshot) => {
    ratings = [];
    snapshot.forEach(doc => ratings.push(doc.data()));
    ratingsLoaded = true;
    runAnalysis();
  });

  // Real-time listener for Ban Status (User Specific)
  let banUnsubscribe = null;
  let verifyUnsubscribe = null;
  
  onAuthStateChanged(auth, (user) => {
      if (user) {
          banUnsubscribe = onSnapshot(doc(db, "banned_users", user.uid), (doc) => {
              currentUserBan = doc.exists() ? doc.data() : null;
              runAnalysis();
          });
          verifyUnsubscribe = onSnapshot(doc(db, "verified_users", user.uid), (doc) => {
              currentUserVerified = doc.exists() ? doc.data() : null;
              runAnalysis();
          });
      } else {
          if (banUnsubscribe) banUnsubscribe();
          if (verifyUnsubscribe) verifyUnsubscribe();
          currentUserBan = null;
          currentUserVerified = null;
      }
  });
}

/* SEARCH FUNCTION */
function performSearch() {
  const query = document.getElementById('search-input').value.trim();
  const sort = document.getElementById('sort-filter') ? document.getElementById('sort-filter').value : 'trending';
  const country = document.getElementById('country-filter') ? document.getElementById('country-filter').value : 'GLOBAL';
  const verifiedBtn = document.getElementById('verified-filter-btn');
  const verifiedOnly = verifiedBtn ? verifiedBtn.classList.contains('active') : false;
  const clearBtn = document.getElementById('clear-search-btn');
  const searchLabel = document.getElementById('search-results-label');

  if (query) {
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (searchLabel) {
      searchLabel.innerText = `Search Results for "${query}"`;
      searchLabel.classList.remove('hidden');
      
      // Save Recent Search
      let searches = JSON.parse(localStorage.getItem('recent_searches') || '[]');
      searches = searches.filter(s => s.toLowerCase() !== query.toLowerCase());
      searches.unshift(query);
      if (searches.length > 5) searches = searches.slice(0, 5);
      localStorage.setItem('recent_searches', JSON.stringify(searches));
    }
  } else {
    if (clearBtn) clearBtn.classList.add('hidden');
    if (searchLabel) {
      searchLabel.classList.add('hidden');
    }
  }

  renderReports(query, sort, country, verifiedOnly);
  renderRatings(query, sort, country, verifiedOnly);
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  performSearch();
}

function handleSortChange() {
  performSearch(); // Re-runs render with current query and new sort
}
window.handleSortChange = handleSortChange;

/* ==========================================
   DYNAMIC FORM INJECTION
   ========================================== */
function injectDynamicFormFields() {
  const form = document.getElementById('form-scam');
  // Prevent double injection
  if (!form || document.getElementById('scam-type-selector')) return;

  const descInput = document.getElementById('scammer-desc');
  
  // Disable description initially
  if (descInput) {
    descInput.disabled = true;
    descInput.placeholder = "Please select a scam type above first...";
    descInput.style.opacity = "0.5";
    descInput.style.cursor = "not-allowed";
  }

  const oldFileWrapper = form.querySelector('.file-upload-wrapper');
  
  // 1. Create Scam Type Selector
  const typeWrapper = document.createElement('div');
  typeWrapper.innerHTML = `
    <label style="display:block; margin-bottom:8px; color:#8b949e; font-weight:600;">Type of Scam</label>
    <select id="scam-type-selector" class="scam-type-select" onchange="handleScamTypeChange()">
      <option value="" disabled selected>Select what happened...</option>
      <option value="not_delivered">Paid but item never arrived</option>
      <option value="fake_item">Item received was fake / Low quality</option>
      <option value="wrong_item">Received completely different item</option>
      <option value="phishing">Phishing / Suspicious Link</option>
      <option value="other">Other (Describe below)</option>
    </select>
  `;
  
  // Insert before description
  form.insertBefore(typeWrapper, descInput);

  // 2. Create New Proof Section
  const proofContainer = document.createElement('div');
  proofContainer.id = 'dynamic-proof-container';
  proofContainer.className = 'hidden';
  proofContainer.innerHTML = `
    <div class="section-separator" style="margin: 20px auto;"></div>
    <p style="text-align:center; color:#eaeaea; margin-bottom:15px; font-weight:bold;">Upload Proof</p>
    <div class="proof-section">
      <!-- Expected -->
      <div class="proof-upload-box" id="box-expected">
        <span class="proof-label">What I Expected<br><span class="proof-sublabel">(Listing/Website Photo)</span></span>
        <label for="file-expected" style="cursor:pointer; color:#8b5cf6; font-weight:bold;">Choose Image</label>
        <input type="file" id="file-expected" class="hidden-file-input" accept="image/*" onchange="previewProof(this, 'preview-expected')">
        <img id="preview-expected" class="proof-preview">
      </div>

      <!-- Got -->
      <div class="proof-upload-box" id="box-got">
        <span class="proof-label">What I Got<br><span class="proof-sublabel">(Photo of delivered item)</span></span>
        <label for="file-got" style="cursor:pointer; color:#8b5cf6; font-weight:bold;">Choose Image</label>
        <input type="file" id="file-got" class="hidden-file-input" accept="image/*" onchange="previewProof(this, 'preview-got')">
        <img id="preview-got" class="proof-preview">
      </div>
    </div>
  `;

  // Insert after description
  descInput.parentNode.insertBefore(proofContainer, descInput.nextSibling);

  // Character Counter
  const maxLength = 500;
  descInput.setAttribute('maxlength', maxLength);
  
  const counter = document.createElement('div');
  counter.className = 'char-counter';
  counter.innerText = `0 / ${maxLength}`;
  
  // Insert directly after textarea (before the proof container)
  descInput.parentNode.insertBefore(counter, proofContainer);

  descInput.addEventListener('input', () => {
      const len = descInput.value.length;
      counter.innerText = `${len} / ${maxLength}`;
      counter.className = 'char-counter' + (len >= maxLength ? ' limit-reached' : (len >= maxLength * 0.9 ? ' limit-near' : ''));
  });

  // Hide old file input
  if (oldFileWrapper) oldFileWrapper.style.display = 'none';
}

function handleScamTypeChange() {
  const type = document.getElementById('scam-type-selector').value;
  const container = document.getElementById('dynamic-proof-container');
  const boxExpected = document.getElementById('box-expected');
  const boxGot = document.getElementById('box-got');
  const fileExpected = document.getElementById('file-expected');
  const fileGot = document.getElementById('file-got');
  const descInput = document.getElementById('scammer-desc');

  if (!type) {
    container.classList.add('hidden');
    if (descInput) {
        descInput.disabled = true;
        descInput.style.opacity = "0.5";
        descInput.style.cursor = "not-allowed";
    }
    return;
  }

  // Enable description
  if (descInput) {
    descInput.disabled = false;
    descInput.placeholder = "Describe what happened...";
    descInput.style.opacity = "1";
    descInput.style.cursor = "text";
  }
  
  // Logic: Hide proof upload for 'not_delivered' or 'phishing'
  if (type === 'not_delivered' || type === 'phishing') {
    container.classList.add('hidden');
    if (fileExpected) fileExpected.value = '';
    if (fileGot) fileGot.value = '';
    document.querySelectorAll('.proof-preview').forEach(el => { el.src = ''; el.classList.remove('visible'); });
  } else if (type === 'other') {
    container.classList.remove('hidden');
    boxExpected.classList.add('full-width');
    boxGot.classList.add('hidden');
    
    if (fileGot) fileGot.value = '';
    const previewGot = document.getElementById('preview-got');
    if (previewGot) { previewGot.src = ''; previewGot.classList.remove('visible'); }
    
    const label = boxExpected.querySelector('.proof-label');
    label.innerHTML = 'Upload Evidence<br><span class="proof-sublabel">(Optional)</span>';
  } else {
    container.classList.remove('hidden');
    boxExpected.classList.remove('full-width');
    boxGot.classList.remove('hidden');
    
    const label = boxExpected.querySelector('.proof-label');
    label.innerHTML = 'What I Expected<br><span class="proof-sublabel">(Listing/Website Photo)</span>';
  }
}

async function previewProof(input, previewId) {
    const previewImg = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (!file.type.startsWith('image/')) {
            showToast("Please upload an image file.", "error");
            input.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onload = async function(e) {
            previewImg.src = e.target.result;
            previewImg.classList.add('visible');
            // Optional: Add NSFW check here if desired, reusing logic from previewImage
        }
        reader.readAsDataURL(file);
    } else {
        previewImg.classList.remove('visible');
    }
}

/* RATE LINK FROM MODAL */
function rateLinkFromModal(url) {
    // Close modal if open
    const cancelBtn = document.getElementById('modal-cancel');
    if (cancelBtn) cancelBtn.click();
    
    // Navigate to report page
    showPage('report');
    
    // Force switch to Rate tab
    switchTab('rate');
    
    // Pre-fill URL
    setTimeout(() => {
        const input = document.getElementById('rate-link');
        if (input) {
            input.value = url;
            handleInput('rate-link', 'rate-preview');
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
}

/* REPORT LINK FROM MODAL */
function reportLinkFromModal(url) {
    // Close modal by triggering cancel (resolves promise with false)
    const cancelBtn = document.getElementById('modal-cancel');
    if (cancelBtn) cancelBtn.click();
    
    // Navigate to report page
    showPage('report');
    
    // Force switch to Scam Report tab
    switchTab('scam');
    
    // Pre-fill URL
    setTimeout(() => {
        const input = document.getElementById('scammer-link');
        if (input) {
            input.value = url;
            handleInput('scammer-link', 'link-preview');
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
}

/* LINK INTERCEPTION & VERIFICATION */
async function interceptLink(e, url, riskStatus) {
  if (e) e.preventDefault();
  
  // Skip for phone numbers
  if (url.startsWith('tel:')) {
      window.location.href = url;
      return;
  }

  // 1. Show Confirmation
  const isHighRisk = riskStatus.includes('High Risk') || riskStatus.includes('Potential Risk');
  const color = isHighRisk ? '#ff4d4d' : '#8b949e';
  
  const confirmMsg = `
    <div style="text-align:center;">
        <p>You are about to leave IsItAScam to visit:</p>
        <p style="color:#38bdf8; word-break:break-all; font-weight:bold; margin:10px 0;">${escapeHTML(url)}</p>
        <div style="background:${color}22; border:1px solid ${color}; color:${color}; padding:10px; border-radius:8px; margin:15px 0;">
            <strong>⚠ Community Status: ${riskStatus}</strong>
            ${isHighRisk ? '<br><small>Proceed with extreme caution.</small>' : ''}
        </div>
        <div style="margin-top:15px; padding-top:15px; border-top:1px solid #30363d;">
            <button onclick="reportLinkFromModal(decodeURIComponent(&quot;${encodeURIComponent(url)}&quot;))" style="background:rgba(255, 77, 77, 0.1); border:none; color:#ff4d4d; font-size:0.9em; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; width:100%; padding:12px; border-radius:16px; transition:background 0.2s;">
                <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                Report this link as unsafe
            </button>
        </div>
    </div>
  `;

  const proceed = await showConfirm(confirmMsg, "External Link Warning", isHighRisk);
  if (!proceed) return;

  // 2. Show Loading / Verification
  const overlay = document.getElementById('custom-confirm-modal');
  const titleEl = document.getElementById('modal-title');
  const msgEl = document.getElementById('modal-message');
  const actionsEl = document.querySelector('.modal-actions');
  
  if (overlay) {
      overlay.classList.add('active'); // Ensure it stays open
      titleEl.innerText = "Verifying Link Safety...";
      msgEl.innerHTML = `
        <div style="padding:20px; text-align:center;">
            <div class="modal-loader"></div>
            <p style="margin-top:15px; color:#8b949e;">Running security checks...</p>
        </div>
      `;
      actionsEl.style.display = 'none';
  }

  // 3. Run Checks
  try {
      // Artificial delay for UX
      await new Promise(r => setTimeout(r, 1500));
      
      // Reuse verifyUrl logic
      await verifyUrl(url);
      
      // Success
      window.open(url, '_blank');
      overlay.classList.remove('active');
      
      // Reset modal state
      setTimeout(() => {
          if(actionsEl) actionsEl.style.display = 'flex';
      }, 300);

  } catch (error) {
      // Verification Failed
      if(titleEl) titleEl.innerText = "Security Alert";
      if(msgEl) msgEl.innerHTML = `
        <div style="text-align:center; color:#ff4d4d;">
            <svg viewBox="0 0 24 24" style="width:48px; height:48px; fill:currentColor; margin-bottom:10px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <p><strong>Link Flagged as Unsafe</strong></p>
            <p style="color:#eaeaea; font-size:0.9em; margin:10px 0;">${error.message}</p>
        </div>
      `;
      if(actionsEl) actionsEl.style.display = 'flex';
      
      // Re-bind buttons
      const confirmBtn = document.getElementById('modal-confirm');
      const cancelBtn = document.getElementById('modal-cancel');
      
      if(confirmBtn) {
          confirmBtn.innerText = "Proceed Anyway (Unsafe)";
          confirmBtn.className = "modal-btn btn-confirm danger";
          confirmBtn.onclick = () => {
              window.open(url, '_blank');
              overlay.classList.remove('active');
          };
      }
      
      if(cancelBtn) {
          cancelBtn.innerText = "Go Back";
          cancelBtn.onclick = () => {
              overlay.classList.remove('active');
          };
      }
  }
}

/* BACK BUTTON LOGIC */
function handleBackClick(targetPage, forceExit = false) {
  // 1. Handle Details View Exit (Return to previous context)
  const detailsView = document.getElementById('details-view');
  if (detailsView && !detailsView.classList.contains('hidden')) {
      const returnTo = window.lastActivePage || 'home';
      
      // Preserve scroll if returning to the same page
      if (window.lastGridScrollY !== undefined) {
          window.skipScrollReset = true;
      }
      
      // Restore specific tab state for Login/Profile page
      if (returnTo === 'login' && window.lastProfileTab) {
          showPage(returnTo, window.lastProfileTab, window.lastActivitySubTab);
      } else {
          showPage(returnTo);
      }
      
      // Restore scroll position
      if (window.lastGridScrollY !== undefined) {
          setTimeout(() => window.scrollTo(0, window.lastGridScrollY), 0);
      }
      return;
  }

  if (!forceExit && window.scrollY > 50) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showPage(targetPage);
  }
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    loadNotifications();
    injectDynamicFormFields();
    initCountrySelects();
    initCountryFilter();
    injectGlobalStyles();
    initSearchUI();
    window.addEventListener('resize', updateTabIndicator);
    window.addEventListener('load', updateTabIndicator);

    // Initialize Vanta.js Net Background
    if (window.VANTA) {
        const bg = document.createElement('div');
        bg.id = 'vanta-canvas';
        Object.assign(bg.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            zIndex: '-1',
            pointerEvents: 'none',
            filter: 'blur(4px) brightness(70%)'
        });
        document.body.prepend(bg);

        window.vantaEffect = window.VANTA.NET({
            el: "#vanta-canvas",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8b5cf6,
            backgroundColor: 0x050608, // Keep this dark background
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }

    // Logo Click -> Home
    const logo = document.querySelector('.navbar .logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.onclick = (e) => { e.preventDefault(); showPage('home'); };

        // Inject Beta Label
        const betaLabel = document.createElement('div');
        betaLabel.className = 'beta-label';
        betaLabel.innerText = 'BETA';
        betaLabel.title = 'Learn more about our Beta phase';
        betaLabel.onclick = showBetaInfo;
        logo.parentNode.insertBefore(betaLabel, logo.nextSibling);
    }

    // Modern Home Button Icon
    const homeBtn = document.querySelector('.navbar nav a[onclick*="home"]');
    if (homeBtn) {
        homeBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width:22px; height:22px; fill:currentColor;"><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg><span>Home</span>`;
        homeBtn.style.display = 'inline-flex';
        homeBtn.style.alignItems = 'center';
        homeBtn.style.gap = '8px';
    }
});

/* EXPOSE FUNCTIONS TO HTML */
window.showPage = showPage;
window.googleLogin = googleLogin;
window.logout = logout;
window.handleInput = handleInput;
window.switchTab = switchTab;
window.setRating = setRating;
window.previewImage = previewImage;
window.submitReport = submitReport;
window.submitRating = submitRating;
window.renderActivity = renderActivity;
window.deleteActivityItem = deleteActivityItem;
window.switchProfileTab = switchProfileTab;
window.switchHomeTab = switchHomeTab;
window.switchActivityTab = switchActivityTab;
window.switchAdminTab = switchAdminTab;
window.toggleNotifications = toggleNotifications;
window.openDetails = openDetails;
window.performSearch = performSearch;
window.clearSearch = clearSearch;
window.toggleHistoryLog = toggleHistoryLog;
window.handleScamTypeChange = handleScamTypeChange;
window.previewProof = previewProof;
window.handleBackClick = handleBackClick;
window.toggleUserVerification = toggleUserVerification;
window.manualVerifyUser = manualVerifyUser;
window.toggleUserBan = toggleUserBan;
window.manualBanUser = manualBanUser;
window.cancelDeletion = cancelDeletion;
window.interceptLink = interceptLink;
window.reportLinkFromModal = reportLinkFromModal;
window.rateLinkFromModal = rateLinkFromModal;
window.addBlacklistDomain = addBlacklistDomain;
window.removeBlacklistDomain = removeBlacklistDomain;
window.applySuggestion = applySuggestion;
window.editReport = editReport;
window.saveReportEdit = saveReportEdit;
window.reportAbuse = reportAbuse;
window.submitAbuseReport = submitAbuseReport;
window.resolveAbuseReport = resolveAbuseReport;
window.showUserProfile = showUserProfile;
window.showUpdateNotification = showUpdateNotification;
window.showBetaInfo = showBetaInfo;

/* MENU TOGGLE */
function toggleMenu() {
  const menu = document.getElementById('fullscreen-menu');
  const btn = document.querySelector('.hamburger-btn');
  if (menu && btn) {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
      menu.style.height = (menu.scrollHeight + 150) + "px";
    } else {
      menu.style.height = "0px";
    }
  }
}
window.toggleMenu = toggleMenu;

function closeMenu() {
  const menu = document.getElementById('fullscreen-menu');
  const btn = document.querySelector('.hamburger-btn');
  if (menu && menu.classList.contains('active')) {
    menu.classList.remove('active');
    if (btn) btn.classList.remove('active');
    menu.style.height = "0px";
  }
}

/* CLOSE MENU ON CLICK OUTSIDE OR LINK/BUTTON INSIDE */
document.addEventListener('click', (event) => {
  const menu = document.getElementById('fullscreen-menu');
  if (menu && menu.classList.contains('active')) {
    const isClickInsideContent = event.target.closest('.menu-content');
    const isClickOnButton = event.target.closest('.hamburger-btn');
    const isLinkOrButtonInside = event.target.closest('.menu-content a') || event.target.closest('.menu-content button');
    
    if ((!isClickInsideContent && !isClickOnButton) || isLinkOrButtonInside) {
      closeMenu();
    }
  }

  // Close Notifications on Click Outside
  const notifDropdown = document.getElementById('notification-dropdown');
  const notifBtn = document.querySelector('.notification-btn');
  
  if (notifDropdown && notifDropdown.classList.contains('active')) {
      if (!notifDropdown.contains(event.target) && !notifBtn.contains(event.target)) {
          toggleNotifications();
      }
  }
});

/* REPORT MENU EXPANSION */
function openReportMenu(btn) {
    if (document.getElementById('report-menu-overlay')) return;

    const rect = btn.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(btn);
    
    // Create Overlay
    const overlay = document.createElement('div');
    overlay.id = 'report-menu-overlay';
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '9998',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(0px)',
        webkitBackdropFilter: 'blur(0px)'
    });

    // Create Card
    const card = document.createElement('div');
    card.id = 'report-menu-card';
    Object.assign(card.style, {
        position: 'fixed',
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        borderRadius: computedStyle.borderRadius,
        backgroundColor: '#161b22', // Dark theme card background
        border: '1px solid #30363d',
        overflow: 'hidden',
        transformOrigin: 'center center',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy Spring
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        zIndex: '9999'
    });

    // Content
    const content = document.createElement('div');
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.2s ease 0.2s'; // Delayed fade in
    content.style.padding = '24px';
    content.style.height = '100%';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.gap = '16px';
    content.style.boxSizing = 'border-box';
    
    content.innerHTML = `
        <div style="width:48px; height:48px; background:linear-gradient(135deg, #8b5cf6, #6d28d9); border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:5px; box-shadow:0 4px 12px rgba(139, 92, 246, 0.3);">
            <svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:white;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </div>
        <h2 style="margin:0; color:#f0f6fc; font-size:1.4rem; text-align:center;">${translations[currentLanguage]['make-contribution'] || 'Make a Contribution'}</h2>
        <p style="color:#8b949e; text-align:center; margin:0 0 10px 0; font-size:0.95rem; line-height:1.5;">${translations[currentLanguage]['contribution-desc'] || 'Help the community by reporting a scam or rating a trusted seller.'}</p>
        
        <button onclick="handleMenuAction('scam')" class="menu-action-btn" style="width:100%; padding:16px; background:rgba(255, 77, 77, 0.1); border:1px solid rgba(255, 77, 77, 0.3); color:#ff4d4d; border-radius:16px; font-weight:bold; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:12px; transition:transform 0.1s;">
            <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>
            <span>${translations[currentLanguage]['report-a-scam'] || 'Report a Scam'}</span>
        </button>
        
        <button onclick="handleMenuAction('rate')" class="menu-action-btn" style="width:100%; padding:16px; background:rgba(255, 170, 0, 0.1); border:1px solid rgba(255, 170, 0, 0.3); color:#ffaa00; border-radius:16px; font-weight:bold; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:12px; transition:transform 0.1s;">
            <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor; transform:translateY(-1px);"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ${translations[currentLanguage]['rate-seller'] || 'Rate a Seller'}
        </button>

        <button onclick="closeReportMenu()" style="margin-top:5px; background:none; border:none; color:#8b949e; cursor:pointer; font-size:0.9rem; padding:10px;">Cancel</button>
    `;

    // Add hover effect
    const btns = content.querySelectorAll('.menu-action-btn');
    btns.forEach(b => {
        b.onmouseover = () => b.style.transform = 'scale(1.02)';
        b.onmouseout = () => b.style.transform = 'scale(1)';
        b.onmousedown = () => b.style.transform = 'scale(0.98)';
        b.onmouseup = () => b.style.transform = 'scale(1.02)';
    });

    card.appendChild(content);
    document.body.appendChild(overlay);
    document.body.appendChild(card);

    // Update translations for dynamically created content
    setTimeout(() => {
        updateTranslations();
    }, 10);

    // Hide Original Button
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';

    // Force reflow
    void card.offsetWidth;

    // Animate
    requestAnimationFrame(() => {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
        overlay.style.backdropFilter = 'blur(8px)';
        overlay.style.webkitBackdropFilter = 'blur(8px)';
        
        const targetWidth = Math.min(340, window.innerWidth - 32);
        const targetHeight = 420;
        const targetTop = (window.innerHeight - targetHeight) / 2;
        const targetLeft = (window.innerWidth - targetWidth) / 2;

        Object.assign(card.style, {
            top: `${targetTop}px`,
            left: `${targetLeft}px`,
            width: `${targetWidth}px`,
            height: `${targetHeight}px`,
            borderRadius: '28px'
        });
        
        content.style.opacity = '1';
    });

    overlay.onclick = (e) => {
        if (e.target === overlay) closeReportMenu();
    };
}

function closeReportMenu() {
    const overlay = document.getElementById('report-menu-overlay');
    const card = document.getElementById('report-menu-card');
    const fab = document.querySelector('.floating-pill-btn');
    
    if (!overlay || !card) return;

    // Fade out content
    if (card.children[0]) card.children[0].style.opacity = '0';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    overlay.style.backdropFilter = 'blur(0px)';
    overlay.style.webkitBackdropFilter = 'blur(0px)';

    // Animate back to button
    if (fab) {
        const rect = fab.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(fab);
        
        Object.assign(card.style, {
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            borderRadius: computedStyle.borderRadius,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth ease out
            opacity: '1' // Keep visible until swapped
        });
    } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
    }

    setTimeout(() => {
        if (overlay) overlay.remove();
        if (card) card.remove();
        if (fab) {
            fab.style.opacity = '';
            fab.style.pointerEvents = '';
        }
    }, 400);
}

function handleMenuAction(action) {
    closeReportMenu();
    setTimeout(() => {
        showPage('report');
        switchTab(action);
    }, 300);
}
window.openReportMenu = openReportMenu;
window.closeReportMenu = closeReportMenu;
window.handleMenuAction = handleMenuAction;

/* FAB CLICK HANDLER */
function handleFabClick() {
  const fab = document.querySelector('.floating-pill-btn');
  if (fab.classList.contains('back-to-top-mode')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (fab.classList.contains('banned-fab')) {
       const reason = fab.dataset.banReason || 'Violation of Terms';
       showToast(`Banned: ${reason}`, "error");
    } else {
       openReportMenu(fab);
    }
  }
}
window.handleFabClick = handleFabClick;

/* ==========================================
   INTELLIGENT LINK VERIFICATION
   ========================================== */
async function verifyUrl(stringUrl) {
  let url;
  
  // 0. Phone Number Check (Bypass URL validation)
  if (/^[\+]?[\d\s\-\(\)]{7,20}$/.test(stringUrl) && !/[a-z]/i.test(stringUrl)) {
      return stringUrl.trim();
  }

  try {
    // Auto-prepend https:// if missing
    if (!/^https?:\/\//i.test(stringUrl)) {
        stringUrl = 'https://' + stringUrl;
    }
    url = new URL(stringUrl);
  } catch (e) {
    throw new Error("Invalid URL format. Please check the link.");
  }

  const domain = url.hostname.toLowerCase();
  const path = url.pathname;

  // 1. Protocol Check
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error("Only HTTP and HTTPS links are allowed.");
  }

  // 2. Safety Check (IPs & Localhost)
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(domain)) {
     throw new Error("Security Alert: IP address links are not allowed.");
  }
  if (domain === 'localhost' || domain.endsWith('.local')) {
     throw new Error("Local network links are not allowed.");
  }
  
  // 3. FIRESTORE BLACKLIST CHECK
  try {
    let checkDomain = domain;
    if (checkDomain.startsWith('www.')) checkDomain = checkDomain.substring(4);

    // Timeout wrapper to prevent hanging (2s limit)
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 2000));
    const q = query(collection(db, "blacklist"), where("domain", "==", checkDomain));
    
    const snapshot = await Promise.race([getDocs(q), timeout]);
    if (!snapshot.empty) {
        throw new Error("Security Alert: This domain is blacklisted as a known scam.");
    }
  } catch (e) {
    if (e.message.includes("blacklisted")) throw e;
    if (e.code === 'permission-denied') {
        console.warn("⚠️ FIRESTORE RULES MISSING: Add 'allow read: if true;' to the 'blacklist' collection so users can be protected.");
    } else {
        console.warn("Blacklist check skipped:", e.message);
    }
  }

  // 4. EXTERNAL INTELLIGENCE: DNS Verification (Google Public DNS)
  // This checks if the domain actually exists in the global registry.
  try {
    const dnsResponse = await fetch(`https://dns.google/resolve?name=${domain}`);
    const dnsData = await dnsResponse.json();
    
    // Status 3 means NXDOMAIN (Non-Existent Domain)
    if (dnsData.Status === 3) {
        throw new Error("This domain does not exist. Please check for typos.");
    }
  } catch (e) {
    // If the check itself fails (e.g. network block), we assume the link might be invalid
    if (e.message.includes("domain does not exist")) throw e;
    console.warn("DNS verification skipped due to network issue.");
  }

  // 5. INTELLIGENT CONTENT ANALYSIS (Heuristics)

  // A. Block Search Engines & AI Tools (Strict Match)
  const blockedKeywords = [
    'google.com', 'www.google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com',
    'chatgpt.com', 'openai.com', 'ai.com', 'bard.google.com', 'gemini.google.com',
    'claude.ai', 'poe.com', 'perplexity.ai',
    'wikipedia.org', 'netflix.com', 'spotify.com'
  ];

  // Check if domain is exactly one of the blocked domains or a subdomain of them
  const isBlocked = blockedKeywords.some(d => domain === d || domain.endsWith('.' + d));
  if (isBlocked) {
      throw new Error("Links to search engines, AI tools, or general portals are not accepted.");
  }

  // B. Block Adult & Unsafe Content
  const adultKeywords = ['pornhub', 'xvideos', 'xnxx', 'xhamster', 'youporn', 'redtube', 'brazzers', 'hentai', 'nude', 'sex'];
  if (adultKeywords.some(k => domain.includes(k)) || domain.endsWith('.xxx') || domain.endsWith('.adult')) {
      throw new Error("Security Alert: This link is flagged as unsafe or inappropriate.");
  }

  // C. Enforce Deep Links for Social Media & Marketplaces
  const platformRoots = [
      'instagram.com', 'facebook.com', 'twitter.com', 'x.com', 'tiktok.com', 
      'linkedin.com', 'pinterest.com', 'snapchat.com', 'reddit.com', 'tumblr.com',
      'vimeo.com', 'twitch.tv', // YouTube removed to allow channel reports
      'ebay.', 'etsy.', 'amazon.', 'aliexpress.', 'dhgate.', 'temu.', 'shopee.', 'mercari.'
  ];

  if (platformRoots.some(p => domain.includes(p)) && (path === '/' || path.length < 2)) {
      throw new Error("Please provide a specific profile, shop, or video link, not the platform homepage.");
  }

  // D. Entropy Check (Detect Random Keys smashing e.g. "asdfghjkl.com")
  const parts = domain.split('.');
  let mainPart = parts.length > 1 ? parts[parts.length - 2] : parts[0];
  // Handle co.uk etc.
  if (parts.length > 2 && (parts[parts.length-2].length === 2 || parts[parts.length-1].length === 2)) {
      mainPart = parts[parts.length - 3] || mainPart;
  }
  
  if (calculateEntropy(mainPart) > 4.2 && mainPart.length > 10) {
      throw new Error("Link rejected: Domain name appears randomly generated.");
  }

  return stringUrl; // Return normalized URL
}

/* Helper: Calculate Shannon Entropy of a string */
function calculateEntropy(str) {
    const len = str.length;
    const frequencies = {};
    for (let i = 0; i < len; i++) {
        const char = str[i];
        frequencies[char] = (frequencies[char] || 0) + 1;
    }
    let entropy = 0;
    for (const char in frequencies) {
        const p = frequencies[char] / len;
        entropy -= p * Math.log2(p);
    }
    return entropy;
}

/* MASONRY LAYOUT HELPERS */
function resizeGridItem(item) {
  if (item.offsetParent === null) return;
  const grid = item.parentElement;
  if (!grid) return;
  
  const styles = window.getComputedStyle(grid);
  const rowHeightVal = parseInt(styles.getPropertyValue('grid-auto-rows'));
  const rowGapVal = parseInt(styles.getPropertyValue('gap'));
  
  const rowHeight = isNaN(rowHeightVal) ? 0 : rowHeightVal;
  const rowGap = isNaN(rowGapVal) ? 0 : rowGapVal;
  
  if (rowHeight === 0) return;

  const rowSpan = Math.ceil((item.scrollHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("mini-card");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}
window.addEventListener("resize", resizeAllGridItems);

/* SKELETON HELPER */
function getSkeletonHTML(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="skeleton-card">
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="skeleton" style="width:32px; height:32px; border-radius:50%;"></div>
          <div class="skeleton" style="width:120px; height:20px;"></div>
        </div>
        <div class="skeleton" style="width:60%; height:16px;"></div>
        <div class="skeleton" style="width:100%; height:100px; border-radius:6px;"></div>
        <div class="skeleton" style="width:100%; height:36px; border-radius:6px; margin-top:auto;"></div>
      </div>
    `;
  }
  return html;
}


/* ==========================================
   MOBILE SEARCH BEHAVIOR FIX
   ========================================== */
// Track mobile keyboard state
let mobileViewportHeight = window.innerHeight;
let isMobileKeyboardVisible = false;
let keyboardCheckTimer = null;

// Handle mobile keyboard appearance/disappearance with debounce
window.addEventListener('resize', () => {
  // Clear any existing timer to debounce the resize event
  if (keyboardCheckTimer) {
    clearTimeout(keyboardCheckTimer);
  }

  keyboardCheckTimer = setTimeout(() => {
    const currentHeight = window.innerHeight;
    const isMobile = /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isMobile) {
      const heightDiff = Math.abs(mobileViewportHeight - currentHeight);
      const keyboardThreshold = Math.max(150, mobileViewportHeight * 0.25);

      if (heightDiff > keyboardThreshold && !isMobileKeyboardVisible) {
        // Keyboard appeared
        isMobileKeyboardVisible = true;
        mobileViewportHeight = currentHeight;

        // When keyboard appears and search is expanded, adjust position
        const searchBox = document.querySelector('.search-box');
        if (searchBox && searchBox.classList.contains('search-expanded')) {
          searchBox.style.position = 'absolute';
          searchBox.style.top = window.scrollY + 'px';
        }
      } else if (heightDiff > keyboardThreshold && isMobileKeyboardVisible) {
        // Keyboard height changed but still visible
        mobileViewportHeight = currentHeight;
      } else if (heightDiff <= keyboardThreshold && isMobileKeyboardVisible) {
        // Keyboard disappeared
        isMobileKeyboardVisible = false;
        mobileViewportHeight = currentHeight;

        // When keyboard hides, restore proper position based on scroll and expansion state
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
          // Check if search was expanded before keyboard hid
          if (searchBox.classList.contains('search-expanded')) {
            // If search was expanded, keep it visible but adjust position
            searchBox.style.position = 'fixed';
            searchBox.style.top = '20px';
            // Don't add sticky-search class if we're at the top to prevent it from going back to hero
            if (window.scrollY > 50) {
              searchBox.classList.add('sticky-search');
            } else {
              searchBox.classList.remove('sticky-search');
            }
          } else {
            if (window.scrollY > 100) {
              // If scrolled down, make it sticky
              searchBox.style.position = 'fixed';
              searchBox.style.top = '20px';
              searchBox.classList.add('sticky-search');
            } else {
              // If at top, restore to normal position
              searchBox.style.position = 'relative';
              searchBox.style.top = 'auto';
              searchBox.classList.remove('sticky-search');
            }
          }

          // Also ensure navbar is properly displayed
          const navbar = document.querySelector('.navbar');
          if (navbar && window.scrollY <= 50 && !searchBox.classList.contains('search-expanded')) {
            navbar.classList.remove('hidden');
          }
        }
      } else {
        // Just general resize, update reference
        mobileViewportHeight = currentHeight;
      }
    } else {
      mobileViewportHeight = currentHeight;
    }
  }, 100); // Debounce resize events
});

// Simplified scroll handler for search box
let lastScrollTop = 0;
let scrollTimer = null;

window.addEventListener('scroll', () => {
  // Close menu on scroll
  closeMenu();

  const searchBox = document.querySelector('.search-box');
  const navbar = document.querySelector('.navbar');
  const homeSection = document.getElementById('home');

  // Only handle search box behavior on home page
  if (!searchBox || !homeSection || homeSection.classList.contains('hidden')) {
    if (navbar) navbar.classList.remove('hidden');
    if (searchBox) searchBox.classList.remove('sticky-search');
    return;
  }

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isMobile = window.innerWidth <= 600;

  // Clear any existing timer
  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }

  // Determine scroll direction
  const scrollDown = currentScrollTop > lastScrollTop;

  // Only collapse search if we're truly at the hero section (very top)
  if (currentScrollTop <= 5) {
    // At the very top of the page - allow search to collapse
    if (searchBox.classList.contains('search-expanded')) {
      searchBox.classList.remove('search-expanded');
      if (navbar) navbar.classList.remove('hidden');
    }
    // At top - remove sticky
    searchBox.classList.remove('sticky-search');
  } else {
    // Not at the top - prevent search from collapsing
    if (searchBox.classList.contains('search-expanded')) {
      // Keep search expanded when not at top
      searchBox.classList.remove('sticky-search');

      if (isMobile && navbar) {
        navbar.classList.add('hidden');
      }
      // Always hide suggestions when search is expanded
      const suggestions = document.getElementById('search-suggestions');
      if (suggestions) {
        suggestions.classList.add('hidden');
      }
    } else {
      // Apply sticky behavior based on scroll direction and position when not expanded
      if (scrollDown && currentScrollTop > 100 && !isMobileKeyboardVisible) {
        // Scrolling down and past threshold - make sticky
        searchBox.classList.add('sticky-search');
        if (navbar) navbar.classList.add('hidden');
      } else if (!scrollDown && currentScrollTop > 50) {
        // Scrolling up but not at the top - make sticky
        searchBox.classList.add('sticky-search');
        if (navbar) navbar.classList.add('hidden');
      } else if (currentScrollTop <= 50) {
        // Near top but not at the very top - remove sticky but don't collapse search
        searchBox.classList.remove('sticky-search');
      }
    }
  }

  // Set a timer to ensure cleanup when scrolling stops
  scrollTimer = setTimeout(() => {
    if (window.scrollY <= 50) {
      const searchBox = document.querySelector('.search-box');
      const navbar = document.querySelector('.navbar');
      if (searchBox) searchBox.classList.remove('sticky-search');
      if (navbar) navbar.classList.remove('hidden');
    }
  }, 150);

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

  // Handle other scroll behaviors
  const fab = document.querySelector('.floating-pill-btn');
  const isHomePage = homeSection && !homeSection.classList.contains('hidden');

  if (fab) {
    if (isHomePage) {
      fab.classList.remove('hidden-fab');
      if (currentScrollTop > 300) {
        fab.classList.add('back-to-top-mode');
      } else {
        fab.classList.remove('back-to-top-mode');
      }
    } else {
      fab.classList.add('hidden-fab');
      fab.classList.remove('back-to-top-mode');
    }
  }

  const activeSection = document.querySelector('section:not(.hidden)');
  if (activeSection && activeSection.id !== 'home') {
      const backBtn = activeSection.querySelector('.back-btn');
      if (backBtn) {
          if (currentScrollTop > 20) {
              backBtn.classList.add('sticky-back', 'rotate-up');
          } else {
              backBtn.classList.remove('sticky-back', 'rotate-up');
          }
      }
  }

  // Update the search box position if keyboard is visible to prevent layout shifts
  if (isMobileKeyboardVisible && searchBox && searchBox.classList.contains('search-expanded')) {
    // Only change to absolute position if we're not already at the top
    if (currentScrollTop > 10) {
      searchBox.style.position = 'absolute';
      searchBox.style.top = window.scrollY + 'px';
    }
  } else if (searchBox && searchBox.style.position === 'absolute' && !isMobileKeyboardVisible) {
    // Restore proper position when keyboard is hidden
    if (currentScrollTop > 100) {
      // If scrolled down, make it sticky
      searchBox.style.position = 'fixed';
      searchBox.style.top = '20px';
      searchBox.classList.add('sticky-search');
    } else {
      // If at top, restore to normal position but keep it visible
      searchBox.style.position = 'fixed';
      searchBox.style.top = '20px';
      searchBox.classList.remove('sticky-search');
    }
  }
});

/* ==========================================
   TOAST NOTIFICATION HELPER
   ========================================== */
function showToast(message, type = 'success') {
  let toast = document.getElementById('global-toast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  // Icon & Color Selection
  let icon = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  let color = '#00e676'; // Success Green
  
  if (type === 'error') {
      icon = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
      color = '#ff4d4d';
  } else if (type === 'info') {
      icon = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
      color = '#8b5cf6';
  }

  toast.innerHTML = `
    <div class="toast-icon" style="background:${color}22; color:${color}">${icon}</div>
    <span>${message}</span>
  `;

  // Trigger Animation
  toast.classList.remove('active');
  void toast.offsetWidth; // Force reflow
  toast.classList.add('active');

  // Auto Hide
  if (toast.timeout) clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}
window.showToast = showToast;

/* ==========================================
   CUSTOM CONFIRM MODAL
   ========================================== */
function showConfirm(message, title = "Confirm Action", isDanger = false, requireTextInput = false, expectedText = "") {
  return new Promise((resolve) => {
    let overlay = document.getElementById('custom-confirm-modal');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'custom-confirm-modal';
      overlay.className = 'custom-modal-overlay';
      overlay.innerHTML = `
        <div class="custom-modal">
          <div class="modal-title" id="modal-title"></div>
          <div class="modal-message" id="modal-message"></div>
          <div id="confirm-input-container" class="confirm-input-container" style="display:none; margin:15px 0;">
            <input type="text" id="confirm-input" placeholder="Type as requested..." style="width:100%; padding:10px; margin:10px 0; background:#0d1117; border:1px solid #30363d; color:#eaeaea; border-radius:6px; outline:none;">
            <div id="confirm-input-error" style="color:#ff4d4d; font-size:0.85em; margin-top:5px; display:none;">Incorrect input</div>
          </div>
          <div class="modal-actions">
            <button class="modal-btn btn-cancel" id="modal-cancel">Cancel</button>
            <button class="modal-btn btn-confirm" id="modal-confirm">Confirm</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    const titleEl = document.getElementById('modal-title');
    const msgEl = document.getElementById('modal-message');
    const inputContainer = document.getElementById('confirm-input-container');
    const inputField = document.getElementById('confirm-input');
    const errorDiv = document.getElementById('confirm-input-error');
    const confirmBtn = document.getElementById('modal-confirm');
    const cancelBtn = document.getElementById('modal-cancel');

    titleEl.textContent = title;
    msgEl.innerHTML = message;

    // Handle text input requirement
    if (requireTextInput) {
      inputContainer.style.display = 'block';
      inputField.value = '';
      errorDiv.style.display = 'none';

      // Focus the input field after a short delay to ensure it's visible
      setTimeout(() => {
        if (inputField) inputField.focus();
      }, 100);

      // Add event listener for input changes
      inputField.oninput = () => {
        errorDiv.style.display = 'none';
      };
    } else {
      inputContainer.style.display = 'none';
    }

    confirmBtn.className = isDanger ? 'modal-btn btn-confirm danger' : 'modal-btn btn-confirm';

    const close = (result) => {
      overlay.classList.remove('active');
      confirmBtn.onclick = null;
      cancelBtn.onclick = null;
      inputField.oninput = null;
      resolve(result);
    };

    confirmBtn.onclick = () => {
      if (requireTextInput) {
        const inputValue = inputField.value.trim();
        if (inputValue.toLowerCase() === expectedText.toLowerCase()) {
          close(true);
        } else {
          errorDiv.style.display = 'block';
          inputField.style.borderColor = '#ff4d4d';
          // Shake animation for wrong input
          inputField.classList.add('shake');
          setTimeout(() => {
            inputField.classList.remove('shake');
            inputField.focus();
          }, 500);
        }
      } else {
        close(true);
      }
    };

    cancelBtn.onclick = () => close(false);

    requestAnimationFrame(() => overlay.classList.add('active'));
  });
}
window.showConfirm = showConfirm;

/* ==========================================
   SHARE HELPER
   ========================================== */
function shareItem(url, title, status) {
  const shareData = {
    title: 'IsItAScam Report',
    text: `Check this out: ${title} (${url}) is flagged as ${status}.`,
    url: url
  };
  
  if (navigator.share) {
    navigator.share(shareData).catch(console.error);
  } else {
    copyToClipboard(`${shareData.text} ${shareData.url}`);
    showToast("Link copied to clipboard", "info");
  }
}
window.shareItem = shareItem;

/* ==========================================
   CLIPBOARD HELPER
   ========================================== */
function copyToClipboard(text) {
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand('copy'); showToast("Copied to clipboard", "success"); } 
    catch (err) { showToast("Failed to copy", "error"); }
    document.body.removeChild(textArea);
    return;
  }
  navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard", "success"))
    .catch(err => showToast("Failed to copy", "error"));
}
window.copyToClipboard = copyToClipboard;

/* ==========================================
   SECURITY HELPER (XSS PREVENTION)
   ========================================== */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================
   ADMIN FILTER
   ========================================== */
function filterAdminList() {
  const input = document.getElementById('admin-search-input');
  if (!input) return;
  const query = input.value.toLowerCase();
  
  const lists = [document.getElementById('admin-user-list'), document.getElementById('admin-banned-list')];
  
  lists.forEach(list => {
      if (!list) return;
      const cards = list.querySelectorAll('.mini-card');
      cards.forEach(card => {
          card.classList.toggle('hidden', !card.textContent.toLowerCase().includes(query));
      });
  });
}
window.filterAdminList = filterAdminList;

function triggerShake(elements) {
  if (!Array.isArray(elements)) elements = [elements];
  elements.forEach(el => {
    if (el) {
      el.classList.remove('shake');
      void el.offsetWidth; // Force reflow
      el.classList.add('shake');
      setTimeout(() => el.classList.remove('shake'), 500);
    }
  });
}

/* ==========================================
   ADMIN FEATURES: EDIT SELLER, ADD SELLER, TRUST SCORE
   ========================================== */

// 1. EDIT SELLER NAME & PROFILE PICTURE FROM DETAILS VIEW
async function openAdminEditModal(url, currentName, currentImage) {
  if (auth.currentUser?.uid !== ADMIN_UID) {
    showToast("Admin only", "error");
    return;
  }

  const modalHTML = `
    <div id="admin-edit-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:10000;">
      <div style="background:#161b22; border:1px solid #30363d; border-radius:16px; padding:24px; max-width:500px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.6);">
        <h2 style="margin:0 0 20px 0; color:#f0f6fc;">Edit Seller Profile</h2>
        
        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Seller URL</label>
          <input type="text" id="edit-seller-url" value="${escapeHTML(url)}" disabled style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em;">
        </div>
        
        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Display Name</label>
          <input type="text" id="edit-seller-name" value="${escapeHTML(currentName)}" placeholder="Enter seller name" style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em;">
        </div>
        
        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Profile Picture URL</label>
          <input type="text" id="edit-seller-image" value="${escapeHTML(currentImage || '')}" placeholder="https://..." style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em; margin-bottom:10px;">
          <input type="file" id="edit-seller-image-file" accept="image/*" style="width:100%; padding:8px; background:#0d1117; border:1px solid #30363d; color:#8b949e; border-radius:6px; outline:none; cursor:pointer;">
          <small style="color:#8b949e; display:block; margin-top:6px;">Or upload a new image</small>
        </div>
        
        ${currentImage ? `<div style="margin-bottom:20px; text-align:center;">
          <img src="${currentImage}" style="width:120px; height:120px; border-radius:12px; object-fit:cover; border:1px solid #30363d;">
        </div>` : ''}
        
        <div style="display:flex; gap:12px; justify-content:flex-end;">
          <button onclick="document.getElementById('admin-edit-modal').remove()" style="background:none; border:1px solid #30363d; color:#8b949e; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">Cancel</button>
          <button onclick="saveAdminEditedSeller('${escapeHTML(url)}')" style="background:#8b5cf6; border:none; color:white; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">Save Changes</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Handle file upload
  document.getElementById('edit-seller-image-file').addEventListener('change', async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const imageData = await processImage(file);
      document.getElementById('edit-seller-image').value = imageData;
    }
  });
}

async function saveAdminEditedSeller(url) {
  const newName = document.getElementById('edit-seller-name').value.trim();
  const newImage = document.getElementById('edit-seller-image').value.trim();
  
  if (!newName) {
    showToast("Name cannot be empty", "error");
    return;
  }
  
  try {
    // Find and update all reports/ratings with this URL
    const normalizedUrl = url.toLowerCase().replace(/\/$/, '');
    
    const qReports = query(collection(db, "reports"), where("url", "==", url));
    const qRatings = query(collection(db, "ratings"), where("url", "==", url));
    
    const [reportsSnap, ratingsSnap] = await Promise.all([getDocs(qReports), getDocs(qRatings)]);
    
    // Update reports
    const updatePromises = [];
    reportsSnap.forEach(doc => {
      updatePromises.push(updateDoc(doc.ref, {
        displayName: newName,
        platformImage: newImage || null
      }));
    });
    
    // Update ratings
    ratingsSnap.forEach(doc => {
      updatePromises.push(updateDoc(doc.ref, {
        realName: newName,
        platformImage: newImage || null
      }));
    });
    
    await Promise.all(updatePromises);
    showToast("Seller profile updated successfully!", "success");
    
    // Close modal
    document.getElementById('admin-edit-modal').remove();
    
    // Wait for Firestore to sync
    await new Promise(r => setTimeout(r, 800));
    
    // Refresh details view if still on that page
    if (window.lastDetailsArgs) {
      populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
    }
    
    // Clear ALL caches to force fresh data pull
    SearchSystem.index = [];
    allReportGroups = [];
    currentReportLimit = REPORTS_PER_PAGE;
    
    // Go back to home and perform fresh search
    showPage('home');
    
    // Perform fresh search to reload cards with updated names
    setTimeout(() => {
      performSearch();
    }, 100);
    
  } catch (error) {
    console.error("Error saving seller:", error);
    showToast("Error updating seller: " + error.message, "error");
  }
}
window.openAdminEditModal = openAdminEditModal;
window.saveAdminEditedSeller = saveAdminEditedSeller;

// 2. ADD SELLER TO DATABASE WITHOUT REPORT
async function openAdminAddSellerModal() {
  if (auth.currentUser?.uid !== ADMIN_UID) {
    showToast("Admin only", "error");
    return;
  }
  
  const modalHTML = `
    <div id="admin-add-seller-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:10000; overflow-y:auto;">
      <div style="background:#161b22; border:1px solid #30363d; border-radius:16px; padding:24px; max-width:500px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.6); margin:20px auto;">
        <h2 style="margin:0 0 20px 0; color:#f0f6fc;">Add Seller Profile</h2>

        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Seller URL or Phone</label>
          <input type="text" id="add-seller-url" placeholder="website.com or +1234567890" style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em;">
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Display Name</label>
          <input type="text" id="add-seller-name" placeholder="Seller name" style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em;">
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Profile Picture URL</label>
          <input type="text" id="add-seller-image" placeholder="https://..." style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em; margin-bottom:10px;">
          <input type="file" id="add-seller-image-file" accept="image/*" style="width:100%; padding:8px; background:#0d1117; border:1px solid #30363d; color:#8b949e; border-radius:6px; outline:none; cursor:pointer;">
        </div>

        <div id="add-seller-preview-container" class="hidden" style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Profile Preview</label>
          <div id="add-seller-preview" style="width:100%;"></div>
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Starting Trust Score</label>
          <select id="add-seller-trust" style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em;">
            <option value="neutral">Neutral (No history)</option>
            <option value="trusted">Trusted (+100)</option>
            <option value="scam">Scam (-100)</option>
          </select>
        </div>

        <div style="margin-bottom:20px;">
          <label style="display:block; color:#8b949e; font-size:0.9em; margin-bottom:8px;">Description (Optional)</label>
          <textarea id="add-seller-description" placeholder="Notes about this seller..." style="width:100%; padding:10px; background:#0d1117; border:1px solid #30363d; color:#c9d1d9; border-radius:6px; outline:none; font-size:0.9em; min-height:60px; resize:vertical;"></textarea>
        </div>

        <div style="display:flex; gap:12px; justify-content:flex-end;">
          <button onclick="document.getElementById('admin-add-seller-modal').remove()" style="background:none; border:1px solid #30363d; color:#8b949e; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">Cancel</button>
          <button onclick="saveAdminAddedSeller()" style="background:#8b5cf6; border:none; color:white; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:600;">Add Seller</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add event listener for URL input to show preview
  document.getElementById('add-seller-url').addEventListener('input', function() {
    handleInput('add-seller-url', 'add-seller-preview');
    document.getElementById('add-seller-preview-container').classList.remove('hidden');
  });

  document.getElementById('add-seller-image-file').addEventListener('change', async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const imageData = await processImage(file);
      document.getElementById('add-seller-image').value = imageData;
    }
  });
}

async function saveAdminAddedSeller() {
  const url = document.getElementById('add-seller-url').value.trim();
  const name = document.getElementById('add-seller-name').value.trim();
  const image = document.getElementById('add-seller-image').value.trim();
  const trust = document.getElementById('add-seller-trust').value;
  const description = document.getElementById('add-seller-description').value.trim();
  
  if (!url || !name) {
    showToast("URL and name are required", "error");
    return;
  }
  
  try {
    // Verify URL first
    const verifiedUrl = await verifyUrl(url);
    
    // Create an admin record - this will appear as a special "system" entry
    let startingScore = 50;
    if (trust === 'trusted') {
      // Create a synthetic 5-star rating to boost score
      await addDoc(collection(db, "ratings"), {
        url: verifiedUrl,
        realName: name,
        platformImage: image || null,
        rating: 5,
        good: "Added by admin as trusted seller",
        bad: "",
        timestamp: Date.now(),
        uid: ADMIN_UID,
        userEmail: "admin@system",
        reporterName: "System Admin",
        reporterPhoto: 'https://via.placeholder.com/40',
        country: null
      });
    } else if (trust === 'scam') {
      // Create a synthetic scam report to lower score
      await addDoc(collection(db, "reports"), {
        url: verifiedUrl,
        displayName: name,
        platformImage: image || null,
        description: description || "Marked as scam by admin",
        scamType: "other",
        timestamp: Date.now(),
        uid: ADMIN_UID,
        userEmail: "admin@system",
        reporterName: "System Admin",
        reporterPhoto: 'https://via.placeholder.com/40',
        country: null
      });
    } else {
      // Neutral: Create a baseline rating
      await addDoc(collection(db, "ratings"), {
        url: verifiedUrl,
        realName: name,
        platformImage: image || null,
        rating: 3,
        good: "Added by admin",
        bad: "",
        timestamp: Date.now(),
        uid: ADMIN_UID,
        userEmail: "admin@system",
        reporterName: "System Admin",
        reporterPhoto: 'https://via.placeholder.com/40',
        country: null
      });
    }
    
    showToast(`Seller profile added with ${trust === 'trusted' ? 'Trusted (+100)' : trust === 'scam' ? 'Scam (-100)' : 'Neutral'} starting score!`, "success");
    document.getElementById('admin-add-seller-modal').remove();
    
    // Refresh search to show new seller
    performSearch();
    
  } catch (error) {
    console.error("Error adding seller:", error);
    showToast("Error adding seller: " + error.message, "error");
  }
}
window.openAdminAddSellerModal = openAdminAddSellerModal;
window.saveAdminAddedSeller = saveAdminAddedSeller;

// 3. MARK SELLER AS TRUSTED or SCAM FROM DETAILS VIEW
async function markSellerTrust(url, trustLevel) {
  if (auth.currentUser?.uid !== ADMIN_UID) {
    showToast("Admin only", "error");
    return;
  }
  
  if (!['trusted', 'scam'].includes(trustLevel)) {
    showToast("Invalid trust level", "error");
    return;
  }
  
  try {
    const normalizedUrl = url.toLowerCase().replace(/\/$/, '');
    
    // Get the latest enriched data from existing reports/ratings
    const qReports = query(collection(db, "reports"), where("url", "==", url));
    const qRatings = query(collection(db, "ratings"), where("url", "==", url));
    
    const [reportsSnap, ratingsSnap] = await Promise.all([getDocs(qReports), getDocs(qRatings)]);
    
    let sellerName = "Unknown Seller";
    let sellerImage = null;
    
    // Get the most recent enriched data
    const allDocs = [
      ...Array.from(reportsSnap.docs).map(d => d.data()),
      ...Array.from(ratingsSnap.docs).map(d => d.data())
    ].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    
    if (allDocs.length > 0) {
      sellerName = allDocs[0].displayName || allDocs[0].realName || allDocs[0].url;
      sellerImage = allDocs[0].platformImage;
    }
    
    if (trustLevel === 'trusted') {
      // Add a verified 5-star rating
      await addDoc(collection(db, "ratings"), {
        url: url,
        realName: sellerName,
        platformImage: sellerImage,
        rating: 5,
        good: "Marked as trusted seller by administrator (+100 trust boost)",
        bad: "",
        timestamp: Date.now(),
        uid: ADMIN_UID,
        userEmail: "admin@system",
        reporterName: "System Admin",
        reporterPhoto: 'https://via.placeholder.com/40',
        country: null
      });
      showToast("✓ Seller marked as TRUSTED (+100 score boost)", "success");
    } else {
      // Add a scam report
      await addDoc(collection(db, "reports"), {
        url: url,
        displayName: sellerName,
        platformImage: sellerImage,
        description: "Marked as scam by administrator (-100 trust reduction)",
        scamType: "other",
        timestamp: Date.now(),
        uid: ADMIN_UID,
        userEmail: "admin@system",
        reporterName: "System Admin",
        reporterPhoto: 'https://via.placeholder.com/40',
        country: null
      });
      showToast("✗ Seller marked as SCAM (-100 score reduction)", "error");
    }
    
    // Refresh details view
    if (window.lastDetailsArgs) {
      populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
    }
    
  } catch (error) {
    console.error("Error marking seller:", error);
    showToast("Error marking seller: " + error.message, "error");
  }
}
/* ADMIN: DELETE ENTIRE SELLER PROFILE */
async function deleteSellerProfile(url, displayName) {
  if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
    showToast("Admin access required", "error");
    return;
  }

  // First confirmation modal
  const confirm1 = await showConfirm(
    `You are about to delete the entire profile for:<br><strong>${escapeHTML(displayName || url)}</strong><br><br>This will remove ALL associated reports and ratings. This action cannot be undone.`,
    "Confirm Deletion Step 1 of 3",
    true
  );

  if (!confirm1) return;

  // Second confirmation with URL verification
  const confirm2 = await showConfirm(
    `Please verify the URL to delete:<br><strong>${escapeHTML(url)}</strong><br><br>Type the URL below to confirm:`,
    "Confirm Deletion Step 2 of 3",
    true,
    true, // This indicates we need text input
    url // The expected text to type
  );

  if (!confirm2) return;

  // Third confirmation with final warning
  const confirm3 = await showConfirm(
    `FINAL CONFIRMATION:<br><strong>DELETE ENTIRE PROFILE</strong><br><br>All reports and ratings for ${escapeHTML(displayName || url)} will be permanently removed.<br><br>Type "DELETE" to confirm:`,
    "Final Confirmation Step 3 of 3",
    true,
    true, // This indicates we need text input
    "DELETE" // The expected text to type
  );

  if (!confirm3) return;

  try {
    // Show loading indicator
    const overlay = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('modal-title');
    const msgEl = document.getElementById('modal-message');
    const actionsEl = document.querySelector('.modal-actions');

    if (overlay) {
      titleEl.innerText = "Deleting Profile...";
      msgEl.innerHTML = `
        <div style="padding:20px; text-align:center;">
          <div class="modal-loader"></div>
          <p style="margin-top:15px; color:#8b949e;">Removing all associated data...</p>
        </div>
      `;
      if (actionsEl) actionsEl.style.display = 'none';
    }

    // Get all reports and ratings for this URL
    const reportsQuery = query(collection(db, "reports"), where("url", "==", url));
    const ratingsQuery = query(collection(db, "ratings"), where("url", "==", url));

    const [reportsSnapshot, ratingsSnapshot] = await Promise.all([
      getDocs(reportsQuery),
      getDocs(ratingsQuery)
    ]);

    // Delete all reports
    const reportDeletes = reportsSnapshot.docs.map(doc => deleteDoc(doc.ref));
    // Delete all ratings
    const ratingDeletes = ratingsSnapshot.docs.map(doc => deleteDoc(doc.ref));

    // Execute all deletions
    await Promise.all([...reportDeletes, ...ratingDeletes]);

    // Store original data for potential restoration
    const originalReports = [];
    const originalRatings = [];

    // Collect original reports
    reportsSnapshot.forEach(doc => {
      originalReports.push({ id: doc.id, data: doc.data() });
    });

    // Collect original ratings
    ratingsSnapshot.forEach(doc => {
      originalRatings.push({ id: doc.id, data: doc.data() });
    });

    // Record in recently deleted (for admin recovery) with original data
    await addDoc(collection(db, "recently_deleted"), {
      url: url,
      displayName: displayName,
      deletedBy: auth.currentUser.uid,
      deletedAt: Date.now(),
      originalReportCount: reportsSnapshot.size,
      originalRatingCount: ratingsSnapshot.size,
      originalReports: originalReports,
      originalRatings: originalRatings
    });

    // Close modal and show success
    if (overlay) overlay.classList.remove('active');

    showToast(`Profile for ${displayName || url} has been deleted`, "success");

    // Refresh the current view
    if (window.lastDetailsArgs) {
      // If we're on the details page for this profile, go back to home
      if (window.lastDetailsArgs.url === url) {
        handleBackClick('home');
      } else {
        // Otherwise, refresh the current view
        populateDetailsView(window.lastDetailsArgs.url, window.lastDetailsArgs.type);
      }
    }

    // Clear search index to remove this profile
    SearchSystem.index = SearchSystem.index.filter(item => item.url !== url.toLowerCase());

  } catch (error) {
    console.error("Error deleting profile:", error);
    showToast(`Error deleting profile: ${error.message}`, "error");
    if (overlay) {
      const actionsEl = document.querySelector('.modal-actions');
      if (actionsEl) actionsEl.style.display = 'flex';
    }
  }
}

/* RECENTLY DELETED PROFILES SECTION */
async function showRecentlyDeleted() {
  if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
    showToast("Admin access required", "error");
    return;
  }

  const existing = document.getElementById('recently-deleted-modal');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'recently-deleted-modal';
  overlay.className = 'custom-modal-overlay active';

  overlay.innerHTML = `
    <div class="custom-modal" style="max-width:700px; width:90%; max-height:90vh; overflow:hidden;">
      <div style="display:flex; justify-content:space-between; align-items-center; margin-bottom:20px;">
        <h2 style="margin:0; color:#f0f6fc;">Recently Deleted Profiles</h2>
        <button onclick="document.getElementById('recently-deleted-modal').remove()" style="background:none; border:none; color:#8b949e; cursor:pointer; padding:5px;">
          <svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:currentColor;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>

      <div id="recently-deleted-content" style="max-height:60vh; overflow-y:auto; padding-right:10px;">
        <div style="text-align:center; padding:40px; color:#8b949e;">
          <div class="modal-loader" style="margin:0 auto 15px;"></div>
          <p>Loading deleted profiles...</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  try {
    const q = query(collection(db, "recently_deleted"), orderBy("deletedAt", "desc"));
    const snapshot = await getDocs(q);

    const contentDiv = document.getElementById('recently-deleted-content');

    if (snapshot.empty) {
      contentDiv.innerHTML = '<p style="text-align:center; padding:40px; color:#8b949e;">No recently deleted profiles.</p>';
      return;
    }

    let html = '';
    snapshot.forEach(doc => {
      const data = doc.data();
      const deletedTime = new Date(data.deletedAt).toLocaleString();

      html += `
        <div class="mini-card" style="margin-bottom:12px; border-color:#ff4d4d;">
          <div class="card-header" style="justify-content:space-between;">
            <div style="display:flex; flex-direction:column;">
              <div class="card-user" style="color:#ff4d4d; font-weight:bold;">${escapeHTML(data.displayName || data.url)}</div>
              <small style="color:#8b949e;">${escapeHTML(data.url)}</small>
            </div>
            <div style="text-align:right; font-size:0.8em; color:#8b949e;">
              <div>Deleted: ${deletedTime}</div>
              <div>Items: ${data.originalReportCount + data.originalRatingCount}</div>
            </div>
          </div>
          <div style="display:flex; gap:8px; margin-top:10px;">
            <button onclick="event.preventDefault(); event.stopPropagation(); restoreDeletedProfile('${doc.id}', '${escapeHTML(data.url)}')" style="flex:1; background:rgba(56, 189, 248, 0.1); border:1px solid #38bdf8; color:#38bdf8; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.85em;">Restore</button>
            <button onclick="event.preventDefault(); event.stopPropagation(); permanentDeleteProfile('${doc.id}', '${escapeHTML(data.displayName || data.url)}')" style="flex:1; background:rgba(255, 77, 77, 0.1); border:1px solid #ff4d4d; color:#ff4d4d; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.85em;">Permanently Delete</button>
          </div>
        </div>
      `;
    });

    contentDiv.innerHTML = html;

  } catch (error) {
    console.error("Error loading recently deleted:", error);
    document.getElementById('recently-deleted-content').innerHTML =
      `<p style="text-align:center; padding:40px; color:#ff4d4d;">Error loading deleted profiles: ${error.message}</p>`;
  }
}

/* RESTORE DELETED PROFILE */
async function restoreDeletedProfile(docId, url) {
  if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
    showToast("Admin access required", "error");
    return;
  }

  const confirm = await showConfirm(
    `Restore profile for:<br><strong>${escapeHTML(url)}</strong>?<br><br>This will restore all previously deleted reports and ratings.`,
    "Confirm Restore",
    true
  );

  if (!confirm) return;

  try {
    // Close the recently deleted modal before performing the action
    const modal = document.getElementById('recently-deleted-modal');
    if (modal) {
      modal.remove();
    }

    // Get the deleted record
    const docRef = doc(db, "recently_deleted", docId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      showToast("Record not found", "error");
      return;
    }

    const data = docSnap.data();

    // Restore the original reports and ratings
    const restorePromises = [];

    // Restore reports
    if (data.originalReports && Array.isArray(data.originalReports)) {
      for (const report of data.originalReports) {
        // Remove the ID from the stored data since we're creating a new document
        const reportData = { ...report.data };
        // Add a note that this was restored
        reportData.restoredAt = Date.now();
        reportData.restoredBy = auth.currentUser.uid;
        restorePromises.push(addDoc(collection(db, "reports"), reportData));
      }
    }

    // Restore ratings
    if (data.originalRatings && Array.isArray(data.originalRatings)) {
      for (const rating of data.originalRatings) {
        // Remove the ID from the stored data since we're creating a new document
        const ratingData = { ...rating.data };
        // Add a note that this was restored
        ratingData.restoredAt = Date.now();
        ratingData.restoredBy = auth.currentUser.uid;
        restorePromises.push(addDoc(collection(db, "ratings"), ratingData));
      }
    }

    // Execute all restore operations
    await Promise.all(restorePromises);

    // Remove the record from recently_deleted
    await deleteDoc(docRef);

    showToast(`Profile for ${data.displayName || url} restored successfully`, "success");

    // Refresh the recently deleted list
    showRecentlyDeleted();

  } catch (error) {
    console.error("Error restoring profile:", error);
    showToast(`Error restoring profile: ${error.message}`, "error");
  }
}

/* PERMANENT DELETE */
async function permanentDeleteProfile(docId, displayName) {
  if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
    showToast("Admin access required", "error");
    return;
  }

  const confirm = await showConfirm(
    `Permanently delete:<br><strong>${escapeHTML(displayName)}</strong>?<br><br>This action cannot be undone.`,
    "Confirm Permanent Deletion",
    true
  );

  if (!confirm) return;

  try {
    // Close the recently deleted modal before performing the action
    const modal = document.getElementById('recently-deleted-modal');
    if (modal) {
      modal.remove();
    }

    await deleteDoc(doc(db, "recently_deleted", docId));
    showToast(`Profile permanently deleted`, "success");

    // Refresh the recently deleted list
    showRecentlyDeleted();

  } catch (error) {
    console.error("Error with permanent deletion:", error);
    showToast(`Error: ${error.message}`, "error");
  }
}

window.deleteSellerProfile = deleteSellerProfile;
window.showRecentlyDeleted = showRecentlyDeleted;
window.restoreDeletedProfile = restoreDeletedProfile;
window.permanentDeleteProfile = permanentDeleteProfile;
window.markSellerTrust = markSellerTrust;