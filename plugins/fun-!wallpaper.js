/* Código hecho por Deylin  
 - Código creado por Deyin  
*/

import axios from 'axios';

const apiKey = "https://api.lolwallpapers.net/alpha";
const defaultCategory = "anime";

const handler = async (m, { conn, args }) => {
    try {
        const query = args.length > 0 ? args.join(" ") : defaultCategory;
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

        const response = await axios.get(url, { headers: { Authorization: apiKey } });
        if (response.data.photos.length > 0) {
            const imageUrl = response.data.photos[0].src.original;
            await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: `✧ Aquí tienes tu wallpaper de *${query}* ✧` }, { quoted: m });
        } else {
            await conn.reply(m.chat, `《✧》 No encontré imágenes para esa categoría.`, m);
        }
    } catch (error) {
        console.error("Error al obtener wallpaper:", error);
        await conn.reply(m.chat, `《✧》 Ocurrió un error al buscar el wallpaper.`, m);
    }
};

handler.tags = ['fun'];
handler.help = ['wallpaper *[categoría]*'];
handler.command = ['wallpaper'];
handler.group = true;

export default handler;