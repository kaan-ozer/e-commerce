const path = require("path");

// Export the directory name of the main module's file.
// This line of code returns the directory path of the main module's file.
module.exports = path.dirname(require.main.filename);

// require.main ifadesi, uygulamanın ana modülünü temsil eder.
// require.main.filename ana modülün dosya adını (dosya yolunu) döndürür.
// path.dirname() fonksiyonu, bir dosya yolundan dosya adını çıkararak sadece dizin yolunu döndürür.
