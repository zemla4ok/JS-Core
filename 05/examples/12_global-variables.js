const MAX_TEMP = 30;
const MIN_TEMP = -25;

function calcDiffWithMax(temp) {
  return Math.abs(temp - MAX_TEMP);
}

function calcDiffWithMin(temp) {
  return Math.abs(temp - MIN_TEMP);
}