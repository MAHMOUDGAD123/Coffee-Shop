interface ServerUserInfo {
  cart: string[];
  filter: CategoryFilter;
  language: Language;
}

type ClientUserInfo = ServerUserInfo;

type UserSignupInfo = Pick<ServerUserInfo, 'username'>;
