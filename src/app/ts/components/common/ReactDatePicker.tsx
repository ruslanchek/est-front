import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import * as chrono from 'chrono-node';

interface IProps {
	weekStartDay: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	selectedDate: Date | string;
	locale: string;
	onSelectDate: (date: Date) => void;
	boundBefore: Date;
	boundAfter: Date;
}

interface IState {
	selectedDate: Date;
	currentDate: Date;
	currentViewDateStart: Date;
	currentViewDateEnd: Date;
	mode: EEOReactDatePickerMode;
}

interface IHeaderItem {
	title: string;
}

interface IDay {
	active: boolean;
	isSelectable: boolean;
	date: Date;
}

interface IYear {
	date: Date;
	isSelectable: boolean;
}

interface IMonth {
	date: Date;
	isSelectable: boolean;
}

enum EEOReactDatePickerMode {
	Days,
	Months,
	Years
}

enum EEOReactDatePickerEqType {
	EQ,
	LT,
	GT
}

const SUNDAY: number = 330000000;
const DEFAULT_MODE: EEOReactDatePickerMode = EEOReactDatePickerMode.Days;
const YEARS_VIEW_COUNT: number = 24;

export class EOReactDatePicker extends React.Component<IProps, IState> {
	public state: IState = {
		selectedDate: new Date(),
		currentDate: new Date(),
		currentViewDateStart: null,
		currentViewDateEnd: null,
		mode: EEOReactDatePickerMode.Days
	};

	public setOuterDate(input: string | Date): void {
		const date: Date = this.parsePropDate(input);

		this.setState({
			selectedDate: date
		});

		this.setCurrentViewDates(date);
	}

	public componentWillReceiveProps(newProps: IProps) {
		if (newProps.selectedDate !== this.props.selectedDate) {
			this.setOuterDate(newProps.selectedDate);
		}
	}

	public componentDidMount() {
		this.setOuterDate(this.props.selectedDate);
	}

	public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
		if (this.state.selectedDate.getTime() !== nextState.selectedDate.getTime()) {
			return true;
		}

		if (this.state.mode !== nextState.mode) {
			return true;
		}

		if (this.state.currentDate.getTime() !== nextState.currentDate.getTime()) {
			return true;
		}

		if (!this.state.currentViewDateStart || this.state.currentViewDateStart.getTime() !== nextState.currentViewDateStart.getTime()) {
			return true;
		}

		if (!this.state.currentViewDateStart || this.state.currentViewDateEnd.getTime() !== nextState.currentViewDateEnd.getTime()) {
			return true;
		}

		if (this.props.locale !== nextProps.locale) {
			return true;
		}

		if (this.props.weekStartDay !== nextProps.weekStartDay) {
			return true;
		}

