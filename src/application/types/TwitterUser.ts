export type TwitterUser = {
  _id: string;
  createdAt: Date;
  following: string[];
  followers: string[];
  notifications: [];
  personalInformation: {
    nickname: string;
    username: string;
    avatarURL: string;
    description: string;
    backgroundImage: string;
  };
  conversations: {
    user: {
      _id: string;
      nickname: string;
      username: string;
      avatarURL: string;
    };
    messages: {
      userId: string;
      description: string;
      createdAt: Date;
    }[];
  }[];
};
