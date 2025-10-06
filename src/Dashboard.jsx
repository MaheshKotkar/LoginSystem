import React from "react";
import maheshPhoto from "./assets/mahesh.jpeg"; 
import nikhilPhoto from "./assets/nikhil.png"; 

function Dashboard() {
  const username = localStorage.getItem('username') || 'User';

  return (
    <>
      <div className="contact-container">
        <div className="welcome-msg">
          <h1>Welcome {username}</h1>
          <p>Below is your 2 daddy </p>
        </div>

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’re a passionate team of developers from <strong>VIT Pune</strong>,
            building full-stack projects with love for technology, clean design, and innovation.
          </p>
        </div>

        <div className="developer-grid">
          <div className="dev-card">
            <div className="dev-photo-wrapper">
              <img src={maheshPhoto} alt="Mahesh Kotkar" className="dev-photo" />
            </div>
            <h2>Mahesh Kotkar</h2>
            <h4>IT Department - TY</h4>
            <p className="dev-role">Full Stack Developer | Project Lead</p>
            <p className="dev-desc">
              Passionate about backend architecture, clean frontend design, and scalable software systems. Always striving to build impactful and optimized digital solutions.
            </p>
            <div className="socials">
              <button className="social-btn">Mail</button>
              <button className="social-btn">LinkedIn</button>
              <button className="social-btn">GitHub</button>
            </div>
          </div>

          <div className="dev-card">
            <div className="dev-photo-wrapper">
              <img src={nikhilPhoto} alt="Nikhil Wagh" className="dev-photo" />
            </div>
            <h2>Nikhil Wagh</h2>
            <h4>AIDS Department - TY</h4>
            <p className="dev-role">Co-Developer | Full Stack Engineer</p>
            <p className="dev-desc">
              Focused on AI-driven applications and full-stack development. Loves integrating creativity, logic, and user experience in every project.
            </p>
            <div className="socials">
              <button className="social-btn">Mail</button>
              <button className="social-btn">LinkedIn</button>
              <button className="social-btn">GitHub</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Same CSS as previous file, no emoji, clean gradient & hover effects */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1E1E2F 0%, #202036 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          padding: 60px 20px;
        }

        .welcome-msg {
          text-align: center;
          margin-bottom: 40px;
          animation: fadeDown 0.7s ease-out;
        }

        .welcome-msg h1 {
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(90deg, #4ECCA3, #3D8BFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 5px;
        }

        .welcome-msg p {
          font-size: 16px;
          color: #B0B0B0;
        }

        /* Developer cards same as previous Dashboard CSS */
        .contact-header { text-align:center; max-width:800px; margin-bottom:60px; animation:fadeDown 0.7s ease-out; }
        .contact-header h1 { font-size:42px; font-weight:700; background:linear-gradient(90deg,#4ECCA3,#3D8BFF); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px;}
        .contact-header p { color:#B0B0B0; font-size:16px; line-height:1.6;}
        .developer-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:40px; width:100%; max-width:900px; animation:fadeInUp 1s ease-out; }
        .dev-card { background:rgba(255,255,255,0.05); border-radius:20px; border:1px solid rgba(78,204,163,0.2); padding:30px 25px; text-align:center; box-shadow:0 10px 25px rgba(0,0,0,0.3); transition: transform 0.3s ease, box-shadow 0.3s ease; backdrop-filter:blur(10px);}
        .dev-card:hover { transform:translateY(-10px) scale(1.02); box-shadow:0 15px 35px rgba(78,204,163,0.25);}
        .dev-photo-wrapper { width:120px; height:120px; margin:0 auto 20px; border-radius:50%; overflow:hidden; border:3px solid #4ECCA3; box-shadow:0 0 20px rgba(78,204,163,0.2);}
        .dev-photo { width:100%; height:100%; object-fit:cover;}
        .dev-card h2 { font-size:22px; color:#fff; margin-bottom:5px;}
        .dev-card h4 { font-size:15px; color:#4ECCA3; font-weight:500; margin-bottom:10px;}
        .dev-role { font-size:14px; color:#B0B0B0; margin-bottom:14px; font-style:italic;}
        .dev-desc { color:#CFCFCF; font-size:14px; line-height:1.6; margin-bottom:20px;}
        .socials { display:flex; justify-content:center; gap:12px;}
        .social-btn { background:linear-gradient(90deg,#4ECCA3,#3D8BFF); border:none; color:#fff; font-weight:600; padding:10px 16px; border-radius:8px; cursor:pointer; transition:all 0.3s ease;}
        .social-btn:hover { transform:translateY(-2px); box-shadow:0 6px 15px rgba(78,204,163,0.4);}
        @keyframes fadeInUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        @keyframes fadeDown { from {opacity:0; transform:translateY(-20px);} to {opacity:1; transform:translateY(0);} }
        @media (max-width:768px) { .contact-header h1 { font-size:32px; } .dev-card { padding:24px 20px; } }
        @media (max-width:480px) { .contact-container { padding:40px 15px; } .dev-photo-wrapper { width:100px; height:100px; } .social-btn { font-size:13px; padding:8px 12px; } }
      `}</style>
    </>
  );
}

export default Dashboard;
