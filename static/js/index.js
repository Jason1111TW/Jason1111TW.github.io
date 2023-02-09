(function (JSONdata) {
  var requestURL = "/static/data/3010.json"
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function(JSONdata) {
    console.log("TEST");
    var JSONdata = request.response;
    //console.log(JSONdata);  
    
  }
  console.log(JSONdata)
})();

// 歷年股利;
(function () {
  var myChart = echarts.init(document.querySelector(".Dividend .chart"));
  console.log("999",JSONdata)
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


