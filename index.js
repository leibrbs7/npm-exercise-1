const qrcode = require('qrcode-terminal');

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;;'));
console.log(qrcode.generate("BEGIN:VCARD\r\nFN:Leila Barbosa\r\nTEL;TYPE=cell:555555555\r\nEMAIL;PREF;INTERNET:leila.barbosa@siteminder.com\r\nEND:VCARD"));