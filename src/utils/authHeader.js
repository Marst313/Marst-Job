const authHeader = (thunkApi) => {
  return {
    headers: {
      authorization: `Bearer ${thunkApi.getState().user.user.token}`,
    },
  };
};

export default authHeader;
