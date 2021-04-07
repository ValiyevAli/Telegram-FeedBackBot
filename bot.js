const { Telegraf } = require('telegraf')
const bot = new Telegraf('YOUR_BOT_TOKEN')
const channelID = "YOUR_CHANNEL_ID"
const owner = "YOUR_USERNAME"

bot.start((ctx) => {
    ctx.reply(`Hi, I'm a feedback bot. Thanks to me, you can contact the owner. (${owner})`)
})
bot.on('text', ctx => {
    let text = ctx.message.text

    ctx.telegram.sendMessage(channelID, `Sender ID: ${ctx.from.id}\nSender First Name: [${ctx.from.first_name}](tg://user?id=${ctx.from.id})\nText: ${text}`, {parse_mode: 'markdown'})
    ctx.reply('My owner will contact you soon.')

})

console.log('Bot is running.')

bot.launch()