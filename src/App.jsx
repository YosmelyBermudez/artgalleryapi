import { BrowserRouter as  Router, Link,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Registro from './Components/Registro'
import NotFound from './Components/NotFound';
import './App.css';
import Container from 'react-bootstrap/Container';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Detail from './Components/Detail';
import Buy from './Components/Buy';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Container>
        <Routes>
          <Route path= '/Registro' element={<Registro />} />
          <Route path ='/Login' element={<Login />} />
          <Route path ='/Home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path= '/Detail/:id' element={<Detail />} />
          <Route path= '/Buy/:id' element={<Buy />} />
        </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
