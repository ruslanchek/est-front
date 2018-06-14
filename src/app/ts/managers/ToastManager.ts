import { Manager } from './Manager';
import { StyleSheet } from 'aphrodite/no-important';
import { css } from 'aphrodite';
import { toast, cssTransition, ToastType } from 'react-toastify';
import { COLORS, THEME } from '../theme';
import Color = require('color');

export enum EToastType {
	Info,
	Error,
	Success,
	Warning,
	Default,
}

export class ToastManager extends Manager {
	public reset(): void {

	}

	public init(): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve();
		});
	}

	public toast(type: EToastType, text: string, delay: number): void {
		toast(text, {
			type: this.getType(type),
			autoClose: delay,
			className: css(styles.toast),
			bodyClassName: css(styles.body),
			progressClassName: css(styles.progressClassName)
		});
	}

	private getType(type: EToastType): ToastType {
		switch (type) {
			case EToastType.Info : {
				return toast.TYPE.DEFAULT as ToastType;
			}

			case EToastType.Error : {
				return toast.TYPE.ERROR as ToastType;
			}

			case EToastType.Success : {
				return toast.TYPE.SUCCESS as ToastType;
			}

			case EToastType.Warning : {
				return toast.TYPE.WARNING as ToastType;
			}

			case EToastType.Default :
			default: {
				return toast.TYPE.DEFAULT as ToastType;
			}
		}
	}
}

const styles = StyleSheet.create({
	toast: {
		background: Color('#000').alpha(0.5).toString(),
		borderRadius: 10,
		fontFamily: THEME.FONT,
		fontSize: THEME.FONT_SIZE_SMALL,
		padding: '10px 15px',
		marginTop: 5,
		color: COLORS.WHITE.toString(),
		boxShadow: THEME.BOX_SHADOW_ELEVATION_2
	},

	body: {

	},

	progressClassName: {
		animationName: [{}],
		display: 'block',
		height: 0,
	}
});
