module.exports.run = function(client) {
	setInterval(() => {
		try {
			dbl.postStats(bot.guilds.size);
			console.log("postStats is Done");
		} catch (error) {
			console.log("postStats error: " + error);
		}
	}, 1800000);
	//30 min
};
