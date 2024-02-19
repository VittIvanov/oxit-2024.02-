import React from "react";

const ContactInfo = () => {
  return (
    <section className='contact-info' >
      <div>
        <h2>Contact Us</h2>
        <p>
          Need assistance or have a query? Our contact team is just a message away. We're committed to providing swift and helpful responses to all your inquiries. Get in touch and let us assist you promptly.
        </p>
      </div>

      <div className='contact-info__container'>

        <form>
          {/* Здесь размещаются инпуты для ввода контактных данных */}
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="your message" placeholder="Your message..." />
          {/* Другие поля ввода контактных данных */}
          <button type="submit">Send</button>
        </form>

        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.37645122172!2d-74.11808624999999!3d40.6974034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sru!4v1645228945586!5m2!1sen!2sru" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>

      </div>
    </section >
  )
}

export default ContactInfo;
