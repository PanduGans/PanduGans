/* WLCOME

Author: Fernazer
Author2: Rudi Achil

TQTQ TO DALAM BASE INI 

RUDI ACHIL (Team)
HEGA (Team)
AJIS JS (Team)
ALVA RIZI (Team)
FERNAZER (Author)

// TQTQ BIG TO

// ORTU
// ALLAH SWT
// DOI GUE, MWEHEHE YG BUAT SEMMGAT HEHE 

// TQTQ TO PUBLIC

// PENGGUNA BOT WA
// SUBSCRIBER GUE
// PENGGUNA BOT FERNAZER
// ALL CREATOR BOT

SILAHKAN RECODE TAPI JANGAN HILANGKAN TQTQ DAN AUTHOR LAH MENDING TAMBAHIN AJA
LU TU CUMAN RECODE DOANG JDI JANGAN MAIN HAK SENDIRI OKEE MOGA NGERTI LU

/******************************* FERNAZER *******************************/
/******************************* LOAD WACONNECT *******************************/
const {
  WAConnection: _WAConnection,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  GroupSettingChange,
  ChatModification,
  MessageType
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
/******************************* FERNAZER *******************************/
/******************************* LOAD MODULES *******************************/
const util = require('util');
const translate = require("@vitalets/google-translate-api");
const axios = require("axios")
const crypto = require('crypto')
const imgbb = require('imgbb-uploader')
const fs = require('fs')
const qrcode = require('qrcode')
const moment = require('moment-timezone')
const { spawn, exec } = require('child_process')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const googleIt = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const ig = require('insta-fetcher')
const request = require('request');
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
/******************************* FERNAZER *******************************/
/******************************* LOAD LIB *******************************/
const { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const {dafontDown,dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins,getRandom,start, info, success, close } = require('./lib/functions')
const { pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')
const {  fetchJson,  getBase64,  createExif } = require('./lib/fetcher')
const { yta, ytv, upload } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { webp2gifFile } = require("./lib/gif.js")
const { exif } = require('./lib/exif')
const setGelud = require('./lib/gameGelud.js')
const F = require('./lib/fernazer')
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
const baterainye = JSON.parse(fs.readFileSync('./settings/frnazer.json'))
const {
    batre, 
    chargi, 
} = baterainye
const setting = JSON.parse(fs.readFileSync('./settings/pengaturan.json'))
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
let antiviewonce = JSON.parse(fs.readFileSync('./database/group/antiviewonce.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const { addVote, delVote } = require('./database/vote.js')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const a = '```'
const mastahfernazer = 'BELUM JADI BRE'
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
// Tictactoe By https://github.com/Fernazer
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
prefix = ''
ban = []
join_fer = []
blocked = []
hit_today = []
battre = batre
charg = chargi
charging = false
baterai = {
    baterai: 0,
    cas: false
}
aread = false
ngetik = false
vn = true
autocomposing = true 
autorecording = true 

// SEMANGATIN GW DONG BREE, JANGAN MALAH HUJAT GW, LU TAU LAN KEMBANGIN SC TU SUSAH GA SEGAMPANG BACOT NGERTI
// COBA ELU JDI GW KEMBANGIN SC KE GINI LU PAHAM GAK COBA ??
// JADI KLO ADA APA2 DENGN SC INI YA SANTE AJA BREE GA USH BACOT2 LAH NGMG BAIK2 KAN BISA 

/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
function addMetadata(packname, author) {
	if (!packname) packname = `${config.packname}`; if (!author) author = ` ${config.author}`;
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${author}_${packname}`

	if (fs.existsSync(`./src/sticker/${name}.exif`)) {
		return `./src/sticker/${name}.exif`
	}
	const json = {
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}

	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

	let len = JSON.stringify(json).length
	let last

	if (len > 256) {
		len = len - 256
		bytes.unshift(0x01)
	} else {
		bytes.unshift(0x00)
	}

	if (len < 16) {
		last = len.toString(16)
		last = "0" + len
	} else {
		last = len.toString(16)
	}

	const buf2 = Buffer.from(last, "hex")
	const buf3 = Buffer.from(bytes)
	const buf4 = Buffer.from(JSON.stringify(json))

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

	fs.writeFile(`./src/sticker/${name}.exif`, buffer, (err) => {
		return `./src/sticker/${name}.exif`
	}
	)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}       
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
 function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }

function convertBalanceToString(angka) {
	var balancenyeini = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
	return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}
function randomString(length){
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
    let str = '';
	lengt = length || 9
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * 65)];
    }
	return str
}
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum`at"; break;
        case 6: hari = "Sabtu"; break;
        }
        switch(bulan1) {
        case 0: bulan1 = "Januari"; break;
        case 1: bulan1 = "Februari"; break;
        case 2: bulan1 = "Maret"; break;
        case 3: bulan1 = "April"; break;
        case 4: bulan1 = "Mei"; break;
        case 5: bulan1 = "Juni"; break;
        case 6: bulan1 = "Juli"; break;
        case 7: bulan1 = "Agustus"; break;
        case 8: bulan1 = "September"; break;
        case 9: bulan1 = "Oktober"; break;
        case 10: bulan1 = "November"; break;
        case 11: bulan1 = "Desember"; break;
        }
        var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
        var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
            
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
///return(randomString(6))
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
async function starts() {
	const frnzer = new WAConnection()
	frnzer.logger.level = 'warn'
        frnzer.version = [2, 2123, 8]
	console.log('>', '[',color('INFO','blue'),']','Starting Fernazer Bot...')
  console.log('>', '[',color('INFO','blue'),']','Configure Connection...')
  console.log('>', '[',color('INFO','blue'),']','Configure Success, Connecting Jangan Lupa SubrekFernazer')
	frnzer.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Kode Qr Nya Bray'))
	})

	fs.existsSync('./frnazer.json') && frnzer.loadAuthInfo('./frnazer.json')
	frnzer.on('connecting', () => {
	start('2', 'Connecting...')
	})
	frnzer.on('open', () => {
	success('2', 'Connected')
	}) 
	await frnzer.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./frnazer.json', JSON.stringify(frnzer.base64EncodedAuthInfo(), null, '\t'))
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on("group-update", async (anu) => {
    metdata = await frnzer.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n� Deskripsi Baru : ${anu.desc}`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  })
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0];
frnzer.sendMessage(
m.key.remoteJid,
`\`\`\`「 Anti Delete 」\`\`\`
•> Nama : @${m.participant.split("@")[0]}
•> Waktu : ${jam} ${week} ${calender}
•> Type : ${type}`,
MessageType.text,
{ quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
);

frnzer.copyNForward(m.key.remoteJid, m.message);
});
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on("group-participants-update", async (anu) => {
    try {
      groupMet = await frnzer.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await frnzer.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await frnzer.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && !mem.includes(frnzer.user.jid)) {
        mdata = await frnzer.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = frnzer.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Baca Rules Group\n\nVisit Sosmed Owner:\nYT: https://youtube.com/Fernazer\nGithub: https://github.com/Fernazer`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `Fernazer`, buttonText: { displayText: "Welcome Bre 🖐" }, type: 1 },
        ];
        imageMsg = (
          await frnzer.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Semoga betah di group Ini 😃",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await frnzer.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        frnzer.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(frnzer.user.jid)) {
        mdata = await frnzer.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = frnzer.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Yhahaha out\nSayonara ${anu_user} Jangan balik lagi`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `Fernazer`, buttonText: { displayText: "Byee yahaha 👋" }, type: 1 },
        ];
        imageMsg = (
          await frnzer.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Nitip mendoan 2 rebu",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await frnzer.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        frnzer.relayWAMessage(prep);
      }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
/******************************* FERNAZER *******************************/
/******************************* CALL BLOCK & BATTRE *******************************/
	frnzer.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
frnzer.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        ban.push(callerId)
        frnzer.sendMessage(callerId, "Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/+6281328139682", MessageType.text)
        await sleep(5000)
        blocked.push(callerId)
        await frnzer.blockUser(callerId, "add") // Block user
})
frnzer.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})
/******************************* FERNAZER *******************************/
/******************************* CHAT APDET *******************************/
frnzer.on('chat-update', async (frnazer) => {
		try {
			if (!frnazer.hasNewMessage) return
            frnazer = frnazer.messages.all()[0]
			if (!frnazer.message) return
			if (frnazer.key && frnazer.key.remoteJid == 'status@broadcast') return
			if (frnazer.key.fromMe) return			
            m = simple.smsg(frnzer, frnazer)
            global.ky_ttt
            global.join_fer
            global.prefix
			global.blocked
            frnazer.message = (Object.keys(frnazer.message)[0] === 'ephemeralMessage') ? frnazer.message.ephemeralMessage.message : frnazer.message
            const content = JSON.stringify(frnazer.message)
			const from = frnazer.key.remoteJid
			const type = Object.keys(frnazer.message)[0]			
			const basreng = from.endsWith('@g.us')
			const botfrnazer = basreng ? frnazer.participant : frnazer.key.remoteJid
			userfernazer = frnzer.contacts[botfrnazer] != undefined ? frnzer.contacts[botfrnazer].vname || frnzer.contacts[botfrnazer].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            const cmod = (type === 'conversation' && frnazer.message.conversation) ? frnazer.message.conversation : (type == 'imageMessage') && frnazer.message.imageMessage.caption ? frnazer.message.imageMessage.caption : (type == 'videoMessage') && frnazer.message.videoMessage.caption ? frnazer.message.videoMessage.caption : (type == 'extendedTextMessage') && frnazer.message.extendedTextMessage.text ? frnazer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
            body = (type === 'conversation' && frnazer.message.conversation.startsWith(prefix)) ? frnazer.message.conversation : (type == 'imageMessage') && frnazer.message[type].caption.startsWith(prefix) ? frnazer.message[type].caption : (type == 'videoMessage') && frnazer.message[type].caption.startsWith(prefix) ? frnazer.message[type].caption : (type == 'extendedTextMessage') && frnazer.message[type].text.startsWith(prefix) ? frnazer.message[type].text : (type == 'listResponseMessage') && frnazer.message[type].singleSelectReply.selectedRowId ? frnazer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && frnazer.message[type].selectedButtonId ? frnazer.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(frnazer.message[type].fileSha256.toString('base64')) !== null && getCmd(frnazer.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(frnazer.message[type].fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? frnazer.message.conversation : (type === 'extendedTextMessage') ? frnazer.message.extendedTextMessage.text : ''
            ///button = (type == 'buttonsResponseMessage') ? frnazer.message.buttonsResponseMessage.selectedDisplayText : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()			
            hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {
				wait: '*Sedang Di Proses Tunggu Sebentar Bre*',
				succes: '*Done Bang*',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' Link yang anda kirim tidak valid!',
					salah: 'Format Salah/Text Kosong'
				},
				only: {
					group: 'Command ini hanya bisa di gunakan dalam group!',
                    groupP: 'Command ini hanya bisa di Chat Private!',
					benned: '*Maaf Anda Di Ban Oleh Owner*',
					owner: '*Command Ini Hanya Bisa Di Gunakan Oleh Owner!*',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ',					
				}
			}
		    const botNumber = frnzer.user.jid
			const ownerNumber = ["6281328139682@s.whatsapp.net"] // Nomor Owner Bre
			const ownerContact = ["6281328139682","6285725486855"] // Nomor Owner Bre
			const isGroup = from.endsWith('@g.us')
			const totalchat = await frnzer.chats.all()
			const sender = isGroup ? frnazer.participant : frnazer.key.remoteJid
			const groupMetadata = isGroup ? await frnzer.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''			
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isVote = isGroup ? voting.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
            const isAntiVO = isGroup ? antiviewonce.includes(from) : false	                   
			const isGroupAdmins = groupAdmins.includes(sender) || false		
            idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
			const q = args.join(' ')
            const nomersu = `${sender.split("@")[0]}`
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
            const IsCodeinvite = join_fer.includes(q)
			const errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const imgbb2 = 'https://i.ibb.co/bvN8wXx/images.jpg'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				frnzer.sendMessage(from, teks, text, {quoted:faketroli})
			}
			const testqq = (from, desk) => {
            frnzer.sendButtons(from, `Pilihan Anda Salah!!`, `Pilih yang bener, jangan ngasal!!`,`Pilih Enable atau Disable`, [{"buttonId": `${prefix}${desk} enable`,"buttonText": {"displayText": "ENABLE"},"type": "RESPONSE"},{"buttonId": `${prefix}${desk} disable`,"buttonText": {"displayText": "DISABLE"},"type": "RESPONSE"}], false, null)
            }
			const sendMess = (hehe, teks) => {
				frnzer.sendMessage(hehe, teks, text)
			}
			   const costum = (pesan, tipe, target, target2) => {
			frnzer.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? frnzer.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : frnzer.sendMessage(from, teks.trim(), extendedText, {quoted: faketroli, contextInfo: {"mentionedJid": memberr}})
			}
			
			if (vn) {
		    frnzer.updatePresence(from, Presence.recording)
		    } else if (ngetik) {
	        frnzer.updatePresence(from, Presence.composing)
		    }
            frnzer.chatRead(from, "read")
        // DATE WAKTU
        var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 1: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 2: waktoo = "Waktu Dini Hari🌒 - Tidur Kak :)"; break;
                case 3: waktoo = "Waktu Dini Hari🌓 - Tidur Kak :)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 7: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 8: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 9: waktoo = "Selamat Pagi kak🌝 kak🌝"; break;
                case 10: waktoo = "Selamat Pagi kak🌝"; break;
                case 11: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 13: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 14: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Beristirahat :)"; break;
                case 15: waktoo = "Selamat Sore Kak🌝\n -  Jangan Lupa Mandi Dan shalat ashar"; break;
                case 16: waktoo = "Selamat Sore Kak🌝\n  - Jangan Lupa Mandi Dan shalat ashar"; break;
                case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
                case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib Kak"; break;
                case 19: waktoo = "Waktu Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat & Jangan Gadang"; break;
                case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
            }
            var tampilHari = "" + waktoo;
            //-
            //WAKTU BUAT FAKEREPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
            //-            
            frnzer.on('CB:action,,battery', json => {
	        global.batteryLevelStr = json[2][0][1].value
            global.batterylevel = parseInt(batteryLevelStr)
	        battre = batterylevel
            if(json[2][0][1].live == 'true') {
            charging = true
            }else if (json[2][0][1].live == 'false') {
            charging = false
            }
            const chargi = json[2][0][1].live
            baterai.cas = chargi
            console.log(json[2][0][1])
		    console.log('Baterai : ' + batterylevel+'%')
	        })
	        global.batrei = global.batrei ? global.batrei : []
		    frnzer.on('CB:action,,battery', json => {
		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
		    })
		    const lylia1 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `Battery : ${battre}%\n*${waktoonyabro}*\n*${runtime}*`} } }
	    // Voting By Fernazer
        // https://github.com/Fernazer
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281328138682@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281328139682@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
/******************************* FERNAZER *******************************/
/******************************* CONST BUTT *******************************/
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      frnzer.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
/******************************* FERNAZER *******************************/
/******************************* CONST MEDIA *******************************/
const downloadM = async(save) => {
obj = Object.keys(frnazer.message)[0]
encmedia = content.includes("quotedMessage") ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message[obj].contextInfo : frnazer
if (save) return await frnzer.downloadAndSaveMediaMessage(encmedia)
return await frnzer.downloadMediaMessage(encmedia)
  }

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './tmp/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './tmp/stik' + names + '.png'
                    let asw = './tmp/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        frnzer.sendMessage(to, media, MessageType.sticker,{quoted:faketroli})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    frnzer.sendMessage(to, media, type, { quoted: faketroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link).catch(e => {
	fetch(link).then((hasil) => {
	return frnzer.sendMessage(from, hasil, type, options)
	}).catch(e => {
	frnzer.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	}) 
  }) 
  })
	frnzer.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	frnzer.sendMessage(from, hasil, type, options).catch(e => {
	frnzer.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
/******************************* FERNAZER *******************************/
/******************************* CONST GAME *******************************/
   const getWin = (userId) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _win[position].win
            }
        }
/******************************* FERNAZER *******************************/
/******************************* AUTO *******************************/
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }        
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      await frnzer.setStatus(`Aktif selama ${uptime} | Mode: Public | User Fernazer`).catch((_) => _);
      settingstatus = new Date() * 1;
    }        
 
/******************************* SWTICH FAKE REPLY YE *******************************/
            const faketroli = {

            key: {

            fromMe: false,

            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

            },

            message: { 

            orderMessage: {

            itemCount: 1,

            status: 200, 

            surface: 200,

            message: `${userfernazer}\n⎇ ${command}`,

            orderTitle: 'Ntah', 

            sellerJid: '0@s.whatsapp.net'

            }

            }

            }
const replyWithFakeLink = (teks) => {
frnzer.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${userfernazer}\nBy ${ucapanWaktu}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/vVRbJcJ/IMG-20210809-WA0067.jpg",
"thumbnail": fs.readFileSync('./media/logo.jpeg')
},mentionedJid:[sender]}, quoted : frnazer})
} 


            /******************************* ANTI TROLI *******************************/
            if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            reply('Bug Troli Detected!\n\n' + require('util').format(m.key))
            await frnzer.modifyChat(m.chat, 'delete', {
            includeStarred: false
            })
            }           
           
            /******************************* CONVERT, WARNA, CONSOLE, DAN CMD *******************************/
			colors = ['red','white','black','blue','yellow','green']
			
            const isQuoted = type == 'extendedTextMessage'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
             
            if (isCmd && !isGroup) {console.log(color('[ CMD PRIVATE ]'), color(moment(frnazer.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'))}
	        if (!command) console.log(frnazer)
	        if (isCmd && isGroup) {
            console.log(color('[ CMD GROUP ]'), color(moment(frnazer.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'pink'), color(`${userfernazer}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'gold'))}
        
			switch(command) {
			
//******************************* SWITCH COMMAND CASE *******************************//

/******************************* FERNAZER *******************************/
/******************************* GRUP *******************************/ 
case 'sider': 
if (!isGroup) return reply(mess.only.group)
if (!isQuoted) return reply(`Reply pesan dari bot`)
frnzer.messageInfo(from, frnazer.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `• *Iist Sider*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `• @${res.reads[i].jid.split("@")[0]}\n`
txt += `• Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
}         
mentions(txt, anu, true)
})
.catch((err) => reply('reply pesan bot!'))
break
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await frnzer.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case "antilink":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiLink) return reply("Sudah aktif!!");
antilink.push(from);
fs.writeFileSync(
"./database/group/antilink.json",
JSON.stringify(antilink)
);
reply("Sukses mengaktifkan antilink!");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./database/group/antilink.json",
JSON.stringify(antilink)
);
reply("Sukses mematikan antilink!");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antilink on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antilink off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;
case "antiviewonce":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiVO) return reply("Sudah aktif!!");
antivo.push(from);
fs.writeFileSync("./database/group/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mengaktifkan antiviewonce!");
} else if (args[0] == "off") {
antivo.splice(from, 1);
fs.writeFileSync("./database/group/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mematikan antiviewonce!");
} else if (!q) {
sendButMessage(
from,
`MODE ANTIVIEWONCE`,
`Silahkan pilih salah satu`,
[
{
buttonId: `${prefix}antiviewonce on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antiviewonce off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break;
case "antivirtex":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiVirtex) return reply("Sudah aktif!!");
antivirtex.push(from);
fs.writeFileSync(
"./database/group/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("Sukses mengaktifkan antivirtex!");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync("./database/group/antivirtex.json", JSON.stringify(ant));
reply("Sukses mematikan antivirtex!");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antivirtex on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antivirtex off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;
case 'resetlink':
case 'resetlinkgroup':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
json = ['action', 'inviteReset', from]
frnzer.query({json, expect200: true})
await sleep(3000)
reply('Sukses Mereset Link Group!')
break
case 'tagall':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args[0] === 'open') {
frnzer.groupSettingChange(from, GroupSettingChange.messageSend, false)
await sleep(2000)
reply(`*SUCCES OPEN GRUP*`)
} else if (args[0] === 'close') {
await frnzer.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sleep(2000)
reply(`*SUCCES CLOSE GRUP*`)
}					
break


case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(mess.only.group)
teks = `List Admin ${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()} @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'delvote':
if(!frnazer.key.remoteJid) return
if(isVote) return reply('Tidak ada sesi Voting')
delVote(from)
reply('Sukses Menghapus sesi Voting Di Grup Ini')
break
case 'voting':
            ////if(!isGroupAdmins) return 
if(!isGroup) return reply(mess.only.group)
if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)\nContoh : /voting @tag | alasan | waktu vote')
if (frnazer.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || frnazer.message.extendedTextMessage.contextInfo == null) {
let id = frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('|')
if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break
case 'clearall':                     			       			        
if (!isOwner) return reply(`Khusus Owner`)
anu = await frnzer.chats.all()
frnzer.setMaxListeners(25)
for (let _ of anu) {
frnzer.deleteChat(_.jid)
}
faketroli(`sukses`)
break						 	
case 'tagall':                     
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `➪ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'delete':                     
case 'del':  
case 'd':  	
frnzer.deleteMessage(from, { id: frnazer.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
break
case 'kick':                      
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `byeee Beban😂 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupRemove(from, mentioned)
} else {
mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
frnzer.groupRemove(from, mentioned)
}					
break
case 'demote':                     
if (!isGroup) return reply('GRUB ONLY')
if (!isGroupAdmins) return reply('LU ADMIN??')
if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag member')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupDemoteAdmin(from, mentioned)
} else {
mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
frnzer.groupDemoteAdmin(from, mentioned)
}					 
break
case 'promote':                     
if (!isGroup) return reply('GRUB ONLY')
if (!isGroupAdmins) return reply('ONLY ADMIN')
if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag member')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Selamat 🥳 anda menjadi admin group (+_+) :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
frnzer.groupMakeAdmin(from, mentioned)
}					 
break	      
case 'hidetag':                               
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
var value = body.slice(9)
var group = await frnzer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: frnazer
}
frnzer.sendMessage(from, options, text)					 
break
case 'add':  
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
frnzer.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
faketroli('Gagal menambahkan target, mungkin karena di private')
}  
break 
/******************************* FERNAZER *******************************/
/******************************* OWNER *******************************/ 
case 'ban':
if (!isOwner) return
const fer = frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]
ban.push(kys)
reply(`Berhasil Banned ${fer}`)
break
case 'unban':
if (!isOwner) return
ban = []
break
case 'del':
case 'delete':
case 'd':
if (isBanned) return reply(mess.only.benned)    

