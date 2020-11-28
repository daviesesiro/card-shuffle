const names1 = [
  "Emmanuel",
  "Michael",
  "Abiodun",
  "Tochi",
  "Benedict",
  "olawale",
  "yanju",
  "sowobi",
  "Abdulsamad",
  "Chiamaka",
  "Gbemisola",
  "Ibukunoluwa",
  "Inioluwa",
  "Irekanmi",
  "Kitan",
  "Ire",
  "Shade",
  "Momori",
];

const names2 = [
  "Mary",
  "Michael",
  "Peter",
  "Redeem",
  "Stephanie",
  "Abaeze",
  "Adaobi",
  "Adaure",
  "Ihuoma",
  "Ijeawele",
  "Isoken",
  "Iyawa",
  "Ifechukwu",
  "Idaramfon",
  "Dayo",
  "Durojaiye",
  "Debare",
  "Peter",
];

export const abilities = [
  {
    ability: "Super Speed",
    tag: "⚡⚡",
  },
  {
    ability: "Super strength",
    tag: "💪💪",
  },
  {
    ability: "Super brain",
    tag: "🧠🧠",
  },
  {
    ability: "Flying",
    tag: "✈✈",
  },
  {
    ability: "Super Hearing",
    tag: "👂👂",
  },
];

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

export function generateRandomName() {
  return `${names1[getRandomIndex(names1)]} ${names2[getRandomIndex(names2)]}`;
}

export function generateRandomAbility() {
  return abilities[getRandomIndex(abilities)];
}

const randomFromRange = (start, end) => {
  if (start > end) throw Error("start should be less than end");
  return Math.floor(Math.random() * (end - start)) + start;
};

export function GenerateCard(id) {
  return {
    id,
    imgSet: Math.randomFromRange(1, 5),
    name: generateRandomName(),
    ability: generateRandomAbility(),
  };
}

Object.assign(Math, { randomFromRange });
