import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { ObjectsStore } from '../../stores/ObjectsStore';
import IObject = ObjectsStore.IObject;
import { EIcon, Icon } from '../ui/Icon';
import { COLORS } from '../../theme';

interface IProps {
	objectData: IObject;
}

export class ObjectInList extends React.Component<IProps, {}> {
	public render() {
		return (
			<section className={css(styles.container)}>
				<Icon icon={EIcon.Favorite} size={100} color={COLORS.WHITE}/>
			</section>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10
	}
});