frnzer.deleteMessage(from, { id: frnazer.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'invite':
if (!isOwner) return reply(mess.only.owner)
frnzer.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('_*SUKSES JOIN BREY~*_')
break
            break
            
case 'term':
case 'exec':
if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`masukin code!`)
exec(`${q}`, (err, stdout) => {
if (err) return reply(`root@Fernazer:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
break
case 'autoread':
if (!isOwner) return
if ((args[0]) === 'on') {
if(aread)return reply('_Sudah diaktifkan sebelumnya_')
aread = true
return replyWithFakeLink('*Auto Read On!*')
} else if ((args[0]) === 'off') {
if(!aread)return reply('_Sudah dimatikan sebelumnya_')
aread = false
return reply('*Auto Read Off!*')
} else {
replyWithFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')
}
break 
case 'antiviewonce':
case 'antivo':
                
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
if (args.length < 1) return reply(`Pilih enable atau disable`)
                
if ((args[0]) === 'on') {                    
if (isAntiVO) return reply(`Udah aktif`)
                    
antiviewonce.push(from)
					
fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))
					
replyWithFakeLink('Antiview Once grup aktif')
                
} else if ((args[0]) === 'off') {                      
antiviewonce.splice(from, 1)
                    
fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))
                    
replyWithFakeLink('antiviewonce grup nonaktif')
                
} else {
                    
replyWithFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')			        
}
                
break
case 'setbug':
if (!isOwner) return reply ('khusus owner')
if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
if((args[0]) == 'vn'){
ngetik = false
vn = true
if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
replyWithFakeLink(`_Succses mengganti ke vn`)
} else
if ((args[0]) == 'ngetik'){
ngetik = true
vn = false
if(vn)return reply('_Sudah diaktifkan sebelumnya!_')
replyWithFakeLink(`_Succses mengganti ngetik`)
           
}
break
case 'bc':  
case 'bcimage':  
case 'broadcast':  
if (!isOwner) return reply (mess.only.owner)
if (args.length < 1) return reply('.......')
ini_bc = args.join(' ')
anu = await nayla.chats.all()
if (isMedia && !nay.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
buff = await nayla.downloadMediaMessage(encmedia)
for (let _ of anu) {
nayla.sendMessage(_.jid, buff, image, {quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
}
reply('```Success Broadcast```')
} else {
for (let _ of anu) {
nayla.sendMessage(_.jid, `*BROADCAST* \n\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
reply('```Success Broadcast```')
}
break
case 'bcsticker':
case 'bcstik':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, sticker, {quoted:faketroli})
}
reply('Suksess broadcast')
}
break
case 'bcvideo':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: faketroli,caption: `*BROADCAST*\n\n${body.slice(9)}`})
}
reply('Suksess broadcast')
}
break
case 'bcaudio':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: faketroli})
}
reply('Suksess broadcast')
}
break
case 'upswteks':
if (!frnazer.key.fromMe) return
try {
quotedText = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
frnzer.sendMessage('status@broadcast', `${quotedText}`, extendedText)
reply(`Sukses Up story wea teks ${quotedText}`)
} catch {
if (!q) return reply('Isi teksnya!')
frnzer.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Sukses Up story wea teks ${q}`)
}
break
case 'upswimage':
if (!isOwner) return reply(mess.only.owner)
if (isQuotedImage) {
swsw = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
cihcih = await frnzer.downloadMediaMessage(swsw)
frnzer.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
rafli.sendMessage(from, bur, text, { quoted: frnazer })
} else {
reply('Reply gambarnya!')
}
break
case 'upswvideo':
if (!isOwner) return reply(mess.only.owner)
if (isQuotedVideo) {
swsw = isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
cihcih = await frnzer.downloadMediaMessage(swsw)
frnzer.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
frnzer.sendMessage(from, bur, text, { quoted: frnazer })
} else {
reply('reply videonya!')
}
break
case 'upswgif':
if (!isOwner) return reply(mess.only.owner)
var konti = body.slice(7)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(enmedia)
const buffer6 = fs.readFileSync(media)
frnzer.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
reply(`Sukses upload gif:\n${konti}`)
break 
case 'upswvoice':
if (!isOwner) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !frnazer.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
buff = await frnzer.downloadMediaMessage(encmedia)
frnzer.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
}
reply(`Sukses upload voice`)
break
/******************************* FERNAZER *******************************/
/******************************* HELP *******************************/
case 'help2':
case 'menu2':
if (isBanned) return reply(mess.only.benned)   		
fernazer = `
┏━━━•
┣❒「 *INFORMATION* 」
┣❒  
┣❒ Ucapan: ${ucapanWaktu} ${userfernazer}
┣❒  
┣❒ Tag: @${sender.split("@")[0]}
┣❒ batre: ${battre}
┣❒  
┣❒「 *WAKTU* 」
┣❒ Wit: ${wit}
┣❒ Wita: ${wita}
┣❒ Wib: ${wib}
┣❒ Waktu: ${time}
┣❒ Hari: ${tampilHari}
┣❒  
┣❒    
┣❒「 *DOWNLOAD MENU* 」
┣❒ *${prefix}play* 
┣❒ *${prefix}ytdl*
┣❒ *${prefix}ytmp4*
┣❒ *${prefix}ytmp3*
┣❒ *${prefix}tiktok*
┣❒ *${prefix}igdl*
┣❒ *${prefix}mediafire*
┣❒ *${prefix}google*
┣❒ *${prefix}yts*
┣❒ *${prefix}igstalk
┣❒ *${prefix}ghstalk
┣❒ *${prefix}dafont*
┣❒ *${prefix}fontdown*
┃ 
┣❒「 *SEARCH MENU* 」
┣❒ *${prefix}filmapikdrama
┣❒ *${prefix}filmapikterbaru
┣❒ *${prefix}lizard
┣❒ *${prefix}randomnime
┃ 
┣❒「 *ISLAM MENU* 」
┣❒ *${prefix}bacaansholat
┣❒ *${prefix}niatsholat
┣❒ *${prefix}doaharian
┣❒ *${prefix}ayatkursi
┃ 
┣❒「 *MAKER MENU* 」
┣❒ *${prefix}naruto
┣❒ *${prefix}shadow
┣❒ *${prefix}romantic
┣❒ *${prefix}smoke
┣❒ *${prefix}burnpaper
┣❒ *${prefix}butterfly
┣❒ *${prefix}lovetext
┣❒ *${prefix}coffecup
┣❒ *${prefix}doubleheart
┣❒ *${prefix}grass
┣❒ *${prefix}lovemsg
┃ 
┣❒「 *EDITOR MENU* 」
┣❒ *${prefix}komunis
┣❒ *${prefix}thunglife
┣❒ *${prefix}putin
┣❒ *${prefix}rip
┣❒ *${prefix}hitler
┃ 
┣❒「 *CONVERT MENU* 」
┣❒ *${prefix}tomp3*
┣❒ *${prefix}tomp4*
┣❒ *${prefix}toimg*
┃ 
┣❒「 *STICKER MENU* 」
┣❒ *${prefix}sticker*
┣❒ *${prefix}attp*
┣❒ *${prefix}emoji*
┣❒ *${prefix}doge*
┣❒ *${prefix}sticknime*
┃ 
┣❒「 *GAME MENU* 」
┣❒ *${prefix}tictactoe*
┣❒ *${prefix}deltt*
┣❒ *${prefix}suit*
┣❒ *${prefix}tod*
┃ 
┣❒「 *VOTING* 」
┣❒ *${prefix}voting*
┣❒ *${prefix}delvote*
┣❒ *Vote*
┣❒ *Devote*
┃ 
┣❒「 *CMD MENU* 」
┣❒ *${prefix}setcmd*
┣❒ *${prefix}delcmd*
┣❒ *${prefix}listcmd*
┃ 
┣❒「 *OWNER MENU* 」
┣❒ *${prefix}autoread
┣❒ *${prefix}setbug
┣❒ *${prefix}term
┣❒ *${prefix}exec
┣❒ *${prefix}bcaudio
┣❒ *${prefix}bcimage
┣❒ *${prefix}bc
┣❒ *${prefix}bcvideo
┣❒ *${prefix}bcsticker
┃ 
┣❒「 *UPSW MENU* 」
┣❒ *${prefix}upswvoice
┣❒ *${prefix}upswteks
┣❒ *${prefix}upswimage
┣❒ *${prefix}upswvideo
┣❒ *${prefix}upswgif
┃  
┣❒「 *GRUP MENU* 」
┣❒ *${prefix}linkgroup
┣❒ *${prefix}resetlink
┣❒ *${prefix}antilink
┣❒ *${prefix}antivirtex
┣❒ *${prefix}grup* open/close
┣❒ *${prefix}cekgrup*
┣❒ *${prefix}sider*
┣❒ *${prefix}antiviewonce
┣❒ *${prefix}kick
┣❒ *${prefix}add
┣❒ *${prefix}promote
┣❒ *${prefix}demote
┣❒ *${prefix}tagall
┣❒ *${prefix}hidetag
┣❒ *${prefix}delete
┣❒ *${prefix}del
┣❒ *${prefix}clearall
┃ 
┣❒「 *INFO MENU* 」
┣❒ *${prefix}kirim*
┣❒ *${prefix}tts
┣❒ *${prefix}swm*
┣❒ *${prefix}translate*
┣❒ *${prefix}ping*
┣❒ *${prefix}wame*
┣❒ *${prefix}serial
┣❒ *${prefix}join*
┣❒ *${prefix}tag*
┣❒ *${prefix}q*
┣❒ *${prefix}get
┣❒ *${prefix}infostick*
┣❒ *${prefix}bug*
┣❒ *${prefix}owner*
┣❒ >
┣❒ $
┣❒ =>
┗━━━•`
frnzer.send3Button(from, fernazer, `Time : ${time} ~Fernazer`, 'OWNER', `${prefix}owner`, 'SCRIPT BOT', `${prefix}sourcecode`,'INFO BOT',`${prefix}info` , { quoted: faketroli ,contextInfo: {"mentionedJid": [sender]}})
break
 
 case 'menu':
 if (isBanned) return reply(mess.only.benned)
let tod = fs.readFileSync('./media/Fernazer.jpg')

/*GW ENC KARNA LU PD GA NURUT 

ERROR ?? BILANG GW YA

YAHAHA WAHYU SUBREK FERNAZER*/

function _0x268e(){var _0x3a0128=['1433307qXnyIq','13543461XpTKBY','11457866CwzoIh','4002360RYWdsU','8YNsoBV','4FULbhy','720162koqKzx','372356HgQWxP','5scgrbl','624493WwFUHE'];_0x268e=function(){return _0x3a0128;};return _0x268e();}(function(_0x4c4e8a,_0x5e8a78){var _0x586d13=_0x503e,_0x560902=_0x4c4e8a();while(!![]){try{var _0x2b4ae5=parseInt(_0x586d13(0x1ca))/0x1*(parseInt(_0x586d13(0x1d0))/0x2)+-parseInt(_0x586d13(0x1cb))/0x3+parseInt(_0x586d13(0x1c8))/0x4*(-parseInt(_0x586d13(0x1c9))/0x5)+-parseInt(_0x586d13(0x1d1))/0x6+-parseInt(_0x586d13(0x1cd))/0x7+-parseInt(_0x586d13(0x1cf))/0x8*(-parseInt(_0x586d13(0x1cc))/0x9)+parseInt(_0x586d13(0x1ce))/0xa;if(_0x2b4ae5===_0x5e8a78)break;else _0x560902['push'](_0x560902['shift']());}catch(_0x117134){_0x560902['push'](_0x560902['shift']());}}}(_0x268e,0xc9bd8));function hi(){console['log']('frnzer.sendMessage(from,\x20{\x20contentText:\x20`Hai,\x20${userfernazer}\x20${ucapanWaktu}`,\x20footerText:\x20\x27Rules\x20Bot\x0a\x0aTlpn/Vc\x20=\x20Blok\x0a\x0aSosmed\x0agithub:\x20https://github.com/Fernazer\x0aYt:\x20https://youtube.com/Fernazer\x0a\x0aMy\x20Web:\x20https://fernazer-xyz.mn.co/\x0a\x20Wa:\x20https://wa.me/6281328139682\x0a\x0aTQTQ\x0aHega\x0aAjis\x20Js\x0aRudi\x20Achil\x0aFernazer\x0aPak\x20Dihan\x0a\x0aFernazerBot\x20By\x20Rafli\x27,\x20buttons:\x20[{\x20buttonId:\x20`${prefix}menu2`,\x20buttonText:\x20{\x20displayText:\x20\x27MENU\x20BOT\x27\x20},\x20type:\x201\x20},{\x20buttonId:\x20`${prefix}loli`,\x20buttonText:\x20{\x20displayText:\x20\x27LOMLI\x27\x20},\x20type:\x201\x20}],\x20headerType:\x20\x27LOCATION\x27,\x20locationMessage:\x20{\x20degreesLatitude:\x20\x27\x27,\x20degreesLongitude:\x20\x27\x27,\x20jpegThumbnail:\x20tod,\x20contextInfo:\x20{mentionedJid:\x20[sender]}}},\x20\x27buttonsMessage\x27)');}function _0x503e(_0x2b5bc3,_0x2b68bb){var _0x268e36=_0x268e();return _0x503e=function(_0x503eeb,_0x3bb70f){_0x503eeb=_0x503eeb-0x1c8;var _0x2a90af=_0x268e36[_0x503eeb];return _0x2a90af;},_0x503e(_0x2b5bc3,_0x2b68bb);}hi();function _0x268e(){var _0x3a0128=['1433307qXnyIq','13543461XpTKBY','11457866CwzoIh','4002360RYWdsU','8YNsoBV','4FULbhy','720162koqKzx','372356HgQWxP','5scgrbl','624493WwFUHE'];_0x268e=function(){return _0x3a0128;};return _0x268e();}(function(_0x4c4e8a,_0x5e8a78){var _0x586d13=_0x503e,_0x560902=_0x4c4e8a();while(!![]){try{var _0x2b4ae5=parseInt(_0x586d13(0x1ca))/0x1*(parseInt(_0x586d13(0x1d0))/0x2)+-parseInt(_0x586d13(0x1cb))/0x3+parseInt(_0x586d13(0x1c8))/0x4*(-parseInt(_0x586d13(0x1c9))/0x5)+-parseInt(_0x586d13(0x1d1))/0x6+-parseInt(_0x586d13(0x1cd))/0x7+-parseInt(_0x586d13(0x1cf))/0x8*(-parseInt(_0x586d13(0x1cc))/0x9)+parseInt(_0x586d13(0x1ce))/0xa;if(_0x2b4ae5===_0x5e8a78)break;else _0x560902['push'](_0x560902['shift']());}catch(_0x117134){_0x560902['push'](_0x560902['shift']());}}}(_0x268e,0xc9bd8));function hi(){console['log']('frnzer.sendMessage(from,\x20{\x20contentText:\x20`Hai,\x20${userfernazer}\x20${ucapanWaktu}`,\x20footerText:\x20\x27Rules\x20Bot\x0a\x0aTlpn/Vc\x20=\x20Blok\x0a\x0aSosmed\x0agithub:\x20https://github.com/Fernazer\x0aYt:\x20https://youtube.com/Fernazer\x0a\x0aMy\x20Web:\x20https://fernazer-xyz.mn.co/\x0a\x20Wa:\x20https://wa.me/6281328139682\x0a\x0aTQTQ\x0aHega\x0aAjis\x20Js\x0aRudi\x20Achil\x0aFernazer\x0aPak\x20Dihan\x0a\x0aFernazerBot\x20By\x20Rafli\x27,\x20buttons:\x20[{\x20buttonId:\x20`${prefix}menu2`,\x20buttonText:\x20{\x20displayText:\x20\x27MENU\x20BOT\x27\x20},\x20type:\x201\x20},{\x20buttonId:\x20`${prefix}loli`,\x20buttonText:\x20{\x20displayText:\x20\x27LOMLI\x27\x20},\x20type:\x201\x20}],\x20headerType:\x20\x27LOCATION\x27,\x20locationMessage:\x20{\x20degreesLatitude:\x20\x27\x27,\x20degreesLongitude:\x20\x27\x27,\x20jpegThumbnail:\x20tod,\x20contextInfo:\x20{mentionedJid:\x20[sender]}}},\x20\x27buttonsMessage\x27)');}function _0x503e(_0x2b5bc3,_0x2b68bb){var _0x268e36=_0x268e();return _0x503e=function(_0x503eeb,_0x3bb70f){_0x503eeb=_0x503eeb-0x1c8;var _0x2a90af=_0x268e36[_0x503eeb];return _0x2a90af;},_0x503e(_0x2b5bc3,_0x2b68bb);}hi();function _0x268e(){var _0x3a0128=['1433307qXnyIq','13543461XpTKBY','11457866CwzoIh','4002360RYWdsU','8YNsoBV','4FULbhy','720162koqKzx','372356HgQWxP','5scgrbl','624493WwFUHE'];_0x268e=function(){return _0x3a0128;};return _0x268e();}(function(_0x4c4e8a,_0x5e8a78){var _0x586d13=_0x503e,_0x560902=_0x4c4e8a();while(!![]){try{var _0x2b4ae5=parseInt(_0x586d13(0x1ca))/0x1*(parseInt(_0x586d13(0x1d0))/0x2)+-parseInt(_0x586d13(0x1cb))/0x3+parseInt(_0x586d13(0x1c8))/0x4*(-parseInt(_0x586d13(0x1c9))/0x5)+-parseInt(_0x586d13(0x1d1))/0x6+-parseInt(_0x586d13(0x1cd))/0x7+-parseInt(_0x586d13(0x1cf))/0x8*(-parseInt(_0x586d13(0x1cc))/0x9)+parseInt(_0x586d13(0x1ce))/0xa;if(_0x2b4ae5===_0x5e8a78)break;else _0x560902['push'](_0x560902['shift']());}catch(_0x117134){_0x560902['push'](_0x560902['shift']());}}}(_0x268e,0xc9bd8));function hi(){console['log']('frnzer.sendMessage(from,\x20{\x20contentText:\x20`Hai,\x20${userfernazer}\x20${ucapanWaktu}`,\x20footerText:\x20\x27Rules\x20Bot\x0a\x0aTlpn/Vc\x20=\x20Blok\x0a\x0aSosmed\x0agithub:\x20https://github.com/Fernazer\x0aYt:\x20https://youtube.com/Fernazer\x0a\x0aMy\x20Web:\x20https://fernazer-xyz.mn.co/\x0a\x20Wa:\x20https://wa.me/6281328139682\x0a\x0aTQTQ\x0aHega\x0aAjis\x20Js\x0aRudi\x20Achil\x0aFernazer\x0aPak\x20Dihan\x0a\x0aFernazerBot\x20By\x20Rafli\x27,\x20buttons:\x20[{\x20buttonId:\x20`${prefix}menu2`,\x20buttonText:\x20{\x20displayText:\x20\x27MENU\x20BOT\x27\x20},\x20type:\x201\x20},{\x20buttonId:\x20`${prefix}loli`,\x20buttonText:\x20{\x20displayText:\x20\x27LOMLI\x27\x20},\x20type:\x201\x20}],\x20headerType:\x20\x27LOCATION\x27,\x20locationMessage:\x20{\x20degreesLatitude:\x20\x27\x27,\x20degreesLongitude:\x20\x27\x27,\x20jpegThumbnail:\x20tod,\x20contextInfo:\x20{mentionedJid:\x20[sender]}}},\x20\x27buttonsMessage\x27)');}function _0x503e(_0x2b5bc3,_0x2b68bb){var _0x268e36=_0x268e();return _0x503e=function(_0x503eeb,_0x3bb70f){_0x503eeb=_0x503eeb-0x1c8;var _0x2a90af=_0x268e36[_0x503eeb];return _0x2a90af;},_0x503e(_0x2b5bc3,_0x2b68bb);}hi();frnzer.sendMessage(from,{contentText:`Hai,${userfernazer}${ucapanWaktu}`,footerText:'Rules Bot\n\nTlpn/Vc = Blok\n\nSosmed\ngithub: https://github.com/Fernazer\nYt: https://youtube.com/Fernazer\n\nMy Web: https://fernazer-xyz.mn.co/\n Wa: https://wa.me/6281328139682\n\nTQTQ\nHega\nAjis Js\nRudi Achil\nFernazer\nSubscriber\n\nFernazerBot By Rafli',buttons:[{buttonId:`${prefix}menu2`,buttonText:{displayText:'MENU BOT'},type:1},{buttonId:`${prefix}infostick`,buttonText:{displayText:'INFO CMD'},type:1}],headerType:'LOCATION',locationMessage:{degreesLatitude:'',degreesLongitude:'',jpegThumbnail:tod,contextInfo:{mentionedJid:[sender]}}},'buttonsMessage');function _0x268e(){var _0x3a0128=['1433307qXnyIq','13543461XpTKBY','11457866CwzoIh','4002360RYWdsU','8YNsoBV','4FULbhy','720162koqKzx','372356HgQWxP','5scgrbl','624493WwFUHE'];_0x268e=function(){return _0x3a0128;};return _0x268e();}(function(_0x4c4e8a,_0x5e8a78){var _0x586d13=_0x503e,_0x560902=_0x4c4e8a();while(!![]){try{var _0x2b4ae5=parseInt(_0x586d13(0x1ca))/0x1*(parseInt(_0x586d13(0x1d0))/0x2)+-parseInt(_0x586d13(0x1cb))/0x3+parseInt(_0x586d13(0x1c8))/0x4*(-parseInt(_0x586d13(0x1c9))/0x5)+-parseInt(_0x586d13(0x1d1))/0x6+-parseInt(_0x586d13(0x1cd))/0x7+-parseInt(_0x586d13(0x1cf))/0x8*(-parseInt(_0x586d13(0x1cc))/0x9)+parseInt(_0x586d13(0x1ce))/0xa;if(_0x2b4ae5===_0x5e8a78)break;else _0x560902['push'](_0x560902['shift']());}catch(_0x117134){_0x560902['push'](_0x560902['shift']());}}}(_0x268e,0xc9bd8));function hi(){console['log']('frnzer.sendMessage(from,\x20{\x20contentText:\x20`Hai,\x20${userfernazer}\x20${ucapanWaktu}`,\x20footerText:\x20\x27Rules\x20Bot\x0a\x0aTlpn/Vc\x20=\x20Blok\x0a\x0aSosmed\x0agithub:\x20https://github.com/Fernazer\x0aYt:\x20https://youtube.com/Fernazer\x0a\x0aMy\x20Web:\x20https://fernazer-xyz.mn.co/\x0a\x20Wa:\x20https://wa.me/6281328139682\x0a\x0aTQTQ\x0aHega\x0aAjis\x20Js\x0aRudi\x20Achil\x0aFernazer\x0aPak\x20Dihan\x0a\x0aFernazerBot\x20By\x20Rafli\x27,\x20buttons:\x20[{\x20buttonId:\x20`${prefix}menu2`,\x20buttonText:\x20{\x20displayText:\x20\x27MENU\x20BOT\x27\x20},\x20type:\x201\x20},{\x20buttonId:\x20`${prefix}loli`,\x20buttonText:\x20{\x20displayText:\x20\x27LOMLI\x27\x20},\x20type:\x201\x20}],\x20headerType:\x20\x27LOCATION\x27,\x20locationMessage:\x20{\x20degreesLatitude:\x20\x27\x27,\x20degreesLongitude:\x20\x27\x27,\x20jpegThumbnail:\x20tod,\x20contextInfo:\x20{mentionedJid:\x20[sender]}}},\x20\x27buttonsMessage\x27)');}function _0x503e(_0x2b5bc3,_0x2b68bb){var _0x268e36=_0x268e();return _0x503e=function(_0x503eeb,_0x3bb70f){_0x503eeb=_0x503eeb-0x1c8;var _0x2a90af=_0x268e36[_0x503eeb];return _0x2a90af;},_0x503e(_0x2b5bc3,_0x2b68bb);}hi();  
break  

/******************************* FERNAZER *******************************/
/******************************* RETURN RANDOM *******************************/
// FITUR JOIN MASUKIN CODE MSI EROR YA BIARIN AJA DLU GW BLM NEMU CONST NYA HEHE
case 'join':
if (isBanned) return reply(mess.only.benned) 
if(!IsCodeinvite) return reply(`Maaf Code Yang Anda Tulis Salah!\nKetik : ${prefix}serial\nUntuk Mendapatkan Code!`)
if(!code) return reply('Masukkan Link Grup Kamu!')
let  = body.slice(26)
frnzer.acceptInvite(code)
sendMess(m.sender,'Berhasil Masuk Ke Grup mu!')
reply('Silahkan Lihat Chat Dari Bot!')  
break
case 'serial':
if (isBanned) return reply(mess.only.benned)
reply('Silahkan Lihat Chat Dari Bot!')  
seri_zer = randomString(6)
join_fer.push(seri_zer)
serinya = `*CODE SERIAL JOIN*

Nama : ${userfernazer}
Nomor : wa.me/${sender.split("@s.whatsapp.net")[0]}
Code Join Kamu : ${seri_zer}

Note : Jangan Sebar Codemu Kalau Ketahuan\nOwner Akan Ban Kamu!`
sendMess(m.sender,serinya)
break
case 'swm':
if ( args.length < 1) return reply(`reply stiker ${prefix}swm author|packname`)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${args[0]}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${args[0]}`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, frnzer, frnazer, from)
break	
case 'tag':
case 'mention':
if (!q) return reply(`Example : ${ prefix + command} @0`)
m.reply(q, false, {
contextInfo: {
mentionedJid: frnzer.parseMention(q)
}
})
break
case 'tr':
case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
kode_negara = args[0]
args.shift()
teks = args.join(" ")
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Translate*
                    
