const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "source", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "source",
  aliases: ["github"],

  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends you Source Code Information", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed().setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setDescription(`> <a:special_arrow:945549299620663296> **WHEN YOU USE THE SOURCE CODE, __GIVE CREDITS__!** <a:mid_kittyjumphyped:945596409757966336> <a:Pink_Heart:945595590748815380>\n\n <:arrow:945547633378881566> [Join Server, for Link to Source Code](https://discord.gg/78yXSem6Zg) <:peakpeek:945599005478498315>\n\n**__Contact__** ***[Kanki#0001](https://instagram.com/itzz_siba)***`)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
