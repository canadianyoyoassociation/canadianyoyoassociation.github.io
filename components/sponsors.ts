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
    size: 500,
  },
  {
    url: "https://mezzaninehair.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/Mezzanine.png`,
    name: "Mezzanine Hair Studio",
    size: 450,
  },
  {
    url: "https://mfdyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/monkeyfinger.png`,
    name: "MonkeyfingeR",
    size: 280,
  },
  {
    url: "https://offsetyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/OFFSET.png`,
    name: "OFFSET YoYo",
    size: 400,
  },
  {
    url: "https://yoyofactory.com/en-ca",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/yyf.png`,
    name: "YoYoFactory",
    size: 200,
  },
  {
    url: "https://truearcreturntops.ca/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/TrueArc.png`,
    name: "True Arc Return Tops",
    size: 300,
  },
  {
    url: "https://onedropyoyos.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/onedrop.png`,
    name: "One Drop YoYos",
    size: 450,
  },
  {
    url: "https://www.c3yoyodesign.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/c3yoyodesign.png`,
    name: "C3yoyodesign",
    size: 450,
  },
  {
    url: "https://yoyofriends.store/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/yoyofriends.png`,
    name: "Yoyofriends",
    size: 500,
  },
];

const sponsorsSilver: Sponsor[] = [
  {
    url: "https://www.gomagicyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/magicyoyo.png`,
    name: "MAGICYOYO",
    size: 500,
  },
  {
    url: "https://www.yoyosam.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/sponsors/yoyosam.png`,
    name: "YoYoSam",
    size: 410,
  },
];

export { sponsorsGold, sponsorsSilver };
export type { Sponsor };
