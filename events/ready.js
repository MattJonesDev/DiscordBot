module.exports = (client) => {
    console.log("Loading...");

    client.user.setPresence({
        game: { 
            name: 'MattOnCode.com',
            type: 'WATCHING'
        },
        status: 'available'
    });

    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  }
