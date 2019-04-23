const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json")

// Start new client.
const client = new Discord.Client();
client.config = config;

// Load event handlers.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Attempting to load event ${eventName}`);
    client.on(eventName, event.bind(null, client));
    console.log(`Loaded event ${eventName}`);
  });
});

client.commands = new Enmap();

// Load command handlers.
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
    console.log(`Loaded command ${commandName}`);
  });
});

// Log the bot in.
client.login(config.discordToken);
