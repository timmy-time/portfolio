import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <div id="donate-button-container">
      <div id="donate-button"></div>
      <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
      <script>
      PayPal.Donation.Button({
      env:'production',
      hosted_button_id:'KBH82NQY4WS5A',
      image: {
      src:'https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif',
      alt:'Donate with PayPal button',
      title:'PayPal - The safer, easier way to pay online!',
      }
      }).render('#donate-button');
      </script>
      </div>
    </main>
  );
}