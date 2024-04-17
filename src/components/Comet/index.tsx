import classNames from 'classnames';
import { RefObject } from 'react';

import { ESolarSystemObject } from '../../enums/object.enum';
import useIsSelected from '../../hooks/useIsSelected';
import cometSvg from '../../images/comet.svg';
import st from './Comet.module.less';

interface IProps {
  cometRef?: RefObject<HTMLDivElement>;
}

const Comet = ({ cometRef }: IProps) => {
  const { isSelected, hasSelected } = useIsSelected(ESolarSystemObject.COMET);

  return (
    <div className={classNames(st.comet, { [st.paused]: hasSelected })} ref={cometRef}>
      <img
        className={classNames({ [st.selected]: isSelected })}
        src={cometSvg}
        alt="comet"
      />
    </div>
  );
};

export default Comet;
