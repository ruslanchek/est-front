import * as React from 'react';
import { CSSUtils } from '../../lib/CSSUtils';
import { THEME } from '../../theme';
import { CONFIG } from '../../config';
import styled from 'react-emotion';

interface IProps {
	isoCode: string;
  size?: number;
  className?: string;
}

const SIZE_RATIO: number = 1.55;

export class Flag extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
		size: 14
	};

	public render() {
		const { isoCode, size, className } = this.props;

		return (
			<Container
				className={className}
				style={{
					width: size * SIZE_RATIO,
					height: size,
					backgroundImage: CSSUtils.image(`${CONFIG.STATIC_PATH}/flags/png/${isoCode.toLowerCase()}.png`)
				}}
			/>
		);
	}
}

const Container = styled('span')`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  border-radius: 2px;
  box-shadow: ${THEME.BOX_SHADOW_ELEVATION_MINIMAL};
`;
