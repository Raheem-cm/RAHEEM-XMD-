const {
  zokou
} = require("../framework/zokou");
const {
  getAllSudoNumbers,
  isSudoTableNotEmpty
} = require("../bdd/sudo");
const conf = require("../set");
zokou({
  'nomCom': "agents",
  'categorie': 'General',
  'reaction': "🤙"
}, async (_0x1b06c5, _0x54bb8b, _0x2358bf) => {
  const {
    ms: _0x2aecc0,
    mybotpic: _0x43a6e2
  } = _0x2358bf;
  const _0x21b56d = [{
    'nom': "RAHEEM OWNER",
    'numero': "255763111390" 
  },{
    'nom': "DEPLOMENT SERVICES",
    'numero': "255763111390"
  }, {
    'nom': "Raheem Md",
    'numero': "255763111390"
  }, {
    'nom': "Raheem cm",
    'numero': "255763111390"
  }, {
    'nom': "RaheemTech",
    'numero': "255763111390"
  }, {
    'nom': "dev Raheem",
    'numero': "255763111390"
  }, {
    'nom': "",
    'numero': ""
  }, {
    'nom': "",
    'numero': ""
  }, {
    'nom': "",
    'numero': ""
  }, {
'nom': "",
    'numero': ""
  }, {
'nom': "",
    'numero': ""
  }, {
'nom': "🤕",
    'numero': "Load...."
  }, {
'nom': "",
    'numero': ""
  }, {
    'nom': "🤕",
    'numero': "load...."
  }];
  let _0x2d5c7e = "Hello👋  *I'm RAHEEM XMD Wa Bot* \nThe Following Numbers Are For   *RAHEEM-XMD* Agents, \nYou Can Ask Them Anything Regarding RAHMANI MD\nFollow Our Channel For More Tech :https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r \n*KEEP USING RAHEEM-XMD*:\n\n";
  for (const _0x14eeec of _0x21b56d) {
    _0x2d5c7e += "----------------\n(●) " + _0x14eeec.nom + " : https://wa.me/" + _0x14eeec.numero + "\n";
  }
  var _0x11d31d = _0x43a6e2();
  if (_0x11d31d.match(/\.(mp4|gif)$/i)) {
    try {
      _0x54bb8b.sendMessage(_0x1b06c5, {
        'video': {
          'url': _0x11d31d
        },
        'caption': _0x2d5c7e
      }, {
        'quoted': _0x2aecc0
      });
    } catch (_0x55af9c) {
      console.log("🥵🥵 Menu erreur " + _0x55af9c);
      repondre("🥵🥵 Menu erreur " + _0x55af9c);
    }
  } else {
    if (_0x11d31d.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x54bb8b.sendMessage(_0x1b06c5, {
          'image': {
            'url': _0x11d31d
          },
          'caption': _0x2d5c7e
        }, {
          'quoted': _0x2aecc0
        });
      } catch (_0x39b1ed) {
        console.log("🥵🥵 Menu erreur " + _0x39b1ed);
        repondre("🥵🥵 Menu erreur " + _0x39b1ed);
      }
    } else {
      repondre(_0x11d31d);
      repondre("link error");
    }
  }
});
