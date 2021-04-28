// pages/form/form_select.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    array1: ['微信号', 'QQ号', 'Email'],
    value1: 0,
    array2: ['+86', '+80', '+84', '+87'],
    value2: 0,
    array3: ['中国', '美国', '英国'],
    value3: 0,
  },

  bindPicker1Change: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },

  bindPicker2Change: function(e) {
    this.setData({
        value2: e.detail.value
    })
  },

  bindPicker3Change: function(e) {
    this.setData({
        value3: e.detail.value
    })
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