		return false;
	}

	public render() {
		if (this.state.currentViewDateEnd && this.state.currentViewDateStart) {
			let years: IYear[] = [];
			let months: IMonth[] = [];
			let days: IDay[] = [];

			switch (this.state.mode) {
				case EEOReactDatePickerMode.Years : {
					years = this.getYears();
					break;
				}

				case EEOReactDatePickerMode.Months : {
					months = this.getMonths();
					break;
				}

				case EEOReactDatePickerMode.Days : {
					days = this.getDays();
					break;
				}
			}

			return (
				<div className={css(styles.container)}>
					<div className={css(styles.controls)}>
						<span
							className={css(styles.controlsButton, styles.prevControl)}
							onClick={this.prev.bind(this)}
						/>

						<span
							onClick={this.setMode.bind(this, EEOReactDatePickerMode.Years)}
							className={css(styles.controlsButton, styles.controlsButtonGroup)}
						>
							{this.state.mode === EEOReactDatePickerMode.Days && (
								<React.Fragment>
									<span className={css(styles.yearControl)}>
										{this.state.currentViewDateStart.toLocaleDateString(this.props.locale, {
											month: 'long',
											year: 'numeric'
										})}
									</span>
								</React.Fragment>
							)}

							{this.state.mode === EEOReactDatePickerMode.Months && (
								<React.Fragment>
									<span className={css(styles.yearControl)}>
										{this.state.currentViewDateStart.toLocaleDateString(this.props.locale, {
											year: 'numeric'
										})}
									</span>
								</React.Fragment>
							)}

							{this.state.mode === EEOReactDatePickerMode.Years && (
								<React.Fragment>
									<span className={css(styles.yearControl)}>
										{years[0].date.toLocaleDateString(this.props.locale, {
											year: 'numeric'
										})}
										{'–'}
										{years[years.length - 1].date.toLocaleDateString(this.props.locale, {
											year: 'numeric'
										})}
									</span>
								</React.Fragment>
							)}
						</span>

						<span
							className={css(styles.controlsButton, styles.nextControl)}
							onClick={this.next.bind(this)}
						/>
					</div>

					{this.state.mode === EEOReactDatePickerMode.Days && (
						<React.Fragment>
							<div className={css(styles.header)}>
								{this.getHeaderItems().map((item, i) => {
									return (
										<div className={css(styles.headerItem)} key={i}>
											{item.title}
										</div>
									);
								})}
							</div>

							<div className={css(styles.body)}>
								{days.map((item, i) => {
									return (
										<div
											onClick={this.selectDay.bind(this, item)}
											className={css(this.getDayStyle(item))}
											key={i}
										>
											<span className={css(styles.entityTitle)}>
												{item.date.toLocaleDateString(this.props.locale, {
													day: 'numeric'
												})}
											</span>
										</div>
									);
								})}
							</div>
						</React.Fragment>
					)}

					{this.state.mode === EEOReactDatePickerMode.Months && (
						<div className={css(styles.body)}>
							{months.map((month: IMonth, i) => {
								return (
									<div
										key={i}
										className={css(this.getMonthStyle(month))}
										onClick={this.selectMonth.bind(this, month)}
									>
										<span className={css(styles.entityTitle)}>
											{month.date.toLocaleDateString(this.props.locale, {
												month: 'short'
											})}
										</span>
									</div>
								);
							})}
						</div>
					)}

					{this.state.mode === EEOReactDatePickerMode.Years && (
						<div className={css(styles.body)}>
							{years.map((year: IYear, i) => {
								return (
									<div
										key={i}
										className={css(this.getYearStyle(year))}
										onClick={this.selectYear.bind(this, year)}
									>
										<span className={css(styles.entityTitle)}>
											{year.date.toLocaleDateString(this.props.locale, {
												year: 'numeric'
											})}
										</span>
									</div>
								);
							})}
						</div>
					)}
				</div>
			);
		} else {
			return null;
		}
	}

	private getDaysInMonth(date: Date): number {
		return new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0
		).getDate();
	}

	private getYears(): IYear[] {
		const years: IYear[] = [];
		const yearsDateCenter: Date = new Date(this.state.currentViewDateStart);

		yearsDateCenter.setFullYear(yearsDateCenter.getFullYear() - YEARS_VIEW_COUNT / 2 + 1);

		for (let i: number = 0; i < YEARS_VIEW_COUNT; i++) {
			const date: Date = new Date(yearsDateCenter);
			let isSelectable: boolean = true;

			if(this.props.boundBefore && this.compareYears(this.props.boundBefore, date, EEOReactDatePickerEqType.GT)) {
				isSelectable = false;
			}

			if(this.props.boundAfter && this.compareYears(this.props.boundAfter, date, EEOReactDatePickerEqType.LT)) {
				isSelectable = false;
			}

			years.push({
				isSelectable,
				date
			});

			yearsDateCenter.setFullYear(yearsDateCenter.getFullYear() + 1);
		}

		return years;
	}

	private getMonths(): IMonth[] {
		const months: IMonth[] = [];
		const monthsDate: Date = new Date(this.state.currentViewDateStart);

		monthsDate.setMonth(0);

		for (let i: number = 0; i < 12; i++) {
			const date: Date = new Date(monthsDate);
			let isSelectable: boolean = true;

			if(this.props.boundBefore && this.compareMonths(this.props.boundBefore, date, EEOReactDatePickerEqType.GT)) {
				isSelectable = false;
			}

			if(this.props.boundAfter && this.compareMonths(this.props.boundAfter, date, EEOReactDatePickerEqType.LT)) {
				isSelectable = false;
			}

			months.push({
				isSelectable,
				date
			});

			monthsDate.setMonth(monthsDate.getMonth() + 1);
		}

		return months;
	}

	private getHeaderItems(): IHeaderItem[] {
		const items: IHeaderItem[] = [];
		const date: Date = new Date(SUNDAY);

		date.setDate(date.getDate() + this.props.weekStartDay);

		for (let i = 0; i <= 6; i++) {
			items.push({
				title: date.toLocaleDateString(this.props.locale, {
					weekday: 'short'
				})
			});

			date.setDate(date.getDate() + 1);
		}

		return items;
	}

	private getDays(): IDay[] {
		const daysInMonth: number = this.getDaysInMonth(this.state.currentViewDateStart);
		const days: IDay[] = [];
		const firstDayNumber: number = this.state.currentViewDateStart.getDay();
		let weekDayIteration: number = 0;

		if (firstDayNumber > 0) {
			const prevMonth: Date = new Date(this.state.currentViewDateStart);
			prevMonth.setMonth(prevMonth.getMonth() - 1);
			const daysInMonthPrev: number = this.getDaysInMonth(prevMonth);

			for (let i: number = this.props.weekStartDay; i < firstDayNumber; i++) {
				const date1: Date = new Date(prevMonth);
				const day: number = daysInMonthPrev + i - (firstDayNumber - 1);
				let isSelectable: boolean = true;

				date1.setDate(day);

				if(this.props.boundBefore && this.compareDates(this.props.boundBefore, date1, EEOReactDatePickerEqType.GT)) {
					isSelectable = false;
				}

				if(this.props.boundAfter && this.compareDates(this.props.boundAfter, date1, EEOReactDatePickerEqType.LT)) {
					isSelectable = false;
				}

				days.push({
					isSelectable,
					date: date1,
					active: false
				});

				weekDayIteration++;

				if (weekDayIteration >= 7) {
					weekDayIteration = 0;
				}
			}
		}

		for (let i: number = 1; i <= daysInMonth; i++) {
			const date2: Date = new Date(this.state.currentViewDateStart);
			let isSelectable: boolean = true;

			date2.setDate(i);

			if(this.props.boundBefore && this.compareDates(this.props.boundBefore, date2, EEOReactDatePickerEqType.GT)) {
				isSelectable = false;
			}

			if(this.props.boundAfter && this.compareDates(this.props.boundAfter, date2, EEOReactDatePickerEqType.LT)) {
				isSelectable = false;
			}

			days.push({
				isSelectable,
				date: date2,
				active: true
			});

			weekDayIteration++;

			if (weekDayIteration === 7) {
				weekDayIteration = 0;
			}
		}

		const nextMonth: Date = new Date(this.state.currentViewDateStart);
		nextMonth.setMonth(nextMonth.getMonth() + 1);

		for (let i = 0, count = 7 - weekDayIteration; i < count; i++) {
			const date3: Date = new Date(nextMonth);
			let isSelectable: boolean = true;

			date3.setDate(i + 1);

			if(this.props.boundBefore && this.compareDates(this.props.boundBefore, date3, EEOReactDatePickerEqType.GT)) {
				isSelectable = false;
			}

			if(this.props.boundAfter && this.compareDates(this.props.boundAfter, date3, EEOReactDatePickerEqType.LT)) {
				isSelectable = false;
			}

			days.push({
				isSelectable,
				date: date3,
				active: false
			});
		}

		return days;
	}

	private parsePropDate(input: string | Date): Date {
		if (input instanceof Date) {
			return input;
		} else {
			return chrono.parseDate(input) || new Date();
		}
	}

	private setCurrentViewDates(date: Date): void {
		const firstDayDate: Date = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDayDate: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		this.setState({
			currentViewDateStart: firstDayDate,
			currentViewDateEnd: lastDayDate
		});
	}

	private prev(): void {
		switch (this.state.mode) {
			case EEOReactDatePickerMode.Days : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setMonth(date.getMonth() - 1);
				this.setCurrentViewDates(date);

				break;
			}

			case EEOReactDatePickerMode.Months : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setFullYear(date.getFullYear() - 1);
				this.setCurrentViewDates(date);

				break;
			}

			case EEOReactDatePickerMode.Years : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setFullYear(date.getFullYear() - YEARS_VIEW_COUNT);
				this.setCurrentViewDates(date);

				break;
			}
		}
	}

	private next(): void {
		switch (this.state.mode) {
			case EEOReactDatePickerMode.Days : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setMonth(date.getMonth() + 1);
				this.setCurrentViewDates(date);

				break;
			}

			case EEOReactDatePickerMode.Months : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setFullYear(date.getFullYear() + 1);
				this.setCurrentViewDates(date);

				break;
			}

			case EEOReactDatePickerMode.Years : {
				const date: Date = new Date(this.state.currentViewDateStart);
				date.setFullYear(date.getFullYear() + YEARS_VIEW_COUNT);
				this.setCurrentViewDates(date);

				break;
			}
		}
	}

	private compareYears(d1: Date, d2: Date, eqType: EEOReactDatePickerEqType): boolean {
		switch (eqType) {
			case EEOReactDatePickerEqType.LT : {
				return d1.getFullYear() < d2.getFullYear();
			}

			case EEOReactDatePickerEqType.GT : {
				return d1.getFullYear() > d2.getFullYear();
			}

			case EEOReactDatePickerEqType.EQ :
			default : {
				return d1.getFullYear() === d2.getFullYear();
			}
		}
	}

	private compareMonths(d1: Date, d2: Date, eqType: EEOReactDatePickerEqType): boolean {
		switch (eqType) {
			case EEOReactDatePickerEqType.LT : {
				return d1.getFullYear() < d2.getFullYear() || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() < d2.getMonth());
			}

			case EEOReactDatePickerEqType.GT : {
				return d1.getFullYear() > d2.getFullYear() || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() > d2.getMonth());
			}

			case EEOReactDatePickerEqType.EQ :
			default : {
				return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
			}
		}
	}

	private compareDates(d1: Date, d2: Date, eqType: EEOReactDatePickerEqType): boolean {
		switch (eqType) {
			case EEOReactDatePickerEqType.LT : {
				return d1.getFullYear() < d2.getFullYear() || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() < d2.getMonth()) || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() < d2.getDate());
			}

			case EEOReactDatePickerEqType.GT : {
				return d1.getFullYear() > d2.getFullYear() || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() > d2.getMonth()) || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() > d2.getDate());
			}

			case EEOReactDatePickerEqType.EQ :
			default : {
				return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
			}
		}
	}

	private getDayStyle(day: IDay) {
		const rules = [
			styles.entity,
			styles.entityDay
		];

		if (day.active) {
			rules.push(styles.entityActive);
		} else {
			rules.push(styles.entityInactive);
		}

		if (this.compareDates(day.date, this.state.currentDate, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entityCurrent);
		}

		if (this.compareDates(day.date, this.state.selectedDate, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entitySelected);
		}

		if (!day.isSelectable) {
			rules.push(styles.entityUnselectable);
		}

		if(this.props.boundAfter && this.compareDates(this.props.boundAfter, day.date, EEOReactDatePickerEqType.GT) && this.compareDates(this.state.selectedDate, day.date, EEOReactDatePickerEqType.LT)) {
			rules.push(styles.entityRanged);
		}

		if(this.props.boundAfter && this.compareDates(this.props.boundAfter, day.date, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entityRanged);
		}

		if(this.props.boundBefore && this.compareDates(this.props.boundBefore, day.date, EEOReactDatePickerEqType.LT) && this.compareDates(this.state.selectedDate, day.date, EEOReactDatePickerEqType.GT)) {
			rules.push(styles.entityRanged);
		}

		if(this.props.boundBefore && this.compareDates(this.props.boundBefore, day.date, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entityRanged);
		}

		return rules;
	}

	private getMonthStyle(month: IMonth) {
		const rules = [
			styles.entity,
			styles.entityMonth
		];

		if (this.compareMonths(month.date, this.state.selectedDate, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entitySelected);
		}

		if (!month.isSelectable) {
			rules.push(styles.entityUnselectable);
		}

		return rules;
	}

	private getYearStyle(year: IYear) {
		const rules = [
			styles.entity,
			styles.entityYear
		];

		if (this.compareYears(year.date, this.state.selectedDate, EEOReactDatePickerEqType.EQ)) {
			rules.push(styles.entitySelected);
		}

		if (!year.isSelectable) {
			rules.push(styles.entityUnselectable);
		}

		return rules;
	}

	private selectYear(year: IYear): void {
		if(year.isSelectable) {
			this.setCurrentViewDates(year.date);
			this.setMode(EEOReactDatePickerMode.Months);
		}
	}

	private selectMonth(month: IMonth): void {
		if(month.isSelectable) {
			this.setCurrentViewDates(month.date);
			this.setMode(EEOReactDatePickerMode.Days);
		}
	}

	private selectDay(day: IDay): void {
		if(day.isSelectable) {
			this.setCurrentViewDates(day.date);

			this.setState({
				selectedDate: day.date
			});

			this.props.onSelectDate(day.date);
		}
	}

	private setMode(mode: EEOReactDatePickerMode): void {
		if (mode === this.state.mode) {
			mode = DEFAULT_MODE;
		}

		this.setState({
			mode
		});
	}
}

