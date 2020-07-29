/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-29 15:28:09
 * @modify date 2020-07-29 15:28:09
 * @desc [description]
 */

const url = `https://gist.githubusercontent.com/Jekiwijaya/0b85de3b9ff551a879896dd78256e9b8/raw/e9d58da5d4df913ad62e6e8dd83c936090ee6ef4/gistfile1.txt`;

const superagent = require("superagent");

function lexicoGraph(str1) {
	var str = str1;
	var uniql = "";
	for (var x = 0; x < str.length; x++) {
		if (uniql.indexOf(str.charAt(x)) == -1) {
			uniql += str[x];
		}
	}
	return uniql;
}

async function main() {
	try {
        const res = await superagent.get(url);
        const data = res.text;
        
		console.log(lexicoGraph(data));
	} catch (error) {
		console.log(error);
	}
}
main();
