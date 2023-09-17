module.exports = function reverse (n) {

n = Math.abs(n);

if (n < 0) {
  let string = n.toString();
  let arr = string.split('');
  let reverse = arr.reverse('');
  let result = reverse.join('');

  return result;
}
else {
  let string = n.toString();
  let arr = string.split('');
  let reverse = arr.reverse('');
  let result = reverse.join('');

  return result;
}

}