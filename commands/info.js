const { MessageEmbed
        } = require('discord.js')
const botinfo = require('./botinfo.json')
module.exports = {
    name : 'info',
    description : 'ini adalah commands info',
    execute(msg, args){
        if(!args[1]){
            const infoEmbed = new MessageEmbed()
            .setTitle('Bot Information')
            .setDescription('Masukkan salah satu perintah setelah mengetikkan kata info')
            .addField('author', 'Bot Author Information')
            .addField('bot', 'All About Bot Information')
            .setFooter(botinfo.bot_name +' '+ botinfo.version);
            msg.channel.send(infoEmbed);
        } else{
            if(args[1] === 'author'){
                const botAuthor = new MessageEmbed()
                .setTitle('Bot Author')
                .addField('Author ', botinfo.author, true)
                .addField('Version ', botinfo.version, true)
                .setColor('FA8072')
                .setFooter(botinfo.bot_name +' '+ botinfo.version)
                .setDescription('Bot ini dibuat oleh saut manurung');
                msg.channel.send(botAuthor)
            } else if(args[1] === 'bot'){
                const botInfor= new MessageEmbed()
                .setTitle('Bot Information')
                .setDescription('Bot ini dibuat menggunakan bahasa pemrograman Node JS, dan bagi yang berkenan untuk mengembangkan bot ini dapat melihat di github saya')
                .addField('Language : ', botinfo.bahasa, true)
                .addField('Version : ', botinfo.version, true)
                .setFooter(botinfo.bot_name +' ' + botinfo.version)
                .setColor('0F52BA');
                msg.channel.send(botInfor)
            }
            else {
                msg.channel.send('perintah yang anda masukkan tidak ditemukan')
            }
        }
    }
}