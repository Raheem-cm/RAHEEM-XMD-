const { zokou } = require("../../framework/zokou");
const conf = require("../../set");
const axios = require("axios");

zokou({ nomCom: "chatbot", categorie: "General", reaction: "🤖" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage } = commandeOptions;
  const sender = auteurMessage;
  const isCreator = [conf.NUMERO_OWNER + '@s.whatsapp.net'].includes(sender);
  const args = ms.body.split(" ").slice(1);
  const option = args[0]?.toLowerCase();

  if (!isCreator) return repondre("*Only owner can use this command.*");

  if (option === "on") {
    conf.CHATBOT = true;
    repondre("✅ Chatbot has been *enabled*.");
  } else if (option === "off") {
    conf.CHATBOT = false;
    repondre("❌ Chatbot has been *disabled*.");
  } else {
    repondre("⚙️ Usage:\n- `chatbot on` to enable\n- `chatbot off` to disable");
  }
});
