let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => icons) 
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return conn.reply(m.chat, `🌷↛ *𝐸𝑙𝑖𝑗𝑎 𝑙𝑎 𝑜𝑝𝑐𝑖𝑜𝑛 𝑝𝑎𝑟𝑎 𝑐𝑜𝑛𝑓𝑖𝑔𝑢𝑟𝑎𝑟 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜*\n\n𝑃𝑜𝑟 𝑒𝑗𝑒𝑚𝑝𝑙𝑜:\n*✰ #${command} abrir*\n*✰ #${command} cerrar*\n*✰ #${command} close*\n*✰ #${command} open*`, m)
await conn.groupSettingUpdate(m.chat, isClose)

if (isClose === 'not_announcement'){
m.reply(`🌷↛ *𝑌𝑎 𝑝𝑢𝑒𝑑𝑒𝑛 𝑒𝑠𝑐𝑟𝑖𝑏𝑖𝑟 𝑒𝑛 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜_°*`)
}

if (isClose === 'announcement'){
m.reply(`🌷↛ *𝑆𝑜𝑙𝑜 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠, 𝑝𝑢𝑒𝑑𝑒𝑛 𝑒𝑠𝑐𝑟𝑖𝑏𝑖𝑟 𝑒𝑛 𝑒𝑠𝑡𝑒 𝑔𝑡𝑢𝑝𝑜_°*`)
}}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true
export default handler
