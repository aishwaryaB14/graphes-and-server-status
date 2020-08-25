import { LOGIN, LOGOUT } from './type';

export const doLogin = (data) => {
  console.log('data', data);
  return (
    {
      type: LOGIN,
      payload: data,
    }
  );
};

export const doLogOut = () => {
  console.log('logOut');
  return (
    {
      type: LOGOUT,
    }
  );
};
