/** 
Base: Hisoka
recode: Shizuka Botz BY Alfando

Note: Ubah yang penting saja
INI ASLI YA DEK, GAK USAH BACOD, FREE KALAU MAU MAKE TINGGAL EDIT AJA, GAK USAH EDIT CASE NYA, NANTI ERROR NYALAHIN SCRIPT JELEK
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// FREE API
global.APIKeys = {
	'https://zenzapis.xyz': '087b253e44',
}

// Other
global.botname = 'BabyBot'                 //ubah jadi nama bot loe
global.instagram = 'https://instagram.com/alfando_3398'   //ubah jadi link instagram kamu(kalau gak punya, gausah di ubah, anggep aia sedekah)
global.groupowner = 'https://chat.whatsapp.com/IyrxJb2Ktk6EXllKgZ9gDr' //Ubah jadi link gc kamu, kalau sepi gausah di ubah
global.nomorowner = '6285710128853' //nomor lu
global.ownername = 'MaulanaSihοΈ' //your name
global.owner = ['6285710128853','0394939384838388'] //isi sama nomor lu, kalau cuma punya 1, salah satu nya di ganti jadi 0 aja
global.premium = ['625710128853'] //premium
global.packname = 'Apa coba'
global.author = 'Jangan Lupa Gay di bogorπβοΈ'
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    success: 'Nih coeg',
    admin: 'Khusus admin gay!',
    botAdmin: 'π±ππ belum admin dah',
    owner: 'nigga banget nih orang',
    group: 'Gak bisa sih!',
    private: 'π·πππ’π ππππ πππππππππ ππ π²πππ πππππππ',
    bot: 'πΊπππππ ππππππππ πππππ πππ',
    wait: 'Tunggu sebentar, bogor',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.watermark = 'bogor Bogor bogor'
global.shizuka = fs.readFileSync('./ambatokam/shizuka2.jpg')
global.thumb = fs.readFileSync('./ambatokam/shizuka.jpg')
global.visoka = fs.readFileSync('./video/splash.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
