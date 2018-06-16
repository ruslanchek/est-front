import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';

interface IProps {
	id: number;
	lat: number;
	lng: number;
	title: string;
}

export class GisMarker extends React.PureComponent<IProps, {}> {
	public render() {
		const { id, title } = this.props;

		return (
			<div className={css(styles.marker)} onClick={() => {
				alert(title);
			}}>
				{id}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	marker: {
		width: 30,
		height: 30,
		background: 'white',
		border: '2px solid red',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		top: '50%',
		left: '50%',
		opacity: .75,
		transition: 'opacity .2s',
		cursor: 'pointer',

		':hover': {
			opacity: 1
		}
	}
});
