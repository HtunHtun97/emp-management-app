export const loginRequest = async (username, password) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  }).then(() => {
    if (username === "admin" && password === "123456") {
      return "admin123456"; //just a mocked token
    } else {
      return "invalid";
    }
  });
};
