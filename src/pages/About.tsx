import React from "react";
import "../assets/style.css";
import "../assets/about.css";
import Git from "./Git";
import LatestNews from "./LatestNews";

const About: React.FC = () => {
  return (
    <>
      {/* Home Section */}
      <div id="home-p" className="home-p pages-head1 text-center">
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-delay="0.1s"></h1>
          <p></p>
        </div>
      </div>

      {/* About-P1 Section */}
      <section id="about-p1">
        <div
          className="container"
          style={{ padding: "20px", textAlign: "justify" }}
        >
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="story-desc">
                <h3>Leading Zone of ICT</h3>
                <div className="heading-border-light"></div>
                <p>
                  Welcome to Lyra Zone Solutions, your trusted partner in
                  innovative ICT solutions. Founded with the mission to drive
                  digital transformation, we specialize in delivering
                  cutting-edge technology and software that helps businesses
                  thrive in the modern digital landscape
                </p>
                <p>
                  At LyraZone, we are committed to providing customized and
                  efficient IT solutions that cater to the unique needs of our
                  clients across various industries. Our flagship product, the
                  ELBS ERP & POS system, are designed to streamline business
                  operations, improve customer experiences, and optimize
                  performance.
                </p>
                <img
                  src="/images/welcome-to-lyrazone-solutions.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="Welcome to LyraZone"
                />
                <p style={{ paddingTop: "20px" }}>
                  Our approach is client-focused, aiming to build long-term
                  relationships based on trust, innovation, and success. We work
                  closely with our partners to understand their needs and
                  deliver tailor-made solutions that enhance efficiency and
                  profitability.
                </p>
                <p>
                  Our leadership fosters a culture of collaboration and
                  forward-thinking, ensuring that every solution we deliver is
                  not only innovative but also practical and scalable. By
                  staying attuned to emerging technologies and industry best
                  practices, we create strategies that align with our clients’
                  long-term objectives. This proactive approach enables us to
                  anticipate challenges, adapt to changing business
                  environments, and continually provide solutions that drive
                  growth and operational excellence.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="story-himg">
                <img
                  src="/images/world-business-best-platform.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="World Business Platform"
                />
              </div>
              <div className="story-himg">
                <p style={{ paddingTop: "20px" }}>
                  LyraZone has been innovating new tools in the IT industry,
                  including a solution for intercompany communication
                  challenges—the Fast Intercompany Communication Tool (FICT).
                </p>
                <p>
                  FICT helps companies streamline communication between
                  leadership and staff through a range of features such as text
                  and voice messaging, photo and file sharing, voice and video
                  calls, and task management.
                </p>
                <p>
                  With a team of experienced professionals and a passion for
                  technology, we are constantly evolving to offer services that
                  help businesses stay ahead of the curve. Whether it’s software
                  development, system integration, or comprehensive IT
                  consultancy, LyraZone ensures seamless solutions that empower
                  businesses to achieve their goals.
                </p>
                <img
                  src="/images/fict.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="FICT"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About-P2 Section */}
      <section className="about-p2 bg-gradiant" style={{ padding: "20px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="about-p2-heading">
              <h3 className="cl-white">Global Leader in Technology Services</h3>
              <div className="heading-border-light bg-white"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="about-p2-cont cl-white">
                <img
                  src="/images/news/news-5.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="News"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="about-p2-cont cl-white wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h5 style={{ paddingTop: "20px", color: "#ffd910" }}>
                  Web & Interactive Design
                </h5>
                <p style={{ textAlign: "justify", color: "azure" }}>
                  At LyraZone, we believe that the most impactful websites and
                  app experiences are built on intelligent design, a clear
                  vision, and the right technology. Our approach ensures that
                  every solution we deliver is not only functional but also
                  user-friendly and visually appealing, enhancing both business
                  operations and customer experience. By focusing on a balance
                  of creativity and technical excellence, we create digital
                  solutions that truly resonate with our clients’ goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="about-p2-cont cl-white wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h5 style={{ color: "#ffd910" }}>Branding & Strategy</h5>
                <p style={{ textAlign: "justify", color: "azure" }}>
                  It's a well-known fact that a reader's attention can be easily
                  diverted by the content layout of a page. At LyraZone, we
                  prioritize creating engaging and structured content that not
                  only captures attention but enhances the overall user
                  experience. By using intuitive design principles and clear
                  communication, we ensure that every element of your digital
                  solution is aligned with your objectives, offering both
                  readability and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About-P3 Section */}
      <section id="story" className="about-p3">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{ padding: "20px", textAlign: "justify" }}
            >
              <div className="story-himg">
                <img
                  src="/images/img/image-3.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="Leadership"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="story-desc">
                <h3 style={{ paddingTop: "20px" }}>
                  Leadership with Decades of Expertise
                </h3>
                <div className="heading-border-light"></div>
                <p style={{ textAlign: "justify" }}>
                  At LyraZone, our leadership team brings nearly three decades
                  of experience in the ever-evolving technology landscape. With
                  a deep-rooted understanding of industry trends and an
                  unwavering commitment to innovation, our leaders have been at
                  the forefront of digital transformation for businesses across
                  various sectors.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Over the past 30 years, they have navigated the complexities
                  of the IT industry, spearheading projects that have delivered
                  sustainable growth and competitive advantages to our clients.
                  Their vast experience spans across software development,
                  system integration, IT consultancy, and digital solutions that
                  drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/img/image-2.jpg"
                className="img-fluid"
                alt="Infrastructure 2"
              />
            </div>
            <div className="col-md-6">
              <div className="story-desc">
                {/* <div className="story-desc story-desc-middle"> */}
                <h3 style={{ paddingTop: "0px" }}>Infrastructure</h3>
                <div className="heading-border-light"></div>
                <p style={{ textAlign: "justify" }}>
                  At LyraZone, our infrastructure is built to support
                  cutting-edge technology and scalable solutions that empower
                  businesses to thrive in the digital age. Our state-of-the-art
                  facilities are equipped with advanced hardware, secure data
                  centers, and high-speed network systems that ensure seamless
                  operations. We continuously invest in upgrading our
                  infrastructure to meet the evolving demands of our clients,
                  providing them with reliable and efficient IT environments.
                  Whether it's cloud computing, data security, or integrated
                  communication systems, LyraZone’s robust infrastructure
                  ensures optimal performance and scalability for businesses of
                  all sizes.
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Unique Value Propositions */}
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{ padding: "20px", textAlign: "justify" }}
            >
              <div className="story-himg">
                <img
                  src="/images/img/image-1.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="Unique Value"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="story-desc">
                <h3 style={{ paddingTop: "20px" }}>
                  Unique Value Propositions
                </h3>
                <div className="heading-border-light"></div>
                <p style={{ textAlign: "justify" }}>
                  At LyraZone Solutions, our unique value proposition lies in
                  our ability to deliver tailored, innovative technology
                  solutions that address the specific challenges of each client.
                  We combine industry expertise with a customer-centric approach
                  to create solutions that not only meet current needs but also
                  future-proof businesses for long-term success. Our commitment
                  to reliability, seamless integration, and cutting-edge
                  technology ensures that our clients stay competitive in an
                  ever-changing digital landscape. With LyraZone, businesses
                  gain a partner that prioritizes efficiency, scalability, and
                  personalized service, ensuring measurable impact and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Git />
      <LatestNews />
    </>
  );
};

export default About;
