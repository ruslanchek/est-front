import { css, StyleSheet } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { Icon, IconName } from '../ui/Icon';
import { COLORS } from '../../theme';

interface IProps {
	name: string;
	iconName: IconName;
	path: string;
	size: number;
}

export class NavButton extends React.Component<IProps, {}> {
	public render() {
		return (
			<NavLink
				className={css(styles.button)}
				activeClassName={css(styles.buttonActive)}
				to={this.props.path}
			>
				<Icon name={this.props.iconName} size={this.props.size} styles={styles.icon}/>
			</NavLink>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
		textDecoration: 'none',
		transition: 'opacity .15s',
		filter: `grayscale(100%)`,
		opacity: .35,

		':hover': {
			opacity: .7,
			filter: `grayscale(0)`
		}
	},

	icon: {

	},

	title: {
		fontSize: 10,
		color: COLORS.VIOLET_DARK.toString()
	},

	buttonActive: {
		filter: `grayscale(0)`,
		opacity: 1,

		':hover': {
			backgroundColor: COLORS.WHITE.toString(),
			opacity: 1
		}
	},
});