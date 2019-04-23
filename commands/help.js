exports.run = (client, message, args) => {
   message.channel.send({embed: {
    title: "NinjaBot Commands",
    fields: [{
        name: client.config.prefix + "ping",
        value: "Pings the bot."
      },
      {
        name: client.config.prefix + "slap [member]",
        value: "Gives the member a slap."
      },
      {
        name: client.config.prefix + "8ball [question]",
        value: "Rubs the magic 8ball."
      },
      {
        name: client.config.prefix + "christmas",
        value: "The amount of days left until christmas day."
      },
      {
        name: client.config.prefix + "halloween",
        value: "The amount of days left until halloween."
      },
      {
        name: client.config.prefix + "flip",
        value: "Flips a coin."
      },
      {
        name: client.config.prefix + "roll",
        value: "Rolls a 6 sided die."
      },
      {
        name: client.config.prefix + "info",
        value: "Bot info."
      }]
    }}).catch(console.error);
}