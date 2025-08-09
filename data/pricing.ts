export type RoomType = 'double' | 'tripleQuad' | 'duplexQuad';

export interface Season {
  key: string;
  name: string;
  range: string;
  prices: Record<RoomType, number>;
}

export const seasons: Season[] = [
  {
    key: 'spring',
    name: 'Sezon Wiosenny',
    range: '01.04 – 31.05',
    prices: { double: 250, tripleQuad: 280, duplexQuad: 300 }
  },
  {
    key: 'majowka',
    name: 'Majówka',
    range: '30.04 – 03.05',
    prices: { double: 300, tripleQuad: 350, duplexQuad: 400 }
  },
  {
    key: 'early-summer',
    name: 'Sezon Letni',
    range: '30.05 – 22.06',
    prices: { double: 300, tripleQuad: 350, duplexQuad: 400 }
  },
  {
    key: 'high-summer',
    name: 'Sezon Wakacyjny',
    range: '22.06 – 31.08',
    prices: { double: 350, tripleQuad: 400, duplexQuad: 450 }
  },
  {
    key: 'autumn-winter',
    name: 'Jesień–Zima',
    range: '01.09 – 31.03',
    prices: { double: 250, tripleQuad: 280, duplexQuad: 300 }
  }
];

export const notes = [
  'Do cen należy doliczyć opłatę klimatyczną 2,80 zł / os. / doba.',
  'Nie pobieramy opłat za prąd i wodę (wliczone w cenę).',
  'Doba hotelowa: 15:00 – 10:00.'
];
