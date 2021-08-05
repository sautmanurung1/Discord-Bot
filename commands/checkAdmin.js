module.exports = {
    name: 'checkAdmin',
    description : 'Ini adalah command untuk mengecek jika role nya admin',
    execute(msg){
        const role = msg.member.roles.cache.find(r => r.name === 'pemilik')
            if(role){
                msg.channel.send('Halo Pemilik')
            } else{
                msg.channel.send('Kamu Bukan Pemilik')
            }
    }
}