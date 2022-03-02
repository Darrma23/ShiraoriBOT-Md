/*let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  /*let url = json.server_1 || json.info[0].videoUrl || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = json.info[0].text
  for (let hashtag of json.info[0].hashtags) txt = txt.replace(hashtag, '*$&*')
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
▶ ${json.info[0].playCount} Views
❤ ${json.info[0].diggCount} Likes
🔁 ${json.info[0].shareCount} Shares
💬 ${json.info[0].commentCount} Comments
🎵 ${json.info[0].musicMeta.musicName} by ${json.info[0].musicMeta.musicAuthor}
- *By:* ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})
- *Desc:*
${txt}
  `.trim(), m) ----------------------------------------
  let url = json.result.link_dl1 || json.result.link_dl2 || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = `
  - *By:* ${json.result.name}
  - *Caption:*
  ${json.result.caption}
    `
    await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i
handler.limit = true

module.exports = handler*/


const hxz = require("hxz-api")
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
let p = await  hxz.ttdownloader(args[0])
const { nowm, wm, audio } = p
// conn.sendFile(m.chat, nowm, null, wm, m)
 conn.sendFile(m.chat, nowm, 'tiktok.mp4', `Tiktok Downloader.\n*© WhatsAppBOT-Md*`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl)$/i
handler.limit = true
handler.group = true
module.exports = handler
