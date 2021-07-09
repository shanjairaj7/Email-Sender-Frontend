import { ApolloClient } from "apollo-client";
import { HttpLink, InMemoryCache } from "@apollo/react-hooks";

const link = new HttpLink({
  uri: "https://youtube-email-service.herokuapp.com/",
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
