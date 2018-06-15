import * as React from 'react';
import Color = require('color');

export enum EIcon {
	Favorite
}

export enum EIconType {
	Default,
	TwoTone,
	Outline,
	Filled
}

interface IProps {
	icon: EIcon;
	size: number;
	color?: Color;
	type?: EIconType;
}

const TWO_TONE_ALPHA: number = 0.5;

export class Icon extends React.PureComponent<IProps, {}> {
	public render() {
		const { size, color, type } = this.props;
		let icon = null;

		switch (this.props.icon) {
			case EIcon.Favorite : {
				icon = favorite(color.toString(), type);
			}
		}

		if (icon) {
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 20 20"
					preserveAspectRatio="none"
				>
					{icon}
				</svg>
			);
		} else {
			return null;
		}
	}
}

const favorite = (color: string, type: EIconType) => {
	switch (type) {
		case EIconType.TwoTone : {
			return (
				<g transform='translate(0, 1)'>
					<path
						d='M14.5,0 C17.58,0 20,2.42 20,5.5 C20,9.28 16.6,12.36 11.45,17.03 L10,18.35 L8.55,17.04 C3.4,12.36 0,9.28 0,5.5 C0,2.42 2.42,0 5.5,0 C7.24,0 8.91,0.81 10,2.09 C11.09,0.81 12.76,0 14.5,0 Z M10.1,15.55 C14.86,11.24 18,8.39 18,5.5 C18,3.5 16.5,2 14.5,2 C12.96,2 11.46,2.99 10.94,4.36 L9.07,4.36 C8.54,2.99 7.04,2 5.5,2 C3.5,2 2,3.5 2,5.5 C2,8.39 5.14,11.24 9.9,15.55 L10,15.65 L10.1,15.55 Z'
						fill={color}
						fillRule='nonzero'
					/>
					<path
						d='M10.1,15.55 L10,15.65 L9.9,15.55 C5.14,11.24 2,8.39 2,5.5 C2,3.5 3.5,2 5.5,2 C7.04,2 8.54,2.99 9.07,4.36 L10.94,4.36 C11.46,2.99 12.96,2 14.5,2 C16.5,2 18,3.5 18,5.5 C18,8.39 14.86,11.24 10.1,15.55 Z'
						fillOpacity={TWO_TONE_ALPHA}
						fill={color}
					/>
				</g>
			);
		}

		default : {
			return (
				<path
					fill={color}
					transform="translate(0, 1)"
					d="M14.5,0 C12.76,0 11.09,0.81 10,2.09 C8.91,0.81 7.24,0 5.5,0 C2.42,0 0,2.42 0,5.5 C0,9.28 3.4,12.36 8.55,17.04 L10,18.35 L11.45,17.03 C16.6,12.36 20,9.28 20,5.5 C20,2.42 17.58,0 14.5,0 Z M10.1,15.55 L10,15.65 L9.9,15.55 C5.14,11.24 2,8.39 2,5.5 C2,3.5 3.5,2 5.5,2 C7.04,2 8.54,2.99 9.07,4.36 L10.94,4.36 C11.46,2.99 12.96,2 14.5,2 C16.5,2 18,3.5 18,5.5 C18,8.39 14.86,11.24 10.1,15.55 Z"
				/>
			);
		}
	}
};
