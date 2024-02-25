import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import ImageGallery from './Components/ImageGallery';
import logo from './Assets/logo.png'
import Footer from './Components/Footer';

function App() {

  const [imageList, setImageList] = useState([]);

  return (
    <div className='App'>
      <div className="header">
        <img src={logo} alt="Logo" height="80px" />
        <Search setImageList={setImageList}/>
      </div>
      <ImageGallery imageList={imageList}/>
      <Footer/>
    </div>
  );
}

export default App;
