function getCleanersOfTodayOnShift() {
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);

  var dateColumnValues = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();

  var todayDate = new Date();
  var strArray = [];
  for (var i = 0; i < dateColumnValues.length; i++) {
    var currentDate = new Date(dateColumnValues[i][0]);

    if (todayDate.toDateString() === currentDate.toDateString()) {
      var userName = sheet.getRange('B' + (i + 2)).getValue();
      strArray.push(userName);
    }
  }
  Logger.log(strArray);
  return strArray;
}