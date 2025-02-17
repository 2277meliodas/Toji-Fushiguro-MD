let cooldowns = {}

let handler = async (m, { conn, isPrems }) => {
let user = global.db.data.users[m.sender]
let tiempo = 5 * 60
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
const tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
conn.reply(m.chat, `🌷↛ 𝐸𝑆𝑃𝐸𝑅𝐴, 𝑡𝑟𝑎𝑏𝑎𝑗𝑎𝑠𝑡𝑒 𝑚𝑢𝑦 𝑑𝑢𝑟𝑜 𝑎𝑛𝑡𝑒𝑟𝑖𝑜𝑟𝑚𝑒𝑛𝑡𝑒, 𝑒𝑠𝑝𝑒𝑟𝑎 𝑢𝑛𝑜𝑠: *${tiempo2}* 𝑃𝑎𝑟𝑎 𝑢𝑠𝑎𝑟 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 *#𝑤* 𝑜𝑡𝑟𝑎 𝑣𝑒𝑧_°`, m, rcanal)
return
}
let rsl = Math.floor(Math.random() * 5000)
cooldowns[m.sender] = Date.now()
await conn.reply(m.chat, `🌷 ${pickRandom(trabajo)} *${toNum(rsl)}* ( *${rsl}* ) ${moneda} 💸.`, m, rcanal)
user.coin += rsl
}

handler.help = ['trabajar']
handler.tags = ['economy']
handler.command = ['w','work','chambear','chamba', 'trabajar']
handler.group = true;
handler.register = true
export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()}}

function segundosAHMS(segundos) {
let minutos = Math.floor((segundos % 3600) / 60)
let segundosRestantes = segundos % 60
return `${minutos} minutos y ${segundosRestantes} segundos`
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())];
}

// Thanks to FG98
const trabajo = [
   "↛ 𝑇𝑟𝑎𝑏𝑎𝑗𝑠𝑠𝑡𝑒 𝑐𝑜𝑚𝑜 𝑢𝑛 𝑐𝑜𝑛𝑡𝑎𝑑𝑜𝑟 𝑑𝑒 𝑔𝑎𝑙𝑙𝑒𝑡𝑎𝑠, 𝐺𝑎𝑛𝑎𝑠↛ ",
   "↛ 𝑇𝑟𝑎𝑏𝑎𝑗𝑎𝑠𝑡𝑒 𝑝𝑎𝑟𝑎 𝑢𝑛𝑎 𝑒𝑠𝑝𝑟𝑒𝑠𝑎 𝑚𝑖𝑙𝑖𝑡𝑎𝑟 𝑝𝑟𝑖𝑣𝑎𝑑𝑎, 𝐺𝑎𝑛𝑎𝑠↛ ",
   "↛ 𝑂𝑟𝑔𝑎𝑛𝑖𝑧𝑎𝑠𝑡𝑒 𝑢𝑛 𝑒𝑣𝑒𝑛𝑡𝑜 𝑑𝑒 𝑐𝑎𝑡𝑎 𝑑𝑒 𝑣𝑖𝑛𝑜𝑠, 𝑂𝑏𝑡𝑖𝑒𝑛𝑒𝑠↛ ",
   "↛ 𝐿𝑖𝑚𝑝𝑖𝑎𝑠𝑡𝑒 𝑢𝑛𝑎 𝑐ℎ𝑖𝑚𝑒𝑛𝑒𝑎, 𝑂𝑏𝑡𝑖𝑒𝑛𝑒𝑠↛ ",
   "↛ 𝐶𝑟𝑒𝑎𝑠 𝑗𝑢𝑒𝑔𝑜𝑠 𝑝𝑎𝑟𝑎 𝑔𝑎𝑛𝑎𝑟𝑡𝑒 𝑙𝑎 𝑣𝑖𝑑𝑎, 𝐺𝑎𝑛𝑎𝑠↛ ",
   "↛ 𝑇𝑟𝑎𝑏𝑎𝑗𝑎𝑠 𝑒𝑛 𝑙𝑎 𝑜𝑓𝑖𝑐𝑖𝑏𝑎 ℎ𝑜𝑟𝑎𝑠 𝑒𝑥𝑡𝑟𝑎𝑠 𝑝𝑜𝑟↛ ",
   "↛ 𝑇𝑟𝑎𝑏𝑎𝑗𝑎𝑠𝑡𝑒 𝑐𝑜𝑚𝑜 𝑠𝑒𝑐𝑢𝑒𝑠𝑡𝑟𝑎𝑑𝑜𝑟 𝑑𝑒 𝑛𝑜𝑣𝑖𝑎𝑠, 𝐺𝑎𝑛𝑎𝑠↛ ",
   "↛ 𝐴𝑙𝑔𝑢𝑖𝑒𝑛 𝑣𝑖𝑛𝑜, 𝑦 𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑜 𝑢𝑛𝑎 𝑜𝑏𝑟𝑎 𝑑𝑒 𝑡𝑒𝑎𝑡𝑟𝑜, 𝑃𝑜𝑟 𝑚𝑖𝑟𝑎𝑟 𝑂𝑏𝑡𝑖𝑒𝑛𝑒𝑠↛ ",
   "Compraste y vendiste artículos y ganaste",
   "Trabajas en el restaurante de la abuela como cocinera y ganas",
   "Trabajas 10 minutos en un Pizza Hut local. Ganaste",
   "Trabajas como escritor(a) de galletas de la fortuna y ganas",
   "Revisas tu bolso y decides vender algunos artículos inútiles que no necesitas. Resulta que toda esa basura valía",
   "Desarrollas juegos para ganarte la vida y ganas",
   "Trabajas todo el día en la empresa por",
   "Diseñaste un logo para una empresa por",
   "¡Trabajó lo mejor que pudo en una imprenta que estaba contratando y ganó su bien merecido!",
   "Trabajas como podador de arbustos y ganas",
   "Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar",
   "Estabas cultivando y Ganaste",
   "Trabajas como constructor de castillos de arena y ganas",
   "Trabajas como artista callejera y ganas",
   "¡Hiciste trabajo social por una buena causa! por tu buena causa Recibiste",
   "Reparaste un tanque T-60 averiado en Afganistán. La tripulación te pagó",
   "Trabajas como ecologista de anguilas y ganas",
   "Trabajas en Disneyland como un panda disfrazado y ganas",
   "Reparas las máquinas recreativas y recibes",
   "Hiciste algunos trabajos ocasionales en la ciudad y ganaste",
   "Limpias un poco de moho tóxico de la ventilación y ganas",
   "Resolviste el misterio del brote de cólera y el gobierno te recompensó con una suma de",
   "Trabajas como zoólogo y ganas",
   "Vendiste sándwiches de pescado y obtuviste",
   "Reparas las máquinas recreativas y recibes",
] 
