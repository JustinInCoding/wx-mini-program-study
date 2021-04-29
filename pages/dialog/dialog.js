// pages/dialog/dialog.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    iosDialog1: false,
    iosDialog2: false,
    androidDialog1: false,
    androidDialog2: false,
  },

  close: function () {
    this.setData({
        iosDialog1: false,
        iosDialog2: false,
        androidDialog1: false,
        androidDialog2: false,
    })
  },

  openIOS1: function() {
    this.setData({
        iosDialog1: true
    });
  },

  openIOS2: function() {
      this.setData({
          iosDialog2: true
      });
  },

  openAndroid1: function() {
      this.setData({
          androidDialog1: true
      });
  },
  
  openAndroid2: function() {
      this.setData({
          androidDialog2: true
      });
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