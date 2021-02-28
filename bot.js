require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
  console.log('Bot is ready for war!')
})

client.on('message', msg => {
    if (msg.content == "I love coding!") {
        msg.react("❤️")
    }

    if (msg.content === "Teach me to code!") {
        msg.channel.send("console.log(Hello World)")
    }
})

client.login(process.env.BOT_TOKEN)