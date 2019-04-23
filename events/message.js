module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
  
    // If the command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);

    // Debug messages for each command.
    var d = new Date();
    console.log(
      d.getUTCFullYear()+ "-" + d.getUTCMonth() + "-" + d.getUTCDate() + " " +
      d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds() 
      + " - Processed the command '", command, "'"
    );
    
  };