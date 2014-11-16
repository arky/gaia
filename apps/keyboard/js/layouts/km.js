Keyboards.km = {
  label: 'Khmer',
  imEngine: 'latin',
  types: ['text', 'url', 'email'],
  autoCorrectLanguage: '',
  menuLabel: '\u1781\u17D2\u798\u17C2\u179A' /*ខ្មែរ*/,
  alt: {
    '\u178A'/*ដ*/: '\u17E1\u17A7'/*១ឧ*/,
    '\u1793'/*ន*/: '\u17E2\17AA'/*២ឪ*/,
   '\u1794'/*ប*/: '\u17E3\u17CD'/*៣៍*/,
    '\u17A2'/*អ*/: '\u17E4\u178D'/*៤ឍ*/,
    '\u178F'/*ត*/: '\u17E5\u17C9'/*៥៉*/,
    '\u1796'/*ព*/: '\u17E6\u17B9'/*៦ឹ*/,
    '\u1785'/*ច*/: '\u17E7\u17BA'/*៧ឺ*/,
    '\u179C'/*វ*/: '\u17E8\u17D0'/*៨័*/,
    '\u1791'/*ទ*/: '\u17E9'/*៩*/,
    '\u178E'/*ណ*/: '\u17E0\u17DB'/*០៛*/,
    '\u17AC'/*ឬ*/: '\u17AB'/*ឫ*/,
    '\u1781'/*ខ*/: '\u17CF'/*៏*/,
    '\u1780'/*ក*/: '\u17CC'/*៌*/,
    '\u17D7'/*ៗ*/: '\u178B'/*ឋ*/,
    '\u179B'/*ល*/: '\u17B7'/*ិ*/,
    '\u1798'/*ម*/: '\u17C6'/*ំ*/,
   '\u17D2 '/*្ */: '\u17CE'/*៎*/,
    '\u179A'/*រ*/: '\u178C'/*ឌ*/,
    '\u1789'/*ញ*/: '\u17C4'/*ោ*/,
    '\u17AF'/*ឯ*/: '\u1788'/*ឈ*/,
    '\u179F'/*ស*/: '\u17D4'/*។*/,
    '\u17A0'/*ហ*/: '\u17D5'/*៕*/,
    '\u1784'/*ង*/: '\u17B2'/*ឲ*/,
    '\u1782'/*គ*/: '\u17B1'/*ឳ*/,
    '\u1787'/*ជ*/: '\u17BF'/*ឿ*/,
    '\u1799'/*យ*/: '\u17C0'/*ៀ*/,
  },
  upperCase: {
    '\u178A'/*ដ*/: '\u17B1'/*ឱ*/,
    '\u1793'/*ន*/: '\u17BB'/*ុ*/,
    '\u1794'/*ប*/: '\u17BC'/*ូ*/,
    '\u17A2'/*អ*/: '\u17BD'/*ួ*/,
    '\u178F'/*ត*/: '\u1790'/*ថ*/,
    '\u1796'/*ព*/: '\u1797'/*ភ*/,
    '\u1785'/*ច*/: '\u1786'/*ឆ*/,
    '\u179C'/*វ*/: '\u17A6'/*ឦ*/,
    '\u1791'/*ទ*/: '\u1792'/*ធ*/,
    '\u178E'/*ណ*/: '\u17B8'/*ី*/,
    '\u17AC'/*ឬ*/: '\u17D1'/*៊*/,
    '\u1781'/*ខ*/: '\u17CB'/*់*/,
    '\u1780'/*ក*/: '\u17C7'/*ះ*/,
    '\u17D7'/*ៗ*/: '\u17C8'/*ៈ*/,
    '\u179B'/*ល*/: '\u17A1'/*ឡ*/,
    '\u1798'/*ម*/: '\u17AE'/*ឮ*/,
   '\u17D2 '/*្*/: '\u17AD'/*ឭ*/,
    '\u179A'/*រ*/: '\u17B6'/*ា*/,
    '\u1789'/*ញ*/: '\u17C5'/*ៅ*/,
    '\u17AF'/*ឯ*/: '\u17A5'/*ឥ*/,
    '\u179F'/*ស*/: '\u17BE'/*ើ*/,
    '\u17A0'/*ហ*/: '\u17C3'/*ៃ*/,
    '\u1784'/*ង*/: '\u1783'/*ឃ*/,
    '\u1782'/*គ*/: '\u1795'/*ផ*/,
    '\u1787'/*ជ*/: '\u17C1'/*េ*/,
    '\u1799'/*យ*/: '\u17C2'/*ែ*/,
 },  
  keys: [
    [
      { value: '\u178A'/*ដ*/ }, { value: '\u1793'/*ន*/ }, { value: '\u1794'/*ប*/ } , { value: '\u17A2'/*អ*/ },
      { value: '\u178F'/*ត*/ } , { value: '\u1796'/*ព*/ }, { value: '\u1785'/*ច*/ } , { value: '\u179A'/*វ*/ },
      { value: '\u1791'/*ទ*/ }, { value: '\u178E'/*ណ*/ }
    ], [
      { value: '\u17AC'/*ឬ*/ }, { value: '\u1781'/*ខ*/ }, { value: '\u1780'/*ក*/ }, { value: '\u17D7'/*ៗ*/ },
      { value: '\u179B'/*ល*/ } , { value: '\u1798'/*ម*/ }, { value: '\u17D2'/*្*/ }, { value: '\u179A'/*រ*/ },
      { value: '\u1789'/*ញ*/ },
      { value: ':', visible: ['url']}, { value: '_', visible: ['email']}
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: '\u17AF'/*ឯ*/ }, { value: '\u179F'/*ស*/ }, { value: '\u17A0'/*ហ*/ }, { value: '\u1784'/*ង*/ },
      { value: '\u1782'/*គ*/ }, { value: '\u1787'/*ជ*/ }, { value: '\u1799'/*យ*/ },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '0': 'º',
      '1': '1st ',
      '2': '2nd ',
      '3': '3rd ',
      '4': '4th ',
      '5': '5th ',
      '6': '6th ',
      '7': '7th ',
      '8': '8th ',
      '9': '9th ',
      '$': '៛€ £ ¥',
      '?': '¿',
      '!': '¡'
    },
    keys: [
      [
        { value: '1' }, { value: '2' }, { value: '3' } , { value: '4' },
        { value: '5' } , { value: '6' }, { value: '7' } , { value: '8' },
        { value: '9' }, { value: '0' }
      ], [
        { value: '@', hidden: ['email'] }, { value: '#' }, { value: '$' },
        { value: '%' }, { value: '&' } , { value: '*' }, { value: '-' },
        { value: '+' }, { value: '(' }, { value: ')' },
        { value: '_', visible: ['email'] }
      ], [
        { value: 'ALT', ratio: 1.5, keyCode: KeyEvent.DOM_VK_ALT },
        { value: '!' }, { value: '\"' }, { value: "'" }, { value: ':' },
        { value: ';' }, { value: '/' }, { value: '?' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  }
};
