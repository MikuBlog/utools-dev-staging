const { override, addWebpackAlias } = require("customize-cra");
const { resolve } = require("path");

module.exports = override(
  //增加路径别名的处理 
  addWebpackAlias({  
    '@': resolve('./src')  
  })
);
