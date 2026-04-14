type Sponsor = {
  url: string;
  img: string;
  name: string;
  size: number;
};

const sponsorsGold: Sponsor[] = [
  {
    url: "https://www.44emporium.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/44emporium.png`,
    name: "44EMPORIUM",
    size: 450,
  },
  {
    url: "https://mezzaninehair.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/Mezzanine.png`,
    name: "Mezzanine",
    size: 450,
  },
  {
    url: "https://mfdyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/MFD.jpg`,
    name: "Monkeyfinger",
    size: 300,
  },
  {
    url: "https://offsetyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/OFFSET.png`,
    name: "OFFSET",
    size: 450,
  },
  {
    url: "https://yoyofactory.com/en-ca",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/yyf.png`,
    name: "YoyoFactory",
    size: 200,
  },
  {
    url: "https://truearcreturntops.ca/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/TrueArc.png`,
    name: "TrueArc",
    size: 300,
  },
];

const sponsorsSilver: Sponsor[] = [
  {
    url: "http://magicyoyo.cn/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/MagicYoyo.png`,
    name: "Magic Yoyo",
    size: 500,
  },
];

export { sponsorsGold, sponsorsSilver };
export type { Sponsor };
