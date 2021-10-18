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

module.exports = {
    config: {
        name: "gangs",
        aliases: []
    },
    run: async (client, message, args, economy) => {

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gangs.json`, "utf8"))
        let gangs = guild_config.gangs
        let check_member_role = message.member.roles.cache
        let get_role = message.guild.roles.cache
        const r1 = get_role.get(gangs.leader).name, r2 = get_role.get(gangs.coleader).name, r3 = get_role.get(gangs.adviser).name
        const g1 = get_role.get(gangs.g1.id), g2 = get_role.get(gangs.g2.id), g3 = get_role.get(gangs.g3.id);

        if (!args[0]) { //แสดงรายการคำสั่ง
            return message.channel.send(new Discord.MessageEmbed()
                .setColor('#2F3136')
                .addField(`**คู่มือคำสั่งแก๊ง**`, `
**${client.prefix}gangs list**: แสดงรายชือแก๊ง
**${client.prefix}gangs add**: เพื่มสมาชิกเข้าแก๊ง
**${client.prefix}gangs remove**: ลบมาชิกออกจากแก๊ง
**${client.prefix}gangs leave**: ออกจากแก๊ง
`)
                .setFooter(`ใช้คำสั่งโดย ${message.author.tag}`, message.author.avatarURL()))
        }

        const gangs_list_0 = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle('**รายชื่อแก๊ง**')
        const gangs_list_1 = new Discord.MessageEmbed()
            ////.setColor(g1.color.toString(16).padStart(6, '0'))

            .setColor('#2F3136')
            .addField('1. แก๊ง', `\`\`\`${g1.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gangs.g1.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gangs.g1.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g1.members.size}/${gangs.g1.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gangs.g1.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gangs.g1.png)


        const gangs_list_2 = new Discord.MessageEmbed()
            /// .setColor(g2.color.toString(16).padStart(6, '0'))

            .setColor('#2F3136')
            .addField('2. แก๊ง', `\`\`\`${g2.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gangs.g2.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gangs.g2.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g2.members.size}/${gangs.g2.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gangs.g2.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gangs.g2.png)

        const gangs_list_3 = new Discord.MessageEmbed()
            /// .setColor(g2.color.toString(16).padStart(6, '0'))

            .setColor('#2F3136')
            .addField('3. แก๊ง', `\`\`\`${g3.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gangs.g3.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gangs.g3.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g3.members.size}/${gangs.g3.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gangs.g3.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gangs.g3.png)



        function gangs_list() {//กำหนดการแสดงแก๊ง
            return message.channel.send(gangs_list_0)
                , message.channel.send(gangs_list_1)
                , message.channel.send(gangs_list_2)
                , message.channel.send(gangs_list_3)

        }

        if (args[0] == 'list') { //กำหนดการแสดงแก๊ง
            if (!args[1]) return gangs_list()
            if (args[1] == 'g1') return message.channel.send(gangs_list_1)
            else if (args[1] == 'g2') return message.channel.send(gangs_list_2)
            else if (args[1] == 'g3') return message.channel.send(gangs_list_3)
        }

        if (message.channel.id !== '898493302784032799') return; //ห้องที่สามารถใช้งานคำสั่งได้

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[1])

        if (args[0] == 'add') { //เพื่มสมาชิก
            if (check_member_role.has(gangs.leader) || check_member_role.has(gangs.coleader) || check_member_role.has(gangs.adviser)) {

                if (!user) return message.channel.send('กรุณาแท็กสมาชิก')
                let check_user_role = user.roles.cache
                if (check_user_role.has(gangs.g1.id) || check_user_role.has(gangs.g1.id) || check_user_role.has(gangs.g3.id))
                    return message.channel.send(`<@${user.id}> มีแก๊งอยู่แล้ว`)

                function add_member(id, limit) {
                    if (get_role.get(id).members.size > limit) return message.channel.send(`ตอนนี้แก๊งของคุณมีสมาชิกครบ ${limit} แล้ว`)
                    return user.roles.add(id), message.channel.send(`เพื่มสมาชิก <@${user.id}> สำเร็จ`)
                }

                //ส่วนของการตรวจสอบและให้ยศ
                if (check_member_role.has(gangs.g1.id)) {
                    add_member(gangs.g1.id, gangs.g1.limit)
                }

                else if (check_member_role.has(gangs.g2.id)) {
                    add_member(gangs.g2.id, gangs.g2.limit)
                }

                else if (check_member_role.has(gangs.g3.id)) {
                    add_member(gangs.g3.id, gangs.g3.limit)
                }
            }
            else return message.channel.send(`<@${message.member.id}> คุณไม่มีสิทธิในการใช้คำสั่งนี้`)
        }

        if (args[0] == 'remove') { //นำสมาชิกออก
            if (check_member_role.has(gangs.leader)) {

                if (!user) return message.channel.send('กรุณาแท็กสมาชิก')

                let check_user_role = user.roles.cache

                if (check_user_role.has(gangs.leader) === gangs.leader) {

                    return message.channel.send(`คุณไม่สามารถนำ${r1}ออกจากแก๊งได้`)
                }



                function remove_member(id) {
                    if (!check_user_role.has(id)) return message.channel.send(`<@${user.id}> ไม่ได้อยู่ในแก๊ง`)
                    return user.roles.remove(id), message.channel.send(`นำ <@${user.id}> ออกจากแก๊งสำเร็จ`)
                }

                //ส่วนของการตรวจสอบและปลดยศ
                if (check_member_role.has(gangs.g1.id)) {
                    remove_member(gangs.g1.id)
                }
                else if (check_member_role.has(gangs.g2.id)) {
                    remove_member(gangs.g2.id)
                }
                else if (check_member_role.has(gangs.g3.id)) {
                    remove_member(gangs.g3.id)
                }
            }
            else return message.channel.send(`<@${message.member.id}> คุณไม่มีสิทธิในการใช้คำสั่งนี้`)
        }

        if (args[0] == 'leave') { //ออกจากแก๊ง
            if (check_member_role.has(gangs.leader)) return message.channel.send(`<@${message.member.id}> คุณออกจากแก๊งของตัวเองไม่ได้`)
            message.member.roles.remove(gangs.coleader)
            message.member.roles.remove(gangs.adviser)
            message.member.roles.remove(gangs.g1.id)
            message.member.roles.remove(gangs.g2.id)
            message.member.roles.remove(gangs.g3.id)
            return message.channel.send(`<@${message.member.id}> ออกจากแก๊งสำเร็จ`)
        }

    }
}