var url = 'http:/somthing';
function log(message) {
  console.log('message: ' + message);
}
module.exports.log = log;
module.exports.endpoint = url;