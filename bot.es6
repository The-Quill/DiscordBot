var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    console.log(` - User ${user} said ${message}`)
    var parts = message.split(' ');
    parts = parts.length > 0 ? parts : ['']
    switch(parts[0].replace('!!/', '')){
        case "": break;
        case "halp": sendMessage(channelID, "WAT!")
    }
});
function sendMessage(channelID, message){
    bot.sendMessage({
        to: channelID,
        message: message
    });
}
