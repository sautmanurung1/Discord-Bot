module.exports = {
    name: 'cooldown',
    description : 'Ini adalah Testing Fitur Cooldown',
    execute(msg){
        if(cooldown.has(msg.author.id)) {
            msg.reply('Tunggu 10 Detik untuk bisa kembali menggunakan command ini');
        } else{
            msg.channel.send('Mencoba Fitur Cooldown');
            cooldown.set(msg.author.id);
            setTimeout(()=>{
                cooldown.delete(msg.author.id);
            },1000*10);
        }
    }
}