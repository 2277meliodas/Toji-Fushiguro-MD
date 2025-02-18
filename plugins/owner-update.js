import { exec } from 'child_process';

let handler = async (m, { conn }) => {
  m.reply('🌷↛𝐴𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑛𝑑𝑜 𝑒𝑙 𝑏𝑜𝑡, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜_°...');

  exec('git pull', (err, stdout, stderr) => {
    if (err) {
      conn.reply(m.chat, `✖️ 𝐸𝑅𝑅𝑂𝑅:↛𝑁𝑜 𝑠𝑒 𝑝𝑢𝑑𝑜 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑟 𝑙𝑎 𝑎𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑐𝑖𝑜𝑛_°.\nRazón: ${err.message}`, m);
      return;
    }

    if (stderr) {
      console.warn('Advertencia durante la actualización:', stderr);
    }

    if (stdout.includes('Already up to date.')) {
      conn.reply(m.chat, '🍡↛𝐸𝑙 𝑏𝑜𝑡 𝑦𝑎 𝑒𝑠𝑡𝑎 𝑎𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑑𝑜_°.', m);
    } else {
      conn.reply(m.chat, `🌷↛𝐴𝑐𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑐𝑖𝑜𝑛 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑑𝑎 𝑐𝑜𝑛 *𝐸𝑋𝐼𝑇𝑂_°*.\n\n${stdout}`, m);
    }
  });
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = ['update'];
handler.rowner = true;

export default handler;
