import Footer from './Footer';
import Header from './Header';
import './header.css';
import Features from './Sessions/Features';
import Home from './Sessions/Home';

function Page() {
    return (
      <div className="App">
        <div className="content-container">
            <Header />
            <Home />
            <Features />
        </div>
        <div className="footer">
            <Footer height='185px'/>
        </div>
      </div>
    );
  }

export default Page
