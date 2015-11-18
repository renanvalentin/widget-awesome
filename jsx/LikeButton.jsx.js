var React = require('react')

module.exports = React.createClass({
  displayName: 'LikeButton.jsx',
  getInitialState: function () {
    return {
      liked: false
    }
  },
  getLabel: function () {
    return this.state.liked ? 'liked' : 'like'
  },
  like: function () {

  },
  render: function () {
    const label = this.getLabel()
    return (
      <button className='LikeButton' onClick={this.like}>
        {label}
      </button>
    )
  }
})

