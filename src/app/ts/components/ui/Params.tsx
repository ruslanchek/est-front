import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { Icon } from '../common/Icon';
import { COLORS, THEME } from '../../theme';

interface IProps {
	objectData: IObject;
}

export class Params extends React.PureComponent<IProps, {}> {
	public render() {
		const { params } = this.props.objectData;

		return (
			<div className={css(styles.params)}>
				{params.map((param) => {
					return (
						<div className={css(styles.param)}>
							<Icon
								icon={param.icon}
								size={18}
								color={COLORS.BLACK_EXTRA_LIGHT}
							/>

							<div className={css(styles.title)}>
								<span className={css(styles.titleValue)}>
									{param.value}
								</span>

								<span className={css(styles.titleName)}>
									{param.name}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	params: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap'
	},

	param: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginRight: '2ex',
		marginTop: THEME.SECTION_PADDING_V / 2,
		marginBottom: THEME.SECTION_PADDING_V / 2
	},

	title: {
		fontSize: THEME.FONT_SIZE_SMALL,
		marginLeft: '1ex'
	},

	titleValue: {
		fontWeight: 600,
		marginRight: '.5ex'
	},

	titleName: {
		color: COLORS.BLACK_LIGHT.toString()
	}
});
