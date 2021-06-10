
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js.'));
for(const file of commandFiles){
    const command = require('./commands/${file}');

    client.commands.set(command.name,command);
}


client.once('ready',()=>{
    console.log('tkoppop is live!');
});



client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command ==='clear'){
        client.commands.get('clear').execute(message,args);
        
    } else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});

client.login('ODUyMjgwNTQ1MzA0MTE3MzMy.YMEiHA.jpskZcee3DE1h6-EzleeLkbki2U');

