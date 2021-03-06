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

    if (msg.content === "{merced}") {
        msg.channel.send("https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ")
    }
    if (msg.content === "{code}") {
        msg.channel.send("https://www.w3schools.com/")
    }
    if (msg.content === "{wdn}") {
        msg.channel.send("https://developer.mozilla.org/en-US/docs/Learn")
    }
    if (msg.content === "{css-cheatsheet}") {
        msg.channel.send("https://htmlcheatsheet.com/css/")
    }
    if (msg.content === "{html-cheatsheet}") {
        msg.channel.send("https://html-css-js.com/html/")
    }
    if (msg.content === "{js-cheatsheet}") {
        msg.channel.send("https://html-css-js.com/js/")
    }
    if (msg.content === "{stack}") {
        msg.channel.send("https://stackoverflow.com/")
    }
})

client.login(process.env.BOT_TOKEN)