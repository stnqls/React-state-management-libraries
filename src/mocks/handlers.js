import { rest } from "msw";

export const handlers = [
  rest.put("http://localhost:3000/counter/increment", (req, res, ctx) => {
    const value = req.body.value;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),

  rest.get("/login", (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Data not Found",
        })
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: "subin",
        //         age: 135,
        //       },
        //       {
        //         name: id,
        //         age: 13,
        //       },
        // {
        //   name: "dongmin",
        //   age: 15,
        // },
        // {
        //   name: "judy",
        //   age: 25,
        // },
        // {
        //   name: "marry",
        //   age: 64,
        // },
        // {
        //   name: "tommy",
        //   age: 109,
        // },
        // ],
        // },
        // })
      );
    }
  ),

  // rest.get("/user", (req, res, ctx) => {
  //   const isAuthenticated = sessionStorage.getItem("is-authenticated");
  //   if (!isAuthenticated) {
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: "Not authorized",
  //       })
  //     );
  //   }
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       username: "admin",
  //     })
  //   );
  // }),
];
