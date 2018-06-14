import { css, StyleSheet } from 'aphrodite/no-important';
import { isDefined } from 'eo-utils';
import * as React from 'react';

import { IDropDownItemProps, TDropDownItemValue } from './DropDownItem';
import { Modal } from './Modal';

interface IProps {
	selectedValue?: TDropDownItemValue | null;

	renderSelected(selectedValue: TDropDownItemValue | null): React.ReactNode;

	onSelect?(newValue: TDropDownItemValue): void;
}

interface IState {
	selectedValue: TDropDownItemValue | null;
	isListVisible: boolean;
}

export class DropDown extends React.PureComponent<IProps, IState> {
	public constructor(props: IProps) {
		super(props);

		this.state = {
			isListVisible: false,
			selectedValue: isDefined<TDropDownItemValue>(props.selectedValue) ? props.selectedValue : null,
		}
	}

	public render() {
		return (
			<>
				<span
					className={css(styles.value)}
					onClick={() => this.toggleListVisibility(true)}
				>
					{this.props.renderSelected(this.state.selectedValue)}
				</span>

				<Modal
					isVisible={this.state.isListVisible}
					onClose={() => this.toggleListVisibility(false)}
				>
					<ul className={css(styles.list)}>
						{React.Children.map(this.props.children, child => {
							if (React.isValidElement<IDropDownItemProps>(child)) {
								const childProps = child.props;

								return React.cloneElement(child, {
									onClick: this.handleSelect
								});
							}

							return child;
						})}
					</ul>
				</Modal>
			</>
		);
	}

	private handleSelect = (newValue: TDropDownItemValue) => {
		this.setState({
			isListVisible: false,
			selectedValue: newValue
		});

		if (this.props.onSelect) {
			this.props.onSelect(newValue);
		}
	};

	private toggleListVisibility(isListVisible = !this.state.isListVisible) {
		this.setState({
			isListVisible
		});
	}
}

const styles = StyleSheet.create({
	list: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
	},

	value: {
		backgroundColor: '#fafcff',
		border: '1px solid white',
		borderRadius: 8,
		boxShadow: '0 8px 10px 0 rgba(21,30,48,0.10)',
		color: '#332966',
		display: 'block',
		fontSize: 16,
		lineHeight: '24px',
		padding: '13px 24px'
	}
});
