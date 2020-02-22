import Telegraf from 'telegraf'
import { WELCOME } from './constants/strings'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply(WELCOME))

bot.command('add', ctx => {
    ctx.reply('```pressed    add updated```')
})

bot.launch()
