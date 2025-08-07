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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_26_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJockZiZmduZS83b3IySlh1OU1sak55T0hWUUNsNjdPUituWHBqblBSRFVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTM1RrdVhTUVFkR05ieFNySExSQjlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5ZDdiYzRjLTA4OGMtNGJjMi1iMzc2LWJhZmI0MjE2N2RhMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICA4OSxcbiAgICAgIDYwLFxuICAgICAgMTQyLFxuICAgICAgNjAsXG4gICAgICAxMixcbiAgICAgIDIzOCxcbiAgICAgIDMzLFxuICAgICAgMTgyLFxuICAgICAgMjEsXG4gICAgICA3NyxcbiAgICAgIDE5MixcbiAgICAgIDY0LFxuICAgICAgMTk2LFxuICAgICAgMzcsXG4gICAgICA0OSxcbiAgICAgIDIxMyxcbiAgICAgIDc4LFxuICAgICAgMTQ0LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDIyNixcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgMjIyLFxuICAgICAgNDksXG4gICAgICAyNyxcbiAgICAgIDE2MixcbiAgICAgIDIxNyxcbiAgICAgIDE0LFxuICAgICAgMTg0LFxuICAgICAgMjgsXG4gICAgICAxNSxcbiAgICAgIDkxLFxuICAgICAgODcsXG4gICAgICAxMzMsXG4gICAgICA5NixcbiAgICAgIDE3MSxcbiAgICAgIDE3NSxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1haL0NjUXI0dlR4QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFZktRSVlFRmtBS2JnUmhUWHFRRGU3dTNWd0ZLOTdjWG5IRTdhNmJtL3lNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5uODkrRnY0dDE5Y3VydWdLaklmQWt2TU1CYTdReGpWYXc5WDcxMjdnZWFyd3ZmMnVDLzN1N3lYRW9zZmt5UHFtOVlzaGZjMWR1dU53Q2d3cEtMRkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImN6dUpMTmV4bGFsbFVkVUhkM2hRMytSckdHY1E4NGVBdytKR0p3TEFjcDZTdGRJSEVWR0lFODBWc0dQaGlFNXRqOFRKUE5aY2orQmQ4QkJhM3FINGp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTEyODQ5NjQ5OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTg2ODc1OTYwNDAyOTU6MzZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg1MTI4NDk2NDk6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQ1ODA0MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDNVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM1VS5qc29uIjogIntcImtleURhdGFcIjpcIkZkSXoycVpqbVZ6Z2xFWGt1S1BNTWVRdC9SNmt0MDl2UHFrSkl5TjVmVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM4MzIwMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDU4MDQwODgwMFwifSIKfQ=="  // PUT your SESSION_ID 


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

