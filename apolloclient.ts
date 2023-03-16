import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = 'https://api.lens.dev/';

export const apolloClient= new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})