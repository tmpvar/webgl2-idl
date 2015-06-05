var test = require('tape');
var parse = require('./parse.js')

test('does not explode', function(t) {
  var start = Date.now();
  parse(function(e, r) {
    t.ok(r);
    var diff = Date.now() - start;
    start = Date.now();
    parse(function(e2, r2) {
      t.ok(r2);
      t.ok(diff > Date.now() - start, 'cached');
      t.error(e2, 'no error');
      t.error(e, 'no error');
      t.end();
    });
  });
})
