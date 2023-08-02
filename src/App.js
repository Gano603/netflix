import './App.scss'
// import {BrowserRouter as BR, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';



function App() {
  return (<>
    {/*  <BR> */}
    <Header />
    {/*  <Routes> */}
    {/*  <Route path="/" element={<Home />} /> */}
    <Home />
    {/*  </Routes> */}
    {/*  </BR> */}
    </>
  );
}

export default App;
