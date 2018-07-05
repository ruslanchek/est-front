import { Manager } from './Manager';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

export class ApiManager extends Manager {
	private client: ApolloClient<InMemoryCache> = null;

	constructor() {
		super();

		this.client = new ApolloClient<InMemoryCache>({
			cache: new InMemoryCache(),
			uri: 'https://api-euwest.graphcms.com/v1/cjipuor6s0cw101hine9n80q3/master',
		});
	}

	public reset(): void {
	}

	public init(): Promise<any> {
		this.client.query({
			query: gql`
    query {
  agents {
    id,
    fullName,
    avatar {
      url
    }
  }
}
  `,
		})
			.then(data => console.log(data))
			.catch(error => console.error(error));

		return new Promise<any>((resolve, reject) => {
			resolve();
		});
	}
}