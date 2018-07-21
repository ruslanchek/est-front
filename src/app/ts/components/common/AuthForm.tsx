import * as React from 'react';
import { followStore } from 'react-stores';
import { AuthStore } from '../../stores/AuthStore';
import { css, StyleSheet } from 'aphrodite';

interface IProps {

}

@followStore(AuthStore.store)
export class AuthForm extends React.Component<IProps, {}> {
	public render() {
		console.log(AuthStore.store.state.profile);

		return (
			<div className={css(styles.container)}>
				<div className={css(styles.inner)}>
					{this.props.children}
				</div>

				{AuthStore.store.state.profile && (
					<div>
						{AuthStore.store.state.profile.id}<br/>
						{AuthStore.store.state.profile.email}<br/>
						{AuthStore.store.state.profile.name}<br/>
						{AuthStore.store.state.profile.phone}<br/>
						{AuthStore.store.state.profile.type}<br/>
						{AuthStore.store.state.profile.emailVerified}<br/>
					</div>
				)}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center'
	},

	inner: {
		width: 400
	}
});
