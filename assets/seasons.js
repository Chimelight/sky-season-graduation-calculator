// Season data configuration
// Add seasons here in reverse chronological order (newest first).
// Each entry will appear in the season picker dropdown.
// Shape:
//   id         — unique key (string)
//   label      — display name in the dropdown
//   seasonName — shown in the page title and post
//   startDate  — ISO date string 'YYYY-MM-DD' for Day 1 of the season
//   rules      — candle economy and skip-day rules
//   spirits    — array of spirits; each spirit has name + levels (4 entries, each an array of costs)
//   ultimates  — array of ultimate gifts; each has a hearts cost
//   targetIdx  — index of the ultimate to prioritize (0-based)

window.SEASONS = [
  {
    id: 'season-of-carnival-beta',
    label: '2026 Season of Carnival (Beta)',
    seasonName: 'Season of Carnival (Beta)',
    startDate: '2026-04-17',
    rules: { cpd:6, pass:30, heart:3, l1f:4, l1h:2, l2f:6, l2h:3, l3f:8, l3h:4, l4f:10, l4h:5 },
    spirits: [
      { name: 'Juggler',         levels: [[4], [19, 7], [24, 10], [28]] },
      { name: 'Athletic Dancer', levels: [[4], [19, 7], [24, 12], [28]] },
      { name: 'Puzzle Director', levels: [[4], [19, 7], [24, 10], [28]] },
      { name: 'Stunt Actor',     levels: [[4], [19, 7], [24, 10], [28]] },
    ],
    ultimates: [{ hearts: 2 }, { hearts: 2 }],
    targetIdx: 0,
  },

  {
    id: 'season-of-lightmending',
    label: '2026 Season of Lightmending',
    seasonName: 'Season of Lightmending',
    startDate: '2026-01-16',
    rules: { cpd:6, pass:30, heart:3, l1f:4, l1h:2, l2f:6, l2h:3, l3f:8, l3h:4, l4f:10, l4h:5 },
    spirits: [
      { name: 'Pioneer', levels: [[4], [6], [28, 30], [15]] },
      { name: 'Champion', levels: [[4], [25, 6], [28, 9], [15]] },
      { name: 'Light Catcher', levels: [[19], [6], [28, 11], [38]] },
      { name: 'Light Scholar', levels: [[4], [25], [28, 30], [12]] },
    ],
    ultimates: [{ hearts: 1 }, { hearts: 1 }, { hearts: 2 }],
    targetIdx: 2,
  },

  {
    id: 'season-of-migration',
    label: '2025 Season of Migration',
    seasonName: 'Season of Migration',
    startDate: '2025-10-20',
    rules: { cpd:6, pass:30, heart:3, l1f:4, l1h:2, l2f:6, l2h:3, l3f:8, l3h:4, l4f:10, l4h:5 },
    spirits: [
      { name: 'Bird Whisperer', levels: [[2], [4], [24, 30], [12]] },
      { name: 'Butterfly Charmer', levels: [[2], [6], [24, 30], [8]] },
      { name: 'Bellmaker', levels: [[17], [23, 4], [9, 6], [36]] },
      { name: 'Manta Whisperer', levels: [[2], [23, 4], [24, 6], [12]] },
      { name: 'Jelly Whisperer', levels: [[2], [4], [24, 9], [36]] },
    ],
    ultimates: [{ hearts: 1 }, { hearts: 2 }, { hearts: 2 }],
    targetIdx: 2,
  },
];
