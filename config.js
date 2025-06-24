const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_40_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitXK0M4NW1lTjkxeE5KMjBVVWlZd0diazJTRWIxb29PK0x4MFAvRkU1RDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NjU0OTcwNzgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NkY5RjMwOTc4NzRGNkJGNzkyMzZDRjA4RTRFOEFGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTA3ODY3OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk2NTQ5NzA3ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDQUQzRTNEQzM5NTMyMDJCNTEyOTI2QkZBRTM5MkZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MDc4Njc5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZZTh3dnU0d1RLNk5JLVFqSGZScnRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhYzQ4NjNhLTYzYzktNDY4Mi04MDk1LTg1ZGY2YTVjY2MyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDIyOSxcbiAgICAgIDQ5LFxuICAgICAgMjI5LFxuICAgICAgMTgxLFxuICAgICAgMCxcbiAgICAgIDkyLFxuICAgICAgMjE4LFxuICAgICAgMTM1LFxuICAgICAgNjIsXG4gICAgICA2OSxcbiAgICAgIDUxLFxuICAgICAgMjE3LFxuICAgICAgOTksXG4gICAgICAxMTUsXG4gICAgICA1LFxuICAgICAgMjQ4LFxuICAgICAgMTg3LFxuICAgICAgMTAsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNDUsXG4gICAgICAyMjAsXG4gICAgICA0NyxcbiAgICAgIDEyNixcbiAgICAgIDY5LFxuICAgICAgMTU1LFxuICAgICAgMixcbiAgICAgIDIyLFxuICAgICAgMTI0LFxuICAgICAgMjIyLFxuICAgICAgNjMsXG4gICAgICAxOCxcbiAgICAgIDI1MixcbiAgICAgIDIzNyxcbiAgICAgIDE0NyxcbiAgICAgIDE3NSxcbiAgICAgIDIxNixcbiAgICAgIDYzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEtjMWhFUTZjWHJ3Z1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjQnB0bElQVDhXcHY4K3A3UldHamdiOXhoMFUzcVA3TktnS09aMlZnZFRjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJVdEdKVFBkYlRXWEt3NWpHZEllOFpqd3JibVcxNlhYOTcxbmduN1kxMHFrYnlCTWs5blJZbXU2WnBuSGhIbWRLR3MyaXc5V3BVK1d2QXBQaVpjTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNRVmx4K2FPWkpvT3h1ajB6NHFtbS9heThHT0ZDc0dFbGVXdktKVHMwQ1FpNjkyQkIzeHpUcnc2WDdTQXVjdkcrT3BQSDJmYWVwTWRjN290NEhOZmhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NjU0OTcwNzgwOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS0lORyBCMksgP1wiLFxuICAgIFwibGlkXCI6IFwiMTkyNDE5MjQ5Mjg3MjE1OjMwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NjU0OTcwNzgwOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTA3ODY3OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHMWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUcxaC5qc29uIjogIntcImtleURhdGFcIjpcIkc4NlRsMUdqUGNoUjgzWGZQUXBWWHRGSFNma0dSMUx5NEdIalc4NVlZcGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcwNjQzMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDc4NTQ4NzQ2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
