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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_36_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInp0Skw5Nm5pY2IrajdLUlR0Z09CRld1Q2xzZHNIa3ZqVjNkSnhmTXU1cVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNRRnBucnBJU0NTNFZ6NzI3aUJUSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTM3NDFlOWItODQ1Yi00YWNjLTk1NGYtOWI4NWU5MzQxYTRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE3NCxcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICAxNDYsXG4gICAgICAxMDUsXG4gICAgICAzMSxcbiAgICAgIDksXG4gICAgICAyMjYsXG4gICAgICAxNjAsXG4gICAgICAxMDQsXG4gICAgICAxNDMsXG4gICAgICAxNSxcbiAgICAgIDE2LFxuICAgICAgMjQ5LFxuICAgICAgOTcsXG4gICAgICAyNTQsXG4gICAgICA1OSxcbiAgICAgIDIxMSxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAyMjIsXG4gICAgICAxNTMsXG4gICAgICAyMjIsXG4gICAgICA3MixcbiAgICAgIDIyNSxcbiAgICAgIDY3LFxuICAgICAgMTY2LFxuICAgICAgMTY1LFxuICAgICAgMTU2LFxuICAgICAgMSxcbiAgICAgIDEyMyxcbiAgICAgIDIxMyxcbiAgICAgIDE1MixcbiAgICAgIDE1OCxcbiAgICAgIDcwLFxuICAgICAgMTkzLFxuICAgICAgMjA2LFxuICAgICAgMjYsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iWi9DY1F3b2ppeEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWZLUUlZRUZrQUtiZ1JoVFhxUURlN3UzVndGSzk3Y1huSEU3YTZibS95TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1ZDVsT29hQU5Ka3FlWHlJb0ZKUmV3RFcvbStGaHhmT2poOFBaMDZtTUN5RWdFRmZNNjR1dmR6Z0UrTXJ4d0hRdlA2SUplcDhBeHFmK2Y2S1pZSmFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1ZmE5UTNhVmE0U3g0NUhDK1VYcmhWczFUcjJobUhnWitBck5vbUZoMzIxSGZjQVVUcGsySHFQbGYxeXFHMENrcTZSSVE5Z0RxUEc4OEtPV3ZJOVVCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODUxMjg0OTY0OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE4Njg3NTk2MDQwMjk1OjM4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTEyODQ5NjQ5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0ODI1Nzk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGhpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMaGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiSEhpTFJDbXA5a3B3S3M2aVhxVngrbytwYVBMeWx6L3BoTGNqYlI3RzlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzODMyMDM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTQ4MjI3MDIzNzlcIn0iCn0="  // PUT your SESSION_ID 


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


