import faker from "faker";

const messages = [
  {
    lastUpdated: new Date(),
    nickname: "TheBilo",
    username: "bilo_code",
    message: "Este fue el ultimo mensaje que te deje",
    avatar: faker.random.image(),
  },
  {
    lastUpdated: new Date(),
    nickname: "Jhony Vega",
    username: "bot_kun",
    message: "Bienvenido a este espacio.",
    avatar: faker.random.image(),
  },
  {
    lastUpdated: new Date(),
    nickname: "Imanol Mayo",
    username: "arenita",
    message: "El ultimo mensaje fue este",
    avatar: faker.random.image(),
  },
];

export default messages;
