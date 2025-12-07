import './App.css';
import { useEffect } from 'react';
import { openingAnimation, initPageTurn, initContactMe, initBackProfile } from './script';

function App() {
  useEffect(() => {
    // Chạy hiệu ứng opening khi trang load
    openingAnimation();
    
    // Khởi tạo các event handlers
    initPageTurn();
    initContactMe();
    initBackProfile();
  }, []);

  return (
    <div className="wrapper body">
      <div className="cover cover-left"></div>
      <div className="cover cover-right turn"></div>

      <div className="book"> 
        <div className="book-page page-left">
          <div className="profile-page">
            
          <img src="photo.jpg" alt="Profile" />
            <h1>Đỗ Hoàng Long</h1>
            <h3>AI Engineer</h3>

            <div className="social-media">
              <a href="https://www.facebook.com/hoang.long.191730"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-twitter"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
              <a href="#"><i className="bx bxl-instagram-alt"></i></a>
            </div>
            <p>Hi , I am Đỗ Hoàng Long, a 4rd year student majoring in Artificial Intelligence at
                FPT University. I am very passionate about this field and always strive to learn
                to cultivate in-depth knowledge.
                During my studies, I accumulated a solid foundation in machine learning,
                natural language processing, and computer vision. Using tools such as
                Python, TensorFlow, PyTorch, SQL,Scikit Learn, Opencv.</p>

            <div className = "btn-box">
              <a href='#' className='btn'>Download CV</a>
              <a href='#' className='btn contact-me'>Contact Me</a>
            </div>
        <div className="book-page page-right turn" id="turn-1">
          {/* <!-- page 1 (work experience) --> */}
          <div className="page-front">
            <h1 className="title">Work Experience</h1>

            <div className="workeduc-box">
              <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i>2020 - 2021
                    </span>
                    <h3>Web Developer - Company</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                      cumque asperiores ducimus hic quibusdam.
                    </p>
              </div>

                            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i>2020 - 2021
                    </span>
                    <h3>Web Developer - Company</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                      cumque asperiores ducimus hic quibusdam.
                    </p>
              </div>

                            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i>2020 - 2021
                    </span>
                    <h3>Web Developer - Company</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                      cumque asperiores ducimus hic quibusdam.
                    </p>
              </div>
              <span className='number-page'>1</span>
              {/* next btn */}
              <span className='nextprev-btn' data-page ="turn-1">
                <i className = 'bx bx-chevron-right'></i>
              </span>
            </div>
          </div>

          {/* <!-- page 2 (education) --> */}
              <div className="page-back">
                <h1 className='title'>Education</h1>
                <div className="workeduc-box">
                  <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i>2021 - 2025</span>
                        <h3>FPT University</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                          cumque asperiores ducimus hic quibusdam.
                        </p>
                  </div>

                  <div className="workeduc-content">
                          <span className="year"><i className="bx bxs-calendar"></i>2020 - 2021</span>
                          <h3>FPT University</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                            cumque asperiores ducimus hic quibusdam.
                          </p>
                  </div>

                  <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i>2020 - 2021</span>
                      <h3>FPT University</h3>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, 
                        cumque asperiores ducimus hic quibusdam.
                      </p>
                  </div>
                </div>
                <span className='number-page'>2</span>
                {/* prev btn */}
                <span className='nextprev-btn back' data-page ="turn-1">
                  <i className = 'bx bx-chevron-left'></i>
                </span>   
              </div>      
            </div>
            {/* page 3 & 4 */}
            <div className="book-page page-right turn " id="turn-2">
              <div className='page-front'>
                <h1 className='title'>My Services</h1>
                <div className='services-box'>
                  <div className='services-content'>
                    <i className='bx bx-code-alt'></i>
                    <h3>AI Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='btn'>Read more.</a>
                  </div>

                  <div className='services-content'>
                    <i className='bx bx-code-alt'></i>
                    <h3>AI Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='btn'>Read more.</a>
                  </div>

                  <div className='services-content'>
                    <i className='bx bx-code-alt'></i>
                    <h3>AI Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='btn'>Read more.</a>
                  </div>

                  <div className='services-content'>
                    <i className='bx bx-code-alt'></i>
                    <h3>AI Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='btn'>Read more.</a>
                  </div>
                  <span className='number-page'>3</span>
                  {/* next btn */}
                  <span className='nextprev-btn' data-page ="turn-2">
                    <i className = 'bx bx-chevron-right'></i>
                  </span>
                </div>

              </div>
              <div className='page-back'>
                <h1 className='title'>My Skills</h1>
                <div className="skills-box">
                  <div className="skills-content">
                    <h3>Front-End</h3>
                    <div className="content">
                      <span><i className='bx bxl-html5'></i> HTML5</span>
                      <span><i className='bx bxl-css3'></i> CSS</span>
                      <span><i className='bx bxl-javascript'></i> JavaScript</span>
                      <span><i className='bx bxl-angular'></i> Angular</span>
                      <span><i className='bx bxl-react'></i> React</span>
                      <span><i className='bx bxl-bootstrap'></i> Bootstrap</span>
                      <span><i className='bx bxl-tailwind-css'></i> Tailwind</span>
                    </div>

                  <div className="skills-content">
                    <h3>Back-End</h3>
                    <div className="content">
                      <span><i className="bx bxl-python"></i> Python</span>
                      <span><i className="bx bxl-java"></i> Java</span>
                      <span><i className="bx bxl-php"></i> PHP</span>
                      <span><i className="bx bxl-nodejs"></i> Node.js</span>
                    </div>
                  </div>

                  <div className="skills-content">
                    <h3>UI/UX Design</h3>
                    <div className="content">
                      <span><i className='bx bxl-figma'></i>Figma</span>
                    </div>
                  </div>

                  </div>
                  <span className='number-page'>4</span>
                  {/* next btn */}
                  <span className='nextprev-btn back' data-page ="turn-2">
                    <i className = 'bx bx-chevron-left'></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="book-page page-right turn" id="turn-3">

                {/* <!-- page 5 (latest project or my portfolio) --> */}
                <div className="page-front">
                    <h1 className="title">Latest Project</h1>
                    <div className="portfolio-box">
                      <div className ="img-box">
                        <img src="portfolio.jpg" alt="" />
                      </div>
                      <div className="info-box">
                          <div className="info-title">
                              <h3>Project Name</h3>
                              <a href="#">Live Preview<i className='bx bx-link-external'></i></a>
                          </div>

                          <p>Tech Used:</p>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam unde quae voluptas voluptate velit.
                              Natus, quasi aliquam, Et, id nobis.</p>
                      </div>
                      <div className ="btn-box">
                          <a href="#" className="btn">Read more.</a>
                          <a href="#" className="btn">More Project.</a>
                      </div>
                    </div>
                  <span className='number-page'>5</span>
                  {/* next btn */}
                  <span className='nextprev-btn' data-page ="turn-3">
                    <i className = 'bx bx-chevron-right'></i>
                  </span>
                </div>
                {/* <!-- page 6 (contact me) --> */}
                <div className="page-back">
                    <h1 className="title">Contact Me!</h1>

                    <div className="contact-box">
                        <form action="#">
                            <input type="text" className="field" placeholder="Full Name" required />
                            <input type="email" className="field" placeholder="Email Address" required />
                            <textarea cols="30" rows="10" className="field" placeholder="Your Message" required></textarea>
                            <input type="submit" className="btn" value="Send Message" />
                        </form>
                    </div>

                  <span className='number-page'>6</span>
                  {/* prev btn */}
                  <span className='nextprev-btn back' data-page ="turn-3">
                    <i className = 'bx bx-chevron-left'></i>
                  </span>

                  <a href='' className='back-profile'>
                    <p>Profile</p>
                    <i className='bx bx-user'></i>
                  </a>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
