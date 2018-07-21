import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;

export enum EButtonTheme {
  Regular,
  Small,
  Big,
  Common,
  Agree,
  Reject,
}

interface IProps {
  type: 'submit' | 'button';
  themes: EButtonTheme[];
}

export class Button extends React.PureComponent<IProps, {}> {
	public render() {
		const { themes, type, children } = this.props;

		return (
			<button className={css(styles.button)} type={type}>
        {children}
      </button>
		);
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  }
});
