let promo;
module.exports = {
    name: 'promo',
    description : 'Ini adalah command untuk memulai promo',
    execute(msg,args){
        if(args[1] === 'start'){
            msg.reply('Bot menjalankan promo')
            promo = setInterval(() => {
                msg.channel.send('Selamat bergabung di server discord Saut Manurung server jangan lupa follow github saya https://github.com/sautmanurung1')
            }, 1000 * 10);
        } else if(args[1] === 'stop'){
            msg.reply('Bot berhenti menjalankan promo');
            clearInterval(promo);
        } else{
            msg.reply('Masukkan Command yang kedua (Start/stop)')
        }
    }
}