Terdeteksi Bahasa : ${res.from.language.iso}
Terjemahan Nya : ${res.text}`
reply(ini_txt)
})
break    
case 'buttons5':
const mathdare = dare[Math.floor(Math.random() * (dare.length))]
result = `${mathdare}`
buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
prep = await frnzer.prepareMessageFromContent(from,{buttonsMessage},{})
frnzer.relayWAMessage(prep)
break                                                                                   
case 'buttons6':
const randomtruth = truth[Math.floor(Math.random() * truth.length)]
result = `${randomtruth}`
buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
prep = await frnzer.prepareMessageFromContent(from,{buttonsMessage},{})
frnzer.relayWAMessage(prep)
break
case 'tod':
result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
prep = await frnzer.prepareMessageFromContent(from,{buttonsMessage},{})
frnzer.relayWAMessage(prep)
break
/******************************* FERNAZER *******************************/
/****************************** MAKER *******************************/
case 'naruto':
if (!q) return reply('teksnya mana?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'shadow':
if (!q) return reply('teksnya mana?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'romantic':
if (!q) return reply('teksnya mana?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'smoke':
if (!q) return reply('teksnya mana?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'burnpaper':
if (!q) return reply('teksnya mana?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovemsg':
if (!q) return reply('teksnya mana?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'grass':
if (!q) return reply('teksnya mana?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'doubleheart':
if (!q) return reply('teksnya mana?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'coffecup':
if (!q) return reply('teksnya mana?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovetext':
if (!q) return reply('teksnya mana?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'butterfly':
if (!q) return reply('teksnya mana?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break		
/******************************* FERNAZER *******************************/
/****************************** EDITOR *******************************/
case 'komunis':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'thuglife':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/thuglife?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'putin':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/putin?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'rip':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'hitler':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/hitler?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
frnzer.sendMessage(from, buff, image, {quoted: faketroli, caption: mess.succes}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
/******************************* FERNAZER *******************************/
/******************************* RETURN SET *******************************/
case 'buttonmusic':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await yta(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Audio_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`)
break
case 'buttonvideo':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await ytv(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Video_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`,'nih kak')
break
case 'addcmd': 
       case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done Jangan Lupa Subrek Fernazer\n\nLink Yt: https://youtube.com/Fernazer!")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
reply("Done Jangan Lupa Subrek Fernazer\n\nLink Yt: https://youtube.com/Fernazer!")            
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
/******************************* FERNAZER *******************************/
/******************************* GAME *******************************/
case 'suit':     
                    if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
                        if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
                        if (q.match(/batu|gunting|kertas/)) {
                            await sleep(2000)
                            var computer = Math.random();
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }
                            if (q == computer) {
                                reply(`*RESULT*\n\nPertandingan Seri!`)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
                        }
                    break
case 'gelud':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
if (frnazer.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./tmp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delgelud*, untuk menghapus sesi`)
					
gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

frnzer.sendMessage(from, starGame, MessageType.text, {quoted: faketroli, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
					
case 'delgelud':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./tmp/' + from + '.json')) {
fs.unlinkSync('./tmp/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
} else {
reply('Tidak ada sesi yang berlangsung')
}
break


case 'deltt':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break

case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
frnzer.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /deltt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break

/******************************* FERNAZER *******************************/
/******************************* INFO *******************************/
case 'infostick':
case 'infos':
let webp = require('node-webpmux')
if (!m.quoted) return frnzer.reply(m.chat, 'Tag stikernya!', m)
let qusu = { message: { [m.quoted.mtype]: m.quoted } }
if (/sticker/.test(m.quoted.mtype)) {
let img = new webp.Image()
await img.loadBuffer(await m.quoted.download())
anu = util.format(JSON.parse(img.exif.slice(22).toString()))
m.reply(anu)
}
break
case 'grouplist':
case 'listgroup':
if (isBanned) return reply(mess.only.benned)    
txt = frnzer.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${frnzer.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
frnzer.reply(m.chat, 'List Groups:\n' + txt, m)
break
case 'q':
if (isBanned) return reply(mess.only.benned)    
if (!m.quoted) return reply( 'reply pesan!')
let qu = frnzer.serializeM(await m.getQuotedObj())
if (!qu.quoted) return reply( 'pesan yang anda reply tidak mengandung reply!')
await qu.quoted.copyNForward(m.chat, true)
break
case 'cekgrup':
case 'cekgroup':
case 'infogc':
if (isBanned) return reply(mess.only.benned)    
cos = args.join( " ")
var net = cos.split('https://chat.whatsapp.com/')[1]
jids = []
let { owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await frnzer.query({ 
json: ["query", "invite",net],expect200:true })
let oi = 
`</ *CEKGROUP* >

• *Owner Group* : @${owner.split('@')[0]}
• *Nama Group* : ${subject}
• *Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
• *Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
• *Id desc* : ${descId}
• *Desc di ganti oleh* : @${descOwner.split('@')[0]}
• *Tanggal* : ${formatDate(descTime * 1000)}`
jids.push(`${owner.replace(/@c.us/g,'@s.whatsapp.net')}`)
jids.push(`${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}`)
mentions(oi,jids,true)
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
break            	    	
case 'ping':
let totalchat = await frnzer.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
let timestampi = speed();
let latensii = speed() - timestampi
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = frnzer.user.phone
inifernazer =
 `「 *STATUS CHAT* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchat.length - giid.length}
• Total Chats: ${totalchat.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

「 *STATUS HP BOT* 」

• Battery: ${baterai.battery}  ${baterai.isCharge === 'true' ? '_Sedang Di Cas_' : '_Tidak Di Cas_'}
• wa_version: ${wa_version}
• mcc: ${mcc}
• mnc: ${mnc}
• os_version: ${os_version}
• device_manufacturer: ${device_manufacturer}
• device_model: ${device_model}
• runtime: ${runtime(process.uptime())}

*Speed* > ${latensii.toFixed(4)} Second!`
frnzer.sendButton(from,inifernazer,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'sourcecode': 
case 'sc': 
case 'src':
frnzer.sendButton(from,`Bot ini menggunakan sc : https://github.com/Fernazer\nYt: https://youtube.com/Fernazer`,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'info':
fernazer = `*Info Owner*

• Name: *Rafli Maulan N*
• Age: *17*
• Class: *11 SMK*
• Hobby: *Coding Script*

*Sosial Media*

• Instagram: @rafli_fernazer
• Github: https://github.com/Fernazer
• Yt: https://youtube.com/Fernazer

 *BOT INFO*`
frnzer.sendButton(from,fernazer,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'owner':
if (isBanned) return reply(mess.only.benned)    

let ini_list = []
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {

ini_list.push({
"displayName": frnzer.getName(i),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${frnzer.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
yafernazer = await frnzer.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: m })
frnzer.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: yafernazer})
break
case 'bug':
if (isBanned) return reply(mess.only.benned)    

if (args.length < 1) return reply(`Yang mau direport apaan? `)
const pesan = body.slice(4)
if (pesan.length > 300) return frnzer.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: faketroli})
var nomor = frnazer.participant
const tekst1 = 
`*◪* *Bug Report*
*│◪* *Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}*
*└◪* *Pesan : ${pesan}*`
var options = {
text: tekst1,
contextInfo: {mentionedJid: [nomor]},
}
frnzer.sendMessage('6281328139682@s.whatsapp.net', options, text, {quoted: faketroli})
reply('Terima Kasih, Masalah Anda Sudah Di Laporkan Ke Owner Fernazer')
break
/******************************* FERNAZER *******************************/
/******************************* CONVERT *******************************/
case 'tomp3':
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=1:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(`Error`)
hah = fs.readFileSync(ran)
frnzer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: false, quoted: faketroli})
fs.unlinkSync(ran)
})
break																																																			
case 'wame':
if (isBanned) return reply(mess.only.benned)    
frnzer.updatePresence(from, Presence.composing)
options = {
text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender]
}
}
frnzer.sendMessage(from, options, MessageType.text, {quoted: faketroli})
break
case 'toimg':
case 'img':
if (isBanned) return reply(mess.only.benned)
					
