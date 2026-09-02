import React, { useState, useEffect } from 'react';
import { ArrowLeft, Award, Star, Trophy, Medal, Calendar, ExternalLink } from 'lucide-react';
import './Awards.css';

const Awards = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Awards - Pixel Horse';
  }, []);

  const awards = [
    {
      id: 1,
      title: 'Best Innovation in 3D Advertising',
      organization: 'AdTech Summit 2024',
      year: '2024',
      category: 'Innovation',
      description: 'Recognized for groundbreaking 3D anamorphic advertising technology that transforms traditional billboard advertising.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      type: 'gold',
      link: '#'
    },
    {
      id: 2,
      title: 'Startup of the Year',
      organization: 'Tech Excellence Awards',
      year: '2024',
      category: 'Business',
      description: 'Outstanding achievement in technology innovation and business growth in the advertising sector.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      type: 'gold',
      link: '#'
    },
    {
      id: 3,
      title: 'Best AI Implementation',
      organization: 'AI Innovation Conference',
      year: '2024',
      category: 'Technology',
      description: 'Excellence in implementing AI solutions for business automation and customer experience enhancement.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      type: 'silver',
      link: '#'
    },
    {
      id: 4,
      title: 'Creative Excellence Award',
      organization: 'Digital Marketing Awards',
      year: '2023',
      category: 'Creative',
      description: 'Outstanding creative work in digital marketing campaigns and visual storytelling.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      type: 'gold',
      link: '#'
    },
    {
      id: 5,
      title: 'Best User Experience Design',
      organization: 'UX Design Awards',
      year: '2023',
      category: 'Design',
      description: 'Recognition for exceptional user experience design in digital platforms and applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      type: 'silver',
      link: '#'
    },
    {
      id: 6,
      title: 'Rising Star Company',
      organization: 'Business Excellence Forum',
      year: '2023',
      category: 'Business',
      description: 'Acknowledgment of rapid growth and significant impact in the technology and advertising industry.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      type: 'bronze',
      link: '#'
    },
    {
      id: 7,
      title: 'Innovation in Blockchain Technology',
      organization: 'Blockchain Summit',
      year: '2023',
      category: 'Technology',
      description: 'Recognition for innovative blockchain solutions and cryptocurrency development.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      type: 'silver',
      link: '#'
    },
    {
      id: 8,
      title: 'Best Digital Transformation',
      organization: 'Enterprise Tech Awards',
      year: '2022',
      category: 'Technology',
      description: 'Excellence in helping businesses achieve digital transformation through innovative IT solutions.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      type: 'gold',
      link: '#'
    }
  ];

  const years = ['All', '2024', '2023', '2022'];
  const categories = ['All', 'Innovation', 'Business', 'Technology', 'Creative', 'Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAwards = awards.filter(award => {
    const yearMatch = selectedYear === 'All' || award.year === selectedYear;
    const categoryMatch = selectedCategory === 'All' || award.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const getAwardIcon = (type) => {
    switch (type) {
      case 'gold': return <Trophy className="award-type-icon gold" />;
      case 'silver': return <Medal className="award-type-icon silver" />;
      case 'bronze': return <Award className="award-type-icon bronze" />;
      default: return <Star className="award-type-icon" />;
    }
  };

  const awardStats = {
    total: awards.length,
    gold: awards.filter(a => a.type === 'gold').length,
    silver: awards.filter(a => a.type === 'silver').length,
    bronze: awards.filter(a => a.type === 'bronze').length
  };

  return (
    <div className={`awards-page ${isVisible ? 'visible' : ''}`}>
      <div className="awards-hero">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" alt="Awards" className="hero-image" />
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
            <h1 className="hero-title">Awards & Recognition</h1>
            <p className="hero-subtitle">Celebrating Excellence and Innovation</p>
            <p className="hero-description">
              Our commitment to innovation and excellence has been recognized by industry leaders 
              and prestigious organizations worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="awards-content">
        <div className="content-container">
          <div className="awards-stats">
            <div className="stat-card">
              <div className="stat-number">{awardStats.total}</div>
              <div className="stat-label">Total Awards</div>
            </div>
            <div className="stat-card gold-stat">
              <div className="stat-number">{awardStats.gold}</div>
              <div className="stat-label">Gold Awards</div>
            </div>
            <div className="stat-card silver-stat">
              <div className="stat-number">{awardStats.silver}</div>
              <div className="stat-label">Silver Awards</div>
            </div>
            <div className="stat-card bronze-stat">
              <div className="stat-number">{awardStats.bronze}</div>
              <div className="stat-label">Bronze Awards</div>
            </div>
          </div>

          <div className="awards-section">
            <h2>Our Achievements</h2>
            
            <div className="filters-container">
              <div className="filter-group">
                <label>Filter by Year:</label>
                <div className="filter-buttons">
                  {years.map(year => (
                    <button
                      key={year}
                      className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <label>Filter by Category:</label>
                <div className="filter-buttons">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="awards-grid">
              {filteredAwards.map((award, index) => (
                <div key={award.id} className={`award-card ${award.type}`} style={{ '--award-delay': `${index * 0.1}s` }}>
                  <div className="award-image-container">
                    <img src={award.image} alt={award.title} className="award-image" />
                    <div className="award-overlay">
                      <div className="award-type">
                        {getAwardIcon(award.type)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="award-content">
                    <div className="award-meta">
                      <span className="award-category">{award.category}</span>
                      <div className="award-year">
                        <Calendar className="year-icon" />
                        <span>{award.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="award-title">{award.title}</h3>
                    <p className="award-organization">{award.organization}</p>
                    <p className="award-description">{award.description}</p>
                    
                    <div className="award-actions">
                      <a href={award.link} className="view-award-btn">
                        <span>View Details</span>
                        <ExternalLink className="link-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recognition-section">
            <h2>Industry Recognition</h2>
            <div className="recognition-grid">
              <div className="recognition-card">
                <Trophy className="recognition-icon" />
                <h3>Innovation Leader</h3>
                <p>Recognized as a leading innovator in 3D advertising technology and digital transformation solutions.</p>
              </div>
              <div className="recognition-card">
                <Star className="recognition-icon" />
                <h3>Excellence in Design</h3>
                <p>Awarded for outstanding user experience design and creative excellence in digital platforms.</p>
              </div>
              <div className="recognition-card">
                <Medal className="recognition-icon" />
                <h3>Technology Pioneer</h3>
                <p>Acknowledged for pioneering work in AI implementation and blockchain technology development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;