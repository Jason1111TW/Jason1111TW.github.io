/* ------------------------------------------------------------------------------
 *  # Echarts
 *  @author: Chien-Yu, Lu
 *  Created on 2023/02/09
 * ---------------------------------------------------------------------------- */

var Echarts_Stock = function(stock_num) {
  // 讀取JSON資料;
  var requestURL = "/static/data/" + stock_num + ".json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL, true);
  request.send();
  request.onload = function () {
    var Data = JSON.parse(this.responseText);
    console.log(Data)
    //Echarts_Dividend(Data[])
  }
  
}

var Echarts_Dividend = function(data){
  var myChart = echarts.init(document.querySelector(".Dividend .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{
      type: 'category',
      data: data["Time"]
    },
    yAxis:{
      type: 'value'
    },
    series:[{
      name: '現金股利',
      type: 'bar',
      data: data["現金股利"]
    },
    {
      name: '股票股利',
      type: 'bar',
      data: data["股票股利"]
    }]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 股東結構;
var Echarts_Sharehold =  function(data){
  var myChart = echarts.init(document.querySelector(".Sharehold .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 股票體質分析;
var Echarts_Analysis = function(data){
  var myChart = echarts.init(document.querySelector(".Analysis .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// K線圖;
var Echarts_KLine = function(data){
  var myChart = echarts.init(document.querySelector(".K-line .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 財務比率表;
var Echarts_FinDetail = function(data){
  var myChart = echarts.init(document.querySelector(".FinDetail .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 總表;
var Echarts_Total = function(data){
  var myChart = echarts.init(document.querySelector(".Total .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 年資料;
var Echarts_Year= function(data){
  var myChart = echarts.init(document.querySelector(".Year .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}

// 季資料;
var Echarts_Season = function(data){
  var myChart = echarts.init(document.querySelector(".Season .chart"));
  var option = {
    tooltip:{},
    toolbox:{},
    grid:{},
    xAxis:{},
    yAxis:{},
    series:[{}]
  }

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}