const styles = StyleSheet.create({
	container: {},

	prevControl: {
		':after': {
			content: '"<"'
		}
	},

	nextControl: {
		':after': {
			content: '">"'
		}
	},

	montYearControl: {
		margin: '0 0.5ex',
		textTransform: 'capitalize'
	},

	yearControl: {
		margin: '0 0.5ex'
	},

	controlsButtonGroup: {},

	controlsButton: {
		height: 42,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 10px'
	},

	controls: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		backgroundColor: '#eee'
	},

	header: {
		display: 'flex',
		width: '100%'
	},

	headerItem: {
		flexGrow: 0,
		height: 42,
		width: '14.2857%',
		textAlign: 'center',
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex'
	},

	entity: {
		flexGrow: 0,
		textAlign: 'center',
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		height: 42,
		position: 'relative',
		cursor: 'pointer',

		':before': {
			transition: 'background-color .1s',
			content: '""',
			display: 'block',
			width: 38,
			height: 38,
			borderRadius: '100%',
			position: 'absolute'
		},
	},

	entityDay: {
		width: '14.2857%'
	},

	entityYear: {
		width: '25%'
	},

	entityMonth: {
		width: '25%'
	},

	entityActive: {},

	entityInactive: {
		opacity: .6
	},

	entityCurrent: {
		backgroundColor: '#14e'
	},

	entitySelected: {
		backgroundColor: '#a12'
	},

	entityUnselectable: {
		opacity: 0.1,
		cursor: 'default',
		pointerEvents: 'none'
	},

	entityRanged: {

	},

	body: {
		display: 'flex',
		backgroundColor: '#ddd',
		width: '100%',
		flexWrap: 'wrap'
	},

	entityTitle: {

	}
});
