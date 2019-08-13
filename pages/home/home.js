let app = getApp()

Page({
  data: {
    weekday: ['日', '一', '二', '三', '四', '五', '六', '日']
  },
  onLoad () {
    let _this = this
    app.$store.connect(this, 'home')
    this.observeCommon('userInfo')
    this.observeCommon('time')
  },
  goFeedback () {
    app.goFeedback()
  },
  followUs () {
    wx.setClipboardData({
      data: 'zjutjh',
      success(){
        wx.showModal({
          title: '提示',
          icon: 'success',
          showCancel: false,
          content: '复制成功，粘贴至搜索栏关注我们'
        })
      }
    })
  },
  donate () {
    wx.navigateToMiniProgram({
      appId: app.env('geizanAppId'),
      path: 'pages/apps/largess/detail?id=wA3oQqX64Yg%3D'
    })
  },
  userBlockClick () {
    if (!this.data.userInfo) {
      return wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
})