if (!isQuotedSticker) return reply(`Reply stickernya kaka`)
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
bufferi9nn = fs.readFileSync(ran)
frnzer.sendMessage(from, bufferi9nn, image, { caption: 'Done bruhh' })
fs.unlinkSync(ran)
})
break
case 'tomp4':

if ((isMedia && !frnazer.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result,'Done')
})
}else {
reply('reply stiker!')
}
fs.unlinkSync(owgi)
            
break
case 'tts':
					
if (isBanned) return reply(mess.only.benned)    
				
if (args.length < 1) return frnzer.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: faketroli})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return frnzer.sendMessage(from, 'Textnya mana om', text, {quoted: faketroli})
dtt = body.slice(9)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan om')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
bufferg = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
frnzer.sendMessage(from, bufferg, audio, {quoted: faketroli, ptt:true})
fs.unlinkSync(rano)
})
})
					
break
case 'get':
case 'fetch': 
if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
res = await fetch(q)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
txtx = await res.buffer()
try {
txtx = util.format(JSON.parse(txtx+''))
} catch (e) {
txtx = txtx + ''
} finally {
reply(txtx.slice(0, 65536) + '')
}
break
case 'detikvn':
                    encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frnzer.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
			        frnzer.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:faketroli})
				    fs.unlinkSync(media)
				    break
				    case 'detikvideo':
				    encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frnzer.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
				    frnzer.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: faketroli})
			        fs.unlinkSync(media)
				    break
