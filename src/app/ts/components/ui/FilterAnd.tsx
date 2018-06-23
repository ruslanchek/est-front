import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { COLORS, COMMON_STYLES, THEME } from '../../theme';

interface IProps {
	entities: string[];
}

export class FilterAnd extends React.PureComponent<IProps, {}> {
	public render() {
		const {entities} = this.props;

		return (
			<div className={css(COMMON_STYLES.FILTER_BRICK)}>
				{entities.map((entity, i) => {
					return (
						<React.Fragment key={i}>
							<strong className={css(COMMON_STYLES.FILTER_ACCENT)}>
								{entity}
							</strong>

							{this.getSeparator(i)}
						</React.Fragment>
					);
				})}
			</div>
		);
	}

	private getSeparator(i: number): string {
		const {entities} = this.props;

		if(entities.length - 2 > i) {
			return ', ';
		}

		if(entities.length - 2 === i) {
			return ' and ';
		}

		return '';
	}
}

const styles = StyleSheet.create({

});
