/**
  * @INFO
  * @github github.com/JKTheRipperTH
  * @discord discord.gg/YFvPG8tHav
  * @author 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218 & KvFunction#1449 & ยูทูป YoMax#8388
  * Thank for code by : 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218
  * แก้ไขเอาเอง ขี้เกียจทำต่อเพราะของฟรีไอ้โง่!!
  */
 
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "ping",
        aliases: [],
        category: "core"
    },
    run: async (client, message, args) => {
        let msg = await message.channel.send('**กำลังโหลดข้อมูล...**')
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.color)
            .setAuthor(client.user.username, message.guild.iconURL())
            .addField('ค่าความหน่วง ', `**${msg.createdTimestamp - message.createdTimestamp} ms!**`, true)
            .addField('ความเร็ว ', `**${Math.round(client.ws.ping)} ms!**`, true)
            .setTimestamp()
            .setFooter(`ใช้คำสั่งโดย ${message.author.tag}`, message.author.avatarURL())

        return msg.edit('', embed)
    }
}