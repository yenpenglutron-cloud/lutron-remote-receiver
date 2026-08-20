(() => {
  const i18n = {
    zh: {
      title: "Lutron Monitor｜跨網路遠端監看",
      header_brand_sub: "LUTRON RS-232",
      wait_pair: "等待配對",
      hero_title: "跨網路遠端監看",
      hero_desc: "輸入發射端提供的 6 位配對碼，即可即時接收量測資料。",
      hero_hint: "iPhone、iPad、Mac 與 Windows 均可使用。",
      pair_label: "輸入 6 位配對碼",
      pair_btn: "加入遠端監看",
      stop_btn: "停止遠端連線",
      not_connected: "尚未連線",
      realtime_data: "即時測試資料",
      wait_tx_data: "等待發射端資料",
      channels_count: "{0} 個通道",
      channels_count_selected: "{0}/{1} 個通道",
      empty_cards: "完成配對後，量測通道會顯示於此處。",
      empty_cards_unselected:
        "所有通道目前皆未勾選；可在下方「讀取通道」勾選要顯示與記錄的 CH。",
      read_channel: "讀取通道",
      read_channel_desc:
        "勾選通道後，會同步顯示卡片並寫入 Logger／CSV；取消勾選則同步隱藏與停止記錄。",
      wait_channel_data: "等待通道資料。",
      logger: "記錄器",
      logger_not_started: "尚未開始記錄。",
      sec_1: "1 秒",
      sec_2: "2 秒",
      sec_5: "5 秒",
      sec_10: "10 秒",
      sec_30: "30 秒",
      sec_60: "60 秒",
      sec_120: "120 秒",
      sec_300: "300 秒",
      sec_600: "600 秒",
      sec_1800: "1800 秒",
      sec_3600: "3600 秒",
      start_record: "▶ 開始記錄",
      stop_record: "■ 停止記錄",
      export_csv: "匯出 CSV",
      recorded_data: "記錄資料",
      recorded_data_desc:
        "累積 10 筆後會固定視窗高度；可拖曳拉桿調整並上下捲動。",
      records_count: "{0} 筆",
      records_count_0: "0 筆",
      channels_count_0: "0 個通道",
      drag_resize: "↕ 拖曳調整記錄視窗高度",
      log_empty: "開始記錄後，資料會顯示於此處。",
      alarm_title: "{0} Alarm",
      low_alarm: "低 Alarm",
      high_alarm: "高 Alarm",
      not_set: "不設定",
      btn_cancel: "取消",
      btn_clear: "清除",
      btn_save: "儲存",
      csv_export: "匯出 CSV",
      csv_desc: "請輸入要儲存的檔案名稱。",
      file_name: "檔案名稱",
      download_csv: "下載 CSV",
      footer_desc: "瀏覽器接收端不需 USB，僅接收發射端分享的資料。",
      status_retry: "遠端連線已中斷，正在重新連線…",
      status_connected: "遠端已連線",
      status_stop: "遠端連線已停止",
      status_failed: "請輸入正確的 6 位配對碼",
      status_joining: "正在加入遠端監看…",
      source: "來源：{0}",
      alarm_msg: "⚠ ALARM：{0} 超出設定範圍",
      max: "最高: ",
      min: "最低: ",
      avg: "平均: ",
      unit: "單位：",
      log_stopped: "記錄已停止，共 {0} 筆。",
      logging: "記錄中…",
      recorded_count_msg: "已記錄 {0} 筆資料。",
      time: "時間",
      source_index: "（來源 {0}）",
    },
    en: {
      title: "Lutron Monitor | Remote Monitoring",
      header_brand_sub: "LUTRON RS-232",
      wait_pair: "Waiting for pairing",
      hero_title: "Remote Monitoring via Network",
      hero_desc: "Enter the 6-digit code to receive real-time data.",
      hero_hint: "Available for iPhone, iPad, Mac, and Windows.",
      pair_label: "Enter 6-digit code",
      pair_btn: "Join Monitoring",
      stop_btn: "Stop Connection",
      not_connected: "Not connected",
      realtime_data: "Real-time Data",
      wait_tx_data: "Waiting for data",
      channels_count: "{0} Channels",
      channels_count_selected: "{0}/{1} Channels",
      empty_cards: "Channels will be displayed here after pairing.",
      empty_cards_unselected:
        "No channels selected; check below to show and log.",
      read_channel: "Read Channels",
      read_channel_desc:
        "Check to sync cards and log to CSV; uncheck to hide and stop recording.",
      wait_channel_data: "Waiting for channels.",
      logger: "Logger",
      logger_not_started: "Not started yet.",
      sec_1: "1 Sec",
      sec_2: "2 Sec",
      sec_5: "5 Sec",
      sec_10: "10 Sec",
      sec_30: "30 Sec",
      sec_60: "60 Sec",
      sec_120: "120 Sec",
      sec_300: "300 Sec",
      sec_600: "600 Sec",
      sec_1800: "1800 Sec",
      sec_3600: "3600 Sec",
      start_record: "▶ Start Recording",
      stop_record: "■ Stop Recording",
      export_csv: "Export CSV",
      recorded_data: "Recorded Data",
      recorded_data_desc:
        "Height is fixed after 10 records; drag to resize and scroll.",
      records_count: "{0} Records",
      records_count_0: "0 Records",
      channels_count_0: "0 Channels",
      drag_resize: "↕ Drag to resize window",
      log_empty: "Data will show here after recording starts.",
      alarm_title: "{0} Alarm",
      low_alarm: "Low Alarm",
      high_alarm: "High Alarm",
      not_set: "Not set",
      btn_cancel: "Cancel",
      btn_clear: "Clear",
      btn_save: "Save",
      csv_export: "Export CSV",
      csv_desc: "Please enter file name to save.",
      file_name: "File name",
      download_csv: "Download CSV",
      footer_desc:
        "Browser receiver doesn't need USB, only receives shared data.",
      status_retry: "Connection lost, retrying...",
      status_connected: "Remote connected",
      status_stop: "Connection stopped",
      status_failed: "Please enter valid 6-digit code",
      status_joining: "Joining remote...",
      source: "Source: {0}",
      alarm_msg: "⚠ ALARM: {0} out of range",
      max: "Max: ",
      min: "Min: ",
      avg: "Avg: ",
      unit: "Unit: ",
      log_stopped: "Recording stopped, total {0}.",
      logging: "Recording...",
      recorded_count_msg: "Recorded {0} items.",
      time: "Time",
      source_index: "(Source {0})",
    },
  };
  let currentLang = localStorage.getItem("lutron-lang") || "zh";
  function t(key, ...args) {
    let str = i18n[currentLang]?.[key] || i18n["zh"][key] || key;
    args.forEach((arg, i) => (str = str.replace(`{${i}}`, arg)));
    return str;
  }
  window.setLang = function (lang) {
    currentLang = lang;
    localStorage.setItem("lutron-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.title = t("title");
    const ls = document.getElementById("langSwitch");
    if (ls) ls.value = lang;
    if (state.statusKey) setStatus(state.statusKey, state.statusClass);
    document.getElementById("lowAlarm").placeholder = t("not_set");
    document.getElementById("highAlarm").placeholder = t("not_set");
    render();
  };
  document.addEventListener("DOMContentLoaded", () =>
    window.setLang(currentLang),
  );
  const PREFIX = "lutron-v28-",
    palette = [
      "#36d6c5",
      "#f6b94a",
      "#4c9cff",
      "#fb7185",
      "#a3e635",
      "#c084fc",
      "#f97316",
      "#14b8a6",
    ],
    sorter = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
    }),
    OPTION_KEY = "lutron-remote-channel-options-v1";
  const state = {
    peer: null,
    connection: null,
    code: "",
    retry: null,
    attempt: 0,
    session: 0,
    readings: new Map(),
    sourceOrder: new Map(),
    stats: new Map(),
    alarms: new Map(),
    options: new Map(),
    logs: [],
    logger: null,
    editing: null,
    audio: null,
    lastBeep: 0,
    statusKey: "wait_pair",
    statusClass: "waiting",
    wakeLock: null,
  };
  const $ = (id) => document.getElementById(id),
    form = $("pairForm"),
    input = $("pairCode"),
    status = $("pairStatus"),
    badge = $("connectionBadge"),
    cards = $("cards"),
    empty = $("emptyState"),
    optionsPanel = $("channelOptions"),
    alarmBanner = $("alarmBanner"),
    logTableWrap = $("logTableWrap"),
    logResizeHandle = $("logResizeHandle");
  const esc = (s) =>
    String(s).replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[c],
    );
  const setStatus = (key, k = "waiting") => {
    state.statusKey = key;
    state.statusClass = k;
    status.textContent = t(key);
    badge.textContent = t(key);
    badge.className = `status ${k}`;
  };
  let savedOptions = {};
  try {
    savedOptions = JSON.parse(localStorage.getItem(OPTION_KEY) || "{}");
  } catch {}
  function optionFor(key) {
    if (!state.options.has(key)) {
      const old = savedOptions[key] || {};
      state.options.set(key, { visible: old.visible !== false });
    }
    return state.options.get(key);
  }
  function saveOptions() {
    const out = {};
    for (const [key, value] of state.options) out[key] = value;
    try {
      localStorage.setItem(OPTION_KEY, JSON.stringify(out));
    } catch {}
  }
  function changeOption(key, field, value) {
    optionFor(key)[field] = value;
    saveOptions();
    render();
  }
  function numberOf(reading) {
    for (const raw of [
      reading?.value,
      reading?.displayValue,
      reading?.canonicalValue,
      reading?.numericValue,
      reading?.reading,
    ]) {
      if (typeof raw === "number" && Number.isFinite(raw)) return raw;
      if (typeof raw === "string") {
        const cleaned = raw.replace(/,/g, "").trim(),
          number = Number(cleaned);
        if (Number.isFinite(number)) return number;
        const matched = cleaned.match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/i);
        if (matched) {
          const parsed = Number(matched[0]);
          if (Number.isFinite(parsed)) return parsed;
        }
      }
    }
    return NaN;
  }
  function stop(message) {
    state.session++;
    clearTimeout(state.retry);
    state.retry = null;
    const oldPeer = state.peer;
    const oldConn = state.connection;
    state.peer = null;
    state.connection = null;
    try {
      oldConn?.close();
    } catch {}
    try {
      oldPeer?.destroy();
    } catch {}
    state.attempt = 0;
    $("stopButton").hidden = true;
    if (message) setStatus(message);
    releaseWakeLock();
  }
  function retry() {
    if (!state.code || state.retry) return;
    const token = state.session,
      delay = Math.min(5000, 1500 + state.attempt++ * 750);
    setStatus("status_retry", "retrying");
    state.retry = setTimeout(() => {
      state.retry = null;
      if (token === state.session) connect(token);
    }, delay);
  }
  function connect(token = state.session) {
    if (!state.code || token !== state.session) return;
    try {
      const oldPeer = state.peer;
      const oldConn = state.connection;
      state.peer = null;
      state.connection = null;
      oldConn?.close();
      oldPeer?.destroy();
    } catch {}
    const peer = (state.peer = new Peer());
    peer.on("open", () => {
      if (token !== state.session || state.peer !== peer) return;
      const c = (state.connection = peer.connect(PREFIX + state.code, {
        reliable: true,
      }));
      state.lastDataTime = Date.now();
      const checkIce = setInterval(() => {
        if (state.connection !== c) {
          clearInterval(checkIce);
          return;
        }
        const dc = c.dataChannel;
        if (dc && (dc.readyState === "closing" || dc.readyState === "closed")) {
          clearInterval(checkIce);
          retry();
          return;
        }
        const pc = c.peerConnection;
        if (pc) {
          const ice = pc.iceConnectionState;
          const conn = pc.connectionState;
          if (ice === "failed" || ice === "disconnected" || ice === "closed" ||
              conn === "failed" || conn === "disconnected" || conn === "closed") {
            clearInterval(checkIce);
            retry();
            return;
          }
        }
        if (state.statusKey === "status_connected" && Date.now() - state.lastDataTime > 20000) {
          clearInterval(checkIce);
          retry();
          return;
        }
      }, 1500);
      c.on("open", () => {
        if (state.connection !== c) return;
        clearTimeout(state.retry);
        state.retry = null;
        state.attempt = 0;
        setStatus("status_connected", "connected");
        $("stopButton").hidden = false;
      });
      c.on("data", (data) => {
        if (state.connection === c) receive(data);
      });
      c.on("close", () => {
        if (state.connection === c) retry();
      });
      c.on("error", () => {
        if (state.connection === c) retry();
      });
    });
    peer.on("disconnected", () => {
      if (state.peer !== peer) return;
      if (!state.connection || !state.connection.open) {
        retry();
      }
    });
    peer.on("error", (err) => {
      if (state.peer !== peer) return;
      if (err.type === "webrtc") return; // Completely ignore PeerJS WebRTC errors, rely on our own ICE monitor
      if (state.connection && state.connection.open && (err.type === "network" || err.type === "server-error")) {
        return;
      }
      retry();
    });
  }
  function receive(payload) {
    state.lastDataTime = Date.now();
    if (payload?.type !== "readings" || !Array.isArray(payload.readings))
      return;
    const source = String(payload.alias || "REMOTE"),
      sourceColor = payload.color || palette[0],
      sourceKey = `${source}|${sourceColor}`;
    if (!state.sourceOrder.has(sourceKey))
      state.sourceOrder.set(sourceKey, state.sourceOrder.size);
    payload.readings.forEach((r, i) => {
      const channel = String(r.displayCode ?? r.channelIndex ?? r.id ?? i + 1),
        color = r.lineColor || sourceColor,
        key = `${sourceKey}|${channel}`,
        raw = numberOf(r);
      state.readings.set(key, {
        ...r,
        key,
        source,
        sourceColor,
        channel,
        color,
        sourceIndex: state.sourceOrder.get(sourceKey),
      });
      optionFor(key);
      if (Number.isFinite(raw)) {
        const s = state.stats.get(key) || {
          min: raw,
          max: raw,
          sum: 0,
          count: 0,
        };
        s.min = Math.min(s.min, raw);
        s.max = Math.max(s.max, raw);
        s.sum += raw;
        s.count++;
        state.stats.set(key, s);
      }
    });
    render();
  }
  function alarming(r) {
    const a = state.alarms.get(r.key);
    if (!a) return false;
    const shown =
        r.value ??
        r.displayValue ??
        r.canonicalValue ??
        r.numericValue ??
        r.reading,
      v = numberOf({ displayValue: shown }),
      low = Number(a.low),
      high = Number(a.high),
      hasLow = a.low !== undefined && a.low !== "" && Number.isFinite(low),
      hasHigh = a.high !== undefined && a.high !== "" && Number.isFinite(high);
    return Number.isFinite(v) && ((hasLow && v < low) || (hasHigh && v > high));
  }
  function prepareAudio() {
    try {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!state.audio) state.audio = new C();
      state.audio.resume?.();
    } catch {}
  }
  function beep() {
    try {
      prepareAudio();
      const o = state.audio.createOscillator(),
        g = state.audio.createGain();
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.09, state.audio.currentTime);
      g.gain.exponentialRampToValueAtTime(
        0.001,
        state.audio.currentTime + 0.28,
      );
      o.connect(g).connect(state.audio.destination);
      o.start();
      o.stop(state.audio.currentTime + 0.3);
    } catch {}
  }
  function allReadings() {
    return [...state.readings.values()].sort(
      (a, b) =>
        a.sourceIndex - b.sourceIndex || sorter.compare(a.channel, b.channel),
    );
  }
  function displayId(r) {
    return `${r.source} - ${r.displayCode || r.channel}`;
  }
  function renderOptions(data) {
    if (!data.length) {
      optionsPanel.innerHTML = `<p class="settings-empty">${t("wait_channel_data")}</p>`;
      return;
    }
    optionsPanel.innerHTML = data
      .map((r, index) => {
        const opt = optionFor(r.key),
          id = encodeURIComponent(r.key),
          label =
            r.name ||
            r.label ||
            r.displayName ||
            `Channel ${r.displayCode || r.channel}`;
        return `<label class="channel-option" style="--source:${esc(r.color)}"><input type="checkbox" data-key="${id}" data-field="visible" ${opt.visible ? "checked" : ""}><span class="option-index">${index + 1}</span><span class="option-name">${esc(label)}</span></label>`;
      })
      .join("");
    optionsPanel
      .querySelectorAll("input")
      .forEach(
        (box) =>
          (box.onchange = () =>
            changeOption(
              decodeURIComponent(box.dataset.key),
              box.dataset.field,
              box.checked,
            )),
      );
  }
  function renderLogs() {
    const rows = [...state.logs].reverse(),
      cols = [...new Set(state.logs.flatMap((x) => Object.keys(x.values)))],
      resizable = state.logs.length >= 10;
    $("logCount").textContent = t("records_count", state.logs.length);
    logTableWrap.classList.toggle("is-resizable", resizable);
    logResizeHandle.hidden = !resizable;
    if (!rows.length) {
      logTableWrap.innerHTML = `<p class="settings-empty">${t("log_empty")}</p>`;
      return;
    }
    logTableWrap.innerHTML = `<table class="log-table"><thead><tr><th>${t("time")}</th>${cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr><td>${esc(row.time)}</td>${cols.map((c) => `<td>${esc(row.values[c] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function render() {
    const data = allReadings(),
      visible = data.filter((r) => optionFor(r.key).visible),
      sources = [...new Set(data.map((r) => r.source))],
      hits = data.filter(alarming);
    empty.hidden = visible.length > 0;
    empty.textContent =
      data.length && !visible.length
        ? t("empty_cards_unselected")
        : t("empty_cards");
    cards.innerHTML = "";
    $("sampleCount").textContent = t(
      "channels_count_selected",
      visible.length,
      data.length,
    );
    $("sourceLabel").textContent = sources.length
      ? t("source", sources.join("、"))
      : t("wait_tx_data");
    alarmBanner.hidden = !hits.length;
    alarmBanner.textContent = hits.length
      ? t("alarm_msg", hits.map(displayId).join("、"))
      : "";
    for (const r of visible) {
      const st = state.stats.get(r.key),
        unit = r.unit || "",
        value = r.value ?? r.displayValue ?? "--",
        hit = alarming(r),
        a = state.alarms.get(r.key);
      const el = document.createElement("article");
      el.className = `measurement${hit ? " alarm" : ""}`;
      el.style.setProperty("--source", r.color);
      el.onclick = () => openAlarm(r);
      el.innerHTML = `<div class="channel">${esc(displayId(r))}</div><div class="name">${esc(r.name || r.label || r.displayName || r.displayCode || "Channel")}</div><div class="value">${esc(value)}<span class="unit">${esc(unit)}</span></div><div class="meta"><span>${t("max")}${st ? st.max.toFixed(2) : "--"}</span><span>${t("min")}${st ? st.min.toFixed(2) : "--"}</span><span>${t("avg")}${st ? (st.sum / st.count).toFixed(2) : "--"}</span></div>${a ? `<div class="alarm-limits">Alarm: ${Number.isFinite(a.low) ? `${t("low_alarm")} ${a.low}` : ""}${Number.isFinite(a.low) && Number.isFinite(a.high) ? " " : ""}${Number.isFinite(a.high) ? `${t("high_alarm")} ${a.high}` : ""}</div>` : ""}`;
      cards.append(el);
    }
    renderOptions(data);
    renderLogs();
    if (hits.length && Date.now() - state.lastBeep > 1000) {
      state.lastBeep = Date.now();
      beep();
    }
  }
  function openAlarm(r) {
    state.editing = r;
    const a = state.alarms.get(r.key) || {};
    $("alarmTitle").textContent = t("alarm_title", displayId(r));
    $("alarmUnit").textContent = r.unit ? `${t("unit")}${r.unit}` : "";
    $("lowAlarm").value = Number.isFinite(a.low) ? a.low : "";
    $("highAlarm").value = Number.isFinite(a.high) ? a.high : "";
    $("alarmDialog").showModal();
  }
  $("alarmForm").addEventListener("submit", (e) => {
    e.preventDefault();
    prepareAudio();
    const r = state.editing,
      lowText = $("lowAlarm").value.trim(),
      highText = $("highAlarm").value.trim(),
      low = lowText === "" ? undefined : Number(lowText),
      high = highText === "" ? undefined : Number(highText);
    if (r) {
      if (Number.isFinite(low) || Number.isFinite(high))
        state.alarms.set(r.key, {
          low: Number.isFinite(low) ? low : undefined,
          high: Number.isFinite(high) ? high : undefined,
        });
      else state.alarms.delete(r.key);
    }
    $("alarmDialog").close();
    render();
  });
  $("clearAlarm").onclick = () => {
    if (state.editing) state.alarms.delete(state.editing.key);
    $("alarmDialog").close();
    render();
  };
  function snapshot() {
    const row = {
      time: new Date().toLocaleString("sv-SE"),
      values: {},
      units: {},
    };
    for (const r of allReadings())
      if (optionFor(r.key).visible) {
        let column = displayId(r);
        if (Object.hasOwn(row.values, column))
          column = `${column}${t("source_index", r.sourceIndex + 1)}`;
        row.values[column] = r.value ?? r.displayValue ?? "";
        row.units[column] = r.unit || "";
      }
    state.logs.push(row);
    $("loggerInfo").textContent = t("recorded_count_msg", state.logs.length);
    $("exportCsv").disabled = !state.logs.length;
    renderLogs();
  }
  $("loggerToggle").onclick = () => {
    if (state.logger) {
      clearInterval(state.logger);
      state.logger = null;
      $("loggerToggle").textContent = t("start_record");
      $("loggerInfo").textContent = t("log_stopped", state.logs.length);
    } else {
      snapshot();
      state.logger = setInterval(snapshot, Number($("loggerInterval").value));
      $("loggerToggle").textContent = t("stop_record");
      $("loggerInfo").textContent = t("logging");
    }
  };
  function defaultCsvName() {
    const now = new Date(),
      pad = (value) => String(value).padStart(2, "0");
    return `Lutron-Remote-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  }
  function csvFileName(input, fallback) {
    const cleaned =
      String(input || fallback)
        .trim()
        .replace(/[<>:\"/\\|?*\x00-\x1F]/g, "_")
        .replace(/[. ]+$/g, "")
        .slice(0, 180) || fallback;
    return /\.csv$/i.test(cleaned) ? cleaned : `${cleaned}.csv`;
  }
  function escapeCsv(value) {
    let str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return `"${str.replaceAll('"', '""')}"`;
    }
    return str;
  }
  function utf16le(str) {
    const buf = new Uint8Array(str.length * 2 + 2);
    buf[0] = 0xff;
    buf[1] = 0xfe;
    for (let i = 0, j = 2; i < str.length; i++, j += 2) {
      const code = str.charCodeAt(i);
      buf[j] = code & 0xff;
      buf[j + 1] = code >> 8;
    }
    return buf;
  }
  function downloadCsv(fileName) {
    const cols = [...new Set(state.logs.flatMap((x) => Object.keys(x.values)))],
      rows = [
        ["Time", ...cols.flatMap((c) => [`${c} Value`, `${c} Unit`])],
        ...state.logs.map((x) => [
          x.time,
          ...cols.flatMap((c) => [x.values[c] ?? "", x.units?.[c] ?? ""]),
        ]),
      ],
      tsvContent = rows
        .map((r) => r.map((v) => String(v).replace(/[\t\r\n]/g, " ")).join("\t"))
        .join("\r\n"),
      a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([utf16le(tsvContent)], { type: "text/csv;charset=utf-16le" }),
    );
    a.download = csvFileName(fileName, defaultCsvName());
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  $("exportCsv").onclick = () => {
    const input = $("csvFileName");
    input.value = defaultCsvName();
    $("csvNameDialog").showModal();
    requestAnimationFrame(() => input.select());
  };
  $("cancelCsvName").onclick = () => $("csvNameDialog").close();
  $("csvNameForm").onsubmit = (event) => {
    event.preventDefault();
    downloadCsv($("csvFileName").value);
    $("csvNameDialog").close();
  };
  function resetForNewPair() {
    if (state.logger) {
      clearInterval(state.logger);
      state.logger = null;
      $("loggerToggle").textContent = t("start_record");
    }
    state.readings.clear();
    state.sourceOrder.clear();
    state.stats.clear();
    state.logs = [];
    $("exportCsv").disabled = true;
    $("loggerInfo").textContent = t("logger_not_started");
    render();
  }
  let resizeStartY = 0,
    resizeStartHeight = 0,
    resizingLog = false;
  logResizeHandle.addEventListener("pointerdown", (event) => {
    if (logResizeHandle.hidden) return;
    event.preventDefault();
    resizingLog = true;
    resizeStartY = event.clientY;
    resizeStartHeight = logTableWrap.getBoundingClientRect().height;
    document.body.classList.add("resizing-log");
  });
  window.addEventListener("pointermove", (event) => {
    if (!resizingLog) return;
    event.preventDefault();
    const next = Math.max(
      180,
      Math.min(760, resizeStartHeight + event.clientY - resizeStartY),
    );
    logTableWrap.style.height = `${next}px`;
  });
  window.addEventListener("pointerup", () => {
    if (!resizingLog) return;
    resizingLog = false;
    document.body.classList.remove("resizing-log");
  });
  window.addEventListener("pointercancel", () => {
    resizingLog = false;
    document.body.classList.remove("resizing-log");
  });
  input.oninput = () =>
    (input.value = input.value.replace(/\D/g, "").slice(0, 6));

  async function requestWakeLock() {
    try {
      if ("wakeLock" in navigator) {
        state.wakeLock = await navigator.wakeLock.request("screen");
      }
    } catch (err) {}
  }
  function releaseWakeLock() {
    if (state.wakeLock) {
      state.wakeLock.release().catch(() => {});
      state.wakeLock = null;
    }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && state.code) {
      requestWakeLock();
    }
  });

  form.onsubmit = (e) => {
    e.preventDefault();
    if (input.value.length !== 6) {
      setStatus("status_failed", "failed");
      return;
    }
    stop();
    resetForNewPair();
    state.code = input.value;
    state.session++;
    setStatus("status_joining");
    requestWakeLock();
    connect(state.session);
  };
  $("stopButton").onclick = () => {
    stop("status_stop");
    state.code = "";
  };
})();
