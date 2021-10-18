/**
  * @INFO
  * @github github.com/JKTheRipperTH
  * @discord discord.gg/YFvPG8tHav
  * @author 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218 & KvFunction#1449 & ยูทูป YoMax#8388
  * Thank for code by : 𝐀𝐥𝐨𝐧𝐞#8475 & Solart#6590 & [SEVEN]#6218
  * แก้ไขเอาเอง ขี้เกียจทำต่อเพราะของฟรีไอ้โง่!!
  */
 
const Discord = require("discord.js")
const client = new Discord.Client({ disableMentions: 'everyone' })
const fs = require("fs");
client.config = JSON.parse(fs.readFileSync(`./config.json`, "utf8"));
require("dotenv").config()
const unbapi = require('unb-api')
const economy = new unbapi.Client(client.config.economy)

client.prefix = client.config.prefix;

["aliases", "commands"].forEach(x => client[x] = new Discord.Collection());
["command"].forEach(x => require(`./handlers/${x}`)(client));

client.on('ready',() => {
    console.log(`online as ${client.user.tag}`)
}) 

client.on('messagee', async message => {

    if (message.author.bot || message.channel.type === "dm") return;

    if (!message.content.startsWith(client.prefix)) return;

    let argss = message.content.slice(client.prefix.length).trim().split(/ +/);
    let cmd = argss.shift().toLowerCase();

    client.noneperms = `<@${message.author.id}> ในการใช้งานคำสั่งนี้จำเป็นต้องมีสิทธิ์:`

    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

    if (commandfile) commandfile.run(client, message, args, economy)

})

client.login(process.env.TOKEN);

