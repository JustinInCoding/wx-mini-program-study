// pages/progress/progress.js
function _next(){
  var that = this;
  if(this.data.progress >= 100){
      this.setData({
          disabled: false
      });
      return true;
  }
  this.setData({
      progress: ++this.data.progress
  });
  setTimeout(function(){
      _next.call(that);
  }, 20);
}

Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    progress: 0,
    disabled: false
  },

  upload: function(){
    if(this.data.disabled) return;

    this.setData({
        progress: 0,
        disabled: true
    });
    _next.call(this);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})