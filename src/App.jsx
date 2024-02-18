// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button> Contact us</button>
        <h1>Step into <br /> tomorrow</h1>
        <p>Innovating AI & Spatial Tech Solutions for a Connected Future!</p>
      </header>
      <nav>
        <ul>
          <li>
            <a>AI</a>
          </li>
          <li>
            <a>MR</a>
          </li>
          <li>
            <a>VR</a>
          </li>
          <li>
            <a>R&A</a>
          </li>
          <li>
            <a>AR</a>
          </li>
        </ul>
      </nav>

      <section className='description_section'>

        <div className='description_section__title'>
          <h2>About Us</h2>
          <p>Our company primarily focuses on the development of Spatial Computing solutions (VR, AR, MR), industrial visualization technologies, autonomous robotics, along with computer vison and artificial intelligence. We have developed our team of experts and professional resources accordingly. Our goal is to be able to meet the growing needs of different industries through the applied cutting-edge technology.</p>
        </div>

        <div>
          <h3>Operation platform</h3>
          <p>This project is a empowering strategic decision-making, it provides data visualization, tactical simulations, and collaborative planning for efficient and precise operations.</p>
        </div>

        <div>
          <h3>Scene investigation</h3>
          <p>Our Scene investigation project captures data with a “Spot” robot dog equipped with a 360 camera for remote evaluation through Virtual Reality headsets, enhancing the efficiency and depth of investigative analysis.</p>
        </div>

        <div>
          <h3>Repair assistant</h3>
          <p>The AR Repair Assistant project enables engineers to troubleshoot complex machinery using their cell phone cameras, accessing step-by-step guidance for efficient repairs.</p>
        </div>

        <div>
          <h3>Force meter</h3>
          <p>Our Force Meter project is an innovative device meticulously measuring athletes' pulling force in swimming, designed to provide enhanced training precision and elevate overall performance in aquatic endeavors.</p>
        </div>

        <div>
          <h3>Emotion recognition</h3>
          <p>This product leverages advanced facial recognition technology to effortlessly decipher human emotions, fostering nuanced and empathetic interactions for a more emotionally intelligent user experience.</p>
        </div>
      </section>

      <section className='contact-info'>

        <div>
          <h2>Contact Us</h2>
          <p>Need assistance or have a query? Our contact team is just a message away. We're committed to providing swift and helpful responses to all your inquiries. Get in touch and let us assist you promptly.</p>
        </div>

        <div className='contact-info__container'>

          <form>
            {/* Здесь размещаются инпуты для ввода контактных данных */}
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="your message" placeholder="Your message..." />
            {/* Другие поля ввода контактных данных */}
            <button type="submit">Submit</button>
          </form>

          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.37645122172!2d-74.11808624999999!3d40.6974034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sru!4v1645228945586!5m2!1sen!2sru" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
