exports.run = (client, message, args) => {
    let sides = 6;
    let result = Math.floor(Math.random() * sides) + 1;
    message.channel.send("I roll a 6 sided die, it lands on " + result + "!").catch(console.error);
 }