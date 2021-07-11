import { shallow } from 'enzyme';
import Pagination, { IPagination } from './Pagination';

describe('<Pagination />', () => {

  const paginationProps: IPagination = {
    postsPerPage: 122,
    totalPosts: 112,
    paginate: jest.fn()
  }

  const wrapper = shallow(<Pagination {...paginationProps} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should simulate paginate()', () => {
    wrapper.find('a').simulate('click');
    expect(paginationProps.paginate).toHaveBeenCalledTimes(1)
  });

  it('should Match Snapshot', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
