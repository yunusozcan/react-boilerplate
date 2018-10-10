import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../../src/client/components/Calculator';

describe('Calculator component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <Calculator />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the correct sum', () => {
    const calculator = new Calculator();

    const sum = calculator._getSum(3, 5);
    expect(sum).toEqual(8);
  });

  it('should display the result on add', () => {
    const calculator = mount(
      <Calculator />
    );

    const form = calculator.find('form');

    form.childAt(0).instance().value = 3;
    form.childAt(1).instance().value = 5;
    form.find('button').simulate('click');

    const result = calculator.find('.result');
    expect(result.text()).toEqual('8');
  });
});
