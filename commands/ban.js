module.exports = {
    name: 'ban',
    description : 'Ini adalah command untuk ngeban user',
    execute(msg){
        const role = msg.member.roles.cache.find(r => r.name === 'pemilik')
            if(!role){
                return msg.reply('Kamu bukan seorang pemilik, kamu tidak memiliki akses terhadap command ini');
            } else{
                const userBan = msg.mentions.users.first();

                if(userBan){
                    const memberBan = msg.guild.member(userBan)

                    if(memberBan){
                        memberBan.ban({
                            reason : 'Kamu berkelakuan tidak baik'
                        }).then(() => {
                            msg.reply(`${userBan.tag} sudah berhasil di banned`)
                        }).catch(console.error);
                    } else{
                        msg.reply('user tersebut tidak ada di dalam server Discord ini')
                    }
                } else{
                    msg.reply('Silahkan mention member yang ingin di banned');
                }
                
            }
    }
}