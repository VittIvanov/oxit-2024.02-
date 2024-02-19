import CompanyInfo from './companyInfo/companyInfo';
import ContactInfo from './contactInfo/contactInfo';
import Description from './description/description';
import Footer from './footer/footer';
import MainHeader from './header/mainHeader';
import MainTitle from './mainTitle/mainTitle';
import Navigation from './navigation/navigation';



function App() {
  return (
    <div className="App">
      <div className="App_container">

        <MainHeader />

        <MainTitle />

        {/* <p className='visually-hidden'>We  focus on Extended Reality, industrial visualization, autonomous robotics, computer vision, and AI. </p> */}

        <Navigation />

        <CompanyInfo />

        <Description />

        <ContactInfo />

        <Footer />
      </div>

    </div>
  );
}

export default App;
