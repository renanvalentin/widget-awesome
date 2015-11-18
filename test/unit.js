var LikeButton = require('../jsx/LikeButton.jsx')
var React = require('react/addons')

var test = require('tape')

var ReactTestUtils = React.addons.ReactTestUtils

test('Like Button Constructor', function (t) {
  var likeButton = React.createFactory(LikeButton)
  ReactTestUtils.renderIntoDocument(likeButton)

  t.plan(1)

  t.notOk(true)
  t.end()
})
