import * as React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { CSSUtils } from '../../lib/CSSUtils';
import { THEME } from '../../theme';

interface IProps {
	isoCode: string;
	size?: number;
}

const SIZE_RATIO: number = 1.55;

export class Flag extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		size: 20
	};

	public render() {
		const { isoCode, size } = this.props;

		return (
			<span
				className={css(styles.flag)}
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
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		marginRight: THEME.SECTION_PADDING_H / 3,
		borderRadius: 2
	}
});
