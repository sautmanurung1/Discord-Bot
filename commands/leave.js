module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(msg) {
        const voiceChannel = msg.member.voice.channel;
        if(!voiceChannel) return msg.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await msg.channel.send('Leaving channel :smiling_face_with_tear:')
    }
}