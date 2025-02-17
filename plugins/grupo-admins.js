const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/Grupo.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `» ${pesan}`;
  const text = `『🍡』𝐴𝑑𝑚𝑖𝑛𝑠 𝑎𝑐𝑡𝑢𝑎𝑙𝑒𝑠 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜↚:  
  
${listAdmin}

🌷↛ 𝑀𝑒𝑛𝑠𝑎𝑗𝑒: ${oi}

🌷↛ *𝐴𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎* 𝐸𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑠𝑜𝑙𝑜 𝑠𝑒 𝑝𝑢𝑒𝑑𝑒 𝑢𝑠𝑎𝑟 𝑠𝑖 𝑡𝑖𝑒𝑛𝑒𝑠 𝑎𝑙𝑔𝑢𝑛𝑎 𝑑𝑢𝑑𝑎, 𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎 𝑜 𝑝𝑟𝑜𝑏𝑙𝑒𝑚𝑎𝑑 𝑐𝑜𝑛 𝑙𝑎 *𝐵𝑂𝑇*, 𝑠𝑖 𝑙𝑜 𝑢𝑠𝑎𝑠 𝑝𝑎𝑟𝑎 𝑜𝑡𝑟𝑎𝑠 𝑖𝑛𝑡𝑒𝑛𝑐𝑖𝑜𝑛𝑒𝑠, 𝑜 𝑒𝑙 𝑢𝑠𝑜 𝑛𝑜 𝑎𝑑𝑒𝑐𝑢𝑎𝑑𝑜, 𝑎𝑢𝑡𝑜𝑚𝑎𝑡𝑖𝑐𝑎𝑚𝑒𝑛𝑡𝑒 𝑠𝑒 𝑡𝑒 *𝑏𝑎𝑛𝑒𝑎𝑟𝑎* 𝑦 *𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟𝑎* 𝐷𝑒𝑙 𝑔𝑟𝑢𝑝𝑜 𝑎𝑢𝑡𝑜𝑚𝑎𝑡𝑖𝑐𝑎𝑚𝑒𝑛𝑡𝑒_°, 𝐶𝑈𝐼𝐷𝐴𝐷𝑂↛⚠️ `.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['grupo'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
