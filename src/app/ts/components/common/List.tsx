import * as React from 'react';
import styled, { css } from 'react-emotion';
import Color = require('color');
import { ObjectsStore } from '../../stores/ObjectsStore';
import { ObjectInList } from '../blocks/ObjectInList';
import { mq } from '../../lib/CSSUtils';
import { SpecialBrick } from '../ui/SpecialBrick';
import { CONFIG } from '../../config';
import IObject = ObjectsStore.IObject;

interface IProps {
	objects: IObject[];
}

export class List extends React.PureComponent<IProps, {}> {
	public render() {

		return (
			<Container>
				<ListContainer>
					{ObjectsStore.store.state.presets.map((preset, i) => {
						return (
							<SpecialBrick
								key={i}
								color1={Color(preset.color1)}
								color2={Color(preset.color2)}
								title={preset.title}
								subtitle={`From ${preset.price.toLocaleString(CONFIG.DEFAULT_LOCALE)} EUR`}
								className={item}
							/>
						);
					})}

					{ObjectsStore.store.state.objects.map((object, i) => {
						return (
							<ObjectInList
								key={i}
								objectData={object}
								className={item}
							/>
						);
					})}
				</ListContainer>
			</Container>
		);
	}
}

const Container = styled('div')`
  display: flex;
	justify-content: center;
`;

const ListContainer = styled('div')`
  width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const item = css`
  margin-bottom: 40px;
  
  ${mq.phone} {
  	width: 100%;
		margin-bottom: 20px;
  }
  
  ${mq.tablet} {
  	width: 48%;
  }
  
  ${mq.desktop} {
  	width: 23%;
  }
  
  ${mq.wide} {
  	width: 23%;
  }
`;
