/**
  * @INFO
  * @github github.com/JKTheRipperTH
  * @discord discord.gg/YFvPG8tHav
  * @author 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218 & KvFunction#1449 & ยูทูป YoMax#8388
  * Thank for code by : 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218
  * แก้ไขเอาเอง ขี้เกียจทำต่อเพราะของฟรีไอ้โง่!!
  */
 
const Discord = require('discord.js')
const fs = require("fs")
const formatter = new Intl.NumberFormat('en')

module.exports = {
    config: {
        name: "money",
        aliases: ["bal"]
    },
    run: async (client, message, args, economy) => {

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gang.json`, "utf8"))
        let guild_c = JSON.parse(fs.readFileSync(`${guild_file}/config.json`, "utf8"))

        let gang = guild_config.gang

        let currency = client.emojis.cache.get(guild_c.currency)
		
        function bal(name) {
            let money = new Discord.MessageEmbed()
                ///.setColor('03a9f4')
                .setTimestamp()
                .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                .addField('ธนาคารเเก๊ง', `${formatter.format(name.economy_money)}`, 'บาท')

            return message.channel.send(money)
        }

        if (!args[0]) {
            if (message.member.roles.cache.has(gang.g1.id)) {
                bal(gang.g1)
            }

            else if (message.member.roles.cache.has(gang.g2.id)) {
                bal(gang.g2)
            }

            else if (message.member.roles.cache.has(gang.g3.id)) {
                bal(gang.g3)
            }

            else if (message.member.roles.cache.has(gang.g4.id)) {
                bal(gang.g4)
            }

            else if (message.member.roles.cache.has(gang.g5.id)) {
                bal(gang.g5)
            }

            else if (message.member.roles.cache.has(gang.g6.id)) {
                bal(gang.g6)
            }

            else if (message.member.roles.cache.has(gang.g7.id)) {
                bal(gang.g7)
            }

            else if (message.member.roles.cache.has(gang.g8.id)) {
                bal(gang.g8)
            }

            else if (message.member.roles.cache.has(gang.g9.id)) {
                bal(gang.g9)
            }

            else if (message.member.roles.cache.has(gang.g10.id)) {
                bal(gang.g10)
            }

            else if (message.member.roles.cache.has(gang.g11.id)) {
                bal(gang.g11)
            }

            else if (message.member.roles.cache.has(gang.g12.id)) {
                bal(gang.g12)
            }

            else if (message.member.roles.cache.has(gang.g13.id)) {
                bal(gang.g13)
            }

            else if (message.member.roles.cache.has(gang.g14.id)) {
                bal(gang.g14)
            }

            else if (message.member.roles.cache.has(gang.g15.id)) {
                bal(gang.g15)
            }
        }

        if (args[0] == 'g1') {
            bal(gang.g1)
        }

        else if (args[0] == 'g2') {
            bal(gang.g2)
        }

        else if (args[0] == 'g3') {
            bal(gang.g3)
        }

        else if (args[0] == 'g4') {
            bal(gang.g4)
        }

        else if (args[0] == 'g5') {
            bal(gang.g5)
        }

        else if (args[0] == 'g6') {
            bal(gang.g6)
        }

        else if (args[0] == 'g7') {
            bal(gang.g7)
        }

        else if (args[0] == 'g8') {
            bal(gang.g8)
        }

        else if (args[0] == 'g9') {
            bal(gang.g9)
        }

        else if (args[0] == 'g10') {
            bal(gang.g10)
        }

        else if (args[0] == 'g11') {
            bal(gang.g11)
        }

        else if (args[0] == 'g12') {
            bal(gang.g12)
        }

        else if (args[0] == 'g13') {
            bal(gang.g13)
        }

        else if (args[0] == 'g14') {
            bal(gang.g14)
        }

        else if (args[0] == 'g15') {
            bal(gang.g15)
        }
    }
}