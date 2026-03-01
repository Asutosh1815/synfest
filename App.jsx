import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import Countdown from "./Countdown";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Team />
      <Footer />
    </>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">SYNFEST 2028</div>

        <div className="nav-center">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#schedule">Schedule</a>
          <a href="#team">Team</a>
        </div>

        <a href="#register" className="btn">Register</a>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");

    const move = (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero">
      <div className="particles"></div>
      <div className="mouse-glow"></div>

      <div className="container hero-content">
        <h1>SYNFEST 2k28</h1>
        <p>The Ultimate Tech & Cultural Festival</p>

        <Countdown />

        <a href="#register" className="btn hero-btn">
          Register Now
        </a>
      </div>
    </section>
  );
}

/* ================= ABOUT ULTRA ================= */

function About() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && el.classList.add("visible"),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-ultra" ref={ref}>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-title">
            WHERE INNOVATION
            <br />
            MEETS TRADITION
          </h2>

          <p>
            Synergy Institute of Engineering & Technology, Dhenkanal,
            invites you to witness the grandest spectacle of the year.
            <b> Synfest 2028</b> is not just a fest; it's a celebration
            of talent, technology, and culture.
          </p>

          <p>
            From coding marathons to electrifying dance battles,
            from robotics to ramp walks — we have it all.
            Join us for 3 days of non-stop energy.
          </p>

          <div className="about-stats">
            <span>3 DAYS</span>
            <span>50+ EVENTS</span>
            <span>1000+ PARTICIPANTS</span>
          </div>
        </div>

        <div className="about-emblem">
          <img src="/synergy-logo.png" alt="Synergy" />
          <div className="since">Since 1999</div>
          <div className="synergy-badge">SYNERGY</div>
          <div className="tag">A Modern Day Gurukul</div>
        </div>
      </div>
    </section>
  );
}

/* ================= EVENTS ================= */

