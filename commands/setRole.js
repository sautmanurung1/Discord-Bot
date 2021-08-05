module.exports = {
    name: 'setRole',
    description : 'Ini adalah command untuk mensetting role',
    execute(msg){
        if(msg.member.roles.cache.find(r => r.name === 'pemilik')){
            const user = msg.mentions.users.first();
            if(user){
                const userSet = msg.guild.member(user);
                if(userSet){
                    const role = msg.guild.roles.cache.find(r => r.name === 'anggota');
                    const member = msg.guild.members.cache.find(member => member.id === userSet.id);
                    member.roles.add(role.id);
                    msg.reply(`Berhasil menambahkan ${member} Sebagai ${role}`);
                }
            } else {
                msg.reply('Silahkan mentions user yang ingin diberikan role');
            }
        } else {
            return msg.reply('Kamu tidak bisa menggunakan command ini');
        }
    }
}