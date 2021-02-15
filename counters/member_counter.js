const { Client } = require("discord.js");

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('808640301224558662');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('810579073847787540');
        channel.setName(`member:${memberCount.toLocaleString()}`);
        console.log('Updating Member Count')
    }, 10000);
}