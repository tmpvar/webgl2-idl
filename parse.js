var idl = require('webidl2');
var http = require('hyperquest');
var concat = require('concat-stream');

module.exports = process;

var contents = null;
function process(cb) {
  if (contents) {
    return cb(null, contents);
  }

  var tas = http.get('https://www.khronos.org/registry/typedarray/specs/latest/typedarray.idl');

  tas.pipe(concat(function(tad) {
    var webgls = http.get('https://www.khronos.org/registry/webgl/specs/latest/2.0/webgl2.idl');
    webgls.pipe(concat(function(webgld) {
      contents = (tad.toString() + '\n' + webgld.toString())
      .split('\n').map(function(line) {
        line = line.replace(/\[[^\]]*\]/, '');
        line = line.replace(/\?\)/, '? argument)');

        if (line.indexOf('typedef (') > -1) {
          return '/* ' + line + ' */';
        }
        return line;
      })
      .join('\n');

      try {
        cb(null, idl.parse(contents));
      } catch (e) {
        cb(e);
      }
    }));
  }));
}




