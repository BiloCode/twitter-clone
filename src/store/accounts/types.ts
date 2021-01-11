export type TPersonalInformation = {
  nickname : string,
  username : string,
  profileImage : string,
  backgroundImage : string,
  description : string
}

export type TFollower = {
  _id : string;
}

export type TAccountState = {
  _id : string,
  createdAt : Date,
  following : TFollower[],
  followers : TFollower[],
  notifications : number,
  personalInformation : TPersonalInformation
}