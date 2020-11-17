export interface IPersonalInformation {
  nickname : string,
  username : string,
  profileImage : string,
  backgroundImage : string,
  description : string
}

export interface IFollower {
  _id : string;
}

export interface IAccountState {
  _id : string,
  createdAt : Date,
  following : IFollower[],
  followers : IFollower[],
  notifications : number,
  personalInformation : IPersonalInformation
}