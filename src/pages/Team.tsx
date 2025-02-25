import React from "react";
import "../assets/style.css";
import "../assets/team.css";
import Git from "./Git";
import LatestNews from "./LatestNews";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Majid Hassan",
      role: "CEO / CTO - Founder",
      role2: "",
      image: "/images/team/ceo.jpg",
      delay: "0.3s",
    },
    {
      name: "Dato Rashidi Ahmad",
      role: "Partner",
      image: "/images/team/partner.jpg",
      delay: "0.6s",
    },
  ];

  const otherMembers = [
    {
      name: "Turab",
      role: "Engineering Head",
      image: "/images/team/turab.jpg",
      delay: "0.2s",
    },
    {
      name: "Ali",
      role: "Sales & Marketing Head",
      image: "/images/team/ali.jpg",
      delay: "0.4s",
    },
    {
      name: "Jesica Ben",
      role: "Digital Marketing Head",
      image: "/images/team/t-4.jpg",
      delay: "0.6s",
    },
  ];

  return (
    <>
      {/* Team-P1 Section */}
      <section id="team-p1" className="team-p1">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-6" key={index}>
                <div
                  className="team-p1-cont wow fadeInUp"
                  data-wow-delay={member.delay}
                >
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={member.name}
                  />
                  <h5>{member.name}</h5>
                  <h6>{member.role}</h6>
                  <h6>{member.role2}</h6>
                  <ul
                    className="list-inline social-icon-f top-data"
                    style={{ position: "relative" }}
                  >
                    <li>
                      <a href="https://wa.me/60102634462" target="_empty">
                        <i className="fa top-social fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Lyra-Zone-Solutions/61553204526797/?mibextid=kFxxJD"
                        target="_empty"
                      >
                        <i className="fa top-social fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/lyra-zone-solutions/posts/?feedView=all"
                        target="_empty"
                      >
                        <i className="fa top-social fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UC4HuaQMMFnFcLRB3IirK-Sg"
                        target="_empty"
                      >
                        <i className="fa top-social fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team-P2 Section */}
      <section id="comp-offer" className="team-p2">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 desc-comp-offer">
              <h2>Team Member</h2>
              <div className="heading-border-light"></div>
            </div>
          </div>
          <div className="row">
            {otherMembers.map((member, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div
                  className="team-p2-cont wow fadeInUp"
                  data-wow-delay={member.delay}
                >
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={member.name}
                  />
                  <h5>{member.name}</h5>
                  <h6>{member.role}</h6>
                  {/* <ul className="list-inline social-icon-f top-data">
                    <li>
                      <a href="#" target="_empty">
                        <i className="fa top-social fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_empty">
                        <i className="fa top-social fa-google-plus"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Git />
      <LatestNews />
    </>
  );
};

export default Team;
