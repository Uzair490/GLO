
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://web.nomadstech.io:4000/graphql',
  cache: new InMemoryCache(),
});

export { client };
