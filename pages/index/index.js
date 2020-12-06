//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sliderList:[
              {selected:true,imageSource:'../../images/pz.jpg'},
              {selected:false,imageSource:'../../images/pz-1.jpg'},
              {selected:false,imageSource:'../../images/hldx.jpg'}
            ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: null,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[],
    page:1
  },
  //事件处理函数
  onLoad: function () {
    let app = getApp()
    this.getList()
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