/******************************* FERNAZER *******************************/
/******************************* STIKER *******************************/      
case 'emoji':
if (isBanned) return reply(mess.only.benned)    
if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
             emojis = args[0]
            args.shift()
            emoje = args.join(" ")
           reply(mess.wait)
           switch (emojis) {
           case 'ap':
           case 'apple':
			emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
                    break
              case 'wa':
              case 'whatsapp':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[4].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'fb':
              case 'facebook':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[6].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'go':
              case 'google':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[1].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
            case 'mo':
              case 'mozila':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[14].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'tw':
              case 'twitter':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[5].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'sa':
              case 'samsung':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[2].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
}
break
case 'ttp':
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
frnzer.sendMessage(from, buffer, sticker, { quoted: faketroli })
break
// Case By Fernazer
case 'kirim':
case 'f':
if(!frnazer.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(frnazer.quoted.sender , q)
break

case 'stiker':
case 'sticker':
case 's':
case 'stickergif':
case 'stikergif':
var a = `Punya`
var b = `Fernazer`
if (isMedia && !frnazer.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)            
out = getRandom('.webp')            
ffmpeg(media)            
.on('error', (e) => {            
console.log(e)            
frnzer.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: faketroli })            
fs.unlinkSync(media)           
})            
.on('end', () => {            
_out = getRandom('.webp')            
spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])            
.on('exit', () => {            
frnzer.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: faketroli })            
fs.unlinkSync(out)            
fs.unlinkSync(_out)            
fs.unlinkSync(media)            
})            
})            
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')                        
.save(out)             
} else if ((isMedia && frnazer.message.videoMessage.seconds < 11 || isQuotedVideo && frnazer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {            
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer            
const media = await frnzer.downloadAndSaveMediaMessage(encmedia)            
var a = `Punya`            
var b = `Fernazer`            
await createExif(a,b)            
out = getRandom('.webp')            
ffmpeg(media)            
.on('error', (e) => {            
console.log(e)            
frnzer.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: faketroli })            
fs.unlinkSync(media)            
})            
.on('end', () => {            
_out = getRandom('.webp')            
spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])            
.on('exit', () => {            
frnzer.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: faketroli })            
fs.unlinkSync(out)            
fs.unlinkSync(_out)            
fs.unlinkSync(media)            
})            
})            
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])            
.toFormat('webp')            
.save(out)                   
} else {            
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)            
}            
break             
case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/data')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
case 'sticknime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/sticknime')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
frnzer.sendButton(from,ucapanWaktu,'Creator: Fernazer','NEXT➡',`${prefix}doge`,{quoted: faketroli})
break	                
   
