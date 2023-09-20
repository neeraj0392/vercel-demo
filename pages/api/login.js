import { data } from "@/data";
import { withSession } from "@/session";

export default withSession(async function (req, res) {
  const { username, password } = req.body;

  const user = data.find((item) => item.username === username);
  console.log(user);
  if (user && user.password == password) {
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "user exists" });
  } else {
    res.status(403).json({ message: "username or password is wrong" });
  }
});
