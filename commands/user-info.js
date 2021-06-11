module.exports = {
    name:'user-info',
    description:"Tells the user his/her own information",
    async execute(message,args) {
        return message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
}