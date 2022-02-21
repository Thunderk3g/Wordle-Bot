const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Wordle = require("./wordle.js");
const {prefix, token } = require("./config/config.json");
client.once('ready', () => {
  console.log('The bot is online');
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  permision = message.channel.permissionsFor(client.user);
  permision = permision.toArray();
  if(message.author.username === client.user.username) {return;}


  //Checks for Prefix and Executes the relevant command
  if (message.content.startsWith(`${prefix}playwordle`)) {
    Wordle.LoadNewWordle(message);
    return;
  } else if (message.content.startsWith(`${prefix}guess`)) {
    Wordle.PlayWordle(message);   
     return;
  } else if (message.content.startsWith(`${prefix}wordlestats`)) {
    Wordle.ShowWordleStats(message);
    return;
  } 
  else {
    message.channel.send("You need to enter a valid command!");
  }
});
  client.login(token);