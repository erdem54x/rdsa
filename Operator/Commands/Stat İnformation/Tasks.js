const {
    MessageEmbed
} = require("discord.js");
require("moment-timezone")
let Stat = require("../../models/stats");
let sunucuayar = require("../../models/sunucuayar");
let xpData = require("../../models/stafxp");
const moment = require("moment")
let uyarıData = require("../../models/uyarı");
const {MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js")
let puansystem = require("../../models/puansystem");
let taglıData = require("../../models/taglıUye");
const yetkiliDB = require("../../models/yetkili");
require("moment-duration-format");
let ozelKomut = require("../../models/özelkomut");
let missionSystem = require("../../models/randomMission");
const Seens = require("../../models/Seens")
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;
    let sunucuData = await sunucuayar.findOne({
        guildID: message.guild.id
    });
    let server = await sunucuayar.findOne({guildID: message.guild.id});  
    if(!message.member.permissions.has("8") && !message.member.roles.cache.has(server.EnAltYetkiliRol) && !server.REGISTERAuthorized.some(rol => message.member.roles.cache.has(rol))  &&!server.UstYetkiliRol.some(rol => message.member.roles.cache.has(rol))) return;
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let göster = await ozelKomut.find({
            guildID: message.guild.id,
            YetkiliROL: true
        });
        let arr = []
        let veri = göster.map(x => x.YetkiliData)
        veri.forEach(v => v.forEach(x => arr.push(x)));


        let statemoji = client.emojis.cache.find(x => x.name === "ravgar_circle");
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
            }
        };
        let data2 = await taglıData.find({
            authorID: target.id,
            Durum: "puan"
        }) || [];
        let yetkiliData = await yetkiliDB.find({
            authorID: target.id,
            Durum: "puan"
        }) || [];
        let kanallar = await puansystem.findOne({
            guildID: message.guild.id
        });
        let puan = await xpData.findOne({
            userID: target.id
        }) || {
            currentXP: 0
        };

        let yetkiler = kanallar.PuanRolSystem;
        let ekPuan = puan.currentXP;

        let mission = await missionSystem.findOne({
            userID: target.id,
            Active: true
        })
            let seens = await Seens.findOne({userID: target.id});
        let embed = new MessageEmbed().setColor("RANDOM").setAuthor(target.displayName, target.user.avatarURL({
                dynamic: true
            })).setFooter(client.ayarlar.footer)
            .setThumbnail("https://media.discordapp.net/attachments/904664323769651211/1001138010869469276/unknown.png?width=50&height=46")
            .setDescription(`
${client.emojis.cache.find(x => x.name === "ravgar_info")} Genel Bilgiler;
\`• Son Ses / Mesaj Aktifliği :\` <t:${(seens.lastSeenVoice  ?  Math.floor(Math.floor(seens.lastSeenVoice ) / 1000) : Date.now())}:R> / <t:${(seens.lastSeenMessage ?  Math.floor(Math.floor(seens.lastSeenMessage) / 1000) : Date.now())}:R>
\`• Görev                     :\` ${mission ? mission.Mission.MISSION.toUpperCase(): "Görev Seçmelisin !"}
\`• Görev İlerleme            :\` ${mission ? `${progressBar(mission.Mission.MISSION == "ses" ? mission.Check/(1000*60) : mission.Check, mission.Mission.MISSION == "ses" ? mission.Mission.AMOUNT/(1000*60) : mission.Mission.AMOUNT, 6)} (**%${yuzdelik(mission.Mission.MISSION == "ses" ? mission.Check/(1000*60) : mission.Check, mission.Mission.MISSION == "ses" ? mission.Mission.AMOUNT/(1000*60) : mission.Mission.AMOUNT, 6).toFixed(1)}**) ` : `Görev Seçmelisin !`}
\`• Görev Durumu              :\` ${mission ? mission.Check >= mission.Mission.AMOUNT ? `Tamamlandı. ${client.emojis.cache.find(x => x.name === "ravgar_tik")}`: `Tamamlanmadı. ${client.emojis.cache.find(x => x.name === "ravgar_cancel")}` : `${client.emojis.cache.find(x => x.name === "ravgar_cancel")} Görevin Bulunmamakta.`}
\`• Görev Detayı              :\` ${mission ? mission.Mission.MISSION == "ses"  ? `${message.guild.channels.cache.get(mission.Mission.CHANNEL)} kanalında **${moment.duration(mission.Mission.AMOUNT).format("H [saat, ] m [dakika]")}** geçir.` : mission.Mission.MISSION == "mesaj" ? `<#${mission.Mission.CHANNEL}> kanalına **${mission.Mission.AMOUNT}** mesaj gönder.` : mission.Mission.MISSION == "davet" ? `Sunucuya **${mission.Mission.AMOUNT}** Üye davet et.` :  mission.Mission.MISSION == "taglı" ? `Sunucuya **${mission.Mission.AMOUNT}** Üye kayıt et.` : mission.Mission.MISSION == "teyit" ? `Sunucuya **${mission.Mission.AMOUNT}** Üye kayıt et.` : "Görevin bulunmamakta." :  ""}
`)
            
message.channel.send({embeds: [embed]})

        if (kanallar.AutoRankUP.Type == true) {
            for (var i = 0; i < yetkiler.length; i++) {
                if (yetkiler[i].ROLE_1 === kanallar.AutoRankUP.sabitROL) break;
            };
            yetkiler.slice(0, i).filter(user => target.roles.cache.get(user.ROLE_1)).map(async user => {
                if (totalpoints+Number(ekPuan) >= user.PUAN) {
                    target.roles.remove(user.ROLE_1)
                    target.roles.add(user.ROLE_2)
                    client.channels.cache.get(kanallar.AutoRankUP.LogChannel).send(`:tada: ${target} tebrikler!Gerekli XP 'ye ulaşarak **${message.guild.roles.cache.get(user.ROLE_1).name}** rolünden **${message.guild.roles.cache.get(user.ROLE_2).name}** rolüne atladın!`)
                await Stat.updateOne({
                    userID: target.id,
                    guildID: message.guild.id
                }, {
                    $set: {
                        ["HanedanPuan"]: 0,
                        ["EtkinlikPuan"]: 0,
                        ["yedi.Id"]: target.id,
                        ["yedi.Voice"]: {},
                        ["yedi.Chat"]: {},
                        ["yedi.TagMember"]: 0,
                        ["yedi.Invite"]: 0,
                        ["yedi.Register"]: 0,
                        ["yedi.Yetkili"]: 0,
                    }
                }).exec(); await xpData.updateOne({
                    userID: target.id
                }, {
                    $set: {
                        currentXP: 0
                    }
                }, {
                    upsert: true
                }).exec(); await ozelKomut.updateMany({
                    guildID: message.guild.id,
                    komutAd: {
                        $exists: true
                    }
                }, {
                    $pull: {
                        YetkiliData: {
                            Author: target.id
                        }
                    }
                }).exec(); await taglıData.deleteMany({
                    Durum: "puan",
                    authorID: target.id
                }); await yetkiliDB.deleteMany({
                    Durum: "puan",
                    authorID: target.id
                });
            }
    });
}

