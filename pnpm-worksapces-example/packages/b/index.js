const axios = require("axios");

module.exports = async function () {
  const result = await axios.get("https://api.github.com/users");

  return result.data;
};
