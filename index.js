const {Client,
    Collection
    }= require('discord.js');
const client = new Client();


const PREFIX = '!';


const fs = require ('fs')
const cooldown = new Collection();

const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of files) {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}

if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
client.on('ready', () => {
    console.log('BOT ONLINE OM GANTENG');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Saut Manurung Server',{
        type: "LISTENING"
    }).catch(console.error);

});

client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'lobby');
    const rule = member.guild.channels.cache.find(ch => ch.name === 'rule');
    if(!channel) return;
    if(member.guild.name === 'sautmanurung server'){
        channel.send(`Halo ${member}, Selamat datang di server Discord Saut Manurung, silahkan baca terlebih dahulu peraturan di channel ${rule}`);
    }
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(PREFIX)) return;
    let args = msg.content.substring(PREFIX.length).split(" ")

    switch (args[0]){
        case "ping":
            commands.get('ping').execute(msg);
            break;
        case "info":
            commands.get('info').execute(msg,args);
        break;
        case "help":
            commands.get('help').execute(msg);
            break;
        case "clear":
            commands.get('clear').execute(msg,args);
            break;
        case "delay":
            commands.get('delay').execute(msg);
            break;
        case "cooldown":
            commands.get('cooldown').execute(msg);
            break;
        case "checkAdmin":
            commands.get('checkAdmin').execute(msg);
            break;
        case "kick":
            commands.get('kick').execute(msg);
            break;
        case "ban":
            commands.get('ban').execute(msg);
            break;
    }
});

client.login(process.env.API_TOKEN);