var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var djs = require('discord.js');
var client = new djs.Client();
var http = require('http');
// Configure logger settings
logger.remove( logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.AUTH,
   autorun: true
});
bot.on('ready', function (user, userID, channelID, message, evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `/`
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    var rawMsg = args;
    args = args.splice(1);
    if(message == "hi kuri") {
      bot.sendMessage({
        to: channelID,
        message: 'hi'
      });
    }
    if (message.substring(0, 1) === '/') {
        switch(cmd) {
            // /help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '```Made by lots of <3 from MatthyPlayz#3740 \n  /help - What you are in right now! \n  /randomNumber - Random number between 0 and 1000. \n  /flipcoin - Flip a coin! \n  /ohf \n  /shootBasket - Shoot a basket! \n  /dab - NO```'
                });
            break;
            case 'randomNumber':
                bot.sendMessage({
                    to: channelID,
                    message: Math.floor(Math.random() * 1000)
                });
            break;
            case 'flipcoin':
                var num = Math.floor(Math.random() * 2);
                if(num == 0) {
                  bot.sendMessage({
                    to: channelID,
                    message: "Tails!"
                  });
                }
                if(num == 1) {
                  bot.sendMessage({
                    to: channelID,
                    message: "Heads!"
                  });
                }
            break;
          case 'ohf':
            bot.sendMessage({
              to: channelID,
              message: "***DANK MEMES STARTING IN 3***"
            });
            var inta = setTimeout(function() {
              bot.sendMessage({
                to: channelID,
                message: "***DANK MEMES STARTING IN 2 ***"
              });
              var intb = setTimeout(function() {
                bot.sendMessage({
                  to: channelID,
                  message: "***DANK MEMES STARTING IN 1 ***"
                });
                var intc = setTimeout(function() {
                for(var i = 0; i < 10; i++) {
					bot.uploadFile({
                        to: channelID,
						file: './images/meme1.png'
					});
                }
              }, 1000);
              }, 1000);
            }, 1000);
            break;
            case 'shootBasket':
				var shootormiss = Math.floor(Math.random() * 3);
				if(shootormiss == 0) {
                  bot.sendMessage({
                    to: channelID,
                    message: "Too much left!"
                  });
                }
                if(shootormiss == 1) {
                  bot.sendMessage({
                    to: channelID,
                    message: "Score!"
                  });
                }
				if(shootormiss == 2) {
                  bot.sendMessage({
                    to: channelID,
                    message: "Too much right!"
                  });
                }
			break;
          case 'dab':
            bot.sendMessage({
              to: channelID,
              message: "dont d# #@(!()E)!_(@)#(@)#(@_#@!(#@!)(@!()#@!)#()@!)i-34-e4291-"
            });
            var rip = setTimeout(function() {
              bot.sendMessage({
                to: channelID,
                message: "*CRITICAL ERROR* \nTOO OLD \"DANCE\""
              });
            }, 500);
          break;
		  case 'codeClearchat9314921049211903219':
				var intervaly = setInterval(function(){bot.uploadFile({
                    to: channelID,
				    file: './images/blankBG.png'
				});}, 1);
				setTimeout(function(){clearInterval(intervaly)}, 5000);
		  break;
          case 'updatey':
            bot.sendMessage({
              to: channelID,
              message: "```md\nNEW UPDATES:\n  NEWEST: added a *24/7* server! yahoo!```"
            });
         }
	  
     }
});
