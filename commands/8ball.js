exports.run = (client, message, args) => {
    let answers = client.config.ballAnswers;

    if(args.length > 0)
    {
        let answer = answers[Math.floor(Math.random() * 10 + 1) % answers.length];
        message.channel.send(answer).catch(console.error);;
    }
}