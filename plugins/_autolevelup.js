import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';

let handler = m => m;
handler.before = async function (m, { conn, usedPrefix }) {

    if (!db.data.chats[m.chat].autolevelup) return;
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');
    let userName = m.pushName || 'Anónimo';
    let user = global.db.data.users[m.sender];
    let chat = global.db.data.chats[m.chat];
    
    if (!chat.autolevelup) return;

    let level = user.level;
    let before = user.level * 1;
    
    while (canLevelUp(user.level, user.exp, global.multiplier)) 
        user.level++;
    
if (before !== user.level) {
    m.reply(`🍡𝑭𝑬𝑳𝑰𝑪𝑰𝑫𝑨𝑫𝑬𝑺🍨\n\nდ Nivel Anterior » *${before}*\n♡ Nivel Actual » *${user.level}*\n✦ Fecha » *${moment.tz('America/Bogota').format('DD/MM/YY')}*\n\n> *\`¡Parece que al fin lograste subir de nivel! Qué raro, pensé que nunca lo lograrías. Bien por ti, pero no te emociones demasiado.\`*`);
}
        let especial = 'coin';
        let especial2 = 'exp';
        let especialCant = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
        let especialCant2 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;

        if (user.level % 5 === 0) {
            let chtxt = `♛ *Usuario:* ${userName}\n★ *Nivel anterior:* ${before}\n✰ *Nivel actual:* ${user.level}\n\n⛁ *Recompensa por alcanzar el nivel ${user.level}:*\n- *${especialCant} ⛁ ${especial}*\n- *${especialCant2} ✰ ${especial2}*`;
            await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
                externalAdReply: {
                    title: "【 ✿ 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 ✿ 】",
                    body: '✎ ¡Un usuario ha alcanzado un nuevo nivel!',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    showAdAttribution: false,
                    renderLargerThumbnail: false
                }
            }}, { quoted: null });

            user[especial] += especialCant;
            user[especial2] += especialCant2;
        }
    }
};

export default handler;
