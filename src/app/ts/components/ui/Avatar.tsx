import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, THEME } from '../../theme';

interface IProps {
	objectData: IObject;
}

export class Avatar extends React.PureComponent<IProps, {}> {
	public render() {
		const { agent } = this.props.objectData;

		return (
			<div className={css(styles.container)}>
				<div className={css(styles.title)}>
					{this.getAgentTypeName()}
				</div>

				<div className={css(styles.info)}>
					<img
						src={agent.avatar}
						className={css(styles.image)}
					/>

					<div className={css(styles.contact)}>
						<div className={css(styles.contactRow, styles.contactRowAccent)}>
							{agent.fullName}
						</div>

						<div className={css(styles.contactRow, styles.contactRowDecent)}>
							{agent.contact}
						</div>
					</div>
				</div>
			</div>
		);
	}

	private getAgentTypeName(): string {
		switch (this.props.objectData.agent.type) {
			case ObjectsStore.EObjectAgentType.Private : return 'Private';
			case ObjectsStore.EObjectAgentType.Realtor : return 'Realtor';
			case ObjectsStore.EObjectAgentType.Agency : return 'Agency';
		}
	}
}

const styles = StyleSheet.create({
	container: {

	},

	title: {
		fontSize: THEME.FONT_SIZE_TINY,
		textTransform: 'uppercase',
		marginBottom: THEME.SECTION_PADDING_V / 2,
		color: COLORS.BLACK_EXTRA_LIGHT.toString(),
		fontWeight: 600
	},

	image: {
		width: 40,
		height: 40,
		minWidth: 40,
		maxWidth: 40,
		borderRadius: '100%',
		flexGrow: 0,
		marginRight: THEME.SECTION_PADDING_H
	},

	info: {
		display: 'flex'
	},

	contact: {
		flexGrow: 1
	},

	contactRow: {
		fontSize: THEME.FONT_SIZE_SMALL,
		margin: `.2em 0`
	},

	contactRowAccent: {
		fontWeight: 600
	},

	contactRowDecent: {
		color: COLORS.BLACK_EXTRA_LIGHT.toString()
	}
});
