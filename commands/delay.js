module.exports = {
    name: 'delay',
    description : 'Ini adalah Testing Fitur Delay',
    execute(msg){
        setTimeout(()=> {
            msg.channel.send('Mencoba Fitur Delay');
        },1000 * 5);
    }
}