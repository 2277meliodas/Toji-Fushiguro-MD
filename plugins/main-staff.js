let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `✨ *EQUIPO DE AYUDANTES* ✨
👑 *Dueño* ${creador}
🍬 *Bot:* ${botname}
⚜️ *Versión:* ${vs}
📚 *Libreria:* ${libreria} ${baileys}

🪐 *Creador:*

☁️ ⁱᵃᵐ|Lm' Avaricia
🔖 *Rol:* Creador
👾 *GitHub:* https://github.com/2277meliodas

🍃 *Colaboradores:*


☘️ I'm Fz' (Tesis)
🔖 *Rol:* Developer
👾 *GitHub:* https://github.com/FzTeis

 👾 Deylin 
🔖 *Rol:* Developer
👾 *GitHub:* https://github.com/deylinqff


🫧  ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜 
🔖 *Rol:* Developer 
👾 *GitHub:*https://github.com/The-King-Destroy

🌪️ 𝓛𝓮𝓰𝓷𝓪
🔖 *Rol:* Moderador 
👾 *GitHub:* https://github.com/Legna-chan
  `
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `✨ Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler