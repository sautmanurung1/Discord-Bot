module.exports = {
    name: 'kick',
    description : 'Ini adalah command untuk mengkick user',
    execute(msg){
        if(msg.member.roles.cache.find(r => r.name === 'pemilik')){
            const userKick = msg.mentions.users.first();

            if(userKick){
                const memberKick = msg.guild.member(userKick)

                if(memberKick){
                    memberKick.kick('Kamu di Kick dari server ').then(() => {
                        msg.channel.bulkDelete(1);
                        msg.reply(`${userKick.tag} berhasil di kick`);
                    }).catch(err => {
                        msg.channel.bulkDelete(1);
                        msg.reply('Saya tidak bisa melakukan kick terhadap member ini');
                        console.log(err);
                    });
                }
            } else{
                msg.channel.bulkDelete(1)
                msg.reply('User yang anda tag tidak ada dalam server ini')
            }
        } else{
            msg.channel.bulkDelete(1);
            return msg.channel.send('Kamu bukan admin, kamu tidak memiliki akses untuk melakukan kick');
        }
    }
}