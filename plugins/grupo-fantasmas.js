import { areJidsSameUser } from '@whiskeysockets/baileys'

var handler = async (m, { conn, text, participants, args, command }) => {

let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for (let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if (global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time))

switch (command) {

case 'fantasmas': 
if(total == 0) return conn.reply(m.chat, `🌷↛ 𝐸𝑠𝑡𝑒 𝑔𝑡𝑢𝑝𝑜 𝑒𝑠 𝑎𝑐𝑡𝑖𝑣𝑜, 𝑛𝑜 𝑒𝑥𝑡𝑖𝑠𝑡𝑒𝑛 𝑓𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠_°`, m, fake, ) 
m.reply(`🍡↛ *𝑅𝑒𝑣𝑖𝑠𝑖𝑜𝑛 𝑑𝑒 𝑖𝑛𝑎𝑐𝑡𝑖𝑣𝑜𝑠* ↚🌷\n\n🍨↛ *𝐿𝑖𝑠𝑡𝑎𝑑𝑜 𝑑𝑒 𝑙𝑜𝑠 𝑓𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠* ↚👻\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*📝 NOTA:*\nEsto no es al 100% acertado, el bot inicia el conteo de mensajes a partir de que se active en este número`, null, { mentions: sider }) 
break

case 'kickfantasmas':  
if(total == 0) return conn.reply(m.chat, `🌷↛ 𝐸𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜 𝑒𝑠 𝑎𝑐𝑡𝑖𝑣𝑜, 𝑑𝑒𝑠𝑔𝑟𝑎𝑐𝑢𝑎𝑑𝑎𝑚𝑒𝑛𝑡𝑒 𝑛𝑜 𝑡𝑖𝑒𝑛𝑒 𝑓𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠_°`, m, fake, ) 
await m.reply(`🌷↛ *𝐸𝑥𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑙𝑜𝑠 𝑓𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠*\n\n🍡↛ *𝐿𝑖𝑠𝑡𝑎 𝑑𝑒 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑐𝑖𝑜𝑚 𝑑𝑒 𝑓𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n⚠️ _El bot eliminara a los usuarios de la lista mencionada cada 10 segundos_`, null, { mentions: sider }) 
await delay(1 * 10000)
let chat = global.db.data.chats[m.chat]
chat.welcome = false
try {

let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
{
let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedGhost.concat(res)
await delay(1 * 10000)
}} finally{
chat.welcome = true
}
break            
}

}
handler.tags = ['grupo']
handler.command = ['fantasmas', 'kickfantasmas']
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.fail = null

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
