import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
let uss = m.sender.split('@')[0]
if (uss === '5212431268546' || uss === '584120515006' || uss === '573004828388' || uss === '50488198573') {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');

  let txt = `
һ᥆ᥣᥲ! s᥆ᥡ  *${botname}*  ٩(˘◡˘)۶
ᥲ𝗊ᥙí 𝗍іᥱᥒᥱs ᥣᥲ ᥣіs𝗍ᥲ ძᥱ ᥴ᥆mᥲᥒძ᥆s
╭┈ ↷
│☁️ Cliente » @${userId.split('@')[0]}
│
╰─────────────────
Lista de comandos exclusiva para owners*

»  ⊹˚• \`Comandos para owners\` •˚⊹

🍡 Esta lista de comandos es exclusa para owners o admin.
ᰔᩚ  #ow • #dev*
> ✦ Ver la lista de comandos de los owners.
ᰔᩚ *#dsowner*
> ✦ Borra los archivos innecesarios .
ᰔᩚ *#addowner • #delowner*
> ✦ Para añadir o elimar un owner temporal
ᰔᩚ *#staff • #colaboradores*
> ✦ Ver la lista de desarrolladores de la Bot.
ᰔᩚ *#cleartmp • #clear
> ✦ Borra los archivos de la carpeta tmp.
ᰔᩚ *setcmd*
> ✦ permite cambiar la función de usar un comando con un sticker .
ᰔᩚ *=> owner*
> ✦ permite ver los owners permanentes en el archivo .
ᰔᩚ *#status • #estado*
> ✦ Ver el estado actual de la Bot.
ᰔᩚ *#links • #grupos*
> ✦ Ver los enlaces oficiales de la Bot.
ᰔᩚ *#infobot • #infobot*
> ✦ Ver la información completa de la Bot.
ᰔᩚ *#rollwaifu • #rw*
> ✦ Permite ver las waifus disponibles o ocupadas.
ᰔᩚ *#winfo • #waifuinfo*
> ✦ Permite ver la información de una waifu.
ᰔᩚ *#p • #ping*
> ✦ Ver la velocidad de respuesta del Bot.
ᰔᩚ *#reporte • #reportar*
> ✦ Reporta alguna falla o problema de la Bot.
ᰔᩚ *#sistema • #system*
> ✦ Ver estado del sistema de alojamiento.
ᰔᩚ *#speed • #speedtest*
> ✦ Ver las estadísticas de velocidad de la Bot.
ᰔᩚ *#views • #usuarios*
> ✦ Ver la cantidad de usuarios registrados en el sistema.
ᰔᩚ *#perra • #diomar*
> ✦ ver a tu perra favorita recien salida del horno, solo oferta limitada, corre
ᰔᩚ **
> ✦ .
ᰔᩚ **
> ✦ 



»  ⊹˚• \`Grupos\` •˚⊹

🍡 Comandos de grupos para una mejor gestión de ellos.
ᰔᩚ *#config • #on*
> ✦ Ver opciones de configuración de grupos.
ᰔᩚ *#hidetag*
> ✦ Envia un mensaje mencionando a todos los usuarios
ᰔᩚ *#gp • #infogrupo*
> ✦  Ver la Informacion del grupo.
ᰔᩚ *#linea • #listonline*
> ✦ Ver la lista de los usuarios en linea.
ᰔᩚ *#setwelcome*
> ✦ Establecer un mensaje de bienvenida personalizado.
ᰔᩚ *#setbye*
> ✦ Establecer un mensaje de despedida personalizado.
ᰔᩚ *#link*
> ✦ El bot envia el link del grupo.
ᰔᩚ *#admins • #admin*
> ✦ Mencionar a los admins para solicitar ayuda.
ᰔᩚ *#restablecer • #revoke*
> ✦ Restablecer el enlace del grupo.
ᰔᩚ *#grupo • #group* [open / abrir]
> ✦ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ᰔᩚ *#grupo • #gruop* [close / cerrar]
> ✦ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ᰔᩚ *#kick* [número / mension]
> ✦ Elimina un usuario de un grupo.
ᰔᩚ *#add • #añadir • #agregar* [número]
> ✦ Invita a un usuario a tu grupo.
ᰔᩚ *#promote* [mension / etiquetar]
> ✦ El bot dara administrador al usuario mencionando.
ᰔᩚ *#demote* [mension / etiquetar]
> ✦ El bot quitara administrador al usuario mencionando.
ᰔᩚ *#gpbanner • #groupimg*
> ✦ Cambiar la imagen del grupo.
ᰔᩚ *#gpname • #groupname*
> ✦ Cambiar el nombre del grupo.
ᰔᩚ *#gpdesc • #groupdesc*
> ✦ Cambiar la descripción del grupo.
ᰔᩚ *#advertir • #warn • #warning*
> ✦ Darle una advertencia aún usuario.
ᰔᩚ ︎*#unwarn • #delwarn*
> ✦ Quitar advertencias.
ᰔᩚ *#advlist • #listadv*
> ✦ Ver lista de usuarios advertidos.
ᰔᩚ *#banchat*
> ✦ Banear el Bot en un chat o grupo.
ᰔᩚ *#unbanchat*
> ✦ Desbanear el Bot del chat o grupo.
ᰔᩚ *#mute* [mension / etiquetar]
> ✦ El bot elimina los mensajes del usuario.
ᰔᩚ *#unmute* [mension / etiquetar]
> ✦ El bot deja de eliminar los mensajes del usuario.
ᰔᩚ *#encuesta • #poll*
> ✦ Crea una encuesta.
ᰔᩚ *#delete • #del*
> ✦ Elimina mensaje de otros usuarios.
ᰔᩚ *#fantasmas*
> ✦ Ver lista de inactivos del grupo.
ᰔᩚ *#kickfantasmas*
> ✦ Elimina a los inactivos del grupo.
ᰔᩚ *#invocar • #tagall • #todos*
> ✦ Invoca a todos los usuarios de un grupo.
ᰔᩚ *#setemoji • #setemo*
> ✦ Cambia el emoji que se usa en la invitación de usuarios.
ᰔᩚ *#listnum • #kicknum*
> ✦ Elimine a usuario por el prefijo de país.



  `.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: conn.parseMention(txt),
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });
} else {
conn.reply(m.chat, `🌷↛ 𝑁𝑜 𝑡𝑖𝑒𝑛𝑒𝑠 𝑒𝑙 𝑝𝑒𝑟𝑚𝑖𝑠𝑜 𝑝𝑎𝑟𝑎 𝑒𝑗𝑒𝑐𝑢𝑡𝑎𝑟 𝑒𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜_°`, m)
}
};

handler.help = ['dev'];
handler.tags = ['main'];
handler.command = ['dev', 'dev', 'ow', 'ayuda'];

export default handler;
