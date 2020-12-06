// pages/addressAdd/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ['北区', '中区', '南区', '公寓'],
      ['1栋', '2栋', '3栋', '4栋', '5栋']
    ],
    multiIndex: [0, 0],
    name:'',
    mobile:'',
    detailed:'',
    addressIs:true,
    _id:null
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['1栋', '2栋', '3栋', '4栋', '5栋'];
            break;
          case 1:
            data.multiArray[1] = ['1栋', '2栋', '3栋', '4栋', '5栋'];
            break;
          case 2:
            data.multiArray[1] = ['1栋', '2栋', '3栋', '4栋', '5栋'];
            break;
          case 3:
            data.multiArray[1] = ['A栋', 'B栋', 'D栋', 'E栋', 'F栋', 'G栋', 'H栋'];
            break;    
          case 4:
            data.multiArray[1] = ['其他'];
            break;    
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        data.multiIndex[3] = 0;
        data.multiIndex[4] = 0;
        break;
    }
    this.setData(data);
  },
  bindSemesterChange:function(e){
    console.log(e.detail)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindKeyDetailed: function (e) {
    this.setData({
      detailed: e.detail.value
    })
  },
  submitFun: function () {
    if (this.data.addressIs){ //添加
      app.http('v1/user/addCity', {
        name: this.data.name,
        mobile: this.data.mobile,
        detailed: this.data.detailed,
        city: this.data.region
      }, 'POST')
        .then(res => {
          if (res.code == 200) {
            wx.navigateBack({
              delta: 1
            })
          }
        })
    }else{
      app.http('v1/user/editCity', {
        name: this.data.name,
        mobile: this.data.mobile,
        detailed: this.data.detailed,
        city: this.data.region,
        id: this.data._id
      }, 'POST')
        .then(res => {
          if (res.code == 200) {
            wx.navigateBack({
              delta: 1
            })
          }
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      this.setData({
          region: options.city.split(','),
          name: options.name,
          mobile: options.mobile,
          detailed: options.detailed,
          _id: options.id,
          addressIs:false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})