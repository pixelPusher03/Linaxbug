const fs = require('fs')

//===========================//

const {
proto, delay, getContentType
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//

//================[. GLOBAL OWNER ]================//

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = '256709824720' //masukin nmr lu
global.ownMain = '256709824720' //masukin nmr lu
global.NamaOwner = 'The Developer03' //gausah diganti 
global.sessionName = 'session'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'The Developer03' //ganti aj klo mau
global.author = 'The Developer03' //ganti aj klo mau
global.packname = 'The Developer03' //ganti aj klo mau
global.yt = 'https://www.youtube.com/@the_developer03' //gausah diganti
global.ch = 'https://whatsapp.com/channel/0029Va7qmJ4LNSa4HAXqg10u'

//================[. GLOBAL RESPON ]================//
global.mess = { // bagian ini gausah diganti 
 ingroup: 'This feature can only be used in groups.',
 admin: 'This feature is specifically for group admins.',
 owner: 'You are not the owner.',
 premium: 'You are not a premium user.',
 seller: 'This feature can only be used by resellers and owners.',
 usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid? 🤓`,
 wait: '*Waiting for processing 🗿🚬*',
 success: 'Success Bang 🗿🚬',
 bugsuc: '𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗔𝘁𝘁𝗮𝗰𝗸 𝗧𝗮𝗿𝗴𝗲𝘁',
 bugrespon: '𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝗮𝘁𝘁𝗮𝗰𝗸 ⚡'
}

//===========================//

// #@whiskeysockets/baileys ^6.6.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})