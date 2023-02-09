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
  var Data = [];
  request.onload = function () {
    var temp = JSON.parse(this.responseText);
    Data.push(temp);
  }
  console.log(Data[0])











}