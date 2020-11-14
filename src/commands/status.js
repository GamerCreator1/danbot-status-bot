const { getAllStatus } = require("danbot-status");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message) => {
  let msgInform = new MessageEmbed()
    .setDescription("Getting all node and misc status...")
    .setColor("RANDOM");
  let msg = await message.channel.send(msgInform);
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
      msg.edit(nodeInform);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.help = {
  name: "status",
  alias: [],
};
