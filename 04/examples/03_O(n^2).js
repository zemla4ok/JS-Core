const hasDuplicates = function (num) {
  for (let i = 0; i < nums.length; i++) {
    const thisNum = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        const otherNum = nums[j];
        if (otherNum === thisNum) return true;
      }
    }
  }
  return false;
}

const nums = [1, 2, 3, 4, 5, 5];
hasDuplicates(nums); //true