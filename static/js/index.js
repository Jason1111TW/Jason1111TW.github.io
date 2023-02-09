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
