function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) {
    return memo + num;
  });
  return sum;
}

const list = [1, 2, 3, 4];
console.log(sumFor(list));

console.log(sumWhile(list));
console.log(sumTheSimpleWay(list));

console.log(sumRecursion(list));
