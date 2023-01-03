const {config} = require('dotenv')
const {Client,Events,GatewayIntentBits,Collection} = require('discord.js');
const {token} = require('./config.json');
const { channel } = require('diagnostics_channel');

var bannedWord = ["cazzo","figa","culo"];
var bwLen = bannedWord.length;

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, () => {
	console.log("Bot Attivo!");
});
client.on(Events.MessageCreate, (message) =>{
    console.log(message.createdAt.toDateString());
    console.log(message.author.tag);
    console.log("Messaggio nel Canale "+ message.channel.name +" : " + message.content);
    console.log("\n");
})
client.on(Events.MessageCreate, (message) =>{
    if(message.content == "!r2d2"){
        message.channel.send("Ciao sono un bot multifunzionale appassionata di Star Wars\nSe hai bisogno di aiuto scrivi !help");
    }
    for(var i=0;i<bwLen-1;i++){
        if((message.content).toUpperCase() == (bannedWord[i]).toUpperCase()){
            message.channel.send("noooo mi dissocio");
        }
    }
})

client.login(token);