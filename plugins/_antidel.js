let { Presence } = require('@adiwajshing/baileys')

exports.run = {

	usage: ['antidel'],	async: async (m, { conn, _func, args, isPrefix, command }) => {

		let setting = global.db.groups[m.chat]

		await conn.updatePresence(m.chat, Presence.composing)

		if (!args || !args[0]) return conn.send2ButtonLoc(m.chat, await _func.buffer(global.db.setting.cover), `*This command to turn off and turn on anti delete.*`, global.db.setting.footer, 'ON', `${isPrefix + command} on`, 'OFF', `${isPrefix + command} off`, m)

		if (args[0] == 'on') {

			if (setting.nodelete) return m.reply(`*Anti Delete already ON.*`)

			setting.nodelete = true

			m.reply(`*Anti Delete successfully turned on.*`)

		} else if (args[0] == 'off') {

			if (!setting.nodelete) return m.reply(`*Anti Delete already OFF.*`)

			setting.nodelete = false

			m.reply(`Anti Delete successfully turned off.*`)

		}

	},

	admin: true,

	group: true

}
