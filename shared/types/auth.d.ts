interface ServerUserInfo {
  cart: string[];
  filter: FilterCategory;
  language: Language;
}

type ClientUserInfo = ServerUserInfo;

type UserSignupInfo = Pick<ServerUserInfo, 'username'>;