function Events() {
  const events = [
    { id: 1, title: "CODE CHEF", desc: "Competitive programming contest to solve algorithmic challenges." },
    { id: 2, title: "MOBILE APP DEVELOPMENT", desc: "Showcase your app development skills." },
    { id: 3, title: "ROBOTICS COMPETITION", desc: "Design and build robots for tasks." },
    { id: 4, title: "DRONE COMPETITION", desc: "Design drone systems for challenges." },
    { id: 5, title: "MATH OLYMPIAD", desc: "Test your mathematical prowess." },
    { id: 6, title: "TECHNICAL QUIZ", desc: "Quiz on technical domains." },
    { id: 7, title: "TECH INNOVATION CHALLENGE", desc: "Present innovative solutions." },
    { id: 8, title: "BUSINESS PLAN", desc: "Pitch your startup ideas." },
    { id: 9, title: "TECHNICAL POSTER", desc: "Present concepts via posters." },
    { id: 10, title: "FIT & FAB", desc: "Mechanical fabrication challenge." },
    { id: 11, title: "PICK & SPEAK", desc: "Extempore speaking challenge." },
    { id: 12, title: "DIGITAL DOODLE", desc: "Create digital artwork." },
    { id: 13, title: "ODIA ESSAY", desc: "Express thoughts in Odia." },
    { id: 14, title: "ENGLISH ESSAY", desc: "Creative writing in English." },
    { id: 15, title: "ODIA DEBATE", desc: "Verbal debate in Odia." },
    { id: 16, title: "ENGLISH DEBATE", desc: "Debate in English." },
    { id: 17, title: "CTF", desc: "Capture the Flag cybersecurity competition." },
    { id: 18, title: "SOLO SONG", desc: "Showcase vocal talent." },
    { id: 19, title: "ANTAKSHARI", desc: "Song competition." },
    { id: 20, title: "SOLO DANCE", desc: "Express through dance." },
    { id: 21, title: "GROUP DANCE", desc: "Group dance performance." },
    { id: 22, title: "RANGOLI", desc: "Traditional art competition." },
    { id: 23, title: "JHOTI", desc: "Traditional floor art." },
    { id: 24, title: "MONO ACTING", desc: "Act solo scene." },
    { id: 25, title: "GROUP ACTING", desc: "Perform skit." },
    { id: 26, title: "GENERAL PAINTING", desc: "Artwork on theme." },
    { id: 27, title: "FACE PAINTING", desc: "Artistic face painting." },
    { id: 28, title: "INSTITUTE PHOTOGRAPHY", desc: "Photography contest." },
    { id: 29, title: "DOCUMENTARY MOVIE", desc: "Storytelling film." },
    { id: 30, title: "BOTTLE PAINTING", desc: "Paint bottles." },
    { id: 31, title: "BRIDAL MAKE-UP", desc: "Makeup artistry." },
    { id: 32, title: "MEHENDI", desc: "Henna art." },
    { id: 33, title: "DUMB CHARADES", desc: "Guess game." },
    { id: 34, title: "TREASURE HUNT", desc: "Find clues." },
    { id: 35, title: "BE BRAVE ENOUGH", desc: "Daring challenge." },
    { id: 36, title: "FOOD FEST", desc: "Cook & serve." },
    { id: 37, title: "CHESS", desc: "Strategic game." },
    { id: 38, title: "CARROM", desc: "Tabletop game." },
    { id: 39, title: "BADMINTON (BOYS)", desc: "Racquet sport." },
    { id: 40, title: "BADMINTON (GIRLS)", desc: "Racquet sport." },
    { id: 41, title: "VOLLEYBALL", desc: "Team sport." },
    { id: 42, title: "BASKETBALL", desc: "Hoops & dribbles." },
    { id: 43, title: "CRICKET", desc: "The gentleman's game." },
    { id: 44, title: "CYBER BATTLE", desc: "Free Fire tournament." },
    { id: 45, title: "YOGA", desc: "Asana performance." },
  ];

  return (
    <section id="events" className="events-ultra">
      <div className="events-grid">
        {events.map((e) => (
          <div key={e.id} className="event-card">
            {/* ULTRA FX overlays */}
            <div className="holo"></div>
           <div className="scan"></div>

            <div className="event-number">
              {String(e.id).padStart(2, "0")}
            </div>

            <div className="event-content">
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <button className="event-btn">EXPLORE</button>
            </div>
            <div className="event-watermark-text">
              SYNFEST 2K28
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SCHEDULE ================= */

function Schedule() {
  const days = [
    {
      day: "DAY 1",
      subtitle: "Alumni & Cultural Day",
      events: [
        "Alumni Meet — 10:00 AM to 1:00 PM",
        "Cultural Session — 5:00 PM to 10:00 PM",
        "Diploma in Engg. & B.Sc Nursing",
      ],
    },
    {
      day: "DAY 2",
      subtitle: "Graduation & Cultural Day",
      events: [
        "Graduation Ceremony — 4:00 PM to 6:00 PM",
        "Cultural Session — 6:00 PM to 10:00 PM",
        "B.Tech & B.Sc",
      ],
    },
    {
      day: "DAY 3",
      subtitle: "Star Night",
      events: [
        "Abhijeet Majumdar Live",
        "Sugyani Mohapatra",
        "From 6:00 PM onwards",
      ],
    },
  ];

  return (
    <section id="schedule" className="schedule-ultra">
      <div className="schedule-grid">
        {days.map((d, i) => (
          <div
  key={i}
  className={`schedule-card ultra-day ${i === 2 ? "star-night" : ""}`}
>
            <div className="schedule-day">{d.day}</div>
            <div className="schedule-sub">{d.subtitle}</div>

            <div className="schedule-events">
              {d.events.map((e, j) => (
                <div key={j} className="schedule-event">{e}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= TEAM ================= */

function Team() {
  /* ================= CORE TEAM ================= */
  const core = [
    {
      name: "ASUTOSH SAHU",
      role: "Organising Secretary",
      dept: "B.Tech",
      phone: "+91 79780 88266",
      img: "/team/asutosh.jpg",
    },
    {
      name: "SWARUPA LAXMI BEHERA",
      role: "Organising Secretary",
      dept: "B.Tech",
      phone: "+91 00000 00000",
      img: "/team/swarupa.jpg",
    },
    {
      name: "ASHIT KUMAR JENA",
      role: "Cultural Secretary",
      dept: "B.Tech",
      phone: "+91 70087 19268",
      img: "/team/ashit.jpg",
    },
    {
      name: "SANDEEP SAHOO",
      role: "Cultural Secretary",
      dept: "B.Tech",
      phone: "+91 00000 00000",
      img: "/team/sandeep.jpg",
    },
    {
      name: "PRITI MOHAN PRATIHARI",
      role: "Coordinator",
      dept: "B.Tech",
      phone: "+91 72054 13331",
      img: "/team/priti.jpg",
    },
    {
      name: "ASHISH PRUSTY",
      role: "Co-Coordinator",
      dept: "B.Tech",
      phone: "+91 96920 11029",
      img: "/team/ashish.jpg",
    },
    {
      name: "ATAL BIHARI GOCHHAYAT",
      role: "Co-Coordinator",
      dept: "B.Tech",
      phone: "+91 99388 42760",
      img: "/team/atal.jpg",
    },
    {
      name: "PRAGYAN LENKA",
      role: "Coordinator",
      dept: "B.Sc",
      phone: "+91 78480 21286",
      img: "/team/pragyan.jpg",
    },
    {
      name: "NEELAM MALLICK",
      role: "Coordinator",
      dept: "Nursing",
      phone: "+91 00000 00000",
      img: "/team/neelam.jpg",
    },
    {
      name: "MRUTYUNJAY PARIDA",
      role: "Coordinator",
      dept: "Diploma",
      phone: "+91 81445 51174",
      img: "/team/mrutyunjay.jpg",
    },
  ];

  /* ================= DROPDOWN STATE ================= */
  const [openDept, setOpenDept] = useState(null);

  /* ================= DEPARTMENTS ================= */
  const departments = [
    {
      name: "Computer Science & Engineering",
      members: 48,
      people: [
        { name: "Ashit Kumar Jena", role: "Co-Ordinator", year: "4th", phone: "+91 70087 19268" },
        { name: "Biswaranjan Mantry", role: "Co-Ordinator", year: "4th", phone: "+91 63710 16014" },
        { name: "Jagmohan Pal", role: "Co-Ordinator", year: "4th", phone: "+91 93484 72106" },
        { name: "Pabitra Mohan Behera", role: "Co-Ordinator", year: "4th", phone: "+91 78480 90838" },
      ],
    },
    {
      name: "Electrical Engineering",
      members: 13,
      people: [
        { name: "Member 1", role: "Coordinator", year: "3rd", phone: "+91 XXXXX XXXXX" },
      ],
    },
    {
      name: "Mechanical Engineering",
      members: 10,
      people: [],
    },
    {
      name: "Civil Engineering",
      members: 13,
      people: [
        { name: "Member 1", role: "Coordinator", year: "3rd", phone: "+91 XXXXX XXXXX" },
      ],
    },
    {
      name: "B.sc Nursing",
      members: 13,
      people: [
        { name: "Member 1", role: "Coordinator", year: "3rd", phone: "+91 XXXXX XXXXX" },
      ],
    },
    {
      name: "Diploma Engineering",
      members: 13,
      people: [
        { name: "Member 1", role: "Coordinator", year: "3rd", phone: "+91 XXXXX XXXXX" },
      ],
    },
  ];

  return (
    <section id="team" className="team-ultra">

      {/* ===== CORE TEAM ===== */}
      <h2 className="team-title">
        <span></span> CORE TEAM
      </h2>

      <div className="team-grid">
        {core.map((m, i) => (
          <div key={i} className="team-card">
            <img src={m.img} alt={m.name} className="team-photo" />

            <div className="team-name">{m.name}</div>

            <div className="team-tags">
              <span className="role">{m.role}</span>
              <span className="dept">{m.dept}</span>
            </div>

            <div className="team-phone">📞 {m.phone}</div>
          </div>
        ))}
      </div>

      {/* ===== DEPARTMENTS ===== */}
      <h2 className="team-title sub">
        <span></span> DEPARTMENT COORDINATORS & VOLUNTEERS
      </h2>

      <div className="dept-list">
        {departments.map((d, i) => {
          const open = openDept === i;

          return (
            <div key={i} className={`dept-accordion ${open ? "open" : ""}`}>

              {/* HEADER */}
              <div
                className="dept-header"
                onClick={() => setOpenDept(open ? null : i)}
              >
                <div className="dept-name">{d.name}</div>

                <div className="dept-right">
                  <span className="members">{d.members} MEMBERS</span>
                  <span className={`arrow ${open ? "rotate" : ""}`}>⌃</span>
                </div>
              </div>

              {/* BODY */}
              {open && (
                <div className="dept-body">
                  <div className="dept-table-head">
                    <span>NAME</span>
                    <span>ROLE</span>
                    <span>YEAR</span>
                    <span>PHONE</span>
                  </div>

                  {d.people.map((p, idx) => (
                    <div key={idx} className="dept-row">
                      <span>{p.name}</span>
                      <span>{p.role}</span>
                      <span>{p.year}</span>
                      <span>📞 {p.phone}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
}

/* ================= REGISTER ================= */

function Register() {
  return (
    <section id="register" className="register">
      <div className="container">
        <h2>Join SYNFEST 2028</h2>
        <p>Register now to participate in events.</p>
        <a href="#" className="btn big">
          Register Now
        </a>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="footer-ultra-pro">

      <div className="footer-glow-line"></div>

      <div className="footer-top-pro">

        {/* LEFT */}
        <div className="footer-brand-pro">
          <div className="footer-logo-pro">
            SYNFEST<span> 2k28</span>
          </div>

          <p>
            The annual techno-cultural fest of Synergy Institute of
            Engineering & Technology. Where innovation meets tradition.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links-pro">
          <h4>EXPLORE</h4>
          <a href="#events">All Events</a>
          <a href="#about">About Us</a>
          <a href="#team">Contact Team</a>
          <a href="#">Terms</a>
        </div>

        {/* RIGHT */}
        <div className="footer-contact-pro">
          <h4>CONTACT</h4>
          <p>Synergy Institute,<br/>Dhenkanal, Odisha 759001</p>
          <p>sietdkl@synergyinstitute.net</p>
          <p>+91 67622 25905</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom-pro">
        <div>© 2028 Synfest</div>

        <div className="made-pro">
          Made with 💜 by Asutosh
        </div>

        <div className="socials-pro">
          <span>IG</span>
          <span>IN</span>
          <span>FB</span>
          <span>YT</span>
        </div>
      </div>

    </footer>
  );
}
