import React from "react";
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { baseUrl } from "../../baseUrl";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/modal.scss";
import { AtModal } from "taro-ui";
import "./index.less";

export default class Login extends React.Component {
  //渲染我的页面信息
  state = {
    userInfo: {},
    isOpen: false
  };
  //更改用户信息
  changeUser() {
    const {
      avatarUrl,
      nickName,
      college,
      qqNum,
      realName,
      stuNum
    } = this.state.userInfo;
    Taro.navigateTo({
      url:
        "/pages/my/changeUser/index?&nickName=" +
        nickName +
        "&college=" +
        college +
        "&qqNum=" +
        qqNum +
        "&realName=" +
        realName +
        "&stuNum=" +
        stuNum
    });
  }
  //问题反馈
  loadQuestion() {
    this.setState({ isOpen: true });
  }
  handleConfirm() {
    console.log("@");
  }
  // componentDidMount() {
  //   Taro.getStorage({
  //     key: "id",
  //     success: res => {
  //       Taro.request({
  //         method: "get",
  //         url: baseUrl + `/system/user/getInfo/${res.data}`,
  //         success: res => {
  //           console.log(res);
  //           this.setState({ userInfo: res.data.data.userInfo });
  //           console.log("my", this.state.userInfo);
  //         }
  //       });
  //     }
  //   });
  // }

  componentDidShow() {
    //在用户进入页面进行判断,如果有用户的id,直接跳转到个人页面
    Taro.getStorage({
      key: "id",
      success: res => {
        Taro.request({
          method: "get",
          url: baseUrl + `/system/user/getInfo/${res.data}`,
          success: res => {
            if (res.data.code === 200) {
              this.setState({ userInfo: res.data.data.userInfo });
              console.log("my", this.state.userInfo);
            } else {
              Taro.redirectTo({
                url: "/pages/add/index"
              });
            }
          }
        });
      }
    });
  }

  render() {
    const {
      avatarUrl,
      nickName,
      college,
      qqNum,
      realName,
      stuNum
    } = this.state.userInfo;
    return (
      <View className="index">
        <Image className="back" src="http://42.193.15.69/background.png" />
        <View className="inf">
          <Image className="avatarUrl" src={avatarUrl}></Image>
          <View>学院:{college}</View>
          <View>姓名:{realName}</View>
          <View>学号:{stuNum}</View>
          <View>昵称:{nickName}</View>
          <View>QQ:{qqNum}</View>
        </View>
        <View className="changeUser" onClick={this.changeUser.bind(this)}>
          更改信息
        </View>
        <View className="loadQuestion" onClick={this.loadQuestion.bind(this)}>
          问题反馈
          <AtModal
            isOpened={this.state.isOpen}
            title="反馈"
            content="如有疑问请加QQ群:879550553"
          />
        </View>
      </View>
    );
  }
}
