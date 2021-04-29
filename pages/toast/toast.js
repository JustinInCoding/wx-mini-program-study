// pages/toast/toast.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * Page initial data
   */
  data: {
    toast: false,
    hideToast: false,
    warnToast: false,
    hideWarnToast: false,
    textMoreToast: false,
    hideTextMoreToast: false,
    loading: false,
    hideLoading: false,
    textToast: false,
    hideTextToast: false
  },

  openToast: function() {
    this.setData({
        toast: true
    });
    setTimeout(() => {
        this.setData({
            hideToast: true
        });
        setTimeout(() => {
            this.setData({
                toast: false,
                hideToast: false,
            });
        }, 300);
    }, 3000);
  },

  openWarnToast: function() {
    this.setData({
        warnToast: true
    });
    setTimeout(() => {
        this.setData({
            hidewarnToast: true
        });
        setTimeout(() => {
            this.setData({
                warnToast: false,
                hidewarnToast: false,
            });
        }, 300);
    }, 3000);
  },

  openTextMoreToast: function() {
    this.setData({
        textMoreToast: true
    });
    setTimeout(() => {
        this.setData({
            hideTextMoreToast: true
        });
        setTimeout(() => {
            this.setData({
                textMoreToast: false,
                hideTextMoreToast: false,
            });
        }, 300);
    }, 3000);
  },

  openLoading: function() {
    this.setData({
        loading: true
    });
    setTimeout(() => {
        this.setData({
            hideLoading: true
        });
        setTimeout(() => {
            this.setData({
                loading: false,
                hideLoading: false,
            });
        }, 300);
    }, 3000);
  },

  openTextToast: function() {
    this.setData({
        textToast: true
    });
    setTimeout(() => {
        this.setData({
            hideTextToast: true
        });
        setTimeout(() => {
            this.setData({
                textToast: false,
                hideTextToast: false,
            });
        }, 300);
    }, 3000);
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