const saveOrder = (order, mail) => {
  localStorage.setItem(mail, JSON.stringify(order));
}
const getOrderByEmail = (mail) => {
  if (localStorage.getItem(mail)) {
    return JSON.parse(localStorage.getItem(mail));
  } else {
    return false;
  }
}
export {
  saveOrder,
  getOrderByEmail
}