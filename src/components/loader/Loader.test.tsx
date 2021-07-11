import { shallow } from 'enzyme';
import Loader from './Loader';

describe('<Loader />', () => {

  const wrapper = shallow(<Loader />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should Match Snapshot', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
