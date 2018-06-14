import * as React from 'react';
import { css, StyleDeclaration, StyleSheet } from 'aphrodite/no-important';
import { THEME } from '../../theme';
import { CSSUtils } from '../../lib/CSSUtils';

interface IProps {
	name: IconName;
	size: number;
	styles?: StyleDeclaration;
}

interface IState {

}

export enum IconName {
	Menu,
	Plus,
	Buy,
	Portfolio,
	Statement,
	Transfer,
	Exchange,
	Star,
	StarFull,
	StarNav,
	Hot,
	Search,
	Love,
	LoveGray,
	Top50
}

export class Icon extends React.PureComponent<IProps, IState> {
	private getIcon(): StyleDeclaration {
		switch (this.props.name) {
			case IconName.Menu : {
				return styles.menu;
			}

			case IconName.Plus : {
				return styles.plus;
			}

			case IconName.Buy : {
				return styles.buy;
			}

			case IconName.Portfolio : {
				return styles.portfolio;
			}

			case IconName.Statement : {
				return styles.statement;
			}

			case IconName.Transfer : {
				return styles.transfer;
			}

			case IconName.Exchange : {
				return styles.exchange;
			}

			case IconName.Star : {
				return styles.star;
			}

			case IconName.StarFull : {
				return styles.starFull;
			}

			case IconName.StarNav : {
				return styles.starNav;
			}

			case IconName.Hot : {
				return styles.hot;
			}

			case IconName.Search : {
				return styles.search;
			}

			case IconName.Love : {
				return styles.love;
			}

			case IconName.LoveGray : {
				return styles.loveGray;
			}

			case IconName.Top50 : {
				return styles.top50;
			}
		}
	}

	public render() {
		return (
			<i
				className={css(
					styles.icon,
					this.getIcon(),
					this.props.styles
				)}
				style={{
					width: this.props.size,
					height: this.props.size
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		display: 'inline-block',
		width: THEME.FONT_SIZE_REGULAR,
		height: THEME.FONT_SIZE_REGULAR,
		backgroundPosition: '50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		position: 'relative',
		top: 2
	},

	menu: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/gear.svg'))
	},

	plus: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/plus.svg'))
	},

	buy: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/buy.svg'))
	},

	portfolio: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/portfolio.svg'))
	},

	statement: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/statement.svg'))
	},

	transfer: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/transfer.svg'))
	},

	exchange: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/exchange.svg'))
	},

	star: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/star.svg'))
	},

	starFull: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/star-full.svg'))
	},

	starNav: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/star-nav.svg'))
	},

	hot: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/hot.svg'))
	},

	search: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/search.svg'))
	},

	love: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/love.svg'))
	},

	loveGray: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/love-gray.svg'))
	},

	top50: {
		backgroundImage: CSSUtils.image(require('../../../img/icons/top50.svg'))
	}
});
