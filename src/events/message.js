module.exports = (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let prefix = process.env.PREFIX;
  let messageArray = message.content.toLowerCase().split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let cmd = client.commands.get(command.slice(prefix.length)) ||
  client.commands.get(client.aliases.get(command.slice(prefix.length)));
  if (cmd === undefined) return;
  if (cmd) cmd.run(client, message, args);
};