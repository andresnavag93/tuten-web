import { api } from "./api";

export const get = async (
  url,
  token,
  email = "contacto@tuten.cl",
  optionals = "/bookings?current=true"
) => {
  try {
    console.log("llamada en api");
    let urlQuery = api.baseRoute.debug + url + email + optionals;
    console.log(urlQuery);
    let req = await fetch(urlQuery, {
      method: "GET",
      headers: {
        app: "APP_BCK",
        Accept: "application/json",
        adminemail: "testapis@tuten.cl",
        token: token,
      },
    });
    let json = await req.json();
    return json;
  } catch (err) {
    return { code: 401, status: "incorrect credentails" };
    throw Error(err);
  }
};

export const put = async (url, optionals = "", password = "") => {
  try {
    let req = await fetch(api.baseRoute.debug + url + optionals, {
      method: "PUT",
      headers: { password, app: "APP_BCK", Accept: "application/json" },
    });
    let json = await req.json();
    return json;
  } catch (err) {
    return { code: 401, status: "Invalid credentials" };
    throw Error(err);
  }
};
