// pages/index.js
Page({
  mixins: [require('../mixin/themeChanged')],

  /**
   * Page initial data
   */
  data: {
    list: [
      {
          id: 'form',
          name: '表单',
          open: false,
          pages: ['button', 'input', 'form', 'list', 'slideview', 'slider', 'uploader']
      },
      {
          id: 'layout',
          name: '基础组件',
          open: false,
          pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loading', 'loadmore', 'panel', 'preview', 'progress']
      },
      {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: ['actionsheet', 'dialog', 'half-screen-dialog', 'msg', 'picker', 'toast', 'top-tips']
      },
      {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: ['navigation-bar', 'tabbar']
      },
      {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: ['searchbar']
      }
    ]
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
            list[i].open = !list[i].open
        } else {
            list[i].open = false
        }
    }
    this.setData({
        list: list
    });
  },

  changeTheme: function() {
    console.log(this.data);
    getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
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