exports.run = (client, message, args) => {
    let today = new Date();
    let todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()), halloweenUTC;

    // Check if it's already happened.
    if (today.getMonth() > 9) 
        halloweenUTC = Date.UTC((today.getFullYear() + 1), 9, 31);
    else
        halloweenUTC = Date.UTC(today.getFullYear(), 9, 31);

    let remaining = Math.floor((halloweenUTC - todayUTC) / (1000 * 60 * 60 * 24));
    message.channel.send("There are " + remaining + " days left until halloween!").catch(console.error);
 }