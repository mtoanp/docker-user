const app = require("./src/app");
require("dotenv").config({ path: "../.env" });
const PORT = process.env.NODE_APP_PORT || 3000;
const Platforminfo = process.env.PLATFORM === 'docker' 
    ? `via: docker` 
    : ``;

// Listen for server events
app
  .listen(PORT, () => {
    console.log(`Server is listening port ${PORT} in ${process.env.NODE_ENV}`, Platforminfo);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });