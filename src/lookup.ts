export const socialMedia: {
  site:
    | 'twitch'
    | 'twitter'
    | 'instagram'
    | 'snapchat'
    | 'tiktok'
    | 'spotify'
    | 'facebook'
    | 'reddit';
  url: string;
  img: string;
}[] = [
  { site: 'twitch', url: 'twitch.tv/', img: './img/twitch.png' },
  { site: 'twitter', url: 'twitter.com/', img: './img/twitter.png' },
  { site: 'instagram', url: 'instagram.com/', img: './img/instagram.png' },
  { site: 'snapchat', url: 'snapchat.com/add/', img: './img/snapchat.png' },
  { site: 'tiktok', url: 'tiktok.com/@', img: './img/tiktok.png' },
  { site: 'spotify', url: 'open.spotify.com/user/', img: './img/spotify.png' },
  { site: 'facebook', url: 'facebook.com/', img: './img/facebook.png' },
  { site: 'reddit', url: 'reddit.com/user/', img: './img/reddit.png' },
];

export const ranks = [
  { rank: 'Copper V', img: './img/ranks/RANK_500x500Copper_05.png' },
  { rank: 'Copper IV', img: './img/ranks/RANK_500x500Copper_04.png' },
  { rank: 'Copper III', img: './img/ranks/RANK_500x500Copper_03.png' },
  { rank: 'Copper II', img: './img/ranks/RANK_500x500Copper_02.png' },
  { rank: 'Copper I', img: './img/ranks/RANK_500x500Copper_01.png' },
  { rank: 'Bronze V', img: './img/ranks/RANK_500x500Bronze_05.png' },
  { rank: 'Bronze IV', img: './img/ranks/RANK_500x500Bronze_04.png' },
  { rank: 'Bronze III', img: './img/ranks/RANK_500x500Bronze_03.png' },
  { rank: 'Bronze II', img: './img/ranks/RANK_500x500Bronze_02.png' },
  { rank: 'Bronze I', img: './img/ranks/RANK_500x500Bronze_01.png' },
  { rank: 'Silver V', img: './img/ranks/RANK_500x500Silver_05.png' },
  { rank: 'Silver IV', img: './img/ranks/RANK_500x500Silver_04.png' },
  { rank: 'Silver III', img: './img/ranks/RANK_500x500Silver_03.png' },
  { rank: 'Silver II', img: './img/ranks/RANK_500x500Silver_02.png' },
  { rank: 'Silver I', img: './img/ranks/RANK_500x500Silver_01.png' },
  { rank: 'Gold III', img: './img/ranks/RANK_500x500GOLD_03.png' },
  { rank: 'Gold II', img: './img/ranks/RANK_500x500GOLD_02.png' },
  { rank: 'Gold I', img: './img/ranks/RANK_500x500GOLD_01.png' },
  { rank: 'Platinum III', img: './img/ranks/RANK_500x500Platinum_03.png' },
  { rank: 'Platinum II', img: './img/ranks/RANK_500x500Platinum_02.png' },
  { rank: 'Platinum I', img: './img/ranks/RANK_500x500Platinum_01.png' },
  { rank: 'Diamond', img: './img/ranks/RANK_500x500Diamond_01.png' },
  { rank: 'Champion', img: './img/ranks/RANK_500x500Champions_01.png' },
];

export const att = [
  { operator: 'Hibana', img: './img/operators/hibana.png', side: 'att' },
  { operator: 'Thermite', img: './img/operators/thermite.png', side: 'att' },
  { operator: 'Ash', img: './img/operators/ash.png', side: 'att' },
  { operator: 'Buck', img: './img/operators/buck.png', side: 'att' },
  { operator: 'Kali', img: './img/operators/kali.png', side: 'att' },
  { operator: 'Maverick', img: './img/operators/maverick.png', side: 'att' },
  { operator: 'Sledge', img: './img/operators/sledge.png', side: 'att' },
  { operator: 'Thatcher', img: './img/operators/thatcher.png', side: 'att' },
  { operator: 'Twitch', img: './img/operators/twitch.png', side: 'att' },
  { operator: 'Zero', img: './img/operators/zero.png', side: 'att' },
  { operator: 'Zofia', img: './img/operators/zofia.png', side: 'att' },
  {
    operator: 'Blackbeard',
    img: './img/operators/blackbeard.png',
    side: 'att',
  },
  { operator: 'Capitao', img: './img/operators/capitao.png', side: 'att' },
  { operator: 'Dokkaebi', img: './img/operators/dokkaebi.png', side: 'att' },
  { operator: 'Finka', img: './img/operators/finka.png', side: 'att' },
  { operator: 'Glaz', img: './img/operators/glaz.png', side: 'att' },
  { operator: 'Gridlock', img: './img/operators/gridlock.png', side: 'att' },
  { operator: 'Iana', img: './img/operators/iana.png', side: 'att' },
  { operator: 'IQ', img: './img/operators/iq.png', side: 'att' },
  { operator: 'Jackal', img: './img/operators/jackal.png', side: 'att' },
  { operator: 'Lion', img: './img/operators/lion.png', side: 'att' },
  { operator: 'Montagne', img: './img/operators/montagne.png', side: 'att' },
  { operator: 'Nomad', img: './img/operators/nomad.png', side: 'att' },
  { operator: 'Ying', img: './img/operators/ying.png', side: 'att' },
  { operator: 'Amaru', img: './img/operators/amaru.png', side: 'att' },
  { operator: 'Blitz', img: './img/operators/blitz.png', side: 'att' },
  { operator: 'Fuze', img: './img/operators/fuze.png', side: 'att' },
  { operator: 'Nøkk', img: './img/operators/nokk.png', side: 'att' },
];

export const def = [
  { operator: 'Aruni', img: './img/operators/aruni.png', side: 'def' },
  { operator: 'Bandit', img: './img/operators/bandit.png', side: 'def' },
  { operator: 'Mute', img: './img/operators/mute.png', side: 'def' },
  { operator: 'Kaid', img: './img/operators/kaid.png', side: 'def' },
  { operator: 'Jager', img: './img/operators/jager.png', side: 'def' },
  { operator: 'Mira', img: './img/operators/mira.png', side: 'def' },
  { operator: 'Mozzie', img: './img/operators/mozzie.png', side: 'def' },
  { operator: 'Pulse', img: './img/operators/pulse.png', side: 'def' },
  { operator: 'Rook', img: './img/operators/rook.png', side: 'def' },
  { operator: 'Valkyrie', img: './img/operators/valkyrie.png', side: 'def' },
  { operator: 'Wamai', img: './img/operators/wamai.png', side: 'def' },
  { operator: 'Alibi', img: './img/operators/alibi.png', side: 'def' },
  { operator: 'Caveira', img: './img/operators/caveira.png', side: 'def' },
  { operator: 'Doc', img: './img/operators/doc.png', side: 'def' },
  { operator: 'Echo', img: './img/operators/echo.png', side: 'def' },
  { operator: 'Ela', img: './img/operators/ela.png', side: 'def' },
  { operator: 'Frost', img: './img/operators/frost.png', side: 'def' },
  { operator: 'Goyo', img: './img/operators/goyo.png', side: 'def' },
  { operator: 'Kapkan', img: './img/operators/kapkan.png', side: 'def' },
  { operator: 'Lesion', img: './img/operators/lesion.png', side: 'def' },
  { operator: 'Maestro', img: './img/operators/maestro.png', side: 'def' },
  { operator: 'Smoke', img: './img/operators/smoke.png', side: 'def' },
  { operator: 'Vigil', img: './img/operators/vigil.png', side: 'def' },
  { operator: 'Warden', img: './img/operators/warden.png', side: 'def' },
  { operator: 'Castle', img: './img/operators/castle.png', side: 'def' },
  { operator: 'Clash', img: './img/operators/clash.png', side: 'def' },
  { operator: 'Oryx', img: './img/operators/oryx.png', side: 'def' },
  { operator: 'Tachanka', img: './img/operators/tachanka.png', side: 'def' },
];
