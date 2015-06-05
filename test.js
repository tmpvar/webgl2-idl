var test = require('tape');
var parse = require('./parse.js')

test('does not explode', function(t) {
  var start = Date.now();
  parse(function(e) {
    var diff = Date.now() - start;
    start = Date.now();
    parse(function(e2) {
      t.ok(diff > Date.now() - start, 'cached');
      t.error(e2, 'no error');
      t.error(e, 'no error');
      t.end();
    });
  });
})