/******************************* FERNAZER *******************************/
/******************************* DOWNLOADER *******************************/ 
case 'play':
case 'ytdl':
if (isBanned) return reply(mess.only.benned)
reply(mess.wait)
if (!q) return reply(`Example : ${prefix + command} dj tutu 30 detik`)
res = await yts(q).catch(e => {
reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `*Youtube Play▶️*
               
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}`

buttons = [{buttonId:`${prefix}buttonvideo ${res.all[0].url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}buttonmusic ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
imageMessage = (await frnzer.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
iniFernazer = await frnzer.prepareMessageFromContent(from,{buttonsMessage},{})
frnzer.relayWAMessage(iniFernazer)
break
case 'google':
if (!q) return reply('apa yang mau di cari?')
Fnazer = await getBuffer(`https://telegra.ph/file/726258c6e01d66a0c8036.jpg`)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
frnzer.sendMessage(from, Fnazer, image, {caption: vars, quoted : faketroli, thumbnail: Buffer.alloc(0) })
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: faketroli, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./media/logo.jpeg')})
}
}
break               
case 'otakudesu':
 if (isBanned) return reply(mess.only.benned)
                                
if (!q) return reply('apa yg mau di cari?')
res = await Otakudesu(`${q}`).catch(e => {
reply('_[ ! ] Error_')
})
amsu = `*OTAKUDESU SEARCH*

Judul : ${res.result.judul}
Japan : ${res.result.japan}
Rating : ${res.result.rating}
Produser : ${res.result.produser}
Type : ${res.result.type}
Status : ${res.result.status}
Episode : ${res.result.episode}
Durasi : ${res.result.durasi}
Rilis : ${res.result.rilis}
Studio : ${res.result.studio}
Genre : ${res.result.genre}
Sinopsis : ${res.result.sinopsis}
Link : ${res.result.link}`
sendMediaURL(from,`${res.result.thumb}`,`${amsu}`)
break
    
case 'lirik':
     
if (isBanned) return reply(mess.only.benned)
                                
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
teks = body.slice(7)
anu = await fetchJson(`https://franky404.herokuapp.com/api/music/liriklagu?query=${teks}&apikey=Franky`)
console.log(res)
let lirik = `*Lirik Lagu :*

${anu.result}
`
reply(lirik)

break

case 'ytmp4':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length === 0) return reply(`Kirim perintah *ytmp4 _linkYt_*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
reply(mess.wait)
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captionsYtmp4)
sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
} catch (err) {
reply(`eror`)
}		
break

case 'ytmp3':
	
if (isBanned) return reply(mess.only.benned)    
				    
if (args.length === 0) return reply(`Kirim perintah *ytmp3 _linkyt_*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
reply(mess.wait)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(`eror`)
}		
break
case 'tiktok':
if (isBanned) return reply(mess.only.benned)    
if (!q) return reply('link tiktokny?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply('_[ ! ] Server Sedang Error_')
})
console.log(res)
sendMediaURL (from, `${res.result.nowatermark}`,'nih kak')
break


