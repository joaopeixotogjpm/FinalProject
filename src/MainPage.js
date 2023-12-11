import Header from './components/Header';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function MainPage() {
  return<>
      <section className="container">
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </section>
      </>
  ;
}

export default MainPage;