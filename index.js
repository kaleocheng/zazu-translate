const translate = require('google-translate-api');

module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
      translate(search, {to: 'en'}).then(res => {
          resolve([{
              icon: 'fa-safari',
              title: res.text,
              value: res.text
          }])
      });
    })
  }
}
