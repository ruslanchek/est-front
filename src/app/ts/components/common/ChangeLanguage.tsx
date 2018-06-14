import { EOLocale } from 'eo-locale';
import * as React from 'react';

interface IButtonProps {
	title: string;
	locale: string;

	onChange: (newLocale: string) => void;
}

export class ChangeLanguage extends React.PureComponent<{}, {}> {
	public render() {
		return (
			<nav>
				<ul>
					<EOLocale.Context.Consumer>
						{context => (
							<>
								<li>
									<button onClick={() => { context.onChangeLanguage('en'); }}>English</button>
								</li>
								<li>
									<button onClick={() => { context.onChangeLanguage('ru'); }}>Русский</button>
								</li>
							</>
						)}
					</EOLocale.Context.Consumer>
				</ul>
			</nav>
		);
	}
}
