// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextCmp from './components/TextCmp';

// let name = "Avnish";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutProp="About Us" />
      <TextCmp/>
    </>
  );
}

export default App;
