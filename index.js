const Discord = require('discord.js')
const client = new Discord.Client()

let admins = ["551720745940811789", "636537410527821855"]

client.on('ready', () => {
    console.log('Запустился бот ' + client.user.tag)
})
client.on('message', msg => {
    if(msg.content == '!giveway'){
        if(!admins.includes(msg.author.id)) return;
        msg.delete()
        function randuser() {
            return msg.guild.members.cache.filter(n => {return n.user.bot == false && n.user.id != msg.author.id}).random();
        }
        let args = msg.content.split(' ')
        if(!args[1]) return msg.channel.send('Укажите, что вы розыгрываете!')
        let winner = randuser()
        const embed = new Discord.MessageEmbed()
        .setTitle('Конкурс')
        .addField('Приз', args.slice(1), true)
        .addField('Победитель', winner.user.tag, true)
        .setColor('#33ff33')
        msg.channel.send(embed)
    }
})
client.login("TOKEN")