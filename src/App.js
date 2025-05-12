import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import profile_photo from './images/profile.jpg';
import resume from './files/Tanvir_Ahmed_Khan-Resume.pdf';
import pub1 from './files/OSQLgen.pdf';
import pub2 from './files/AlloyFLFSEDemo.pdf';
import pub3 from './files/scalable_tensors.pdf';
import pub4 from './files/Tensor_Planner.pdf';
import { Card } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

function App() {
  return (
    <div>
    <Box sx={{ flexGrow: 1, width: '95%', padding: '2em' }}>
      <Grid container>
        <Grid xs={4} lg={3}>
          <div style={{padding: '1em'}}>
            <div>
              <img src={profile_photo} alt='Tanvir Ahmed Khan'  style={{maxWidth: '50%', borderRadius: '50%'}}/>
            </div>
            <div className='urls'>
              <h2>Tanvir Ahmed Khan</h2>
              <p>PhD Student in Computer Science</p>
              <ul>
                <li><SchoolIcon/> UT Arlington</li>
                <li><a href="mailto:txk6771@mavs.uta.edu"><EmailIcon />Email</a></li>
                <li><a href="https://scholar.google.com/citations?user=YVcWkEoAAAAJ&amp;hl=en&amp;oi=ao"><GoogleIcon/>Google Scholar</a></li>
                <li><a href='https://www.linkedin.com/in/tanvirtonoy/'><LinkedInIcon/>LinkedIn</a></li>
                <li><a href='https://github.com/Tanvirtonoy'><GitHubIcon/>GitHub</a></li>
                <li><a href='https://leetcode.com/tanvirAhmedKhan/'><CodeIcon/>Leetcode</a></li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid xs={8} lg={9}>
          <div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3> About me</h3>
              <p>
                I am a PhD student majoring in Computer Science at <a href="https://www.uta.edu/">The University of Texas at Arlington</a> (UTA).
                My Research focus is Big Data and Machine Learning. My adviser is <a href="https://lambda.uta.edu/">Dr. Leonidas Fegaras</a>. 
                I obtained my B.Sc. degree in Electrical and Electronic Engineering from University of Dhaka in 2017. I worked as a Software Engineer before 
                starting my PhD in Spring 2021. You can find my current resume <a href={resume}>here</a>
              </p>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Research Interest</h3>
              <ul>
                <li><strong>Big Data:</strong> Distributed Computing, Parallel Processing, Data Stream Processing, 
                Query Processing and Optimization, Cloud Computing</li>
                <li><strong>Machine Learning:</strong> Distributed Machine Learning and Optimization</li>
              </ul>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Publications</h3>
              <ul>
                <li>
                A Planner for Scalable Tensor Programs
                <br/>
                <strong>T.A. Khan</strong>, L. Fegaras
                <br/>
                IEEE International Conference on Big Data (BigData'24), December 2024
                <br/>
                [<a href={pub4}>PDF</a>]
                </li>
                <li>
                Scalable Tensors for Big Data Analytics
                <br/>
                L. Fegaras, <strong>T.A. Khan</strong>, M.H. Noor, T. Sultana
                <br/>
                IEEE International Conference on Big Data (BigData'22), December 2022
                <br/>
                [<a href={pub3}>PDF</a>]
                </li>
                <li>
                Translation of Array-based Loop Programs to Optimized SQL-based Distributed Programs
                <br/>
                M.H. Noor, L. Fegaras, <strong>T.A. Khan</strong>, T. Sultana
                <br/>
                Open Journal of Big Data (OJBD) 2022.
                <br/>
                [<a href={pub1}>PDF</a>]
                </li>
                <li>
                AlloyFL: A Fault Localization Framework for Alloy
                <br/>
                <strong>T.A. Khan</strong>, A. Sullivan, K. Wang
                <br/>
                The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering 
                (ESEC/FSE) Demonstration Track (FSE Demo) August 2021.
                <br/>
                [<a href={pub2}>PDF</a>]
                </li>
              </ul>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Professional Experience</h3>
              <div>
                <div>
                  <strong>Cornami Inc.</strong>
                  <br/>Campbell, CA, USA<br/><br/>
                </div>
                <div style={{paddingLeft: '2em'}}>
                  <strong>Compiler Engineer Intern</strong>
                  <br/>
                  Feb 2025 - May 2025
                  <ul>
                    <li>
                    Worked on compiler extension on MLIR using fully-homomorphic encryption to run ML programs on Cornami accelerator
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>The University of Texas System</strong>
                  <br/>Austin, Texas, USA<br/><br/>
                </div>
                <div style={{paddingLeft: '2em'}}>
                  <strong>Software Developer Intern</strong>
                  <br/>
                  Texas Medical &amp; Dental Schools Application Services (TMDSAS)
                  <br/>
                  May 2022 - Aug 2022
                  <ul>
                    <li>
                      Worked on TMDSAS portal to upgrade it using latest backend and frontend frameworks
                    </li>
                    <li>
                      Created a .NET Web API in the backend keeping the existing database and React in the frontend
                    </li>
                    <li>
                      Made the API secure using JSON Web Tokens (JWT)
                    </li>
                    <li>
                      Using React and Material-UI in frontend, user experience was vastly improved
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Samsung R&amp;D Institute Bangladesh</strong>
                  <br/>Dhaka, Bangladesh<br/><br/>
                </div>
                <div style={{paddingLeft: '2em'}}>
                  <strong>Software Engineer</strong>
                  <br/>
                  Mobile Application Group 2
                  <br/>
                  Nov 2018 - Dec 2020
                  <ul>
                    <li>
                    Built UI components in Tizen Wearable framework for Samsung Galaxy smart watches
                    </li>
                    <li>
                    Maintained and upgraded large code base of Samsung Wearable device apps
                    </li>
                    <li>
                    Designed UI scrolling of Weather app to be 30% faster
                    </li>
                    <li>
                    Designed and integrated SmartThings app with new API
                    </li>
                  </ul>
                  <strong>Software Engineer Intern</strong>
                  <br/>
                  Aug 2018 - Nov 2018
                  <br/><br/>
                </div>
                <div>
                  <strong>Ixora Solution Ltd.</strong>
                  <br/>Dhaka, Bangladesh<br/><br/>
                </div>
                <div style={{paddingLeft: '2em'}}>
                  <strong>Software Developer</strong>
                  <br/>
                  Mar 2018 - July 2018
                  <ul>
                    <li>
                    Designed and built a web application for blast (Bangladesh Legal Aid and Services Trust) 
                    to be used by people with disabilities to file cases, link <a href='https://blast-cms.org'>here</a>
                    </li>
                    <li>
                    Implemented a web application for managing product deliveries and logistic operations of courier services
                    </li>
                  </ul>
                  <strong>Software Developer Intern</strong>
                  <br/>
                  Nov 2017 - Feb 2018
                  <br/>
                </div>
              </div>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Teaching Experience</h3>
              <div>
                <div>
                  <strong>Aspire Teaching Fellowship</strong>
                  <br/>
                  University of Texas at Arlington and Tarrant Community College
                  <br/>
                  Jan 2022 - Apr 2022
                  <ul>
                    <li>
                    Observed classroom practices, evidence-based teaching, 
                    and learning-through-diversity components at a Community College level
                    </li>
                    <li>Practiced setting learning goals for classes, creating assessment</li>
                    <li>Taught classes using different teaching practices and student activities</li>
                  </ul>
                </div>
                <div>
                  <strong>Graduate Teaching Assistant</strong>
                  <br/>
                  University of Texas at Arlington
                  <br/>
                  Jan 2021 - Present
                  <ul>
                    <li>CSE 6331: Cloud Computing</li>
                    <li>CSE 5335: Web Data Management</li>
                    <li>CSE 2315: Discrete Structures</li>
                    <li>CSE 1205/2100: Practical Computer Hardware &amp; Software Systems</li>
                  </ul>
                </div>
              </div>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Skills</h3>
              <ul>
                <li>
                  <strong>Languages: </strong> C/C++, Python, JavaScript, TypeScript, C#, Java, Scala, CUDA
                </li> 
                <li>
                  <strong>Technologies: </strong> Apache Spark, Hadoop, TensorFlow, PyTorch, MPI, OpenMP, OpenAcc, LLM, MLIR, Angular, React, .NET, 
                  Tizen, Android, Play, MySQL, MSSQL, Bash, Git
                </li>
              </ul>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Certificates</h3>
              <ul>
                <li>SWC Professional Certificate – Samsung R&amp;D Institute Bangladesh</li>
                <li>ITEE FE level-2 – IPA: Information-technology Promotion Agency, Japan</li>
              </ul>
            </Card>
            </div>
            <div style={{padding: '1em'}}>
            <Card style={{padding: '1em'}}>
              <h3>Hobbies</h3>
              <p>I love playing Soccer, Chess, Cricket. I often cook and try out different cuisines.
                I also love travelling and photography.
              </p>
            </Card>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
    <div style={{padding: '1.5em', textAlign: "center"}}>
      <footer>
        © 2025 Tanvir Ahmed Khan 
      </footer>
    </div>
    </div>
  );
}

export default App;
