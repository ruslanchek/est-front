import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';
import { followStore } from 'react-stores';
import { StateStore } from '../../stores/StateStore';
import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../config';
import { CSSUtils, ECSSMediaKind } from '../../lib/CSSUtils';
import { Layout } from './Layout';
import { EIcon, EIconType, Icon } from './Icon';
import { Modal } from '../ui/Modal';
import { Filters } from './Filters';

interface IState {

}

export class Footer extends React.PureComponent<{}, IState> {
	public state: IState = {

	};

	public render() {
		return (
			<footer>

			</footer>
		);
	}
}

const styles = StyleSheet.create({
	footer: {

	}
});
