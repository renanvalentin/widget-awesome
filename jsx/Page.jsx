var React = require('react')
var Header = require('./Header.jsx')
var LikeButton = require('./LikeButton.jsx')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    var title = 'This page is under construction'

    var header = <Header title={title} />
    var likeButton = <LikeButton />
    return <div className='Page'>
      {header}
      {likeButton}
    </div>
  }
})
