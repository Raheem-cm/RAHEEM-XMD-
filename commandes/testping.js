"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou(
  { nomCom: "alive", reaction: "❎", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/z5g58c.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/z5g58c.jpg "; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/zsojj5.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `RAHEEM-XMD ALWAYS ALIVE ✌️😎\n\n✨ Contact: ${contactName}\n🧎 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          externalAdReply: {
            title: `💦 Message from: ${contactName}\nalive🔱🍁`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");





zokou(
  { nomCom: "test2", reaction: "🌟", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/ovydjx.mp3 "; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/z5g58c.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/ovydjx.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💥 Always Active 💥\n\n🎙️ Contact: ${contactName}\n🎙️ [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          externalAdReply: {
            title: `🌟 Message from: ${contactName}\n🍊 active 🍆`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");

/**
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../fredi/ezra");
const BaseUrl = process.env.GITHUB_GIT;
const adamsapikey = process.env.BOT_OWNER;

ezra(
  { nomCom: "alive", reaction: "👊", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // List of 5 random audio URLs
    const audioUrls = [
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3"
    ];

    // Default profile picture URL
    const defaultProfilePic = "1https://files.catbox.moe/z5g58c.jpg"
    // WhatsApp channel source URL
    const sourceUrl = "https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r";

    try {
      // Randomly pick an audio file
      const randomAudio = audioUrls[Math.floor(Math.random() * audioUrls.length)];

      // Get command sender information
      const userMention = commandeOptions?.ms?.pushName || "Unknown User";
      const senderId = commandeOptions?.ms?.sender || "";

      // Send a message with a placeholder profile picture immediately
      await zk.sendMessage(dest, {
        caption: `🔥 Alive Command Executed 🔥\n\n💥 Command executed by: *${userMention}*\n💥 Visit the channel: ${sourceUrl}`,
        contextInfo: {
          showAdAttribution: true, // Shows "Ad" attribution
          isForwarded: true, // Marks the message as forwarded
          mentionedJid: [senderId], // Mention the sender
          externalAdReply: {
            title: "🔥 ACHA USENGE RAHEEM XMD ACTIVE 🔥",
            body: `Message from 💥 ${userMention}\n💥 Visit the channel: ${sourceUrl}`,
            thumbnailUrl: defaultProfilePic, // Placeholder profile picture
            mediaType: 1, // Indicates this is an image
            renderLargerThumbnail: true, // Full-size thumbnail
            sourceUrl: sourceUrl // Channel link
          }
        },
        audio: { url: randomAudio }, // Random audio file
        mimetype: "audio/mpeg", // Correct MIME type
        ptt: true // Send as a voice note
      });

      console.log(`Message sent immediately with default profile picture.`);

      // Attempt to fetch the profile picture in the background
      zk.profilePictureUrl(senderId)
        .then((profilePicUrl) => {
          if (profilePicUrl) {
            console.log(`Updating message with sender's profile picture: ${profilePicUrl}`);
            zk.sendMessage(dest, {
              contextInfo: {
                externalAdReply: {
                  thumbnailUrl: profilePicUrl, // Update with the real profile picture
                }
              }
            });
          }
        })
        .catch(() => console.log("Failed to fetch sender's profile picture, using default."));
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready.");







ezra(
  { nomCom: "test", reaction: "🌟", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // List of 5 random audio URLs
    const audioUrls = [
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3",
      "https://files.catbox.moe/wdap4t.mp3"
    ];

    // Default profile picture URL
    const defaultProfilePic = "https://files.catbox.moe/z5g58c.jpg";

    // WhatsApp channel source URL
    const sourceUrl = "https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r";

    try {
      // Randomly pick an audio file
      const randomAudio = audioUrls[Math.floor(Math.random() * audioUrls.length)];

      // Get command sender information
      const userMention = commandeOptions?.ms?.pushName || "Unknown User";
      const senderId = commandeOptions?.ms?.sender || "";

      // Send a message with a placeholder profile picture immediately
      await zk.sendMessage(dest, {
        caption: `🔥 Alive Command Executed 🔥\n\n💥 Command executed by: *${userMention}*\n💥 Visit the channel: ${sourceUrl}`,
        contextInfo: {
          showAdAttribution: true, // Shows "Ad" attribution
          isForwarded: true, // Marks the message as forwarded
          mentionedJid: [senderId], // Mention the sender
          externalAdReply: {
            title: "🔥ACHA USENGE RAHEEM XMD ACTIVE 🔥",
            body: `Message from 💥 ${userMention}\n💥 Visit the channel: ${sourceUrl}`,
            thumbnailUrl: defaultProfilePic, // Placeholder profile picture
            mediaType: 1, // Indicates this is an image
            renderLargerThumbnail: true, // Full-size thumbnail
            sourceUrl: sourceUrl // Channel link
          }
        },
        audio: { url: randomAudio }, // Random audio file
        mimetype: "audio/mpeg", // Correct MIME type
        ptt: true // Send as a voice note
      });

      console.log(`Message sent immediately with default profile picture.`);

      // Attempt to fetch the profile picture in the background
      zk.profilePictureUrl(senderId)
        .then((profilePicUrl) => {
          if (profilePicUrl) {
            console.log(`Updating message with sender's profile picture: ${profilePicUrl}`);
            zk.sendMessage(dest, {
              contextInfo: {
                externalAdReply: {
                  thumbnailUrl: profilePicUrl, // Update with the real profile picture
                }
              }
            });
          }
        })
        .catch(() => console.log("Failed to fetch sender's profile picture, using default."));
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready.");
**/
