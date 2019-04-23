exports.run = (client, message, args) => {
    let today = new Date();
    let todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()), christmasUTC;

    // Check if it's already happened.
    if (today.getMonth() == 11 && today.getDate() > 25) 
        christmasUTC = Date.UTC((today.getFullYear() + 1), 11, 25);
    else
        christmasUTC = Date.UTC(today.getFullYear(), 11, 25);

    let remaining = Math.floor((christmasUTC - todayUTC) / (1000 * 60 * 60 * 24));
    message.channel.send("There are " + remaining + " days left until christmas day!").catch(console.error);
 }