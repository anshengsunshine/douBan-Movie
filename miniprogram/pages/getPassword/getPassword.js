// pages/getPassword/getPassword.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrPassword: []
  },

  //获取六位数密码
  getPassword() {
    console.log(this.data.arrPassword)
    if (this.data.arrPassword.length <= 6) {
      this._getPassword();
    } else {
      wx.showModal({
        title: '本次随机码',
        content: "this.data.arrPassword"
      })
    }
  },
  _getPassword() {
    var random = Math.random() * 9;
    var num = Math.random() * 9 + 1;
    num = parseInt(num, 10);
    this.data.arrPassword = this.data.arrPassword.push(num);
    console.log(this.data.arrPassword)
  },

})