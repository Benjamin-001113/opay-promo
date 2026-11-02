
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
  
const [selectedOffer, setSelectedOffer] = useState(null);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [contactMessage, setContactMessage] = useState("");
const [formResponse, setFormResponse] = useState("");
  return (
    <div className="page">

      {/* HEADER */}
      <header>
        <nav>
          <h2>MyPromo</h2>

          <a href="#home">Home</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO SECTION */}
        <section id="home" className="hero reveal">

          <div className="hero-text">
            <h1>Make Every Day More Rewarding!</h1>

            <p>
              Welcome to Patrick Benjamin's promotional page.
              Enjoy easy payments, exciting offers and amazing rewards.
            </p>

            <button onClick={() => setMessage("Patrick! Let's get started.")}>
              Get Started
            </button>

            <button onClick={() => setMessage("Check out our exciting offers!")}>
              Explore Offers
            </button>

            <p>{message}</p>
          </div>

          <div className="hero-image">
            <img
              src="/patrick.jpeg"
              alt="Patrick Benjamin"
              width="400"
            />
          </div>

        </section>

        {/* OFFERS SECTION */}
        <section id="offers" className="offers reveal">

          <h1>Patrick Benjamin's Special Offers!</h1>

          <div className="offer-card">
            <h2>Cashback Rewards</h2>
            <p>Enjoy exciting rewards on eligible transactions.</p>
            <button onClick={() => setSelectedOffer({
  title: "Cashback Rewards",
  description: "Enjoy exciting rewards on eligible transactions."
})}>
  View Offer
</button>

          </div>

          <div className="offer-card">
            <h2>Easy Payments</h2>
            <p>Make everyday payments simple and convenient.</p>
         <button onClick={() => setSelectedOffer({
  title: "Easy Payments",
  description: "Make everyday payments simple and convenient."
})}>
  View Offer
</button>

          </div>

          <div className="offer-card">
            <h2>Special Promotions</h2>
            <p>Discover exciting deals and promotional offers.</p>
          <button onClick={() => setSelectedOffer({
  title: "Special Promotions",
  description: "Discover exciting deals and promotional offers."
})}>
  View Offer
</button>

          </div>
         {selectedOffer && (
  <div className="offer-details">
    <h2>{selectedOffer.title}</h2>
    <p>{selectedOffer.description}</p>

    <button onClick={() => setSelectedOffer(null)}>
      Close Offer
    </button>
  </div>
)}

        </section>

        <section id="contact" className="contact reveal">
<a
  href="https://wa.me/07049471021"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-link"
>
  <button type="button">Chat with me on WhatsApp</button>
</a>
  <p>Have a question? Send us a message.</p>

  <form onSubmit={(e) => {
    e.preventDefault();
    setFormResponse(`Thank you, ${name}! Your message has been received.`);
  }}>
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <textarea
      placeholder="Your Message."
      value={contactMessage}
      onChange={(e) => setContactMessage(e.target.value)}
      required
    />

    <button type="submit">Send Message</button>
  </form>

  <p>{formResponse}</p>
</section>

      </main>

      {/* FOOTER */}
      <footer id="contact">
        <p>Contact Patrick Benjamin for more information.</p>
        <p>© 2026 MyPromo. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
