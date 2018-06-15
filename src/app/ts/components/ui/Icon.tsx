import * as React from 'react';
import Color = require('color');

export enum EIcon {
	Favorite
}

interface IProps {
	icon: EIcon;
	size: number;
	color?: Color;
}

export class Icon extends React.PureComponent<IProps, {}> {
	public render() {
		const {size, color} = this.props;
		let icon = null;

		switch (this.props.icon) {
			case EIcon.Favorite : {
				icon = favorite(color.toString());
			}
		}

		if(icon) {
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 20 20`} preserveAspectRatio="none">
					{icon}
				</svg>
			);
		} else {
			return null;
		}
	}
}

const favorite = (color: string) => {
	return (
		<path fill={color} transform="translate(0, 1)" d="M14.5,0 C12.76,0 11.09,0.81 10,2.09 C8.91,0.81 7.24,0 5.5,0 C2.42,0 0,2.42 0,5.5 C0,9.28 3.4,12.36 8.55,17.04 L10,18.35 L11.45,17.03 C16.6,12.36 20,9.28 20,5.5 C20,2.42 17.58,0 14.5,0 Z M10.1,15.55 L10,15.65 L9.9,15.55 C5.14,11.24 2,8.39 2,5.5 C2,3.5 3.5,2 5.5,2 C7.04,2 8.54,2.99 9.07,4.36 L10.94,4.36 C11.46,2.99 12.96,2 14.5,2 C16.5,2 18,3.5 18,5.5 C18,8.39 14.86,11.24 10.1,15.55 Z"/>
	);
};