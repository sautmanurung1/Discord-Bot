const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();
module.exports = {
    name: 'music',
    description : 'Ini adalah command untuk menghidupkan music',
    async execute(msg,args){
        const voice_channel = msg.member.voice.voice_channel;
        if(!voice_channel) return msg.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(msg.client.user);
        if(!permissions.has('CONNECT')) return msg.channel.send('You dont have the correct permissions');
        if(!permissions.has('SPEAK')) return msg.channel.send('You dont have the correct permissions');

        const server_queue = queue.get(msg.guild.id);

        if(args[1] === 'play'){
            if(!args[1].length) return msg.channel.send('You need to send the second argument!');
            let song = {};


            if(ytdl.validateURL(args[2])){
                const song_info = await ytdl.getInfo(args[2]);
                song = { title : song_info.videoDetails.title, url : song_info.videoDetails.video_url };
            } else{
                const video_finder = async(query) =>{
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[2] : null;
                }

                const video = await video_finder(args[2].join(' '));
                if(video){
                    song = { title : video.title, url: video.url}
                } else{
                    msg.channel.send('Error finding Error');
                }
            }
        }

        if(!server_queue){
            const queue_constructor = {
                voice_channel :voice_channel,
                text_channel : msg.channel,
                connection : null,
                song: []
            }
            queue.set(msg.guild.id,queue_constructor);
            queue_constructor.songs.push(song);

            try{
                const connection = await voice_channel.join();
                queue_constructor.connection = connection;
                video_player(msg.guild, queue_constructor.songs[2]);
            } catch{
                queue.delete(msg.guild.id);
                msg.channel.send('there was an error connecting!');
            }
        } else {
            server_queue.songs.push(song);
            return msg.channel.send(`:thumbsup: **${song.title}** add to queue! `);
        }
    }
}

const video_player = async(guild, song) => {
    const song_queue = queue.get(guild.id);

    if(!song){
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek : 0, volume: 0.5})
    .on('finish', ()=> {
        song_queue.songs.shift();
        video_player(guild,song_queue.songs[2]);
    });
    await song_queue.text_channel.send(`Now Playing :notes: **${song.title}**`)
}