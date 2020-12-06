//index.js
const app = getApp();
Page({
  data: {
    hidden:true,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    items:[
      {name:'网络',value:'1'},
      {name:'电脑',value:'2'},
      {name:'水',value:'3'},
      {name:'电',value:'4'},
      {name:'其他',value:'5'}
    ],
    multiArray: [
      ['北区', '中区', '南区', '公寓'],
      ['1栋', '2栋', '3栋', '4栋', '5栋']
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '北区'
        },
        {
          id: 1,
          name: '中区'
        },
        {
          id: 2,
          name: '南区'
        },
        {
          id: 3,
          name: '公寓'
        },
        {
          id: 4,
          name: '其他'
        }
        
      ],
      [{
          id: 0,
          name: '1栋'
        },
        {
          id: 1,
          name: '2栋'
        },
        {
          id: 2,
          name: '3栋'
        },
        {
          id: 3,
          name: '4栋'
        },
        {
          id: 3,
          name: '5栋'
        }
      ]
    ],
    multiIndex: [0, 0],
    imgList: [],
    modalName: null,
    textareaBValue: ''
  },
  hideKeyboard:function(e){
    if(e.detail.value.length>=11){
      wx.hideKeyboard()
  }
},
  checkboxChange:function(e){
    console.log('你选中的项目有:'+e.detail.value);
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
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '',
      content: '确定要删除这张照片吗？',
      cancelText: '再看看',
      confirmText: '确认删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
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
