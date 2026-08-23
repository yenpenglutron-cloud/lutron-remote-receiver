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
      refresh_btn: "↻ 重新整理遠端連線",
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
      export_xlsx: "匯出 XLSX",
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
      xlsx_export: "匯出 XLSX",
      xlsx_desc: "適用三星 Google Sheets；請輸入要儲存的檔案名稱。",
      file_name: "檔案名稱",
      download_csv: "下載 CSV",
      download_xlsx: "下載 XLSX",
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
      date: "日期",
      time: "時間",
      source_index: "（來源 {0}）",
      calibration: "校正係數",
      calibration_title: "{0} 校正係數",
      calibration_desc: "選擇運算方式並輸入校正數字；畫面、統計、Alarm、Logger 與匯出資料都使用校正後數值。",
      calibration_operator: "運算方式",
      calibration_number: "校正數字",
      calibrated: "已校正",
      calibration_invalid: "請輸入有效的校正數字；除法不可使用 0。",
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
      refresh_btn: "↻ Refresh Remote Connection",
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
      export_xlsx: "Export XLSX",
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
      xlsx_export: "Export XLSX",
      xlsx_desc: "For Samsung Google Sheets; please enter a file name.",
      file_name: "File name",
      download_csv: "Download CSV",
      download_xlsx: "Download XLSX",
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
      date: "Date",
      time: "Time",
      source_index: "(Source {0})",
      calibration: "Calibration",
      calibration_title: "{0} Calibration",
      calibration_desc: "Choose an operation and enter a factor. Display, statistics, alarms, logger, and exports all use the calibrated value.",
      calibration_operator: "Operation",
      calibration_number: "Calibration value",
      calibrated: "Calibrated",
      calibration_invalid: "Enter a valid value. Division by zero is not allowed.",
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
    REFRESH_CODE_KEY = "lutron-remote-refresh-code-v1",
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
  const CALIBRATION_KEY = "lutron-remote-channel-calibrations-v1";
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
    calibrations: new Map(),
    logs: [],
    logger: null,
    editing: null,
    audio: null,
    lastBeep: 0,
    statusKey: "wait_pair",
    statusClass: "waiting",
    wakeLock: null,
    exportFormat: "csv",
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
  let savedCalibrations = {};
  try {
    savedCalibrations = JSON.parse(localStorage.getItem(CALIBRATION_KEY) || "{}");
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
  function calibrationFor(key) {
    if (!state.calibrations.has(key) && savedCalibrations[key]) {
      const item = savedCalibrations[key];
      if (["add", "subtract", "multiply", "divide"].includes(item.operator) && Number.isFinite(Number(item.number))) {
        state.calibrations.set(key, {
          operator: item.operator,
          number: Number(item.number),
        });
      }
    }
    return state.calibrations.get(key);
  }
  function saveCalibrations() {
    const out = {};
    for (const [key, value] of state.calibrations) out[key] = value;
    try {
      localStorage.setItem(CALIBRATION_KEY, JSON.stringify(out));
    } catch {}
  }
  function decimalPlaces(value) {
    const text = String(value);
    if (/e/i.test(text)) {
      const numeric = Number(value);
      return Number.isFinite(numeric) ? Math.min(6, Math.max(0, (numeric.toString().split(".")[1] || "").length)) : 0;
    }
    return (text.split(".")[1] || "").length;
  }
  function applyCalibration(raw, calibration) {
    if (!calibration || !Number.isFinite(raw)) return raw;
    let result = raw;
    if (calibration.operator === "add") result = raw + calibration.number;
    else if (calibration.operator === "subtract") result = raw - calibration.number;
    else if (calibration.operator === "multiply") result = raw * calibration.number;
    else if (calibration.operator === "divide" && calibration.number !== 0) result = raw / calibration.number;
    return result;
  }
  function calibratedNumber(r) {
    return applyCalibration(numberOf(r), calibrationFor(r.key));
  }
  function calibratedDisplay(r) {
    const raw = numberOf(r), calibration = calibrationFor(r.key);
    if (!calibration || !Number.isFinite(raw)) {
      return { value: r.value ?? r.displayValue ?? "--", calibrated: false };
    }
    const result = applyCalibration(raw, calibration);
    if (!Number.isFinite(result)) return { value: r.value ?? r.displayValue ?? "--", calibrated: false };
    const rawShown = r.value ?? r.displayValue ?? raw,
      digits = Math.min(6, Math.max(decimalPlaces(rawShown), decimalPlaces(calibration.number)));
    const formatted = result.toFixed(digits);
    return {
      value: formatted.includes(".") ? formatted.replace(/0+$/, "").replace(/\.$/, "") : formatted,
      calibrated: true,
    };
  }
  // Keep one delegated handler on the container.  Incoming readings rebuild the
  // cards frequently, so individual card handlers can otherwise be lost between
  // a touch and its click event on some tablet browsers.
  optionsPanel.addEventListener("click", (event) => {
    const card = event.target.closest(".channel-option");
    if (!card || !optionsPanel.contains(card)) return;
    event.preventDefault();
    changeOption(
      decodeURIComponent(card.dataset.key),
      "visible",
      card.dataset.visible !== "true",
    );
  });
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
    const v = calibratedNumber(r),
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
        return `<button type="button" class="channel-option" style="--source:${esc(r.color)}" data-key="${id}" data-visible="${opt.visible}" role="checkbox" aria-checked="${opt.visible}" aria-label="${esc(label)}"><span class="channel-check" aria-hidden="true">✓</span><span class="option-index">${index + 1}</span><span class="option-name">${esc(label)}</span></button>`;
      })
      .join("");
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
        calibration = calibrationFor(r.key),
        calibratedStats = st
          ? [
              applyCalibration(st.min, calibration),
              applyCalibration(st.max, calibration),
            ].sort((a, b) => a - b)
          : null,
        calibratedAverage = st
          ? applyCalibration(st.sum / st.count, calibration)
          : NaN,
        unit = r.unit || "",
        shown = calibratedDisplay(r),
        value = shown.value,
        hit = alarming(r),
        a = state.alarms.get(r.key);
      const tile = document.createElement("div");
      tile.className = "channel-tile";
      const el = document.createElement("article");
      el.className = `measurement${hit ? " alarm" : ""}`;
      el.style.setProperty("--source", r.color);
      el.onclick = () => openAlarm(r);
      el.innerHTML = `<div class="channel">${esc(displayId(r))}</div><div class="name">${esc(r.name || r.label || r.displayName || r.displayCode || "Channel")}</div><div class="value">${esc(value)}<span class="unit">${esc(unit)}</span></div>${shown.calibrated ? `<div class="calibrated-badge">${t("calibrated")}</div>` : ""}<div class="meta"><span>${t("max")}${calibratedStats ? calibratedStats[1].toFixed(2) : "--"}</span><span>${t("min")}${calibratedStats ? calibratedStats[0].toFixed(2) : "--"}</span><span>${t("avg")}${Number.isFinite(calibratedAverage) ? calibratedAverage.toFixed(2) : "--"}</span></div>${a ? `<div class="alarm-limits">Alarm: ${Number.isFinite(a.low) ? `${t("low_alarm")} ${a.low}` : ""}${Number.isFinite(a.low) && Number.isFinite(a.high) ? " " : ""}${Number.isFinite(a.high) ? `${t("high_alarm")} ${a.high}` : ""}</div>` : ""}`;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `calibration-button${shown.calibrated ? " active" : ""}`;
      button.textContent = t("calibration");
      button.onclick = (event) => {
        event.stopPropagation();
        openCalibration(r);
      };
      tile.append(el, button);
      cards.append(tile);
    }
    renderOptions(data);
    renderLogs();
    if (hits.length && Date.now() - state.lastBeep > 1000) {
      state.lastBeep = Date.now();
      beep();
    }
  }
  function openCalibration(r) {
    state.editing = r;
    const calibration = calibrationFor(r.key);
    $("calibrationTitle").textContent = t("calibration_title", displayId(r));
    $("calibrationOperator").value = calibration?.operator || "multiply";
    $("calibrationNumber").value = calibration?.number ?? "";
    $("calibrationError").textContent = "";
    $("calibrationDialog").showModal();
  }
  $("calibrationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const operator = $("calibrationOperator").value,
      number = Number($("calibrationNumber").value),
      invalid = !Number.isFinite(number) || (operator === "divide" && number === 0);
    if (invalid) {
      $("calibrationError").textContent = t("calibration_invalid");
      return;
    }
    if (state.editing) {
      state.calibrations.set(state.editing.key, { operator, number });
      saveCalibrations();
    }
    $("calibrationDialog").close();
    render();
  });
  $("cancelCalibration").onclick = () => $("calibrationDialog").close();
  $("clearCalibration").onclick = () => {
    if (state.editing) state.calibrations.delete(state.editing.key);
    saveCalibrations();
    $("calibrationDialog").close();
    render();
  };
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
    const now = new Date(),
      pad = (value) => String(value).padStart(2, "0"),
      timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const row = {
      time: timestamp,
      values: {},
      units: {},
    };
    for (const r of allReadings())
      if (optionFor(r.key).visible) {
        let column = displayId(r);
        if (Object.hasOwn(row.values, column))
          column = `${column}${t("source_index", r.sourceIndex + 1)}`;
        row.values[column] = calibratedDisplay(r).value;
        row.units[column] = r.unit || "";
      }
    state.logs.push(row);
    $("loggerInfo").textContent = t("recorded_count_msg", state.logs.length);
    $("exportCsv").disabled = !state.logs.length;
    $("exportXlsx").disabled = !state.logs.length;
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
  function xlsxFileName(input, fallback) {
    const cleaned =
      String(input || fallback)
        .trim()
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
        .replace(/[. ]+$/g, "")
        .slice(0, 180) || fallback;
    return /\.xlsx$/i.test(cleaned) ? cleaned : `${cleaned}.xlsx`;
  }
  function escapeCsv(value) {
    let str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return `"${str.replaceAll('"', '""')}"`;
    }
    return str;
  }
  function splitTimestamp(value) {
    const match = String(value || "").match(
      /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})$/,
    );
    return match ? [match[1], match[2]] : [String(value || ""), ""];
  }
  function downloadCsv(fileName) {
    const cols = [...new Set(state.logs.flatMap((x) => Object.keys(x.values)))],
      rows = [
        [t("date"), t("time"), ...cols.flatMap((c) => [`${c} Value`, `${c} Unit`])],
        ...state.logs.map((x) => {
          const [date, time] = splitTimestamp(x.time);
          return [
            date,
            time,
            ...cols.flatMap((c) => [x.values[c] ?? "", x.units?.[c] ?? ""]),
          ];
        }),
      ],
      csvContent = rows
        .map((r) => r.map(escapeCsv).join(","))
        .join("\r\n"),
      a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8" }),
    );
    a.download = csvFileName(fileName, defaultCsvName());
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function xmlEscape(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    })[char]);
  }
  function xlsxColumnName(index) {
    let result = "";
    for (let value = index + 1; value; value = Math.floor((value - 1) / 26)) {
      result = String.fromCharCode(65 + ((value - 1) % 26)) + result;
    }
    return result;
  }
  function crc32(bytes) {
    let crc = -1;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
    return (crc ^ -1) >>> 0;
  }
  function zipStore(files) {
    const encoder = new TextEncoder(), parts = [], central = [];
    let offset = 0;
    const u16 = (value) => new Uint8Array([value & 255, (value >>> 8) & 255]);
    const u32 = (value) => new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255]);
    for (const [name, text] of files) {
      const nameBytes = encoder.encode(name), data = encoder.encode(text), crc = crc32(data);
      const local = [u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), nameBytes, data];
      const size = local.reduce((sum, part) => sum + part.length, 0);
      parts.push(...local);
      central.push(u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes);
      offset += size;
    }
    const centralSize = central.reduce((sum, part) => sum + part.length, 0), end = [u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(centralSize), u32(offset), u16(0)];
    return new Blob([...parts, ...central, ...end], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
  function excelDateSerial(dateValue) {
    const match = String(dateValue || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000 + 25569;
  }
  function excelTimeSerial(timeValue) {
    const match = String(timeValue || "").match(/^(\d{2}):(\d{2}):(\d{2})$/);
    if (!match) return null;
    return (Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3])) / 86400;
  }
  function xlsxTextCell(reference, value) {
    return `<c r="${reference}" t="inlineStr"><is><t xml:space="preserve">${xmlEscape(value)}</t></is></c>`;
  }
  function xlsxNumberCell(reference, value, style = "") {
    if (value === "" || value === null || value === undefined) {
      return xlsxTextCell(reference, "");
    }
    const number = Number(value);
    return Number.isFinite(number)
      ? `<c r="${reference}"${style ? ` s="${style}"` : ""}><v>${number}</v></c>`
      : xlsxTextCell(reference, value ?? "");
  }
  function downloadXlsx(fileName) {
    const cols = [...new Set(state.logs.flatMap((x) => Object.keys(x.values)))];
    const headers = [t("date"), t("time"), ...cols.flatMap((c) => [`${c} Value`, `${c} Unit`])];
    const headerRow = `<row r="1">${headers.map((value, columnIndex) => xlsxTextCell(`${xlsxColumnName(columnIndex)}1`, value)).join("")}</row>`;
    const dataRows = state.logs.map((item, itemIndex) => {
      const rowIndex = itemIndex + 2;
      const [date, time] = splitTimestamp(item.time);
      const dateSerial = excelDateSerial(date);
      const timeSerial = excelTimeSerial(time);
      const cells = [
        dateSerial === null ? xlsxTextCell(`A${rowIndex}`, date) : xlsxNumberCell(`A${rowIndex}`, dateSerial, "1"),
        timeSerial === null ? xlsxTextCell(`B${rowIndex}`, time) : xlsxNumberCell(`B${rowIndex}`, timeSerial, "2"),
      ];
      cols.forEach((channel, channelIndex) => {
        const valueColumn = 2 + channelIndex * 2;
        const unitColumn = valueColumn + 1;
        cells.push(
          xlsxNumberCell(`${xlsxColumnName(valueColumn)}${rowIndex}`, item.values[channel] ?? ""),
          xlsxTextCell(`${xlsxColumnName(unitColumn)}${rowIndex}`, item.units?.[channel] ?? ""),
        );
      });
      return `<row r="${rowIndex}">${cells.join("")}</row>`;
    }).join("");
    const sheetRows = headerRow + dataRows;
    const lastColumn = xlsxColumnName(headers.length - 1);
    const files = [
      ["[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`],
      ["_rels/.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`],
      ["xl/workbook.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Lutron Remote" sheetId="1" r:id="rId1"/></sheets></workbook>`],
      ["xl/_rels/workbook.xml.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`],
      ["xl/styles.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="2"><numFmt numFmtId="164" formatCode="yyyy-mm-dd"/><numFmt numFmtId="165" formatCode="hh:mm:ss"/></numFmts><fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`],
      ["xl/worksheets/sheet1.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><dimension ref="A1:${lastColumn}${state.logs.length + 1}"/><cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="${headers.length}" width="16" customWidth="1"/></cols><sheetData>${sheetRows}</sheetData></worksheet>`],
    ];
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipStore(files));
    a.download = xlsxFileName(fileName, defaultCsvName());
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function openExportNameDialog(format) {
    state.exportFormat = format;
    const input = $("csvFileName");
    input.value = defaultCsvName();
    $("exportNameTitle").textContent = t(format === "xlsx" ? "xlsx_export" : "csv_export");
    $("exportNameDesc").textContent = t(format === "xlsx" ? "xlsx_desc" : "csv_desc");
    $("downloadExport").textContent = t(format === "xlsx" ? "download_xlsx" : "download_csv");
    $("csvNameDialog").showModal();
    requestAnimationFrame(() => input.select());
  }
  $("exportCsv").onclick = () => openExportNameDialog("csv");
  $("exportXlsx").onclick = () => openExportNameDialog("xlsx");
  $("cancelCsvName").onclick = () => $("csvNameDialog").close();
  $("csvNameForm").onsubmit = (event) => {
    event.preventDefault();
    if (state.exportFormat === "xlsx") downloadXlsx($("csvFileName").value);
    else downloadCsv($("csvFileName").value);
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
    $("exportXlsx").disabled = true;
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
    sessionStorage.removeItem(REFRESH_CODE_KEY);
  };
  $("refreshButton").onclick = () => {
    if (!/^\d{6}$/.test(input.value)) {
      setStatus("status_failed", "failed");
      input.focus();
      return;
    }
    sessionStorage.setItem(REFRESH_CODE_KEY, input.value);
    window.location.reload();
  };
  const refreshCode = sessionStorage.getItem(REFRESH_CODE_KEY);
  if (/^\d{6}$/.test(refreshCode || "")) {
    sessionStorage.removeItem(REFRESH_CODE_KEY);
    input.value = refreshCode;
    queueMicrotask(() => form.requestSubmit());
  }
})();
