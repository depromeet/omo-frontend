const setRefreshTokenOnCookie = (refresh: string) => {
  const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
  const date = new Date();
  date.setTime(date.getTime() + TWO_WEEKS);
  document.cookie = `refresh=${refresh};SameSite=Lax;expires=${date.toUTCString()}`;
};

export default setRefreshTokenOnCookie;
