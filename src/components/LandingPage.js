import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  
  

  return (
    <div className="landing-page">
      <header>
        <nav>
          <div className="logo">EventMaster</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>Manage Your Events with Ease</h1>
          <p>Plan, organize, and execute successful events with our powerful platform.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section id="features" className="features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-calendar-alt"></i>
              <h3>Event Planning</h3>
              <p>Easily plan and schedule your events.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-ticket-alt"></i>
              <h3>Ticket Management</h3>
              <p>Sell and manage tickets effortlessly.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line"></i>
              <h3>Analytics</h3>
              <p>Get insights on your event performance.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Us</h2>
          <p>We are passionate about making event management simple and efficient for everyone.</p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 EventMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
