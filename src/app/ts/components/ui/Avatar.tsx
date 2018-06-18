import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { PATHS } from '../../config';

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
					<a
						className={css(styles.imageLink)}
						target="_blank"
						href={PATHS.AGENT.replace(':id', agent.id.toString())}
					>
						<img
							src={agent.avatar}
							className={css(styles.image)}
						/>
					</a>

					<div className={css(styles.contact)}>
						<a
							target="_blank"
							href={PATHS.AGENT.replace(':id', agent.id.toString())}
							className={css(styles.contactRow, styles.contactRowAccent, COMMON_STYLES.LINK)}
						>
							{agent.fullName}
						</a>

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
		display: 'block',
		flexGrow: 0,
		marginRight: THEME.SECTION_PADDING_H / 2
	},

	imageLink: {
		transition: 'opacity .2s',

		':hover': {
			opacity: 0.75
		}
	},

	info: {
		display: 'flex',
		alignItems: 'center'
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
