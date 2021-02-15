/**module.exports = {
    name: 'invite',
    description: "send invite server",
    execute(message, args){
        message.channel.send('https://discord.gg/f54ea46dnU');
    }
}*/



module.exports = {
    name: 'invite',
    description: "send invite server",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Invite Server')
        .setURL('https://discord.gg/HCtWMHuJud')
        .setDescription('Baraye Copy Kardan Link Roye (Invite Server) Kelick Konid!')
        .setThumbnail(url='https://images-ext-2.discordapp.net/external/YxUfPzFKcFSpAa4Uec6C7FXzey_l4xAjlVABKbcaIE8/%3Fsize%3D1024/https/cdn.discordapp.com/icons/808640301224558662/5e9a7df6e838cc4a92870bf87d720ef4.png')
        message.channel.send(newEmbed);
    }
}

