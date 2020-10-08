const saveOrder = (order) => {
  localStorage.setItem('order', order);
}
const getCurrentOrder = () => {
  return localStorage.getItem('order');
}
const getOrderByEmail = (email) => {
  if (localStorage.getItem('email') == email) {
    return localStorage.getItem('order');
  } else {
    return false;
  }
}

export {
  saveOrder,
  getCurrentOrder,
  getOrderByEmail
}