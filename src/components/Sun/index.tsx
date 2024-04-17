import classNames from 'classnames';
import { RefObject } from 'react';

import { ESolarSystemObject } from '../../enums/object.enum';
import useIsSelected from '../../hooks/useIsSelected';
import sunSvg from '../../images/sun.svg';
import st from './Sun.module.less';

interface IProps {
  sunRef?: RefObject<HTMLDivElement>;
}

const Sun = ({ sunRef }: IProps) => {
  const { isSelected } = useIsSelected(ESolarSystemObject.SUN);

  return (
    <div className={st.sun} ref={sunRef}>
      <img className={classNames({ [st.selected]: isSelected })} src={sunSvg} alt="sun" />
    </div>
  );
};

export default Sun;
