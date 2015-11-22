var React = require('react')
var CssFileLoader = require('../lib/CssFileLoader.js')

module.exports = React.createClass({
  displayName: 'LikeButton.jsx',
  getInitialState: function () {
    return {
      liked: false
    }
  },
  componentDidMount: function () {
    CssFileLoader.load('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
  },
  getLabel: function () {
    return this.isLiked() ? 'liked' : 'like'
  },
  getIcon: function () {
    return this.isLiked() ? 'fa-heart' : 'fa-heart-o'
  },
  like: function () {
    if (!this.isLiked()) {
      this.setState({
        liked: true
      })
    }
  },
  isLiked: function () {
    return this.state.liked
  },
  render: function () {
    const label = this.getLabel()
    const disabled = this.isLiked()
    const icon = this.getIcon()

    return (
      <button className='LikeButton' onClick={this.like} ref='button' disabled={disabled}>
        <i className={'fa ' + icon}></i>
        {label}
      </button>
    )
  }
})

