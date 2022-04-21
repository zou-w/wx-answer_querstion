import React from "react";
import { View, Button, Image } from "@tarojs/components";
import Taro, { Current } from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
import back from "../../../img/背景.png";

export default class Answer extends React.Component {
  state = {
    answerScore: "",
    answerCount: ""
  };

  //查看排行
  goRank() {
    Taro.reLaunch({
      url: "/pages/rank/rank/index"
    });
  }
  componentDidMount() {
    // console.log(Current.router.params.answerScore);
    // console.log(Current.router.params.answerCount);
    this.setState({
      answerScore: Current.router.params.answerScore,
      answerCount: Current.router.params.answerCount
    });
  }

  render() {
    return (
      <View className="index">
        <Image
          className="back"
          src="https://s1.ax1x.com/2022/04/21/LcVsk6.png"
        />
        <View className="content">
          <View className="question">答对题目:{this.state.answerCount}</View>
          <View>答题得分:{this.state.answerScore}</View>
        </View>
        <Button className="btn" onClick={this.goRank.bind(this)}>
          查看排行
        </Button>
      </View>
    );
  }
}
