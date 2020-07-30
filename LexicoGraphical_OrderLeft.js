/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-29 15:28:09
 * @modify date 2020-07-29 15:28:09
 * @desc https://gist.github.com/aldimustafri/8c0568065937833d247c995b0a887803
 */

const url = `https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt`;

const superagent = require("superagent");

function lexicoGraph(data) {
  var string = data;
  var lexico = "";
  for (var x = 0; x < string.length; x++) {
    if (lexico.indexOf(string.charAt(x)) == -1) {
      lexico += string[x];
    }
  }
  return lexico;
}

async function main() {
  try {
    const res = await superagent.get(url);
    const data = res.text;

    console.log("first occurence from left to right: ",lexicoGraph(data));
  } catch (error) {
    console.log(error);
  }
}
main();
