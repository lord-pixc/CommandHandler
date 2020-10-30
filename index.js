////////// D E C L A R A C I O N E S //////////
const { Client, MessageEmbed, Collection, MessageAttachment } = require("discord.js");
const client = new Client();
client.comandos = new Collection();
const fs = require("fs");
let comandos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"));
const package = require("./package.json");

////////// C A R G A R   C O M A N D O S //////////
for (var archi of comandos) {
    let comando = require("./comandos/" + archi);
    client.comandos.set(comando.Nombre, comando);
    console.log('\x1b[32m%s\x1b[0m', archi + " fue cargado correctamente");
}

////////// L O G I N //////////
client.login(process.env.TokenDiscord);

////////// E N C E N D I D O //////////
client.on("ready", async () => {
    console.log('\x1b[31m%s\x1b[0m', `${client.user.username} ${client.options._tokenType} ${package.version} Listo y Atento!!!`);
});

const prefix = "_";

client.on('message', async (message) => {
    if (user.bot) return;
    if (message.content.startsWith(prefix)) {
        //ARGS
        const args = message.content.slice(data.Prefix.length).trim().split(/ +/g);
        //COMMAND
        const command = args.shift().toLowerCase();
        //busca comando
        let cmd = client.comandos.get(command) || client.comandos.find((c) => c.Alias.includes(command));
        //si existe
        if (cmd) {
            cmd.run(client, message, args);
        }
    }
});
