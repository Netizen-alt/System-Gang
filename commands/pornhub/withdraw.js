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
        name: "withdraw",
        aliases: ["with"]
    },
    run: async (client, message, args, economy) => {

       /// if (message.channel.id !== '855334670585692191') return;
      ///  if(message.chanel.id !== '846371079492599808') return;

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gangss.json`, "utf8"))
        let guild_c = JSON.parse(fs.readFileSync(`${guild_file}/config.json`, "utf8"))

        let gangss = guild_config.gangss

        ///let currency = client.emojis.cache.get(guild_c.currency)
        //let check = client.emojis.cache.get('827064266858954792')
        //let wrong = client.emojis.cache.get('827064267198300170')

        if (message.member.roles.cache.has(gangss.leader) || message.member.roles.cache.has(gangss.coleader)) {

            if (!args[0]) return message.channel.send('พิมพ์คำสั่งผิดพลาด')

            async function withdraw(name) {
                let money = 0
                if (!Number(args[0])) return message.channel.send('พิมพ์คำสั่งผิดพลาด')
                money = Number(args[0])

                if (name.economy_money < money) {
                    let with_nomoney = new Discord.MessageEmbed()
                        .setColor('ef5350')
                        .setTimestamp()
                        .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                        .addField(`**${message.author.tag}**`,`❌ ไม่สามารถถอดได้ เพราะแก๊งของคุณมี ${formatter.format(name.economy_money)} บาท อยู่ในธนาคารแก๊ง`, true)
                    return message.channel.send(with_nomoney)
                }

                name.economy_money = name.economys_money - money

                await economy.editUserBalance(message.guild.id, message.member.id, { bank: money }, 'gangss economy')
                await fs.writeFile(`${guild_file}/gangs.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })

                let with_money = new Discord.MessageEmbed()
                    .setColor('66bb6a')
                    .setTimestamp()
                    .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                    .addField(`**${message.author.tag}**`,`✅ ถอนเงิน ${formatter.format(money)} บาท ออกจากแก๊ง`, true)
                return message.channel.send(with_money)
            }

            if (message.member.roles.cache.has(gangss.g1.id)) {
                withdraw(gangss.g1)
            }

            else if (message.member.roles.cache.has(gangss.g2.id)) {
                withdraw(gangss.g2)
            }

            else if (message.member.roles.cache.has(gangss.g3.id)) {
                withdraw(gangsss.g3)
            }
        }
        else return message.channel.send(`<@${message.member.id}> ⛔ คำสั่งนี้ใช้สำหรับหัวหน้าแก๊ง`)
    }
}