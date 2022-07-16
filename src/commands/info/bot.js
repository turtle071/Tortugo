const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');
const config = require('../../../package.json');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'bot',
            description: 'Mostra as informações sobre o tortugo.',
        })
    }

    run = async (interaction) => {
        await interaction.deferReply({ephemeral: false, fetchReply: true})
        const avatar = this.client.user.displayAvatarURL({dynamic: false, size: 256})
        const embed = new MessageEmbed()
            .setTitle(`Informações do Tortugo`)
            .setColor('GREEN')
            .setThumbnail(avatar)
            .setDescription(`${this.client.user.username} está presente em ${this.client.guilds.cache.size} servidores.\n\nEntre no meu [servidor](https://discord.gg/jSgVkj3U9b)\n\nMe adicione [clicando aqui](https://bit.ly/3PdQNBM)\n\n**Ping:** ${this.client.ws.ping}ms\n\n**Versão:** ${config.version}\n\n**Feito por:** ${config.author}`)

        interaction.editReply({embeds: [embed]})
    }
}