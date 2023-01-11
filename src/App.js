import {Route, Routes} from 'react-router-dom';
import Home from './home.js';
import About from './about.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
