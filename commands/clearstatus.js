module.exports = {
	name: 'clearstatus',
	description: 'Clear Status',
    aliases: ['cs'],
	execute(message, args) {
        const target = message.author
        const member = message.guild.members.cache.get(target.id)

        member.setNickname(target.username)
		message.channel.send('Your status is clear')
	},
}