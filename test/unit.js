var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')

const LikeButton = require('../jsx/LikeButton.jsx')

var test = require('tape')

test('Like Button Constructor', (t) => {
  t.plan(1)

  var likeButton = TestUtils.renderIntoDocument(
    <LikeButton />
  );

  var likeButtonNode = ReactDOM.findDOMNode(likeButton);

  t.equal(likeButtonNode.textContent, 'like')

  t.end()
})
