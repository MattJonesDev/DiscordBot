const GphApiClient = require("giphy-js-sdk-core");

exports.run = (client, message, args) => {
    let giphy = GphApiClient(client.config.giphyToken);
    let mentioned = message.mentions.members.first();

    // Ensure we can slap them.
    if(mentioned != null)
    {
        // Slap the member.
        giphy.search('gifs', {'q':'slap','limit':25})
        .then(response => {
            var responseFinal = response.data[Math.floor(Math.random() * 10 + 1) % response.data.length]
            message.channel.send('Slaps ' + mentioned.displayName + ' in the face!', {
                files: [responseFinal.images.fixed_height.url]
            })
        }).catch(() => {
            Console.log('There was an error retrieving a GIF to post.');
        });
    }
    else
        message.channel.send("I can't slap someone if you haven't mentioned them!");
}