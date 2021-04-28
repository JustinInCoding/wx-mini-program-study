// pages/form/form_input_status.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    value: '',
    showClearBtn: false,
    isWaring: false,

    currentValue: '',
    isCurrentWaring: false,
  },

  onCurrentInput(evt) {
    const { currentValue } = evt.detail;
    this.setData({
        isCurrentWaring: true,
    });
  },

  onInput(evt) {
    const { value } = evt.detail;
    this.setData({
        value,
        showClearBtn: !!value.length,
        isWaring: false,
    });
  },

  onClear() {
      this.setData({
          value: '',
          showClearBtn: false,
          isWaring: false,
      });
  },

  onConfirm() {
    if (this.data.value.length < 16) {
        this.setData({
            isWaring: true,
        });
    }
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