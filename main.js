const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix, token } = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('tkoppop is live!');
});

client.on('message', message => {
    	if(!message.content.startsWith(prefix)||message.author.bot) return;
    	const args = message.content.slice(prefix.length).split(/ +/);
    	const command = args.shift().toLowerCase();
    	if(command ==='clear'){
        	try {
            		client.commands.get(command).execute(message, args);
        	} catch (error) {
            		console.error(error);
            		message.reply('there was an error trying to execute that command!');
        	}
    	} else if (command === 'user-info') {
		try {
<<<<<<< HEAD
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
	} 
});

client.login(token);

=======
            		client.commands.get(command).execute(message, args);
        	} catch (error) {
            		console.error(error);
            		message.reply('there was an error trying to execute that command!');
        	}
	}
});
client.login(token);
>>>>>>> 52d74a43b13ff6078ee708f2944b8359af3557e9
