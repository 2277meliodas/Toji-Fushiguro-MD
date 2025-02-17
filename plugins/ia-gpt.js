//créditos a https://github.com/deylinqff

import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { conn, text }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { text: '*🔍 Ingresa un término para buscar imágenes*' }, { quoted: m });
    return;
  }

  await m.react('🔍');
  await conn.sendMessage(m.chat, { text: `*🔍 Buscando imágenes de:* ${text}` }, { quoted: m });

  try {
    const res = await googleImage(text);
    if (!res || res.length === 0) throw new Error();

    const image = res[0]; // Toma la primera imagen

    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: `🔍 Imagen encontrada para: ${text} \n\n> *${dev}*`
    }, { quoted: m });

  } catch (e) {
    await conn.sendMessage(m.chat, { text: '*🚨 No se encontraron imágenes 😔*' }, { quoted: m });
  }
};

handler.help = ['imagen'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['image', 'imagen', 'buscarimg'];

export default handler;