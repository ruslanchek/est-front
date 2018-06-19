import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { managers } from '../../managers';
import { IFilter, IFilterGroup } from '../../managers/FiltersManager';

interface IProps {

}

export class Filters extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className={css(styles.filters)}>
				{managers.filters.getFilters().map((group: IFilterGroup) => {
					return (
						<div>
							<div>{group.title}</div>

							{group.filters.map((filter: IFilter) => {
								return (
									<div>
										{filter.title}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	filters: {
		
	}
});
