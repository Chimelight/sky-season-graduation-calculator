(function () {
  var TRANSLATIONS = {
    en: {
      theme_to_light: 'Switch to light mode',
      theme_to_dark: 'Switch to dark mode',
      heading: 'Season \u2014 Ultimate Gift Calculator',
      subtitle: 'Sky: Children of the Light \u00b7 Configure spirits, items per level, and ultimate gifts \u00b7 Auto-computes optimal route',
      aria_github: 'View source on GitHub',
      label_season_name: 'Season Name',
      label_start_date: 'Season Start (Day 1)',
      section_rules: 'Rules',
      btn_load_season: 'Load Season',
      label_cpd: 'Candles / Day',
      label_pass: 'Season Pass Bonus',
      label_heart: 'Heart Cost (Lv 5)',
      note_skip_days: 'Skip Days Per Level. Half-skip is used when a level has 2 items and you buy one of them.',
      th_lv1: 'Lv 1', th_lv2: 'Lv 2', th_lv3: 'Lv 3', th_lv4: 'Lv 4',
      fullskip_days: 'Full-Skip Days',
      halfskip_days: 'Half-Skip Days',
      section_spirits: 'Spirits',
      btn_add_spirit: '+ Add Spirit',
      note_spirit_levels: 'Each Level: Enter cost of the item(s). Leave the 2nd field blank for levels with only 1 item.',
      spirit_count: '({count} / {max})',
      spirit_capped: 'Capped at {max} to keep computation fast',
      spirit_remove: 'Remove Spirit',
      spirit_name_default: 'Spirit {n}',
      lv_label: 'Lv {n}',
      cost_placeholder: 'Cost',
      cost2_placeholder: '(2nd)',
      section_ultimates: 'Ultimate Gifts',
      btn_add_ult: '+ Add Ultimate',
      ult_nth: '{ord} Ultimate',
      ult_season_hearts: 'Seasonal Hearts',
      ult_prioritize: 'Prioritize',
      ult_remove: 'Remove',
      ult_summary: 'Cumulative hearts at each Ultimate: {cumStr}. Plan completes {done} / {total} spirits. Optimizing for: <b>{ultNth}</b> (Earliest Available).',
      ult_summary_empty: 'Add at least one ultimate gift.',
      section_result: 'Result',
      target_badge: 'Target',
      ult_hearts_label: '{ord} Ultimate ({hearts} Hearts)',
      day_prefix: 'Day {n}',
      season_fallback: 'Season',
      page_title: '{name} \u2014 Ultimate Gift Calculator',
      total_candles: 'Total Candles Spent',
      earned_surplus: 'Earned by D{day}: {earned}C (Surplus {surplus})',
      invite_days: 'Invite Days Used',
      invite_rate: '1 Invite per day',
      section_strategy: 'Per-Spirit Strategy',
      th_spirit: 'Spirit',
      th_cost: 'Cost',
      th_days: 'Days',
      not_used: 'Not Used in Plan',
      note_lv5: 'Plus Lv 5 Heart ({heart}C) per used spirit. Pill #N = completion order in the plan.',
      section_treemap: 'Tree Map (Bottom-up, Used Spirits Only)',
      legend_buy: 'Buy',
      legend_skip: 'Friendship-skip',
      section_discord: 'Discord Post',
      btn_copy: 'Copy',
      copy_copied: 'Copied',
      copy_failed: 'Failed',
      err_no_ult: 'Add At Least One Ultimate Gift.',
      err_no_spirit: 'Add At Least One Spirit.',
      err_hearts: 'Need {hearts} Seasonal Hearts but only {count} spirit(s) configured. Add {more} more spirit(s) or reduce ultimate heart costs.',
      err_no_plan: 'No Feasible Plan Found.',
      err_solver: 'Solver error: ',
      desc_none: '(no items at this level)',
      desc_buy: 'Buy {c}C',
      desc_skip: 'Skip {c}C ({d}D)',
      desc_buy_both: 'Buy both {exp}+{cheap}C',
      desc_buy_cheap: 'Buy {cheap}C, skip {exp}C ({d}D)',
      desc_buy_exp: 'Buy {exp}C, skip {cheap}C ({d}D)',
      desc_skip_both: 'Skip both ({d}D)',
      badge_buy: 'Buy {c}C',
      badge_skip: 'Skip ({d}D)',
      stage_none: '(no items)',
      stage_buy: 'Buy {c}C',
      stage_skip: 'Skip ({d}d)',
      stage_skip_both: 'Skip both ({d}d)',
      stage_mixed: 'Buy {b}C | skip {s}C ({d}d)',
      svg_lv5: 'Lv 5 heart', svg_lv4: 'Lv 4', svg_lv3: 'Lv 3', svg_lv2: 'Lv 2', svg_lv1: 'Lv 1',
      svg_heart: 'Heart {c}C',
      svg_buy_line: 'Buy\n{c}C',
      svg_skip_line: 'Skip\n{c}C\n({d}D)',
      svg_skip_days: 'Skip ({d}D)',
      svg_buy_both: 'Buy {a}+{b}C',
      svg_skip_both_days: 'Skip both ({d}D)',
      post_header: '\uD83C\uDF81 {name} \u2014 Fastest Ultimate Gift Route',
      post_tldr: '**TL;DR** (Optimizing for {ord} Ultimate Earliest)',
      post_ult_line: '\u2022 {ord} Ultimate ({hearts} Seasonal Hearts): Day {day} ({date}){mark}',
      post_requires: '_Requires Season Pass (+{pass} Candle Starter). {spiritCount} Spirits Available, {totalHearts} Hearts Needed for All Ultimate Gifts._',
      post_per_spirit: '**Per-Spirit Strategy** (in completion order)',
      post_spirit_entry: '__{n}. {name}__ \u2014 {cost}C, {days} Invite Days',
      post_lv_entry: '  Lv {n}: {desc}',
      post_lv5: '  Lv 5: Buy Heart ({heart}C)',
      post_skipped: '_Skipped Entirely: {names} (Not Needed)._',
      post_schedule_header: '**Invite Schedule** (1 invite/day, sequential)',
      post_no_invites: '({name}: no invites \u2014 buying everything)',
      post_day_single: 'Day {day}',
      post_day_range: 'Day {start}-{end}',
      post_invite_line: '{dayStr}: Invite {name} ({d}D, Lv {lv} Skip)',
      post_ult_milestone: '   \u2192 {ord} Ultimate Available @ Day {day} ({date})',
      post_accumulate: '{dayStr}: Accumulate Candles',
      post_candle_header: '**Candle Accounting**',
      post_earned: '\u2022 Earned by Day {day}: {earned}C ({pass} Pass + {cpd}\xd7{tmax})',
      post_spent: '\u2022 Spent: {cost}C',
      post_surplus: '\u2022 Surplus: {surplus}C',
      post_invite_used: '\u2022 Invite Days Used: {used} / {avail} Available',
    },
    'zh-CN': {
      theme_to_light: '切换到浅色模式',
      theme_to_dark: '切换到深色模式',
      heading: '毕业礼计算器',
      subtitle: '《光·遇》· 配置先祖、各节点物品及毕业礼 · 自动计算最优路线',
      aria_github: '在 GitHub 上查看源码',
      label_season_name: '季节名称',
      label_start_date: '季节开始（第 1 天）',
      section_rules: '规则',
      btn_load_season: '加载季节',
      label_cpd: '蜡烛 / 天',
      label_pass: '季卡额外蜡烛',
      label_heart: '季节爱心消耗（第 5 级）',
      note_skip_days: '各等级跳过天数。当某等级有 2 件物品但只购买其中 1 件时，视为“半跳”。',
      th_lv1: '1 级', th_lv2: '2 级', th_lv3: '3 级', th_lv4: '4 级',
      fullskip_days: '全跳天数',
      halfskip_days: '半跳天数',
      section_spirits: '先祖',
      btn_add_spirit: '+ 添加先祖',
      note_spirit_levels: '每个等级：填入该节点物品的蜡烛价格。若只有 1 件物品，请将第二栏留空。',
      spirit_count: '（{count} / {max}）',
      spirit_capped: '最多添加 {max} 位先祖，以保证计算速度',
      spirit_remove: '移除先祖',
      spirit_name_default: '先祖 {n}',
      lv_label: '第 {n} 级',
      cost_placeholder: '蜡烛',
      cost2_placeholder: '（第 2 件）',
      section_ultimates: '毕业礼',
      btn_add_ult: '+ 添加毕业礼',
      ult_nth: '{ord}毕业礼',
      ult_season_hearts: '季节爱心',
      ult_prioritize: '优先',
      ult_remove: '移除',
      ult_summary: '各毕业礼累计所需季节爱心：{cumStr}。计划完成 {done} / {total} 位先祖。优化目标：<b>{ultNth}</b>（最早获得）。',
      ult_summary_empty: '请至少添加一个毕业礼。',
      section_result: '结果',
      target_badge: '目标',
      ult_hearts_label: '{ord}毕业礼（{hearts} 季节爱心）',
      day_prefix: '第 {n} 天',
      season_fallback: '季节',
      page_title: '{name} — 毕业礼计算器',
      total_candles: '蜡烛总消耗',
      earned_surplus: '第 {day} 天累计获得：{earned} 蜡烛（结余 {surplus}）',
      invite_days: '邀请天数',
      invite_rate: '每日最多 1 次邀请',
      section_strategy: '各先祖策略',
      th_spirit: '先祖',
      th_cost: '消耗',
      th_days: '天数',
      not_used: '计划中未使用',
      note_lv5: '每完成一位先祖需额外消耗 {heart} 蜡烛换取第 5 级季节爱心。#N 标记为该先祖在计划中的完成顺序。',
      section_treemap: '兑换树节点图（自下而上，仅显示使用的先祖）',
      legend_buy: '购买',
      legend_skip: '兑换树跳过',
      section_discord: 'Discord 文案',
      btn_copy: '复制',
      copy_copied: '已复制',
      copy_failed: '复制失败',
      err_no_ult: '请至少添加一个毕业礼。',
      err_no_spirit: '请至少添加一位先祖。',
      err_hearts: '需要 {hearts} 颗季节爱心，但当前仅配置了 {count} 位先祖。请再添加 {more} 位先祖或减少毕业礼所需的季节爱心。',
      err_no_plan: '未找到可行方案。',
      err_solver: '计算过程出错：',
      desc_none: '（该等级无物品）',
      desc_buy: '购买 {c} 蜡烛',
      desc_skip: '跳过 {c} 蜡烛（耗时 {d} 天）',
      desc_buy_both: '购买两件：{exp}+{cheap} 蜡烛',
      desc_buy_cheap: '购买 {cheap} 蜡烛，跳过 {exp} 蜡烛（耗时 {d} 天）',
      desc_buy_exp: '购买 {exp} 蜡烛，跳过 {cheap} 蜡烛（耗时 {d} 天）',
      desc_skip_both: '两件全跳（耗时 {d} 天）',
      badge_buy: '购买 {c} 蜡烛',
      badge_skip: '跳过（{d} 天）',
      stage_none: '（无物品）',
      stage_buy: '购买 {c} 蜡烛',
      stage_skip: '跳过（{d} 天）',
      stage_skip_both: '全跳（{d} 天）',
      stage_mixed: '购 {b} 蜡烛 | 跳 {s} 蜡烛（{d} 天）',
      svg_lv5: '5 级 季节爱心', svg_lv4: '4 级', svg_lv3: '3 级', svg_lv2: '2 级', svg_lv1: '1 级',
      svg_heart: '季节爱心 {c} 蜡烛',
      svg_buy_line: '购买\n{c} 蜡烛',
      svg_skip_line: '跳过\n{c} 蜡烛\n（{d} 天）',
      svg_skip_days: '跳过（{d} 天）',
      svg_buy_both: '购买 {a}+{b} 蜡烛',
      svg_skip_both_days: '全跳（{d} 天）',
      post_header: '\uD83C\uDF81 {name} — 最快获得毕业礼路线',
      post_tldr: '**TL;DR**（优化目标：最早获得{ord}毕业礼）',
      post_ult_line: '\u2022 {ord}毕业礼（{hearts} 季节爱心）：第 {day} 天（{date}）{mark}',
      post_requires: '_需要季卡（+{pass} 起始蜡烛）。共有 {spiritCount} 位先祖，全部毕业礼共需 {totalHearts} 颗季节爱心。_',
      post_per_spirit: '**各先祖策略**（按完成顺序）',
      post_spirit_entry: '__{n}. {name}__ — {cost} 蜡烛，{days} 天邀请',
      post_lv_entry: '  第 {n} 级：{desc}',
      post_lv5: '  第 5 级：换取季节爱心（{heart} 蜡烛）',
      post_skipped: '_完全跳过：{names}（无需）。_',
      post_schedule_header: '**邀请日程**（每日 1 次，按顺序执行）',
      post_no_invites: '（{name}：无需邀请——全部直接购买）',
      post_day_single: '第 {day} 天',
      post_day_range: '第 {start}-{end} 天',
      post_invite_line: '{dayStr}：邀请解锁 {name}（{d} 天，跳过第 {lv} 级）',
      post_ult_milestone: '   \u2192 {ord}毕业礼 可于第 {day} 天（{date}）领取',
      post_accumulate: '{dayStr}：积攒蜡烛',
      post_candle_header: '**蜡烛收支明细**',
      post_earned: '\u2022 第 {day} 天累计获得：{earned} 蜡烛（季卡 {pass} + 每日 {cpd} × {tmax} 天）',
      post_spent: '\u2022 已消耗：{cost} 蜡烛',
      post_surplus: '\u2022 结余：{surplus} 蜡烛',
      post_invite_used: '\u2022 邀请天数：{used} / {avail} 可用',
    }
  };

  var ORDINALS = {
    en: function (n) {
      var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    },
    'zh-CN': function (n) { return '第 ' + n + ' 个'; }
  };

  var DATE_LOCALES = { en: 'en-US', 'zh-CN': 'zh-CN' };

  window.LANGS = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '中文(简体)' }
  ];

  var _lang = 'en';

  window.getLang = function () { return _lang; };

  window.t = function (key, vars) {
    var dict = TRANSLATIONS[_lang] || TRANSLATIONS.en;
    var str = dict[key];
    if (str === undefined && _lang !== 'en') str = TRANSLATIONS.en[key];
    if (str === undefined) {
      if (typeof console !== 'undefined') console.warn('[i18n] missing key: ' + key);
      return '\u26a0\ufe0f' + key;
    }
    if (vars) {
      str = str.replace(/\{(\w+)\}/g, function (_, k) {
        return vars[k] !== undefined ? vars[k] : '{' + k + '}';
      });
    }
    return str;
  };

  function applyStaticTranslations() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      var val = window.t(key);
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    }
  }

  window.setLang = function (code) {
    if (!TRANSLATIONS[code]) code = 'en';
    _lang = code;
    window.DATE_LOCALE = DATE_LOCALES[code] || 'en-US';
    window.ordinal = ORDINALS[code] || ORDINALS.en;
    document.documentElement.lang = code;
    try { localStorage.setItem('lang', code); } catch (e) { }
    // 1. update static DOM first
    applyStaticTranslations();
    // 2. then notify dynamic renderers
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: code } }));
  };

  // Initialise from localStorage
  var saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
  if (!TRANSLATIONS[saved]) saved = 'en';
  _lang = saved;
  window.DATE_LOCALE = DATE_LOCALES[saved] || 'en-US';
  window.ordinal = ORDINALS[saved] || ORDINALS.en;
  document.documentElement.lang = saved;

  // Script is at end of <body> — DOM is already parsed
  applyStaticTranslations();

  // Wire up lang select (options are pre-populated in HTML)
  var sel = document.getElementById('lang-select');
  if (sel) {
    sel.value = _lang;
    sel.addEventListener('change', function () { window.setLang(sel.value); });
  }

  // Initialize language select with LANGS data
  window.initLangSelect = function() {
    var sel = document.getElementById('lang-select');
    if (sel && window.LANGS) {
      sel.innerHTML = window.LANGS.map(function(lang) {
        return '<option value="' + lang.code + '">' + lang.label + '</option>';
      }).join('');
      sel.value = _lang;
      sel.addEventListener('change', function () { window.setLang(sel.value); });
    }
  };

  // Date formatting
  window.formatDate = function(dt) {
    var month = dt.getUTCMonth() + 1;
    var day = dt.getUTCDate();
    if (_lang === 'zh-CN') {
      return month + ' 月 ' + day + ' 日';
    } else {
      return dt.toLocaleDateString(window.DATE_LOCALE || 'en-US', {month:'short', timeZone:'UTC'}) + ' ' + day;
    }
  };
})();
