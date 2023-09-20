import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    password: "somelongpasswordwith32characters",
    cookieName: "cookieCreatedByIronSession",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      //   secure: process.env.NODE_ENV === 'production' ? true : false,
      secure: false,
    },
  });
}
