import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils } from '../../lib/CSSUtils';
import { THEME } from '../../theme';
import { StyleDeclaration } from 'aphrodite';

interface IProps {
	isoCode: string;
	size?: number;
	style?: StyleDeclaration;
}

const SIZE_RATIO: number = 1.55;

export class Flag extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		size: 14
	};

	public render() {
		const { isoCode, size } = this.props;

		return (
			<span
				className={css(styles.flag, this.props.style)}
				style={{
					width: size * SIZE_RATIO,
					height: size,
					backgroundImage: CSSUtils.image(`https://static.expertoption.com/flags/2.0/png/${isoCode.toLowerCase()}.png`)
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	flag: {
		display: 'inline-block',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: THEME.BOX_SHADOW_ELEVATION_MINIMAL
	}
});
