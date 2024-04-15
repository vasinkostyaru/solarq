import sunSvg from '../../images/sun.svg';
import st from './Sun.module.less';

const Sun = () => {
  return (
    <div className={st.sun}>
      <img src={sunSvg} alt="sun" />
    </div>
  );
};

export default Sun;
