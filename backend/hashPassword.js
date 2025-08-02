const bcrypt = require("bcryptjs");
bcrypt.hash("rajat", 10, (err, hash) => {
  if (err) {
    console.error("Hashing error:", err);
  } else {
    console.log("Generated hash:", hash);
  }
});
