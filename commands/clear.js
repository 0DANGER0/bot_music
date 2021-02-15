module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async  execute(message, args) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            if (!args[0]) return message.reply("Lotfan Yek Add Vared Konid!");
 
            if(isNaN(args[0])) return message.reply("Lotfan Yek Add Vagheii Vared Konid!");
 
            if(args[0] > 100) return message.reply("Bish Tar Az 100 Ta Momken nist!");
        
            if(args[0] < 1) return message.reply("Lotfan Yek Add Beyn 1 Ta 100!");
 
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages),
                message.reply(`\n\nShoma ${args[0]} Payam Pak Kardid`)
            });

            
        } else {
            message.reply('Shoma Permissions Kafi Nadarid')
        }
    }
}   