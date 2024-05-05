const sheetId = 'sheetId';
const sheetName = 'sheetName';

function batch_process() {
  cleaners_shift = getCleanersOfTodayOnShift();
  cleaners_actual = getCleanersActual();
  cleaners_matched = getMatchedCleaners(cleaners_shift, cleaners_actual);
  console.log(cleaners_matched);
}