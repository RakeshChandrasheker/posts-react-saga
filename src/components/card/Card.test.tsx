import React from 'react';
import { shallow } from 'enzyme';
import { IPost } from '../../store/state-types';
import Card from './Card';

describe('<Card />', () => {
  const setState = jest.fn();
  const useStateMock: any = (initState: any) => [initState = true, setState];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const cardProps: IPost = {
    title: 'Mock_Title',
    description: 'Mock_Description'
  }
  const wrapper = shallow(<Card {...cardProps} />);


  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should trigger modal', () => {
    const pencilIcon = wrapper.find('.pencilIcon');
    pencilIcon.simulate('click');
    expect(setState).toHaveBeenCalledTimes(1);
  });


  it('should Match Snapshot', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
