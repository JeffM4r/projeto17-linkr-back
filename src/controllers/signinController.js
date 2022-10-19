async function signin (req, res) {
  const { email, password } = req.body
  const userInfo = res.locals.userInfo

  console.log(userInfo)
  res.send('Ok')
}

export {
  signin
}