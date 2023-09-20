import { withSession } from "@/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  console.log("get user called");
  if (user) {
    res.json({
      isLoggedIn: true,
      ...user,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
