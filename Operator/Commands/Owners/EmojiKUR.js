const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.run = async (client, message, args, durum, kanal) => {
  if (!message.guild) return;
  let guild = message.guild;
  if (!client.ayarlar.sahip.some(x => x === message.author.id)) return
	if(args[0] === "kur" || args[0] === "kurulum") {
    
    let onay = "https://cdn.discordapp.com/emojis/1014542762915414099.gif?size=96&quality=lossless";
    let iptal = "https://cdn.discordapp.com/emojis/1014542755722186863.gif?size=96&quality=lossless"; 
    let iptal2 = "https://cdn.discordapp.com/emojis/995761605210026094.png?v=1"; 
    let yildiz = "https://cdn.discordapp.com/emojis/991357112083021964.gif?v=1";
    let ravgar_vmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894209706950656/sesmuteat.png";
    let ravgar_mute = "https://cdn.discordapp.com/attachments/811975658963992647/812894244632788992/muteat.png";
    let ravgar_vunmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894192530751518/sesmuteac.png";
    let ravgar_unmute = "https://cdn.discordapp.com/attachments/811975658963992647/812894234242973716/muteac.png";
    let ravgar_bitisbar = "https://cdn.discordapp.com/emojis/1001111608367521852.png?v=1";
    let ravgar_solbar =  "https://cdn.discordapp.com/emojis/1001111603757981777.png?v=1";
    let ravgar_ortabar = "https://cdn.discordapp.com/emojis/1001111605351825408.png?v=1";
    let ravgar_ban = "https://cdn.discordapp.com/emojis/946070076271001670.png?v=1";
    let ravgar_jail = "https://cdn.discordapp.com/emojis/939679320551616543.png?v=1";
    let ravgar_baslangicbar = "https://cdn.discordapp.com/emojis/1001111610221395988.png?v=1";
    let ravgar_gribitisbar = "https://cdn.discordapp.com/emojis/1001111614667378748.png?v=1";
    let ravgar_griortabar = "https://cdn.discordapp.com/emojis/1001111612905754674.png?v=1";
    let ravgar_afk = "https://cdn.discordapp.com/emojis/776764964009672704.png?v=1"
    let ravgar_carpi = "https://cdn.discordapp.com/attachments/1008427922165608498/1010853028120764456/984066937506127939.gif"
    let ravgar_okey = "https://cdn.discordapp.com/attachments/1008825485075153008/1010854182225444875/995390996571496448.gif"
    let ravgar_info = "https://cdn.discordapp.com/emojis/1028355470622216272.webp?size=96&quality=lossless"
    let ravgar_cikis = "https://cdn.discordapp.com/emojis/1023617059973767279.webp?size=96&quality=lossless"
    let ravgar_giris = "https://cdn.discordapp.com/emojis/1023581888390119585.webp?size=96&quality=lossless"
    let ravgar_security = "https://cdn.discordapp.com/emojis/921047804883918858.gif?size=96&quality=lossless"
    let ravgar_sıfır = "https://cdn.discordapp.com/emojis/1008414524241612910.gif?size=96&quality=lossless"
    let ravgar_bir = "https://cdn.discordapp.com/emojis/1008414433699184771.gif?size=96&quality=lossless"
    let ravgar_iki = "https://cdn.discordapp.com/emojis/1008414448769314836.gif?size=96&quality=lossless"
    let ravgar_uc = "https://cdn.discordapp.com/emojis/1008414464221126696.gif?size=96&quality=lossless"
    let ravgar_dort = "https://cdn.discordapp.com/emojis/1008414477848424549.gif?size=96&quality=lossless"
    let ravgar_bes = "https://cdn.discordapp.com/emojis/1008414492213911562.gif?size=96&quality=lossless"
    let ravgar_altı = "https://cdn.discordapp.com/emojis/1008414508458447012.gif?size=96&quality=lossless"
    let ravgar_yedi = "https://cdn.discordapp.com/emojis/1008416222871814325.gif?size=96&quality=lossless"
    let ravgar_sekiz = "https://cdn.discordapp.com/emojis/1008416245655281715.gif?size=96&quality=lossless"
    let ravgar_dokuz = "https://cdn.discordapp.com/emojis/1008416206367244398.gif?size=96&quality=lossless"

    guild.emojis.create(ravgar_vmute, "ravgar_vmute").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_mute, "ravgar_mute").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_vunmute, "ravgar_vunmute").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_unmute, "ravgar_unmute").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(onay, "ravgar_tik").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(iptal, "ravgar_carpi").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(iptal2, "ravgar_cancel").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_baslangicbar, "ravgar_baslangicbar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_bitisbar, "ravgar_bitisbar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_solbar, "ravgar_solbar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_ortabar, "ravgar_ortabar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_gribitisbar, "ravgar_gribitisbar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_griortabar, "ravgar_griortabar").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(yildiz, "ravgar_imaj").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_ban, "ravgar_ban").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_jail, "ravgar_jail").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_afk, "ravgar_afk").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error); 
    guild.emojis.create(ravgar_carpi, "ravgar_carpii").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_okey, "ravgar_okey").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_info, "ravgar_info").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_cikis, "ravgar_cikis").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_giris, "ravgar_giris").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_security, "ravgar_security").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_sıfır, "ravgar_sıfır").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_bir, "ravgar_bir").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_iki, "ravgar_iki").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_uc, "ravgar_uc").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_dort, "ravgar_dort").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_bes, "ravgar_bes").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_altı, "ravgar_altı").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_yedi, "ravgar_yedi").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_sekiz, "ravgar_sekiz").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
    guild.emojis.create(ravgar_dokuz, "ravgar_dokuz").then(emoji => message.channel.send(`Emrinizle ${emoji.name} Adında Emojiyi Oluşturdum (${emoji})`)).catch(console.error);
 return;
  };
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojis'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'emoji',
    description: "Sunucuda komut denemeye yarar",
    usage: 'eval <kod>',
    kategori: "Bot Yapımcısı"
  };
  