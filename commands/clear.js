module.exports = {
    name : 'clear',
    description : 'ini adalah command clear chat',
    execute(msg,args){
        const role = msg.member.roles.cache.find(r => r.name === 'pemilik')
        if(role){
            if(!args[1]){
                return msg.reply('Masukkan jumlah chat yang ingin dihapus');
            }
            else{
                msg.channel.bulkDelete(args[1]);
            }
        } else {
            msg.reply('Kamu bukan bagian dari pemilik jadi kamu tidak bisa menghapus chat nya')
        }
    }
}