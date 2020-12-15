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
    hidden:true,
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

  submit:function(e){
    console.log(e.detail.value);
  },
  changeHidden: function(){
    wx.showToast({
      title: '提交中',
      icon: 'loading',
      duration: 1000
  });
  setTimeout(function(){
    wx.showToast({
      title: '提交成功'
    })
  },1000),
  setTimeout(function(){
      wx.switchTab({
         url: '/pages/index/index'
      })  
  },1500)
}

})