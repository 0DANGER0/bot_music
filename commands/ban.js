module.exports = {
    name: 'ban',
    description: "ban member discord",
    execute(message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.reply(`Shoma ${memberTarger} ra Ban Kardid!`);
            }else{
                message.channel.send('Shoma Nemitavanid In Shakhs ra Ban konid');
            }
        } else {
            message.reply('Shoma Permissions Kafi Nadarid')
        }
    }
}