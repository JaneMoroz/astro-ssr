import type { APIRoute } from "astro";

// Save cookie
export const post: APIRoute = ({ request }) => {
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `jwt_token=${request.headers.get("Authorization")}`
  );
  return new Response(null, {
    status: 200,
    headers,
  });
};

// Delete cookie
export const get: APIRoute = ({ params, request }) => {
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `jwt_token=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  );
  return new Response(null, {
    status: 200,
    headers,
  });
};
