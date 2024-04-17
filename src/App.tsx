import 'bootstrap/dist/css/bootstrap.min.css';

import st from './App.module.less';
import Intro from './components/Intro';
import SolarSystem from './components/SolarSystem/SolarSystem';
import logoSvg from './logo.svg';

function App() {
  return (
    <>
      <img className={st.logo} src={logoSvg} alt="logo" />
      <Intro />
      <SolarSystem />
    </>
  );
}

export default App;
