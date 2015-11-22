var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')

const LikeButton = require('../jsx/LikeButton.jsx')

var test = require('tape')

test('Like Button Constructor', (t) => {
  t.plan(1)

  var likeButton = TestUtils.renderIntoDocument(
    <LikeButton />
  )

  var likeButtonNode = ReactDOM.findDOMNode(likeButton)

  t.equal(likeButtonNode.textContent, 'like')

  t.end()
})

test('Like Button should be disable once clicked', (t) => {
  t.plan(1)

  var likeButton = TestUtils.renderIntoDocument(
    <LikeButton />
  )

  var likeButtonNode = ReactDOM.findDOMNode(likeButton)
  TestUtils.Simulate.click(likeButtonNode)

  t.ok(likeButtonNode.disabled)

  t.end()
})

test('Like Button label should be "liked"', (t) => {
  t.plan(1)

  var likeButton = TestUtils.renderIntoDocument(
    <LikeButton />
  )

  var likeButtonNode = ReactDOM.findDOMNode(likeButton)
  TestUtils.Simulate.click(likeButtonNode)

  t.equal(likeButtonNode.textContent, 'liked')

  t.end()
})

test('Like Button should change their state once', (t) => {
  t.plan(2)

  var likeButton = TestUtils.renderIntoDocument(
    <LikeButton />
  )

  var likeButtonNode = ReactDOM.findDOMNode(likeButton)
  TestUtils.Simulate.click(likeButtonNode)

  t.equal(likeButtonNode.textContent, 'liked')

  TestUtils.Simulate.click(likeButtonNode)

  t.equal(likeButtonNode.textContent, 'liked')

  t.end()
})
