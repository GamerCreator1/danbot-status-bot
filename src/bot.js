require("dotenv").config();
const { Client, Collection } = require("discord.js");
const chalk = require('chalk');
const client = new Client();
const { readdirSync } = require("fs");
const { commands, events } = require("./utils/register");

client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./src/commands/");

(async () => {
	await events(client);
	await commands(client);
	if (process.env.TOKEN === "PUTDISCORDTOKENHERE") return console.log(chalk.redBright("Please set your token in .env file"))
	await client.login(process.env.TOKEN);
})();