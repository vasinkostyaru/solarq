import classNames from 'classnames';

import cometSvg from '../../images/comet.svg';
import st from './Comet.module.less';

const Comet = () => {
  return (
    <div className={classNames(st.comet)}>
      <img src={cometSvg} alt="" />
    </div>
  );
};

export default Comet;
