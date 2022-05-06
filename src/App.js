import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Layouts/Blogs/Blogs';
import Home from './Layouts/Home/Home/Home';
import Login from './Layouts/Login/Login/Login';
import Register from './Layouts/Login/Register/Register';
import PerfumeInventory from './Layouts/PerfumeInventory/PerfumeInventory';
import Footer from './Layouts/Shared/Footer/Footer';
import Header from './Layouts/Shared/Header/Header';
// import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/perfumeInventory' element={<PerfumeInventory></PerfumeInventory>}></Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/registration' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
