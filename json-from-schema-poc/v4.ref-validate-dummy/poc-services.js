module.exports = {
var generateDummyJson = function (templateFile, myHelpers) {
    resp = dummyjson.parse(templateFile, {helpers: myHelpers}); 
    log('RESULT', resp);
  };
}