/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-07-29 13:46:57
 * @modify date 2020-07-29 13:46:57
 * @desc https://gist.github.com/aldimustafri/d21b3d6058d5dfbe5920331c9d50bcdf
 */

const url = `https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt`;

const superagent = require("superagent");

async function MaximumProfit() {
	try {
		const res = await superagent.get(url);
		// console.log('res: ', res.text);

		const data = res.text.split(" ");
		// console.log('data: ', data);

		const maximum = Math.max.apply(null, data);
		console.log("Maximum Profit: ", maximum);

		return data;
	} catch (error) {
		console.log(error);
	}
}

MaximumProfit();
