const fs = require('fs')
const chalk = require('chalk')

//—————「 API Open AI 」—————//
// isi apikey open ai nya, ambil di website https://platform.openai.com/account/api-keys
global.keyAI = 'ISI_APIKEY_OPENAI_DISINI'; 

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'IRSTOD-BOTZ' // nama bot
global.namaowner = 'Irsyaddd' // nama owner 
global.namagrup = 'IRSTOD-BOTZ' // nama grup

//—————「 Setting Owner 」—————//
global.owner = ['6281586783372'] // nomor owner
global.ownernomer = "6281586783372" // nomor owner

//—————「 Setting Donasi 」—————//
global.textd = 'Donasi seikhlasnya om' // teks donasi (atas)
global.textdd = 'jika sudah melakukan tf, ss bukti tf' // teks donasi (bawah)
// jika nggk ada ketik saja strip -
global.dana = '081586783372' // isi dana 
global.pulsa = '081586783372' // isi nomor pulsa 
global.gopay = '089637266141' // gopay
global.ovo = '-' // ovo

//—————「 Set Kebutuhan Kontak 」—————//
global.email = 'irstod@proton.me' // email lu
global.namaweb = '-' // nama website lu
global.myweb = 's.id/IkyWithRani' // link website lu
global.region = 'Indonesia' // negara lu
global.mygc = 'https://chat.whatsapp.com/GlNHYm3bjaTIv67h75PYML' // link grup
global.myig = '-' // link instagram 

//—————「 Set WM 」—————//
// isi wm sticker lu
global.packname = 'sticker by' 
global.author = 'Irsyad'

//—————「 Set Nama Session 」—————//
//gausah di apa² ini!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa²in ini!
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#', '$', ',']

//—————「 Set Message 」—————//
global.mess = {
    success: 'Done pler❗',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin Group ❗',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group ❗',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner ❗',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat ❗',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat ❗',
    bot: 'Fitur Khusus Pengguna Nomor Bot ❗',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 ❗',
    error: 'Fitur Sedang Error ❗',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 15,
}

//—————「 Set Other 」—————//
global.AdReplyy = 'IRSTOD-BOTZ' 
global.autobioo = true// bio otomatis 
global.autoTyping = false // sedang mengetik
global.anticall = true // anti di telepon 

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})