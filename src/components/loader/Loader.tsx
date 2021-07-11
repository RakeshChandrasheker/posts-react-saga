import { FunctionComponent } from 'react';
import './Loader.scss';
import Spinner from '../../assets/icon/spinner.svg';

const Loader: FunctionComponent = (): JSX.Element => {
  return (
    <div className="Loader">
      <img src={Spinner} alt={Spinner} />
    </div>
  );
};

export default Loader;