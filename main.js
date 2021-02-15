const Discord = require('discord.js');
const client = new Discord.Client();
const perfix = '*'
const fs = require('fs');

const memberCounter = require('./counters/member_counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Logged in (${client.user.username})`);
    memberCounter(client);
});

client.on("ready", () => {
    function YousamPower() {
      let hungry = ["Create By SeS" , "  *play  " , "Version 0.0.1"]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "WATCHING"});
    }; setInterval(YousamPower, 2000)
  });

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('808646159144714320').send(`<@${guildMember.user.id}> Khosh oomadi Be Server Ma Hatman Maro be Dostanet Moarefi Kon`)
});

client.on('message', message =>{
    if(!message.content.startsWith(perfix) || message.author.bot) return;

    const args = message.content.slice(perfix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'invite'){
        client.commands.get('invite').execute(message, args, Discord);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    }
});

client.login('')