// let $add = $(".site:last");
let $last = $(".site:last");
// 获取数据函数
const getData = function () {
  return JSON.parse(localStorage.getItem("x"));
};
// 保存数据函数
const saveData = function (hashMap) {
  localStorage.setItem("x", JSON.stringify(hashMap));
};
//   第一步获取数据
let data = getData();
let hashMap;
hashMap = data || [
  { logo: "b", link: "baidu.com", url: "//baidu.com" },
  {
    logo: "y",
    link: "yuque.com",
    url: "//yuque.com",
  },
];
let timeOutEvent;
window.document.oncontextmenu = function (e) {
  e.preventDefault();
};
// 渲染数据函数;
const render = function () {
  $last.siblings(".site").remove();
  hashMap.forEach((n, index) => {
    const $li = $(`<li class="site" >
          <div class="del" id = ${index}>
            <img class="picDel" src="./img/delete.png" />
          </div>
          <a href="${n.url}" target="_self">
            <div class="box">
              <div class="logo">${n.logo}</div>
              <div class="link">${n.link}</div>
            </div>
          </a>
        </li>`);
    // 添加节点
    $last.before($li);
    // $("a").on("touchstart", function (e) {
    //   console.log("11111111111111111111");
    //   timeOutEvent = setTimeout(function () {
    //     console.log("yeah");
    //     $(".del").css("visibility", "visible");
    //   }, 1000);
    //   e.preventDefault();
    // });
    $(".site").on("click", ".del", function () {
      hashMap.splice(index, 1);
      saveData(hashMap);
      render();
    });
  });
};
//   第二步渲染之前的数据
render();
// 添加点击事件应该先获取并渲染之前的数据;
$last.on("click", function () {
  let link = window.prompt("添加我的导航：");
  if (link) {
    if (link.indexOf("http") === 0 || link.indexOf("//") === 0) {
      url = link;
      link = link
        .replace("https://", "")
        .replace("http://", "")
        .replace(/\/.*/, "");
    } else {
      url = "//" + link;
    }
    hashMap.push({
      logo: link[0],
      link: link,
      url: url,
    });
    // 保存数据
    saveData(hashMap);
    render();
  }
});
$("html").on("keypress", function (e) {
  let str = e.key;
  hashMap.forEach(function (item, index) {
    let url = item.url;
    if (str === item.logo) {
      window.open(url);
    }
  });
});
// function longPress() {
//   timeOutEvent = 0;
//   console.log("yeah");
//   $(".del").css("visibility", "visible");
// }

// $(".site").on("touchstart", function (e) {
//   console.log(e.target);

//   // if (e.target === "") {
//   // }
//   // console.log("11111111111111111111");
//   // timeOutEvent = setTimeout(function () {
//   //   console.log("yeah");
//   //   $(".del").css("visibility", "visible");
//   // }, 1000);
//   // e.preventDefault();
// });
$(".test").on("tap", function (e) {
  console.log(e);
  console.log("!!!");

  // $(this).hide();
});
