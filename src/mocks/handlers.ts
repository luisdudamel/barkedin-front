import { rest } from "msw";
import { mockAllDogs } from "./dogs";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL_DEV}users/register`,
    (req, res, ctx) => {
      return res(ctx.status(201));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL_DEV}users/login`,
    (req, res, ctx) => {
      return res(ctx.status(400), ctx.json({ message: "Login incorrect" }));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL_DEV}dogs/favdogs/0`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.get(`${process.env.REACT_APP_API_URL_DEV}dogs/123`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          dog: {
            name: "Perro 1",
            age: 12,
            weight: "23",
            toy: "Stones",
            title: "Beach Lover",
            personality: "Beach",
            picture: "",
            breed: "Pitbull",
            bio: "Lo mejor de todos",
            id: "62a39325a7617d7fa3478ac8",
            owner: "123",
          },
        },
      })
    );
  }),
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

  rest.get(
    `${process.env.REACT_APP_API_URL_DEV}dogs/all/0/`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            dogs: mockAllDogs,
          },
        })
      );
    }
  ),
];
