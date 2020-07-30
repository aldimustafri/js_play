/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-30 13:58:57
 * @modify date 2020-07-30 13:58:57
 * @desc [description]
 */

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(128));