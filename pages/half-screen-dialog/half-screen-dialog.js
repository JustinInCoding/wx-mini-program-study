// pages/half-screen-dialog/half-screen-dialog.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    dialog1: false,
    dialog2: false,
    dialog3: false
  },

  close: function() {
    this.setData({
        dialog1: false,
        dialog2: false,
        dialog3: false
    });
  },

  open1() {
      this.setData({
          dialog1: true
      });
  },

  open2() {
      this.setData({
          dialog2: true
      });
  },

  open3() {
      this.setData({
          dialog3: true
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