const { MessageEmbed
} = require('discord.js')
const botinfo = require('./botinfo.json')

module.exports = {
    name : 'help',
    description : 'ini adalah commands help',
    execute(msg){
        const helpembed = new MessageEmbed()
            .setTitle('Bot Commands')
            .addField('Prefix',botinfo.prefix)
            .addField('Ping', 'Ngeping untuk Bot')
            .addField('Help', 'Untuk Bot Commands')
            .addField('info', 'Bot Information')
            .addField('clear <count>','Clear Message')
            .addField('delay', 'Delay Message Bot')
            .addField('cooldown', 'Cooldown Message')
            .addField('checkAdmin', 'Command untuk mengecek apa kalian admin atau bukan')
            .addField('kick', 'Command untuk mengkick user lain jika kalian itu seorang admin')
            .addField('ban', 'Command untuk membanned user lain jika kalian seorang admin')
            .addField('Promo', 'Command untuk menjalankan sebuah promo')
            .addField('play','Command untuk memulai daripada music daripada bot')
            .addField('leave','Command untk mengeluarkan bot daripada music kita')
            .setColor('05dfd7')
            .setFooter(botinfo.bot_name+ ' ' + botinfo.version);
            msg.channel.send(helpembed);
    }
}

