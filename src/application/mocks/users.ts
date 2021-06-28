import { TwitterUser } from "application/types/TwitterUser";

const users: TwitterUser[] = [
  {
    _id: "3512asde2b12r1ieu2",
    createdAt: new Date(),
    following: [],
    followers: [],
    notifications: [],
    personalInformation: {
      nickname: "TheBilo16",
      username: "TBilo16",
      avatarURL:
        "https://i1.wp.com/polvora.com.mx/wp-content/uploads/2020/07/Bugs-bunny-80-10.jpg?fit=1600%2C900&ssl=1",
      backgroundImage: "",
      description: "I am Programmer and Gamer",
    },
    conversations: [
      {
        user: {
          _id: "c",
          username: "bot_kun",
          nickname: "Jhony Vega",
          avatarURL: "",
        },
        messages: [
          {
            description: "Hola que tal bro cuentame como estas.",
            userId: "3512asde2b12r1ieu2",
            createdAt: new Date(),
          },
          {
            description: "Bueno, la verdad estuve muy bien",
            userId: "3512asde2b12r1ieu2",
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
];

export default users;
