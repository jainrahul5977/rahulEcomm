// File: app/controllers/home.js

const index = (req, res) => {
    res.send({
        messgae:"ok destructuring is working fine."
    });
  };
  
  module.exports = {
    index
  };