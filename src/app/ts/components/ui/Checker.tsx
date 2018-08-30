import * as React from 'react';
import { COLORS } from '../../theme';
import styled, { css } from 'react-emotion';

interface IProps {
	checked: boolean;
}

export class Checker extends React.PureComponent<IProps, {}> {
	public render() {
		const { checked } = this.props;

		return (
			<Root checked={checked}/>
		);
	}
}

interface IRootProps {
	checked: boolean;
}

const Root = styled('span')<IRootProps>`
  display: block;
	box-sizing: border-box;
	width: 18px;
	height: 18px;
	border-radius: 10px;
	transition: border-color .25s;
	border: 2px solid ${COLORS.BLACK_EXTRA_LIGHT.toString()};

	&:before {
		content: '';
		position: relative;
		display: block;
		top: 3px;
		left: 3px;
		width: 8px;
		height: 8px;
		border-radius: 100%;
		background-color: ${COLORS.BLUE.toString()};
		opacity: 0;
		transform: scale(0);
		transition: opacity .25s, transform .25s;
		transition-timing-function: cubic-bezier(.175, .885, .320, 1.275);
	}
	
	${(props: IRootProps) => {
		if(props.checked) {
			return css`
				border-color: ${COLORS.BLUE.toString()};

				&:before {
					opacity: 1;
					transform: scale(1);
				}
			`;
		}	
	}}
`;
