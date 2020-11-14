require("dotenv").config();
const chalk = require("chalk");
const { MessageEmbed } = require("discord.js");
const { getAllStatus } = require("danbot-status");
let nomessage = false;
module.exports = async (client) => {
  console.log(chalk.green(`All bot information are being processed...`));
  if (process.env.CHANNELID === "PUTDISCORDCHANNELIDHERE")
    console.log(
      chalk.yellow(
        "No channel id configured, skipping sending and editing message"
      )
    );
  if (client.channels.cache.get(process.env.CHANNELID) === undefined)
    console.log(
      chalk.yellow(
        "No channel id configured, skipping sending and editing message\nIf your channel exist, please make sure the bot is in the bot before starting it"
      )
    );
  let channel = client.channels.cache.get(process.env.CHANNELID);
  console.log(
    chalk.white(`Use ${process.env.PREFIX}help for more information`)
  );
  let editmessage;
  await channel.messages
    .fetch(process.env.MESSAGEID)
    .then((message) => (editmessage = message))
    .catch((err) => {
      if (err.message === "404: Not Found") {
        nomessage = true;
      }
    });
  if (process.env.MESSAGEID === "PUTDISCORDMESSAGEIDHERE" || nomessage) {
    console.log(
      chalk.yellow(
        `Note: Auto Status Posting is disabled, head to your server and run ${process.env.PREFIX}autostatus to see how to enable it`
      )
    );
  } else {
    console.log(chalk.green(`Note: Auto Status Posting is enabled.`));
    if (editmessage !== undefined) {
      setInterval(function () {
        getAllStatus()
          .then(async (res) => {
            let nodeData = Object.entries(Object.entries(res)[0][1]);
            let miscData = Object.entries(Object.entries(res)[1][1]);
            let nodeEmbed = [];
            let miscEmbed = [];
            nodeData.forEach(([key, value]) => {
              nodeEmbed.push(`${key} | ${value}`);
            });
            miscData.forEach(([key, value]) => {
              miscEmbed.push(`${key} | ${value}`);
            });
            let nodeInform = new MessageEmbed()
              .setColor("RANDOM")
              .setTitle("All Status")
              .addField("**__Node Status__**", nodeEmbed.join("\n"))
              .addField("**__Misc Status__**", miscEmbed.join("\n"));
              editmessage.edit(nodeInform);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 300000);
    }
  }
};
