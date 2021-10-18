/**
  * @INFO
  * @github github.com/JKTheRipperTH
  * @discord discord.gg/YFvPG8tHav
  * @author 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218 & KvFunction#1449 & ยูทูป YoMax#8388
  * Thank for code by : 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218
  * แก้ไขเอาเอง ขี้เกียจทำต่อเพราะของฟรีไอ้โง่!!
  */
 
const fs = require("fs")
const Discord = require('discord.js')

module.exports = (client) => {
    const load = dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'))
        for (let file of commands) {
            let pulls = require(`../commands/${dirs}/${file}`)
            client.commands.set(pulls.config.name, pulls)
            if (pulls.config.aliases) pulls.config.aliases.forEach(a => client.aliasess.set(a, pulls.config.name))
        }
    };
    [].forEach(x => load(x))
}