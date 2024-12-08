export const bunUser = (id, users) => {
  return users.map((user) =>
    user.id === id ? { ...user, userIsBun: !user.userIsBun } : user
  );
};

export const editBtnInputs = (id, users, field) =>
  users.map((user) =>
    user.id === id ? { ...user, [field]: !user[field] } : user
  );
