const {
    MessageEmbed
} = require("discord.js");
const Stat = require("../../models/stats");
let profil = require("../../models/profil");
let sunucuayar = require("../../models/sunucuayar");
let xpData = require("../../models/stafxp");
let uyarıData = require("../../models/uyarı");
let puansystem = require("../../models/puansystem");
let taglıData = require("../../models/taglıUye");
const yetkiliDB = require("../../models/yetkili");
const ytbaslat = require("../../models/yetkibaşlat")

let ozelKomut = require("../../models/özelkomut");
let missionSystem = require("../../models/randomMission");

module.exports.run = async (client, message, args, kanal) => {
    if(!client.ayarlar.commandChannel.some(kanal => message.channel.id.includes(kanal))) return; 
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let profilData = await profil.findOne({
        userID: target.id,
        guildID: message.guild.id
    }) || {
        userID: target.id,
        guildID: message.guild.id,
        BanAmount: 0,
        JailAmount: 0,
        MuteAmount: 0,
        VoiceMuteAmount: 0
    };
    let data = await Stat.findOne({
        userID: target.id,
        guildID: message.guild.id
    }) || {
        yedi: {
            Chat: {},
            Voice: {},
            TagMember: 0,
            Invite: 0,
            Register: 0,
            Yetkili: 0
        },
        messageChannel: {}
    };
    let data2 = await taglıData.find({
        authorID: target.id,
        Durum: "puan"
    }) || [];
    let yetkiliData = await yetkiliDB.find({
        authorID: target.id,
        Durum: "puan"
    }) || [];
    let yetkili = data.yedi.Yetkili;
    let taglı = data.yedi.Taglı;
    let invite = data.yedi.Invite;
    let teyit = data.yedi.Register;
    let statemoji = client.emojis.cache.find(x => x.name === "ravgar_circle");
    let info = client.emojis.cache.find(x => x.name === "ravgar_info");
    let BanMiktar = profilData.BanAmount
    let JailMiktar = profilData.JailAmount
    let MuteMiktar = profilData.MuteAmount;
    let SesMuteMiktar = profilData.VoiceMuteAmount
    Stat.findOne({
        userID: target.id,
        guildID: message.guild.id
    }, (err, data) => {
        if (!data) data = {
            yedi: {
                Voice: {},
                Chat: {}
            },
            voiceCategory: {},
            voiceChannel: {},
            messageChannel: {},
            voiceLevel: 1,
            messageLevel: 1,
            voiceXP: 0,
            messageXP: 0,
            coin: 0.0
        }
        let voiceCategory = Object.keys(data.voiceCategory).splice(0, 10).sort(function (a, b) {
            return data.voiceCategory[b] - data.voiceCategory[a]
        }).map((x, index) => `${client.emojis.cache.find(x => x.name === "ravgar_circle")} ${message.guild.channels.cache.get(x) ? message.guild.channels.cache.get(x).name : "#kategori-bulunamadı"} \`${client.convertDuration(data.voiceCategory[x])}\``).join("\n");
        let voiceChannel = Object.keys(data.voiceChannel).splice(0, 10).sort(function (a, b) {
            return data.voiceChannel[b] - data.voiceChannel[a]
        }).map((x, index) => `${client.emojis.cache.find(x => x.name === "ravgar_circle")} #${message.guild.channels.cache.get(x) ? message.guild.channels.cache.get(x).name : "#kanal-bulunamadı"} \`${client.convertDuration(data.voiceChannel[x])}\``).join("\n");
        let messageChannel = Object.keys(data.messageChannel).splice(0, 5).sort(function (a, b) {
            return data.messageChannel[b] - data.messageChannel[a]
        }).map((x, index) => `${client.emojis.cache.find(x => x.name === "ravgar_circle")} #${message.guild.channels.cache.get(x) ? message.guild.channels.cache.get(x).name : "#kanal-bulunamadı"} \`${data.messageChannel[x]} mesaj\``).join("\n");
        let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/attachments/774447325060923393/812908877636567090/unknown.png")
            .setDescription(`${target} adlı kullanıcının **${message.guild.name}** sunucusundaki istatistikleri.\n`)
        embed.addField(`${info}  __**Toplam Kategori Sıralaması**__  \` (${client.convertDuration(data.totalVoice)}) \``, `${voiceCategory ? voiceCategory : "Kayıtlı Stat Verisi Bulunamadı."}`)
        embed.addField(`${info}  __**Toplam Kanal Sıralaması**__  \` (Toplam ${Object.keys(data.voiceChannel).length} kanalda bulunmuş) \``, `${voiceChannel ? voiceChannel : "Kayıtlı Stat Verisi Bulunamadı."}`)
        embed.addField(`${info}  __**Toplam Mesaj Kanal Sıralaması**__  \` (${data.totalMessage} mesaj) \``, `${messageChannel ? messageChannel : "Kayıtlı Stat Verisi Bulunamadı."}`)
        embed.addField(`__**Etki Faktör Bilgileri**__`, `
\`\`\`ini\n[-Toplam Kayıt: ${teyit} - Toplam Davet: ${invite}
- Toplam Yetkili: ${yetkili} - Toplam Taglı: ${taglı}
- Toplam Mute: ${MuteMiktar} - Toplam VoiceMute: ${SesMuteMiktar}
- Toplam Ban: ${BanMiktar} - Toplam Jail: ${JailMiktar}]\n\`\`\``)

        message.channel.send({embeds: [embed]})
    });
};
exports.conf = {
    aliases: ["verilerim", "Stat", "Stats"]
};
exports.help = {
    name: 'stat'
};