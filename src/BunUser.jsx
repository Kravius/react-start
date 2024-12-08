export const bunUser = (id, users) => {
  return users.map((user) =>
    user.id === id ? { ...user, userIsBun: !user.userIsBun } : user
  );
};
