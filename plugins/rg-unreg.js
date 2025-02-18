let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
return conn.reply(m.chat, `*『🍂』↛ 𝑈𝑠𝑡𝑒𝑑 𝑦𝑎 ℎ𝑎 𝑠𝑖𝑑𝑜 𝑏𝑜𝑟𝑟𝑎𝑑𝑜 𝑒𝑛 𝑚𝑖 𝑏𝑎𝑠𝑒 𝑑𝑒 𝑑𝑎𝑡𝑜𝑠*`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg']
handler.register = true
export default handler
