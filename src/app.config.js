export default {
  pages: [
    "pages/index/index",
    "pages/rank/rank/index",
    "pages/test/question/index",
    "pages/my/my/index",
    "pages/test/test/index",
    "pages/test/result/index",
    "pages/my/changeUser/index",
    "pages/add/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/rank/rank/index",
        text: "排行",
        iconPath: "img/icon/排行榜.png",
        selectedIconPath: "img/icon/排行榜彩.png"
      },
      {
        pagePath: "pages/test/test/index",
        text: "答题",
        iconPath: "img/icon/答题.png",
        selectedIconPath: "img/icon/答题彩.png"
      },
      {
        pagePath: "pages/my/my/index",
        text: "我的",
        iconPath: "img/icon/个人.png",
        selectedIconPath: "img/icon/个人彩.png"
      }
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  }
};
