import * as React from 'react';
import Color = require('color');

export enum EIcon {
	Favorite,
	Camera,
	Bed
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
	color: Color;
	type?: EIconType;
}

const TWO_TONE_ALPHA: number = 0.5;

export class Icon extends React.PureComponent<IProps, {}> {
	public render() {
		const { size, color, type } = this.props;
		const icon = this.getIcon(type, color);

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

	private getIcon(type: EIconType, color: Color) {
		switch (this.props.icon) {
			case EIcon.Favorite : return favorite(color.toString(), type);
			case EIcon.Camera : return camera(color.toString(), type);
			case EIcon.Bed : return bed(color.toString(), type);

			default : return null;
		}
	}
}

const camera = (color: string, type: EIconType) => {
	return (
		<g transform='translate(-2, 0)'>
			<path fill={color} opacity={TWO_TONE_ALPHA} d='M20,6h-4.05l-1.83-2H9.88L8.05,6H4v12h16V6z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 S14.76,17,12,17z'/>
			<path fill={color} d='M4,20h16c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-3.17L15,2H9L7.17,4H4C2.9,4,2,4.9,2,6v12C2,19.1,2.9,20,4,20z M4,6h4.05 l1.83-2h4.24l1.83,2H20v12H4V6z'/>
			<path fill={color} d='M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7z M12,15c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3 C15,13.65,13.65,15,12,15z'/>
		</g>
	);
};

const favorite = (color: string, type: EIconType) => {
	switch (type) {
		case EIconType.TwoTone : {
			return (
				<g transform='translate(0, 2)'>
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
					transform="translate(0, 2)"
					d="M14.5,0 C12.76,0 11.09,0.81 10,2.09 C8.91,0.81 7.24,0 5.5,0 C2.42,0 0,2.42 0,5.5 C0,9.28 3.4,12.36 8.55,17.04 L10,18.35 L11.45,17.03 C16.6,12.36 20,9.28 20,5.5 C20,2.42 17.58,0 14.5,0 Z M10.1,15.55 L10,15.65 L9.9,15.55 C5.14,11.24 2,8.39 2,5.5 C2,3.5 3.5,2 5.5,2 C7.04,2 8.54,2.99 9.07,4.36 L10.94,4.36 C11.46,2.99 12.96,2 14.5,2 C16.5,2 18,3.5 18,5.5 C18,8.39 14.86,11.24 10.1,15.55 Z"
				/>
			);
		}
	}
};

const bed = (color: string, type: EIconType) => {
	return (
		<g transform='translate(0, -1)'>
			<path fill={color} opacity={TWO_TONE_ALPHA} d='M19,9h-6v6h8v-4C21,9.9,20.1,9,19,9z' />
			<circle fill={color} opacity={TWO_TONE_ALPHA} cx='7' cy='11' r='1'/>
			<path fill={color} d='M4,11c0,1.66,1.34,3,3,3c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3C5.34,8,4,9.34,4,11z M8,11c0,0.55-0.45,1-1,1s-1-0.45-1-1 s0.45-1,1-1S8,10.45,8,11z'/>
			<path fill={color} d='M19,7h-8v8H3V5H1v15h2v-3h18v3h2v-9C23,8.79,21.21,7,19,7z M21,15h-8V9h6c1.1,0,2,0.9,2,2V15z'/>
		</g>
	);
};