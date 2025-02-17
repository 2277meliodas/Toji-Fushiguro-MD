let R = Math.random;
let Fl = Math.floor;
let toM = (a) => "@" + a.split("@")[0];
function handler(m, {groupMetadata}) {
  let ps = groupMetadata.participants.map((v) => v.id);
  let a = ps[Fl(R() * ps.length)];
  let b;
  do b = ps[Fl(R() * ps.length)];
  while (b === a);
  let c;
  do c = ps[Fl(R() * ps.length)];
  while (b === a);
  let d;
  do d = ps[Fl(R() * ps.length)];
  while (b === a);
  let e;
  do e = ps[Fl(R() * ps.length)];
  while (b === a);
  let f;
  do f = ps[Fl(R() * ps.length)];
  while (b === a);
  let g;
  do g = ps[Fl(R() * ps.length)];
  while (b === a);
  let h;
  do h = ps[Fl(R() * ps.length)];
  while (b === a);
  let i;
  do i = ps[Fl(R() * ps.length)];
  while (b === a);
  let j;
  do j = ps[Fl(R() * ps.length)];
  while (b === a);
  m.reply(
    `*✨_𝐿𝑎𝑠 5 𝑝𝑎𝑟𝑒𝑗𝑎𝑠 𝑚𝑎𝑠 𝑑𝑒𝑠𝑒𝑎𝑑𝑎𝑠 𝑦 𝑎𝑚𝑎𝑑𝑎𝑠 𝑝𝑜𝑟 𝑡𝑜𝑑𝑜 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜_💓*
    
*_1.- ${toM(a)} y ${toM(b)}_*
- 𝐸𝑠𝑡𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 𝑒𝑠𝑡𝑎 𝑑𝑒𝑠𝑡𝑖𝑛𝑎𝑑𝑎 𝑎 𝑒𝑠𝑡𝑎𝑟 𝑗𝑢𝑛𝑡𝑎, 𝑝𝑜𝑟 𝑒𝑙 𝑝𝑜𝑑𝑒𝑟 𝑑𝑒𝑙 ℎ𝑖𝑙𝑜 𝑟𝑜𝑗𝑜 💙

*_2.- ${toM(c)} y ${toM(d)}_*
- 𝐸𝑠𝑡𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 𝑠𝑜𝑛 𝑠𝑜𝑙𝑜 𝑢𝑛𝑜𝑠 2 𝑡𝑜𝑟𝑡𝑜𝑙𝑖𝑡𝑜𝑠 𝑒𝑛𝑎𝑚𝑜𝑟𝑎𝑑𝑜𝑠 ✨

*_3.- ${toM(e)} y ${toM(f)}_*
- 𝑈𝐹𝐹𝐹𝐹!!, 𝑃𝑒𝑟𝑜 𝑦 𝑒𝑠𝑟𝑎 𝑝𝑎𝑟𝑒𝑗𝑎, 𝑦𝑎 𝑒𝑠 ℎ𝑜𝑟𝑎 𝑑𝑒 𝑞𝑢𝑒 𝑡𝑒𝑛𝑔𝑎𝑛 𝑓𝑎𝑚𝑖𝑙𝑖𝑎 𝑢𝑛𝑖𝑑𝑎 🤱🧑‍🍼

*_4.- ${toM(g)} y ${toM(h)}_*
- 𝐸𝑠𝑡𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 𝑠𝑒 𝑐𝑎𝑠𝑜 𝑒𝑛 𝑠𝑒𝑐𝑟𝑒𝑡𝑜, 𝐶𝑢𝑖𝑑𝑎𝑑𝑜𝑠 𝑑𝑎𝑚𝑎𝑠 𝑦 𝑐𝑎𝑏𝑎𝑙𝑙𝑒𝑟𝑜𝑠!! 𝑅𝑜𝑎𝑟𝑟 ^ ^-💍

*_5.- ${toM(i)} y ${toM(j)}_*
- 𝑃𝑎𝑟𝑎 𝑓𝑖𝑛𝑎𝑙𝑖𝑧𝑎𝑟, 𝑒𝑠𝑡𝑎 𝑝𝑎𝑟𝑒𝑗𝑎 𝑠𝑒 𝑓𝑢𝑒 𝑑𝑒 𝑙𝑢𝑛𝑎 𝑑𝑒 𝑚𝑖𝑒𝑙, 𝑅𝐼𝐶𝑂!!! ✨🥵😍❤️*`,
    null,
    {
      mentions: [a, b, c, d, e, f, g, h, i, j],
    }
  );
}
handler.help = ["formarpareja5"];
handler.tags = ["fun"];
handler.command = ["formarpareja5"];
handler.register = true;
handler.group = true;
export default handler;
