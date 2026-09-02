import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Users, Star, Award, Linkedin, Twitter, Mail, MapPin, Calendar, TrendingUp } from 'lucide-react';
import './OurTeam.css';

const OurTeam = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Our Team - Pixel Horse';
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

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      department: 'Leadership',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: 'Visionary leader with 15+ years in 3D design and digital innovation. Founded Pixel Horse with a mission to revolutionize advertising.',
      skills: ['3D Design', 'Business Strategy', 'Innovation', 'Leadership'],
      experience: '15+ Years',
      location: 'Hyderabad, India',
      joinDate: '2019',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@pixelhorse.in'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Technical Director',
      department: 'Technology',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      bio: 'Expert in AI systems and advanced technology implementations. Leads our technical innovation and development teams.',
      skills: ['AI Development', 'System Architecture', 'Cloud Computing', 'DevOps'],
      experience: '12+ Years',
      location: 'Hyderabad, India',
      joinDate: '2019',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@pixelhorse.in'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      department: 'Creative',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Award-winning creative director specializing in 3D anamorphic advertising and immersive brand experiences.',
      skills: ['3D Animation', 'Creative Strategy', 'Brand Design', 'Visual Effects'],
      experience: '10+ Years',
      location: 'Hyderabad, India',
      joinDate: '2020',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@pixelhorse.in'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      department: 'Marketing',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: 'Digital marketing expert with proven track record in growth-driven campaigns and performance optimization.',
      skills: ['Digital Marketing', 'SEO/SEM', 'Analytics', 'Growth Strategy'],
      experience: '8+ Years',
      location: 'Hyderabad, India',
      joinDate: '2020',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@pixelhorse.in'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      department: 'Technology',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Full-stack developer specializing in enterprise solutions, blockchain development, and scalable architectures.',
      skills: ['Full-Stack Development', 'Blockchain', 'Enterprise Software', 'Database Design'],
      experience: '9+ Years',
      location: 'Hyderabad, India',
      joinDate: '2021',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@pixelhorse.in'
      }
    },
    {
      name: 'Anita Patel',
      role: 'UI/UX Director',
      department: 'Design',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      bio: 'User experience expert creating intuitive and beautiful interfaces that drive engagement and conversion.',
      skills: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'],
      experience: '7+ Years',
      location: 'Hyderabad, India',
      joinDate: '2021',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'anita@pixelhorse.in'
      }
    }
  ];

  const departments = ['All', 'Leadership', 'Technology', 'Creative', 'Marketing', 'Design'];
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredTeam = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className={`our-team-page ${isVisible ? 'visible' : ''}`}>
      <div className="team-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Our Team" className="hero-image" />
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
            <h1 className="hero-title">Meet Our Team</h1>
            <p className="hero-subtitle">The Creative Minds Behind Pixel Horse</p>
            <p className="hero-description">
              Our diverse team of innovators, creators, and technologists work together 
              to push the boundaries of 3D advertising and digital experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="team-content">
        <div className="content-container">
          <div className="team-stats">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Departments</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>

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

          <div className="team-grid">
            {filteredTeam.map((member, index) => (
              <div key={index} className="team-member-card" style={{ '--member-delay': `${index * 0.1}s` }}>
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href={member.social.linkedin} className="social-link">
                        <Linkedin />
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <Twitter />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <Mail />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-department">{member.department}</p>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-details">
                    <div className="detail-item">
                      <TrendingUp className="detail-icon" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      <span>{member.location}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar className="detail-icon" />
                      <span>Since {member.joinDate}</span>
                    </div>
                  </div>
                  
                  <div className="member-skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="join-team-cta">
            <h2>Join Our Team</h2>
            <p>Ready to be part of something extraordinary? We're always looking for talented individuals to join our mission.</p>
            <button 
              className="cta-button"
              onClick={() => setCurrentSection('careers')}
            >
              <Users />
              <span>View Open Positions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;