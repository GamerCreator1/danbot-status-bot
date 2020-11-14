async function commands(client) {
    let { readdir } = require("fs");
    readdir("./src/commands/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) {
            return console.log("[LOG] No Commands To Load!");
        }

        jsfiles.forEach((f, i) => {
            let pull = require(`../commands/${f}`);
            console.log(`${i + 1}: ${f} loaded`)
            client.commands.set(pull.help.name, pull);
            if (pull.help.aliase) {
            pull.help.aliases.forEach(alias => {
                client.aliases.set(alias, pull.help.name)
            });
        }
        });
    });
}
async function events(client) {
    let { readdir } = require("fs").promises;
    const evtFiles = await readdir('./src/events');
	evtFiles.forEach(f => {
		const evtName = f.split('.')[0];
		const event = require(`../events/${f}`);
		client.on(evtName, event.bind(null, client));
	});
	console.log(`Loading a total of ${evtFiles.length} events.`);
}

module.exports = {
    commands,
    events
};