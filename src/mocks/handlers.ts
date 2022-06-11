import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL_DEV}users/login`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL_DEV}dogs/1234`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL_DEV}dogs/create`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL_DEV}dogs/edit/:1234`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
