const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_23_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSM01yNWRnNndaNkhnY3AzZHZqWE5XMVoyWUxhYlA1U3VyYVRycHhUN2tnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3ZEJQSXlhNFF5YUE3YXk0RjQ1QXJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJmMWUyMWIyLWI3ZGUtNDg0OC04YzgzLTEyNWNhNWM0MjIxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDI0NCxcbiAgICAgIDIzOCxcbiAgICAgIDE2NixcbiAgICAgIDE3NixcbiAgICAgIDE0NyxcbiAgICAgIDIxMSxcbiAgICAgIDk5LFxuICAgICAgMjQzLFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICAxMTcsXG4gICAgICAyMDcsXG4gICAgICAyMzMsXG4gICAgICAxNTMsXG4gICAgICA5MyxcbiAgICAgIDU4LFxuICAgICAgNTcsXG4gICAgICAxOTUsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTUsXG4gICAgICAxMzYsXG4gICAgICA5MCxcbiAgICAgIDQwLFxuICAgICAgMTgsXG4gICAgICA3MyxcbiAgICAgIDE3LFxuICAgICAgMTAxLFxuICAgICAgMjM4LFxuICAgICAgMjIzLFxuICAgICAgMTU3LFxuICAgICAgMzEsXG4gICAgICAxMjYsXG4gICAgICAyMDIsXG4gICAgICAxMDcsXG4gICAgICAxNDMsXG4gICAgICAxODQsXG4gICAgICAxLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MlJMUFpHOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgwMTgxMzE3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNzc5MzUwODY4MTIwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZKbzY0Q0VKQ0U3clFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEajI5R2RoUGtlUG1RNEZoc3RQQ05vQ0oyS1lWN1N5YmRzdHAyVUd2QTFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjgwV1FrWW83L2RzOWk2eHRuRUdnclovT3BEVUxDbHJtMWJqZ1pSeFdCMFBLaWpGWkV1WkNSTm1BT2FLTUhKdk1vN0dETXI5WDl4ZkJBL2JlY2M4MEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxUakkzYXlGOW82ZkdSUmJFL3JZNWduODdOVU5hR0E3azk5UjJaZnhnd2VYc3Z4bnNhL2x3dUJJZlgwTkdCK05JWjFVdWVRVXlYdVFDMng3LytQZ0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MDE4MTMxNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0Njc0MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wcS5qc29uIjogIntcImtleURhdGFcIjpcIkdEalVLaDNFak9MV1BWZkNBdHIxbE9KcUY5UVp4TFdMSngybU0xemNFRHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjMzOTIyNzYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NTk1MTI1MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
