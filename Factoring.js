/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-31 13:34:32
 * @modify date 2020-07-31 13:34:32
 * @desc https://gist.github.com/aldimustafri/ece5008ae300c5158a7c4f6e989bc807
 */

function factors(n) {
  var num_factors = [],
    i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      num_factors.push(i);
      if (n / i !== i) num_factors.push(n / i);
    }
  num_factors.sort(function (x, y) {
    return x - y;
  });
  return num_factors.length;
}
console.log("Factoring 262144: ", factors(262144));
console.log("Factoring 134217728", factors(134217728));