function yetkiliStat(data, parentArray, yasaklıArray) {
    let obje = 0;
    if (data) {
        parentArray.forEach(parentID => {
            let ekle = 0;
            message.guild.channels.cache.filter(channel => channel.parentId == parentID).forEach(channel => {
            })
            obje = ekle
        })
        return obje
    } else return obje
}





}
exports.conf = {
    aliases: ["task"]
}
exports.help = {
    name: 'görevim'
}

function progressBar(value, maxValue, size) {
    const percentage = value < 0 ? 0 : value >= maxValue ? 100 / 100 : value / maxValue;
    const progress = Math.round((size * percentage));
    const emptyProgress = size - progress;
    const progressText = `${client.emojis.cache.find(x => x.name == "ravgar_ortabar")}`.repeat(progress);
    const emptyProgressText = `${client.emojis.cache.find(x => x.name == "ravgar_griortabar")}`.repeat(emptyProgress);
    const bar = `${value ? client.emojis.cache.find(x => x.name == "ravgar_solbar") : client.emojis.cache.find(x => x.name == "ravgar_baslangicbar")}` + progressText + emptyProgressText + `${emptyProgress == 0 ? `${client.emojis.cache.find(x => x.name === "ravgar_bitisbar")}` : `${client.emojis.cache.find(x => x.name === "ravgar_gribitisbar")}`}`;
    return bar;
};

function yuzdelik(amount, value) {
    let miktar = amount;
    let istenen = value;
    return Number((miktar / istenen) * 100);
}