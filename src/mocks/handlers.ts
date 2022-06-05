import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL_DEV}users/login`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL_DEV}dogs/favdogs`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
