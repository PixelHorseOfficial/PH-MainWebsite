import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Users, Star, Send, CheckCircle } from 'lucide-react';
import './Careers.css';

const Careers = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Careers - Pixel Horse';
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scale = 1 + scrollY * 0.0005;
const rotateX = scrollY * 0.05;
const opacity = Math.max(1 - scrollY * 0.001, 0.4);

  const jobOpenings = [
    {
      id: 1,
      title: '3D Animation Specialist',
      department: 'Creative',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description: 'Create stunning 3D anamorphic animations and visual effects for advertising campaigns.',
      requirements: [
        'Proficiency in 3D software (Blender, Maya, Cinema 4D)',
        'Experience with anamorphic projection techniques',
        'Strong understanding of visual effects and motion graphics',
        'Portfolio demonstrating 3D animation skills',
        'Knowledge of rendering engines and optimization'
      ],
      responsibilities: [
        'Design and create 3D anamorphic advertising content',
        'Collaborate with creative team on campaign concepts',
        'Optimize animations for various display formats',
        'Maintain quality standards and meet project deadlines',
        'Stay updated with latest 3D animation trends'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Technology',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹10-15 LPA',
      description: 'Develop scalable web applications and enterprise solutions using modern technologies.',
      requirements: [
        'Strong experience with React, Node.js, and databases',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Experience with microservices architecture',
        'Understanding of DevOps practices',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Design and implement APIs and microservices',
        'Collaborate with cross-functional teams',
        'Ensure code quality and performance optimization',
        'Participate in technical architecture decisions'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5-7 years',
      salary: '₹12-18 LPA',
      description: 'Lead digital marketing strategies and campaigns to drive growth and brand awareness.',
      requirements: [
        'Proven experience in digital marketing and campaign management',
        'Expertise in SEO, SEM, social media marketing',
        'Strong analytical skills and data-driven approach',
        'Experience with marketing automation tools',
        'Excellent communication and leadership skills'
      ],
      responsibilities: [
        'Develop and execute digital marketing strategies',
        'Manage multi-channel marketing campaigns',
        'Analyze performance metrics and optimize campaigns',
        'Lead and mentor marketing team members',
        'Collaborate with sales and product teams'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹7-11 LPA',
      description: 'Design intuitive and beautiful user interfaces for web and mobile applications.',
      requirements: [
        'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
        'Strong understanding of user-centered design principles',
        'Experience with prototyping and user testing',
        'Knowledge of front-end technologies (HTML, CSS, JavaScript)',
        'Portfolio showcasing UI/UX design projects'
      ],
      responsibilities: [
        'Create user interface designs and prototypes',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
        'Maintain design systems and style guides',
        'Present design concepts to stakeholders'
      ]
    },
    {
      id: 5,
      title: 'AI/ML Engineer',
      department: 'Technology',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹15-22 LPA',
      description: 'Develop AI and machine learning solutions for our Pixel Horse AI platform.',
      requirements: [
        'Strong background in machine learning and AI',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of natural language processing',
        'Understanding of cloud ML services',
        'PhD or Master\'s in Computer Science, AI, or related field'
      ],
      responsibilities: [
        'Design and implement ML models and algorithms',
        'Optimize AI systems for performance and scalability',
        'Research and evaluate new AI technologies',
        'Collaborate with product teams on AI features',
        'Mentor junior developers and data scientists'
      ]
    },
    {
      id: 6,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹10-16 LPA',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven track record in B2B sales and business development',
        'Experience in technology or advertising industry',
        'Strong networking and relationship building skills',
        'Excellent presentation and negotiation abilities',
        'MBA or equivalent business qualification preferred'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Develop strategic partnerships',
        'Prepare proposals and presentations',
        'Achieve sales targets and revenue goals'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Health insurance for employee and family',
    'Flexible working hours and remote work options',
    'Professional development and training opportunities',
    'Modern office with latest technology',
    'Team outings and company events',
    'Stock options for senior positions',
    'Paid time off and holidays'
  ];

  const departments = ['All', 'Creative', 'Technology', 'Marketing', 'Design', 'Sales'];
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className={`careers-page ${isVisible ? 'visible' : ''}`}>
      <div className="careers-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Careers" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <button 
            className="back-button"
            onClick={() => setCurrentSection('home')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Home</span>
          </button>
          
          <div className="hero-text">
            <h1 className="hero-title">Join Our Team</h1>
            <p className="hero-subtitle">Shape the Future of 3D Innovation</p>
            <p className="hero-description">
              Be part of a dynamic team that's revolutionizing advertising and technology. 
              We offer exciting opportunities to grow, learn, and make a real impact.
            </p>
          </div>
        </div>
      </div>

      <div className="careers-content">
        <div className="content-container">
          <div className="careers-stats">
            <div className="stat-card">
              <div className="stat-number">{jobOpenings.length}</div>
              <div className="stat-label">Open Positions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Departments</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Employee Satisfaction</div>
            </div>
          </div>

          <div className="benefits-section">
            <h2>Why Work With Us?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="jobs-section">
            <h2>Open Positions</h2>
            
            <div className="department-filter">
              {departments.map(dept => (
                <button
                  key={dept}
                  className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="jobs-grid">
              {filteredJobs.map((job, index) => (
                <div key={job.id} className="job-card" style={{ '--job-delay': `${index * 0.1}s` }}>
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                  
                  <div className="job-details">
                    <div className="job-detail">
                      <MapPin className="detail-icon" />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-detail">
                      <Clock className="detail-icon" />
                      <span>{job.type}</span>
                    </div>
                    <div className="job-detail">
                      <Briefcase className="detail-icon" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="job-detail">
                      <DollarSign className="detail-icon" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <button 
                    className="apply-button"
                    onClick={() => setSelectedJob(job)}
                  >
                    <Send />
                    <span>Apply Now</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {selectedJob && (
            <div className="job-modal-overlay" onClick={() => setSelectedJob(null)}>
              <div className="job-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h2>{selectedJob.title}</h2>
                  <button className="close-button" onClick={() => setSelectedJob(null)}>×</button>
                </div>
                
                <div className="modal-content">
                  <div className="job-info">
                    <div className="info-item">
                      <strong>Department:</strong> {selectedJob.department}
                    </div>
                    <div className="info-item">
                      <strong>Location:</strong> {selectedJob.location}
                    </div>
                    <div className="info-item">
                      <strong>Experience:</strong> {selectedJob.experience}
                    </div>
                    <div className="info-item">
                      <strong>Salary:</strong> {selectedJob.salary}
                    </div>
                  </div>
                  
                  <div className="job-section">
                    <h3>Requirements</h3>
                    <ul>
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-section">
                    <h3>Responsibilities</h3>
                    <ul>
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-actions">
                    <button className="apply-modal-button">
                      <Send />
                      <span>Apply for this Position</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;