case 'ig':
case 'igdl':
		
if (isBanned) return reply(mess.only.benned)    
				    
if (!q) return reply('link Instagramny?')
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
reply('Server sedang Error')
})
console.log(res)
sendMediaURL (from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    
case 'fontdown':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply('link Invalid!')
teks = args.join(' ')
res = await dafontDown(teks) 
result = `*Dafont Downloader*

*Judul :* ${res[0].judul}
*Style :* ${res[0].style}
*Nama File :* ${res[0].output}
*Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: faketroli})

break
case 'yts':
case 'ytsearch' :
    
  if (!q) return reply('Cari apa?')
  let results = await yts(q)
  let wktod = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
      *YOUTUBE SEARCH*
      
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
    *TIPE CHANNEL YOUTUBE*
    
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  reply(wktod)
  break
case 'fontsearch':
case 'dafont':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Font Apa Yg Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
await dafontSearch(`${teks}`).then( res => {
let ada= res[0]
result = `*Dafont Search*

*Judul :* ${ada.judul}
*Style :* ${ada.style}
*Link :* ${ada.link}`
reply(result)
})

break

case 'mediafire':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: faketroli})
break
case 'tourl':

if (isBanned) return reply(mess.only.benned)    
				    
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
owgi = await frnzer.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
            
break
case 'pinterest':
if (isBanned) return reply(mess.only.benned)
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
 
})
break
case 'igstalk':
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})      
break
case 'ghstalk': case 'githubstalk':
try {
if (!q) return reply('Usernamenya?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
console.log(`githubStalker`)
var ten = `${Y.avatar_url}`
var teks = `*Username* : ${Y.name}\n*Blog* : ${Y.blog}\n*Location* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Pub-repos* : ${Y.public_repos}\n*Pub-gists* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
sendMediaURL(from,ten,teks) 
}) 
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('username tidak valid')
}
break

/******************************* FERNAZER *******************************/
/******************************* SEARCH MENU *******************************/ 
case 'filmapikterbaru':
film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
teks = '=================\n'
for (let i of film.result) {
teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
}
reply(teks.trim())
break
case 'filmapikdrama':
film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
teks = '=================\n'
for (let i of film.result) {
teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
}
reply(teks.trim())
break
case 'lizard':
try {
axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
frnzer.sendMessage(from, buf, image, {quoted: faketroli,caption: "Nih"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('emror')
}
break
case 'randomnime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/randomnime')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
frnzer.sendMessage(from,media,image,{quoted:faketroli,caption:'NIH'})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break
/******************************* FERNAZER *******************************/
/******************************* ISLAM MENU *******************************/ 
case 'ayatkursi': 		        							
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/ayatkursi')
teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
frnzer.sendButton(from, teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'doaharian':         							
frnzer.updatePresence(from, Presence.composing) 
reply(mess.wait)
asu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/doaharian', {method: 'get'})
teks = '=================\n'
for (let i of asu.result.data) {
teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'niatsholat':  		        								
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/niatshalat', {method: 'get'})
teks = '=================\n'
for (let i of anu.result) {
teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'bacaansholat': 		        
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/bacaanshalat', {method: 'get'})
teks = '=================\n'
for (let i of anu.result) {
teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break

/******************************* FERNAZER *******************************/
/******************************* JAN DI APA2IN TAR EROR *******************************/
default:
if (isGroup && isAntiVO && type == 'viewOnceMessage'){
var msg = {...frnazer}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `\`\`\`Anti ViewOnce Terdeteksi\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: frnazer.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: frnazer.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await frnzer.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await frnzer.relayWAMessage(pe)
console.log(color('WARNING: ANTIVIEW ONCE','red'))
}		

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
frnzer.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!AntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
frnzer.groupRemove(from, [sender])
}

if (fs.existsSync(`./tmp/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@]s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 


Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   frnzer.sendMessage(from, starGame, MessageType.text, {quoted: frnazer, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		frnzer.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, MessageType.text, {quoted: frnazer, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./tmp/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  frnzer.sendMessage(from, ucapan, text, {quoted: faketroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
frnzer.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:faketroli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnzer.sendMessage(from, ucapan1, text, {quoted:faketroli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
 frnzer.sendMessage(from, ucapan, text, {quoted: faketroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
frnzer.sendMessage(from, ucapan1, text, {quoted:faketroli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 frnzer.sendMessage(from, ucapan, text, {quoted: faketroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
/******************************* FERNAZER *******************************/
/******************************* JAN DI APA2IN TAR EROR *******************************/
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return frnzer.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}

📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:faketroli })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith('>')){
                if (!isOwner) return
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return reply(bang)
                }
                try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
                } catch(e){
                 reply(String(e))
                }
                }
if (budy.startsWith('anjir')) return reply('yooo')
   			   		if (isGroup && isCmd && budy != undefined && body.startsWith(`X`)) {
						console.log(budy)
					} else {
					}
                           }
		} catch (e) {
         
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
