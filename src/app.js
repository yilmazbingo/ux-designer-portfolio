import React from "react";
import logo from "./assets/img/logo.png";
import Design from "./assets/img/portfolio-design-01-1.jpg";
import Creative from "./assets/img/portfolio-creative-02-1.jpg";
import Creative2 from "./assets/img/portfolio-creative-01-1.jpg";
import Brand from "./assets/img/portfolio-branding-02-1.jpg";
import Brand1 from "./assets/img/portfolio-branding-01-1.jpg";
import Print from "./assets/img/portfolio-print-02-1.jpg";
import Content from "./assets/img/full-bg-03.png";
import Testimonial from "./assets/img/testimonials-1.jpg";
import Testimonial2 from "./assets/img/testimonials-2.jpg";
import Testimonial4 from "./assets/img/testimonials-4.jpg";
const App = () => (
  <body>
    <aside id="side-nav">
      <div class="side-nav__content">
        <div class="side-nav__content--logo">
          <img src={logo} alt="logo" />
        </div>
        <ul class="side-nav__content--social">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest-p"></i>
          </a>
        </ul>
      </div>
    </aside>

    <main>
      <header id="header">
        <nav id="header__main-nav">
          <div class="header__main-nav--hamburger">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
          <ul class="header__main-nav--links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Hire Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="showcase">
        <div class="showcase__content">
          <h1 class="showcase__content--title">Yilmaz Bingol</h1>
          <p class="showcase__content--para">
            UX Designer / Frontend Developer
          </p>
          <a href="#" class="showcase__content--link">
            My Work
          </a>
        </div>
      </section>

      <section id="work">
        <div class="work__card">
          <img src={Design} alt="poster" />
        </div>

        <div class="work__card">
          <img src={Creative} alt="paper-bag" />
        </div>

        <div class="work__card">
          <img src={Creative2} alt="cloth-bag" />
        </div>

        <div class="work__card">
          <img src={Brand} alt="branding" />
        </div>

        <div class="work__card">
          <img src={Brand1} alt="cup" />
        </div>

        <div class="work__card">
          <img src={Print} alt="book-cover" />
        </div>
      </section>

      <section id="about-me">
        <div class="about-me__img">
          <img src={Content} alt="ME" />
        </div>
        <div class="about-me__content">
          <h2 class="about-me__content--title">About Me</h2>
          <p class="about-me__content--para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            laudantium maiores aliquid magni debitis ipsum delectus impedit iure
            distinctio, sint tempora asperiores odit tempore temporibus
            incidunt, non ex expedita sunt.
          </p>
          <a href="#" class="about-me__content--link">
            Read More
          </a>
        </div>
      </section>

      <section id="services">
        <div class="service services__service-1">
          <i class="fas fa-quidditch"></i>
          <h3 class="services--title services__service-1--title">UI Design</h3>
          <p class="services--para services__service-1--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>

        <div class="service services__service-2">
          <i class="fas fa-tasks"></i>
          <h3 class="services--title services__service-2--title">
            Web Development
          </h3>
          <p class="services--para services__service-2--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>

        <div class="service services__service-3">
          <i class="fas fa-mobile-alt"></i>
          <h3 class="services--title services__service-3--title">
            App Development
          </h3>
          <p class="services--para services__service-3--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>

        <div class="service services__service-4">
          <i class="fas fa-paint-roller"></i>
          <h3 class="services--title services__service-4--title">
            Type Design
          </h3>
          <p class="services--para services__service-4--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>

        <div class="service services__service-5">
          <i class="far fa-edit"></i>
          <h3 class="services--title services__service-5--title">
            Blog Writer
          </h3>
          <p class="services--para services__service-5--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>

        <div class="service services__service-6">
          <i class="fas fa-project-diagram"></i>
          <h3 class="services--title services__service-6--title">
            Project Management
          </h3>
          <p class="services--para services__service-6--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
      </section>

      <section id="skills">
        <div class="skills__design">
          <h3 class="skills__design--title">Design Skills</h3>

          <h4>Web Design</h4>
          <div class="skills__design--progress">
            <span class="skills__design--progress__1"></span>
          </div>

          <h4>Print Design</h4>
          <div class="skills__design--progress">
            <span class="skills__design--progress__2"></span>
          </div>

          <h4>Logo Design</h4>
          <div class="skills__design--progress">
            <span class="skills__design--progress__3"></span>
          </div>

          <h4>Graphic Design</h4>
          <div class="skills__design--progress">
            <span class="skills__design--progress__4"></span>
          </div>
        </div>

        <div class="skills__coding">
          <h3 class="skills__coding--title">Coding Skills</h3>

          <h4>HTML / CSS</h4>
          <div class="skills__coding--progress">
            <span class="skills__coding--progress__1"></span>
          </div>

          <h4>JavaScript</h4>
          <div class="skills__coding--progress">
            <span class="skills__coding--progress__2"></span>
          </div>

          <h4>Python</h4>
          <div class="skills__coding--progress">
            <span class="skills__coding--progress__3"></span>
          </div>

          <h4>SQL</h4>
          <div class="skills__coding--progress">
            <span class="skills__coding--progress__4"></span>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div class="testimonials__card">
          <div class="testimonials__card--img">
            <img src={Testimonial} alt="tony" />
          </div>
          <div class="testimonials__card--content">
            <h3 class="testimonials__card--content__title">Remarkable Eye</h3>
            <p class="testimonials__card--content__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>

        <div class="testimonials__card">
          <div class="testimonials__card--img">
            <img src={Testimonial2} alt="natasha" />
          </div>
          <div class="testimonials__card--content">
            <h3 class="testimonials__card--content__title">Catchy Designs</h3>
            <p class="testimonials__card--content__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>

        <div class="testimonials__card">
          <div class="testimonials__card--img">
            <img src={Testimonial} alt="veers" />
          </div>
          <div class="testimonials__card--content">
            <h3 class="testimonials__card--content__title">Smoking Websites</h3>
            <p class="testimonials__card--content__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>

        <div class="testimonials__card">
          <div class="testimonials__card--img">
            <img src={Testimonial4} alt="odinson" />
          </div>
          <div class="testimonials__card--content">
            <h3 class="testimonials__card--content__title">
              Easy to work with
            </h3>
            <p class="testimonials__card--content__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <form class="contact__form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="message" placeholder="Message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  </body>
);

export default App;
