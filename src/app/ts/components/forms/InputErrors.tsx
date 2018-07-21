import * as React from 'react';
import { StyleSheet } from 'aphrodite/no-important';
import { FormContext } from './Form';

interface IProps {
  inputName: string;
}

export class InputErrors extends React.PureComponent<IProps, {}> {
	public render() {
		const { inputName } = this.props;

		return (
      <FormContext.Consumer>
				{(formContext) => {
          const errors = formContext.getErrors(inputName);

          return (
            <div>
              {errors.map((error, i) => {
                return (
                  <div key={i}>{error}</div>
                );
              })}
            </div>
          );
        }}
      </FormContext.Consumer>
		);
	}
}

const styles = StyleSheet.create({});
