import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//DEV ONLY!! Check loading and network requests
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const tasksApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    //abstraction of fetch command
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      //DEV ONLY!!!!
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {};
  },
});

export { tasksApi };
