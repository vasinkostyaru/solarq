import classNames from 'classnames';

import { OBJECTS_TITLE } from '../../config/titles';
import { ESolarSystemObject } from '../../enums/object.enum';
import keyEnterSvg from '../../images/keyEnter.svg';
import st from './Toast.module.less';

interface IProps {
  showToast?: boolean;
  selectedObject?: ESolarSystemObject | null;
}

const Toast = ({ showToast, selectedObject }: IProps) => {
  return (
    <div className={classNames(st.toast, { [st.show]: showToast })}>
      <h2 className={st.title}>{selectedObject && OBJECTS_TITLE[selectedObject]}</h2>
      <p className={st.description}>
        <span>
          Что бы открыть журнал
          <br />
          нажмите Enter
        </span>
        <img className={st.keyEnter} src={keyEnterSvg} alt="keyEnter" />
      </p>
    </div>
  );
};

export default Toast;
