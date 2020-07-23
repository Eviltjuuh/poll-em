const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = "em!";

bot.on('ready', () =>{
    console.log("De EM-Poll is volledig online!");
});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "poll":
            if(!message.member.roles.cache.find(r => r.name === "📋EM Poll📋")) return message.channel.send("⛔️Helaas je heb geen toegang om deze command uit te voeren!⛔️").then(msg => {
            

                msg.delete({ timeout: 10000 })});
            const Embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Maak een nieuwe EM-Poll")
            .setDescription("Typ em!poll <jou-bericht> om een poll te maken!");
        

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📋 " + "**" + msgArgs + "**").then(MessageReaction => {
                MessageReaction.react("👍🏼");
                MessageReaction.react("👎🏼");
                MessageReaction.react("🤷🏼‍♂️");
                message.delete({timeout: 1000}).catch(console.error);
            });
    
        break;
    }        

});

bot.login(process.env.token);
