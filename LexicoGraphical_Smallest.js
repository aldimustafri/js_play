/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-29 21:13:53
 * @modify date 2020-07-29 21:13:53
 * @desc https://gist.github.com/aldimustafri/9ec6cd4b29233a69b0e62138e60039b0
 */

const url = `https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt`;

const superagent = require("superagent");

function lexicoSmallest(data) {
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
		const order = lexicoSmallest(data).split("");
		const smallest = order.reduce((a, b) => (a.length <= b.length ? a : b));

		console.log("Smallest: ", smallest);
	} catch (error) {
		console.log(error);
	}
}
main();
