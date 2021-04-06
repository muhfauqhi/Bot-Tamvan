module.exports = {
    name: 'status',
    description: 'Change Status',
    // aliases: ['st'],
    execute(message, args) {
        // if (message.mentions.users.first()) {
        //     const target = message.mentions.users.first()
        //     const member = message.guild.members.cache.get(target.id)

        //     args.shift()
        //     const status = args.join(' ')

        //     member.setNickname(target.username + ' (' + status + ')')
        //     message.channel.send('Your status is updated')
        // } else {
        //     const target = message.author
        //     const member = message.guild.members.cache.get(target.id)

        //     const status = args;
        //     member.setNickname(target.username + ' (' + status + ')')
        //     message.channel.send('Your status is updated')
        // }
        const target = message.author
        const member = message.guild.members.cache.get(target.id)

        const status = args.join(' ');
        member.setNickname(target.username + ' (' + status + ')')
        message.channel.send('Your status is updated')
    },
}