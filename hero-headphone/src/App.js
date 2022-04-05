import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Reviews from './Reviews/Reviews';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import ErrorPage from './404/ErrorPage';

function App() {
  return (
    <div className="App">
     <NavigationBar></NavigationBar>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
     </Routes>
    </div>
   
  );
}

export default App;
