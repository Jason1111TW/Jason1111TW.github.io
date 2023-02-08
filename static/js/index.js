// (function () {
//   //var requestURL =  "https://raw.githubusercontent.com/Jason1111TW/Test/main/3010.json?token=GHSAT0AAAAAAB6O2FYTL2JFYJ6UIZMW6Z4MY7D7HIQ";
//   var requestURL = "./OutputData/3010.json"
//   var request = new XMLHttpRequest();
//   request.open('POST', requestURL);
//   request.responseType = 'json';
//   request.send();
//   request.onload = function() {
//     console.log("TEST");
//   }
// })();

(function () {
  var requestConfig = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept':'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded' ,
      'Access-Control-Allow-Origin': '*'              
    }      
  };

})();

// 歷年股利;
(function () {
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


