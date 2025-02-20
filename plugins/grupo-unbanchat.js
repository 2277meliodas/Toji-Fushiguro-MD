let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍷l🥢 *¡Este chat no está registrado!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '🍷 Toji-Fushiguro-MD  *no está desactivado  en este chat!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '*🥢↛Toji-Fushiguro-MD ya esta activado en de este chat ∆*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['on','activar','desbanchat']
handler.admin = true 
handler.botAdmin = true
handler.group = true

export default handler
