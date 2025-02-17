const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, 𝐷𝑒𝑏𝑒𝑟𝑖𝑎𝑠 𝑐𝑎𝑠𝑎𝑟𝑡𝑒 𝑐𝑜𝑛 💍 ${toM(b)},𝐹𝑒𝑙𝑖𝑐𝑖𝑑𝑎𝑑𝑒𝑠, 𝐻𝑎𝑐𝑒𝑛 𝑢𝑛𝑎 ℎ𝑒𝑟𝑚𝑜𝑠𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 🌷*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
