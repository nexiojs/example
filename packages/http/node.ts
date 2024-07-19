import "./src/setup";

import { createApplication } from "@nexiojs/core";
import { NodeAdapter } from "@nexiojs/node-adapter";
import { CORSInterceptor } from "./src/interceptors/cors.interceptor";
import { JwtInterceptor } from "./src/interceptors/jwt.interceptor";

createApplication({
  adapter: NodeAdapter,
  compress: true,
  interceptors: [JwtInterceptor, CORSInterceptor],
  responseHandler: async (event, res) => {
    return res[0];
  },
  port: 3000,
});
