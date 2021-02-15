module.exports = {
    name: 'kick',
    description: "kick member discord",
    execute(message, args){
        if(message.member.permissions.has("ADMINISTRATOR")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.reply(`Shoma ${memberTarger} ra Kick Kardid!`);
            }else{
                message.channel.send('Shoma Nemitavanid In Shakhs ra Kick konid');
            }
        } else {
            message.reply('Shoma Permissions Kafi Nadarid')
        }
    }
}