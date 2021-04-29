// pages/msg/msg.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {

  },

  openSuccess: function () {
    wx.navigateTo({
        url: 'msg_success'
    })
  },

  openText: function () {
      wx.navigateTo({
          url: 'msg_text'
      })
  },

  openTextPrimary: function () {
      wx.navigateTo({
          url: 'msg_text_primary'
      })
  },

  openCustomAreaPreview: function () {
      wx.navigateTo({
          url: 'msg_custom_area_preview'
      })
  },

  openCustomAreaTips: function () {
      wx.navigateTo({
          url: 'msg_custom_area_tips'
      })
  },

  openCustomAreaCell: function () {
      wx.navigateTo({
          url: 'msg_custom_area_cell'
      })
  },
  
  openFail: function () {
      wx.navigateTo({
          url: 'msg_warn'
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