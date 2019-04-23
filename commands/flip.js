exports.run = (client, message, args) => {
    var result = Math.random() >= 0.5;
    var side = result ? "heads" : "tails";
    message.channel.send("I flip a coin, it lands on " + side + "!").catch(console.error);
 }