export const bunUser = (id, users) => {
  return users.map((user) =>
    user.id === id ? { ...user, userIsBun: !user.userIsBun } : user
  );
};

export const editBtnInputs = (id, users) =>
  users.map((user) => (user.id === id ? { ...user, edit: !user.edit } : user));
