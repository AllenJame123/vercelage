<<<<<<< HEAD
import { createRequestHandler } from "@remix-run/vercel";
import * as build from "@remix-run/dev/server-build";

=======
import { createRequestHandler } from "@remix-run/vercel";
import * as build from "@remix-run/dev/server-build";

>>>>>>> f499a4c14dcd4d7c26aa407f42ea443124fea033
export default createRequestHandler({ build, mode: process.env.NODE_ENV }); 