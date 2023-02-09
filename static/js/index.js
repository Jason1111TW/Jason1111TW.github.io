function GetJSON(stock_num){
  var requestURL = "/static/data/" + stock_num + ".json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.status != 200) {
      console.log("Error on GetJSON!")
    }
  }
  return request.response
}

var stock_num = "3010"
var JSONdata = GetJSON(stock_num)

// 歷年股利;
(function (JSONdata) {
  console.log("Check~", JSONdata)
  var myChart = echarts.init(document.querySelector(".Dividend .chart"));
  var option = {

  }


  myChart.setOption(option);
  // 圖表隨螢幕調整大小;
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 股東結構;
(function () {

})();


// 股票體質分析;
(function () {

})();


// K線圖;
(function () {

})();


// 財務比率表;
(function () {

})();


// 總表;
(function () {

})();

// 年資料;
(function () {

})();

// 季資料;
(function () {

})();


