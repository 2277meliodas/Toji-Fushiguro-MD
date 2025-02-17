export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
if (m.chat === '120363322713003916@newsletter') return !0
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🌷↛ 𝐻𝑜𝑙𝑖𝑖𝑖𝑖 @${m.sender.split`@`[0]}, 𝑚𝑖 𝑐𝑟𝑒𝑎𝑑𝑜𝑟 𝑎 𝑑𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑑𝑜 𝑙𝑜𝑠 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑒𝑛 𝑙𝑜𝑠 𝑐ℎ𝑎𝑡𝑠 𝑝𝑟𝑖𝑣𝑎𝑑𝑜𝑠, 𝑝𝑜𝑟.𝑙𝑜 𝑞𝑢𝑒 𝑚𝑒 𝑖𝑛𝑑𝑖𝑐𝑎𝑟𝑎 𝑞𝑢𝑒 𝑠𝑒𝑟𝑎𝑠 𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑑𝑜, 𝑠𝑖 𝑞𝑢𝑖𝑒𝑟𝑒𝑠 𝑢𝑠𝑎𝑟 𝑙𝑎𝑠 𝑓𝑢𝑛𝑐𝑖𝑜𝑛𝑒𝑠 𝑑𝑒 𝑙𝑎 𝑏𝑜𝑡, 𝑡𝑒 𝑖𝑛𝑣𝑖𝑡𝑜 𝑎 𝑞𝑢𝑒 𝑡𝑒 𝑢𝑛𝑎𝑠 𝑎𝑙 𝑔𝑟𝑢𝑝𝑜 𝑜𝑓𝑖𝑐𝑢𝑎𝑙 𝑑𝑒 𝑙𝑎 𝑏𝑜𝑡↛ https://chat.whatsapp.com/EzYop3aYndpFhOerZOUy1A.\n\n${gp4}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
