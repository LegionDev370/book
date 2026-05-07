export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

export const removeTokenLocalStorage = () => {
  localStorage.removeItem("token");
};
