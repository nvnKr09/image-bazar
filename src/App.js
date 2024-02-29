import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import ImageGallery from './Components/ImageGallery';
import logo from './Assets/logo.png'
import Footer from './Components/Footer';
import GoToTopButton from './Components/goToTopButton';

function App() {

  const [imageList, setImageList] = useState([]);

  return (
    <div className='App'>
      <div className="header">
        <img src={logo} alt="Logo" height="80px" />
      </div>
        <Search imageList={imageList} setImageList={setImageList}/>
      {/* <Footer/> */}
      <GoToTopButton/>
    </div>
  );
}

export default App;
