import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Contact Me via email or let's link up on IG.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: alyb237@gmail.com</li>
              <li className="contact-item">
                IG: https://www.instagram.com/accounts/login/?next=/ldyosc/
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
