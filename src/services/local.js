const saveOrder = (order, mail) => {
  localStorage.setItem(mail, JSON.stringify(order));
}

const getOrderByEmail = mail => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem(mail)) {
      resolve(JSON.parse(localStorage.getItem(mail)))
    } else {
      reject({ error: "No such email in storage" })
    }
  })
}

export {
  saveOrder,
  getOrderByEmail
}