var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src-tts/index.js
var TG = "https://api.telegram.org";
var ADMIN_ID = 5002402843;
async function tg(method, body, token) {
  const r = await fetch(`${TG}/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await r.json();
  if (!data.ok) throw new Error(`TG ${method}: ${data.description}`);
  return data.result;
}
__name(tg, "tg");
async function getTTSPref(KV, uid) {
  return await KV.get(`tts:pref:${uid}`, "json") || { gender: "female", speed: "x1" };
}
__name(getTTSPref, "getTTSPref");
async function setTTSPref(KV, uid, pref) {
  await KV.put(`tts:pref:${uid}`, JSON.stringify(pref), { expirationTtl: 365 * 86400 });
}
__name(setTTSPref, "setTTSPref");
async function getTTSCache(KV, key) {
  return KV.get(`tts:cache:${key}`);
}
__name(getTTSCache, "getTTSCache");
async function setTTSCache(KV, key, fileId) {
  await KV.put(`tts:cache:${key}`, fileId, { expirationTtl: 7 * 86400 });
}
__name(setTTSCache, "setTTSCache");
var MALE_VOICES = {
  "af": "af-ZA-WillemNeural",
  "am": "am-ET-AmehaNeural",
  "ar": "ar-SA-HamedNeural",
  "az": "az-AZ-BabekNeural",
  "bg": "bg-BG-BorislavNeural",
  "bn": "bn-BD-PradeepNeural",
  "bs": "bs-BA-GoranNeural",
  "ca": "ca-ES-EnricNeural",
  "cs": "cs-CZ-AntoninNeural",
  "cy": "cy-GB-AledNeural",
  "da": "da-DK-JeppeNeural",
  "de": "de-DE-FlorianMultilingualNeural",
  "el": "el-GR-NestorasNeural",
  "en": "en-US-AndrewMultilingualNeural",
  "es": "es-ES-AlvaroNeural",
  "et": "et-EE-KertNeural",
  "fa": "fa-IR-FaridNeural",
  "fi": "fi-FI-HarriNeural",
  "fil": "fil-PH-AngeloNeural",
  "fr": "fr-FR-RemyMultilingualNeural",
  "ga": "ga-IE-ColmNeural",
  "gu": "gu-IN-NiranjanNeural",
  "he": "he-IL-AvriNeural",
  "hi": "hi-IN-MadhurNeural",
  "hr": "hr-HR-SreckoNeural",
  "hu": "hu-HU-TamasNeural",
  "id": "id-ID-ArdiNeural",
  "it": "it-IT-GiuseppeMultilingualNeural",
  "ja": "ja-JP-KeitaNeural",
  "ka": "ka-GE-GiorgiNeural",
  "kk": "kk-KZ-DauletNeural",
  "km": "km-KH-PisethNeural",
  "kn": "kn-IN-GaganNeural",
  "ko": "ko-KR-HyunsuMultilingualNeural",
  "lo": "lo-LA-ChanthavongNeural",
  "lt": "lt-LT-LeonasNeural",
  "lv": "lv-LV-NilsNeural",
  "mk": "mk-MK-AleksandarNeural",
  "ml": "ml-IN-MidhunNeural",
  "mn": "mn-MN-BataaNeural",
  "mr": "mr-IN-ManoharNeural",
  "ms": "ms-MY-OsmanNeural",
  "my": "my-MM-ThihaNeural",
  "nb": "nb-NO-FinnNeural",
  "ne": "ne-NP-SagarNeural",
  "nl": "nl-NL-MaartenNeural",
  "pl": "pl-PL-MarekNeural",
  "pt": "pt-BR-AntonioNeural",
  "ro": "ro-RO-EmilNeural",
  "ru": "ru-RU-DmitryNeural",
  "si": "si-LK-SameeraNeural",
  "sk": "sk-SK-LukasNeural",
  "sl": "sl-SI-RokNeural",
  "so": "so-SO-MuuseNeural",
  "sq": "sq-AL-IlirNeural",
  "sr": "sr-RS-NicholasNeural",
  "sv": "sv-SE-MattiasNeural",
  "sw": "sw-KE-RafikiNeural",
  "ta": "ta-IN-ValluvarNeural",
  "te": "te-IN-MohanNeural",
  "th": "th-TH-NiwatNeural",
  "tr": "tr-TR-AhmetNeural",
  "uk": "uk-UA-OstapNeural",
  "ur": "ur-IN-SalmanNeural",
  "uz": "uz-UZ-SardorNeural",
  "vi": "vi-VN-NamMinhNeural",
  "zh-CN": "zh-CN-YunyangNeural",
  "zh-TW": "zh-TW-YunJheNeural",
  "zu": "zu-ZA-ThembaNeural"
};
var FEMALE_VOICES = {
  "af": "af-ZA-AdriNeural",
  "am": "am-ET-MekdesNeural",
  "ar": "ar-SA-ZariyahNeural",
  "az": "az-AZ-BanuNeural",
  "bg": "bg-BG-KalinaNeural",
  "bn": "bn-BD-NabanitaNeural",
  "bs": "bs-BA-VesnaNeural",
  "ca": "ca-ES-JoanaNeural",
  "cs": "cs-CZ-VlastaNeural",
  "cy": "cy-GB-NiaNeural",
  "da": "da-DK-ChristelNeural",
  "de": "de-DE-SeraphinaMultilingualNeural",
  "el": "el-GR-AthinaNeural",
  "en": "en-US-AvaMultilingualNeural",
  "es": "es-ES-XimenaNeural",
  "et": "et-EE-AnuNeural",
  "fa": "fa-IR-DilaraNeural",
  "fi": "fi-FI-NooraNeural",
  "fil": "fil-PH-BlessicaNeural",
  "fr": "fr-FR-VivienneMultilingualNeural",
  "ga": "ga-IE-OrlaNeural",
  "gu": "gu-IN-DhwaniNeural",
  "he": "he-IL-HilaNeural",
  "hi": "hi-IN-SwaraNeural",
  "hr": "hr-HR-GabrijelaNeural",
  "hu": "hu-HU-NoemiNeural",
  "id": "id-ID-GadisNeural",
  "it": "it-IT-IsabellaNeural",
  "ja": "ja-JP-NanamiNeural",
  "ka": "ka-GE-EkaNeural",
  "kk": "kk-KZ-AigulNeural",
  "km": "km-KH-SreymomNeural",
  "kn": "kn-IN-SapnaNeural",
  "ko": "ko-KR-SunHiNeural",
  "lo": "lo-LA-KeomanyNeural",
  "lt": "lt-LT-OnaNeural",
  "lv": "lv-LV-EveritaNeural",
  "mk": "mk-MK-MarijaNeural",
  "ml": "ml-IN-SobhanaNeural",
  "mn": "mn-MN-YesuiNeural",
  "mr": "mr-IN-AarohiNeural",
  "ms": "ms-MY-YasminNeural",
  "my": "my-MM-NilarNeural",
  "nb": "nb-NO-PernilleNeural",
  "ne": "ne-NP-HemkalaNeural",
  "nl": "nl-NL-ColetteNeural",
  "pl": "pl-PL-ZofiaNeural",
  "pt": "pt-BR-ThalitaMultilingualNeural",
  "ro": "ro-RO-AlinaNeural",
  "ru": "ru-RU-SvetlanaNeural",
  "si": "si-LK-ThiliniNeural",
  "sk": "sk-SK-ViktoriaNeural",
  "sl": "sl-SI-PetraNeural",
  "so": "so-SO-UbaxNeural",
  "sq": "sq-AL-AnilaNeural",
  "sr": "sr-RS-SophieNeural",
  "sv": "sv-SE-SofieNeural",
  "sw": "sw-KE-ZuriNeural",
  "ta": "ta-IN-PallaviNeural",
  "te": "te-IN-ShrutiNeural",
  "th": "th-TH-PremwadeeNeural",
  "tr": "tr-TR-EmelNeural",
  "uk": "uk-UA-PolinaNeural",
  "ur": "ur-IN-GulNeural",
  "uz": "uz-UZ-MadinaNeural",
  "vi": "vi-VN-HoaiMyNeural",
  "zh-CN": "zh-CN-XiaoxiaoNeural",
  "zh-TW": "zh-TW-HsiaoChenNeural",
  "zu": "zu-ZA-ThandoNeural"
};
var SPEED_RATES = { "x0.5": "-50%", "x1": "+0%", "x1.5": "+50%", "x2": "+100%" };
var SPEED_LABELS = { "x0.5": "\u{1F422} x0.5", "x1": "\u25B6\uFE0F x1", "x1.5": "\u26A1 x1.5", "x2": "\u{1F680} x2" };
var SCRIPT_MAP = [
  [/[\u1780-\u17FF]/, "km"],
  [/[\u0E00-\u0E7F]/, "th"],
  [/[\u0E80-\u0EFF]/, "lo"],
  [/[\u1000-\u109F]/, "my"],
  [/[\u1200-\u137F]/, "am"],
  [/[\u10A0-\u10FF]/, "ka"],
  [/[\u0590-\u05FF]/, "he"],
  [/[\u0900-\u097F]/, "hi"],
  [/[\u0980-\u09FF]/, "bn"],
  [/[\u0A80-\u0AFF]/, "gu"],
  [/[\u0B80-\u0BFF]/, "ta"],
  [/[\u0C00-\u0C7F]/, "te"],
  [/[\u0C80-\u0CFF]/, "kn"],
  [/[\u0D00-\u0D7F]/, "ml"],
  [/[\u0D80-\u0DFF]/, "si"],
  [/[\u0600-\u06FF]/, "ar"],
  [/[\u3040-\u30FF]/, "ja"],
  [/[\uAC00-\uD7AF]/, "ko"],
  [/[\u4E00-\u9FFF\u3400-\u4DBF]/, "zh-CN"],
  [/[\u0400-\u04FF]/, "ru"]
];
var GOOGLE_TTS_LANG = {
  km: "km",
  en: "en",
  th: "th",
  lo: "lo",
  my: "my",
  ja: "ja",
  ko: "ko",
  zh: "zh-CN",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  vi: "vi",
  fr: "fr",
  de: "de",
  es: "es",
  ru: "ru",
  ar: "ar",
  hi: "hi",
  pt: "pt",
  it: "it",
  id: "id",
  ms: "ms",
  tr: "tr",
  pl: "pl",
  nl: "nl",
  sv: "sv",
  da: "da",
  fi: "fi",
  uk: "uk",
  cs: "cs",
  ro: "ro",
  hu: "hu",
  el: "el",
  he: "he",
  bn: "bn",
  ur: "ur",
  fa: "fa",
  ta: "ta",
  te: "te",
  ml: "ml",
  si: "si",
  mn: "mn"
};
var GOOGLE_TTS_SPEED = { "x0.5": "0.5", "x1": "1", "x1.5": "1.3", "x2": "1.5" };
function detectLang(text) {
  for (const [pattern, lang] of SCRIPT_MAP) {
    if (pattern.test(text)) return lang;
  }
  return "en";
}
__name(detectLang, "detectLang");
function getVoice(lang, gender) {
  const map = gender === "male" ? MALE_VOICES : FEMALE_VOICES;
  return map[lang] || map["en"];
}
__name(getVoice, "getVoice");
function stripUnspeakable(text) {
  return text.replace(/[\u{1F000}-\u{1FFFF}]/gu, "").replace(/[\u2600-\u27FF\u2B00-\u2BFF\uFE00-\uFEFF]/g, "").replace(/[\uD800-\uDFFF]/g, "").trim();
}
__name(stripUnspeakable, "stripUnspeakable");
async function synthesizeTTS(text, lang, speed = "x1") {
  const cleanText = stripUnspeakable(text);
  if (!cleanText) throw new Error("No speakable text");
  const gLang = GOOGLE_TTS_LANG[lang] || "en";
  const gSpeed = GOOGLE_TTS_SPEED[speed] || "1";
  const MAX = 180;
  const parts = [];
  let remaining = cleanText;
  while (remaining.length > 0) {
    if (remaining.length <= MAX) {
      parts.push(remaining);
      break;
    }
    let cut = remaining.lastIndexOf(" ", MAX);
    if (cut <= 0) cut = MAX;
    parts.push(remaining.slice(0, cut).trim());
    remaining = remaining.slice(cut).trim();
  }
  const buffers = [];
  for (const part of parts) {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(part)}&tl=${gLang}&ttsspeed=${gSpeed}&client=tw-ob`;
    const resp = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://translate.google.com/",
        "Accept": "audio/mpeg,audio/*;q=0.9,*/*;q=0.8"
      }
    });
    if (!resp.ok) throw new Error(`Google TTS HTTP ${resp.status} for lang=${gLang}`);
    buffers.push(new Uint8Array(await resp.arrayBuffer()));
  }
  if (buffers.length === 1) return buffers[0];
  const total = buffers.reduce((s, c) => s + c.byteLength, 0);
  const merged = new Uint8Array(total);
  let off = 0;
  for (const c of buffers) {
    merged.set(c, off);
    off += c.byteLength;
  }
  return merged;
}
__name(synthesizeTTS, "synthesizeTTS");
async function sendVoice(chatId, audioOrFileId, token, extra = {}) {
  if (typeof audioOrFileId === "string") {
    return tg("sendVoice", { chat_id: chatId, voice: audioOrFileId, ...extra }, token);
  }
  const form = new FormData();
  form.append("chat_id", String(chatId));
  form.append("voice", new Blob([audioOrFileId], { type: "audio/mpeg" }), "voice.mp3");
  for (const [k, v] of Object.entries(extra)) {
    form.append(k, typeof v === "object" ? JSON.stringify(v) : String(v));
  }
  const r = await fetch(`${TG}/bot${token}/sendVoice`, { method: "POST", body: form });
  const data = await r.json();
  if (!data.ok) throw new Error(`sendVoice: ${data.description}`);
  return data.result;
}
__name(sendVoice, "sendVoice");
function buildVoiceKeyboard(gender, speed) {
  const gRow = [
    { text: `${gender === "female" ? "\u2705 " : ""}\u{1F469} \u179F\u17C6\u17A1\u17C1\u1784\u179F\u17D2\u179A\u17B8`, callback_data: "voice:female", style: gender === "female" ? "success" : "primary" },
    { text: `${gender === "male" ? "\u2705 " : ""}\u{1F468} \u179F\u17C6\u17A1\u17C1\u1784\u1794\u17D2\u179A\u17BB\u179F`, callback_data: "voice:male", style: gender === "male" ? "success" : "primary" }
  ];
  const sRow = Object.keys(SPEED_RATES).map((s) => ({
    text: (s === speed ? "\u2705 " : "") + SPEED_LABELS[s],
    callback_data: `set_speed:${s}`,
    style: s === speed ? "success" : "primary"
  }));
  return { inline_keyboard: [gRow, sRow] };
}
__name(buildVoiceKeyboard, "buildVoiceKeyboard");
async function handleTTS(msg, KV, token) {
  const text = msg.text?.trim();
  if (!text || /^\s*$/.test(stripUnspeakable(text))) return;
  const uid = msg.from?.id || msg.chat.id;
  const pref = await getTTSPref(KV, uid);
  const gender = pref.gender || "female";
  const speed = pref.speed || "x1";
  const lang = detectLang(text);
  const keyBuf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${getVoice(lang, gender)}:${speed}:${text}`));
  const cacheKey = Array.from(new Uint8Array(keyBuf)).slice(0, 8).map((b) => b.toString(16).padStart(2, "0")).join("");
  const keyboard = buildVoiceKeyboard(gender, speed);
  tg("sendChatAction", { chat_id: msg.chat.id, action: "record_voice" }, token).catch(() => {
  });
  try {
    const cached = await getTTSCache(KV, cacheKey);
    if (cached) {
      await sendVoice(msg.chat.id, cached, token, {
        caption: "\u{1F508} @limsovannradybot",
        reply_to_message_id: msg.message_id,
        reply_markup: keyboard
      });
      return;
    }
    const audioBytes = await synthesizeTTS(text, lang, speed);
    const result = await sendVoice(msg.chat.id, audioBytes, token, {
      caption: "\u{1F508} @limsovannradybot",
      reply_to_message_id: msg.message_id,
      reply_markup: keyboard
    });
    const fileId = result?.voice?.file_id;
    if (fileId) await setTTSCache(KV, cacheKey, fileId).catch(() => {
    });
  } catch (err) {
    console.error("TTS error:", err.message);
    await tg("sendMessage", {
      chat_id: msg.chat.id,
      text: "\u26A0\uFE0F \u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1794\u1784\u17D2\u1780\u17BE\u178F\u179F\u17C6\u17A1\u17C1\u1784\u17D4 \u179F\u17BC\u1798\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17BD\u1799\u1791\u17C0\u178F\u17D4",
      reply_to_message_id: msg.message_id
    }, token).catch(() => {
    });
  }
}
__name(handleTTS, "handleTTS");
async function handleStart(msg, KV, token) {
  if (msg.chat.type !== "private") return;
  const uid = msg.from?.id;
  if (uid) {
    const known = await KV.get(`tts:known:${uid}`);
    if (!known) {
      await KV.put(`tts:known:${uid}`, "1", { expirationTtl: 365 * 86400 });
      try {
        const name = msg.from.first_name || "Unknown";
        const uname = msg.from.username ? `@${msg.from.username}` : "\u1782\u17D2\u1798\u17B6\u1793 username";
        await tg("sendMessage", {
          chat_id: ADMIN_ID,
          parse_mode: "HTML",
          text: "👋 សូមស្វាគមន៍មកកាន់ VoxCPM2 Bot",
    reply_markup: buildVoiceKeyboard(gender, speed)
  }, token);
}
__name(handleStart, "handleStart");
async function handleCallback(query, KV, token) {
  const pid = query.message.chat.id;
  const msgId = query.message.message_id;
  const uid = query.from.id;
  const data = query.data;
  await tg("answerCallbackQuery", { callback_query_id: query.id }, token).catch(() => {
  });
  if (data.startsWith("voice:")) {
    const gender = data.slice(6);
    if (!["male", "female"].includes(gender)) return;
    const pref = await getTTSPref(KV, uid);
    pref.gender = gender;
    await setTTSPref(KV, uid, pref);
    const speed = pref.speed || "x1";
    const newKb = buildVoiceKeyboard(gender, speed);
    await tg("editMessageReplyMarkup", { chat_id: pid, message_id: msgId, reply_markup: newKb }, token).catch(() => {
    });
    await tg("answerCallbackQuery", {
      callback_query_id: query.id,
      text: `\u2705 \u1794\u17B6\u1793\u1794\u17D2\u178F\u17BC\u179A\u1791\u17C5 ${gender === "female" ? "\u{1F469} \u179F\u17C6\u17A1\u17C1\u1784\u179F\u17D2\u179A\u17B8" : "\u{1F468} \u179F\u17C6\u17A1\u17C1\u1784\u1794\u17D2\u179A\u17BB\u179F"}`,
      show_alert: false
    }, token).catch(() => {
    });
    return;
  }
  if (data.startsWith("set_speed:")) {
    const speed = data.slice(10);
    if (!SPEED_RATES[speed]) return;
    const pref = await getTTSPref(KV, uid);
    pref.speed = speed;
    await setTTSPref(KV, uid, pref);
    const gender = pref.gender || "female";
    const newKb = buildVoiceKeyboard(gender, speed);
    await tg("editMessageReplyMarkup", { chat_id: pid, message_id: msgId, reply_markup: newKb }, token).catch(() => {
    });
    await tg("answerCallbackQuery", {
      callback_query_id: query.id,
      text: `\u2705 \u179B\u17D2\u1794\u17BF\u1793: ${SPEED_LABELS[speed]}`,
      show_alert: false
    }, token).catch(() => {
    });
    return;
  }
}
__name(handleCallback, "handleCallback");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method;
    if (method === "OPTIONS")
      return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Methods": "GET,POST" } });
    if (method === "GET" && url.pathname === "/setup") {
      const workerUrl = `${url.protocol}//${url.host}/webhook`;
      try {
        await tg("deleteWebhook", { drop_pending_updates: true }, env.BOT_TOKEN);
        const result = await tg("setWebhook", {
          url: workerUrl,
          allowed_updates: ["message", "callback_query", "inline_query"]
        }, env.BOT_TOKEN);
        const info = await tg("getWebhookInfo", {}, env.BOT_TOKEN);
        return new Response(JSON.stringify({ ok: true, webhook: workerUrl, info }, null, 2), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: err.message }, null, 2), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    if (method === "GET" && url.pathname === "/") {
      const info = await tg("getWebhookInfo", {}, env.BOT_TOKEN).catch((e) => ({ error: e.message }));
      return new Response(JSON.stringify({ ok: true, bot: "@limsovannradybot", webhook: info }, null, 2), {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (method === "POST" && url.pathname === "/webhook") {
      const update = await request.json();
      const token = env.BOT_TOKEN;
      const KV = env.KV;
      try {
        if (update.callback_query) {
          await handleCallback(update.callback_query, KV, token);
        } else if (update.message) {
          const msg = update.message;
          if (msg.chat?.type === "private") {
            if (msg.text?.startsWith("/start")) await handleStart(msg, KV, token);
            else if (msg.text) await handleTTS(msg, KV, token);
          }
        }
      } catch (err) {
        console.error("Webhook error:", err.message, err.stack);
      }
      return new Response("OK");
    }
    return new Response("Not Found", { status: 404 });
  }
};
// RADY TTS BUTTON STYLE: selected=success, unselected=primary

export {
  index_default as default
};
//# sourceMappingURL=index.js.map
