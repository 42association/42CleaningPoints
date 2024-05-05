//strShift:掃除予定者の配列
//strActual:実際に掃除した人の配列
function getMatchedCleaners(strShift, strActual) {
  var strMatched = [];

  //掃除予定者を見るループ
  for (var i = 0; i < strShift.length; i++) {
    var currentShift = strShift[i];

    //実際に掃除した人を見るループ
    for (var j = 0; j < strActual.length; j++) {
      var currentActual = strActual[j];

      if (currentShift === currentActual) {
        strMatched.push(currentActual);
      }
    }
  }
  Logger.log(strMatched);
  return strMatched;
}