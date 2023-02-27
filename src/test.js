function transformToObjects(numberArray) {
  let result = [];
  numberArray.map((num) =>
    result.push({
      val: num,
    })
  );
  console.log(result);
  return result;
}

transformToObjects([1, 2, 3]);
