import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        id: 1,
        title: "Mocked title",
        completed: false,
      })
    );
  }),
];
