import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad.....*

- ${namegrupo}
*❀* ${gp1}

- ${namecomu}
*❀* ${comunidad1}

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

⚘ Enlace anulado? entre aquí! 

- ${namechannel}
*❀* ${channel}

- 𝗍᥆ȷі-𝖿ᥙsһіgᥙr᥆-grᥙ⍴᥆ ძᥱ s᥆⍴᥆r𝗍ᥱ
*❀* ${channel2}

> ${dev}`

await conn.sendFile(m.chat, avatar, "yuki.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']
export default handler
