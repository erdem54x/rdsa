const { MessageEmbed, Discord } = require("discord.js");
const conf = client.ayarlar
let mongoose = require("mongoose");
let sunucuayar = require("../../models/sunucuayar");
const { MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js');
let Database = require("../../models/invite");
module.exports.run = async (client, message, args, durum, kanal) => {
  if (!message.guild) return;
  if (!client.ayarlar.sahip.includes(message.author.id)) return;
  var One = new MessageButton().setLabel(`Ceza-i İşlem Denetim`).setCustomId("one").setStyle("SECONDARY")
  var Two = new MessageButton().setLabel(`Yetkili Başvuru`).setCustomId("two").setStyle("SECONDARY")
  var Three = new MessageButton().setLabel(`Sunucu Bilgileri`).setCustomId("three").setStyle("SECONDARY")
  var Four = new MessageButton().setLabel(`Davet Bilgileri`).setCustomId("four").setStyle("SECONDARY")
  var Five = new MessageButton().setLabel(`Bot'un Komutları`).setCustomId("five").setStyle("SECONDARY")
  const row = new MessageActionRow()
  .addComponents([One, Two, Three, Four, Five])
  let msg = await message.channel.send({ content:  `
**${message.guild.name}** Sunucusunda Kullanacağınız Kategorinin Butonununa Basarak İşleminizi Gerçekleştirebilirsiniz ;
    
${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` 1 \` *Yetkililerimiz Tarafından Size Uygulanan Ceza-i İşlemleri Gösterir.*
${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` 2 \` *Yetkili Başvurusu Yapabilirsin.*
${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` 3 \` *Detaylı Sunucu İçindeki Bilgilerini Gösterir.*
${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` 4 \` *Yaptığın Davet Bilgilerini Gösterir.*
${client.emojis.cache.find(x => x.name === "ravgar_circle")} \` 5 \` *Bot'un Komutlarını İncelersiniz.*
    `, components: [row] });

  }
exports.conf = {aliases: []};
exports.help = {name: 'butonpanel'};