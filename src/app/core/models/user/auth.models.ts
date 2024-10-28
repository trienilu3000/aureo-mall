export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserInfo {
  userId: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  roleList: [];
  district : string;
  ward : string;
  address : string;
}
