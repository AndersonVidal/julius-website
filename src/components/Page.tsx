import Footer from './Footer';
import Header from './Header';
import './header.css';

function Page() {
    return (
      <div className="App">
        <div className="content-container">
            <Header />
        </div>
        <div className="footer">
            <Footer height='185px'/>
        </div>
      </div>
    );
  }

export default Page
