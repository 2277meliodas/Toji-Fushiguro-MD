let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `*🌷↛ 𝑁𝑢𝑚𝑒𝑟𝑜 𝑡𝑜𝑡𝑎𝑙 𝑑𝑒 𝑚𝑖𝑠 𝑓𝑢𝑛𝑐𝑖𝑜𝑛𝑒𝑠✨* : ${totalf}`,m)
}

handler.help = ['totalfunciones']
handler.tags = ['main']
handler.command = ['totalfunciones', 'comandos', 'funciones']
handler.register = true
export default handler 
