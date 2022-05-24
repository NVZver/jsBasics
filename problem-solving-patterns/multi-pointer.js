function sumZero(arr){
  let left = 0;
  let right = arr.length-1;
  while(left < right){
    const summ = arr[left] + arr[right];
    if(summ === 0){
      return [left, right];
    } else if(summ > 0){
      right--;
    } else {
      left++;
    }
  }
}

//console.log(sumZero([-3, -2, -1, 0, 2, 4, 5]));
