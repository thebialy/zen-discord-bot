require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Bot is ready for war!')
})

client.on('message', msg => {
    if (msg.content === "oscar") {
        msg.reply("You're dead to me!")
    }
})

client.login(process.env.BOT_TOKEN)