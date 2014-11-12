var test = require('tape'),
    icon = require('../');

test('Get a success icon', function (t) {
  var item = icon.success();
  t.ok(icon.lists.success.indexOf(item) >= 0);
  t.end();
});

test('Get a failure icon', function (t) {
  var item = icon.failure();
  t.ok(icon.lists.failure.indexOf(item) >= 0);
  t.end();
});

test('Get a unknown icon', function (t) {
  var item = icon.unknown();
  t.ok(icon.lists.unknown.indexOf(item) >= 0);
  t.end();
});
