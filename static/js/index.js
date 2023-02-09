// 讀取JSON資料;
function GetJSON(stock_num){
  var requestURL = "/static/data/" + stock_num + ".json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL, true);
  request.send();
  var TEMP = [];
  request.onload = function () {
    var data = JSON.parse(this.responseText);
    console.log(data)
    TEMP.push(data)
  }
  console.log(TEMP)
  return TEMP
}

// 歷年股利;
function Echarts_Dividend(data){
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
function Echarts_Sharehold(data){
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
function Echarts_Analysis(data){
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
function Echarts_KLine(data){
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
function Echarts_FinDetail(data){
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
function Echarts_Total(data){
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
function Echarts_Year(data){
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
function Echarts_Season(data){
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

