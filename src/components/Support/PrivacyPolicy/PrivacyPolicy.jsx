import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Clock } from 'lucide-react';
import './PrivacyPolicy.css';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Privacy Policy - Pixel Horse';
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

  const lastUpdated = 'January 15, 2024';

  return (
    <div className={`privacy-policy-page ${isVisible ? 'visible' : ''}`}>
      <div className="privacy-hero">
        <div
          ref={heroRef}
          className="hero-background"
          style={{
            transform: `scale(${scale}) rotateX(${rotateX}deg)`,
            opacity: opacity,
            transition: "transform 0.1s linear"
          }}
        >
          <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg" alt="Privacy Policy" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => navigate('/homepage')}
            >
            <ArrowLeft className="back-icon" />
            <span>Back to Home</span>
          </button>
          
          <div className="hero-text">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">Your privacy is our priority</p>
            <p className="hero-description">
              Learn how we collect, use, and protect your personal information 
              when you use our services.
            </p>
            <div className="last-updated">
              <Clock className="clock-icon" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="privacy-content">
        <div className="content-container">
          <div className="privacy-summary">
            <h2>Privacy at a Glance</h2>
            <div className="summary-grid">
              <div className="summary-card">
                <Shield className="summary-icon" />
                <h3>Data Protection</h3>
                <p>We use industry-standard security measures to protect your data</p>
              </div>
              <div className="summary-card">
                <Eye className="summary-icon" />
                <h3>Transparency</h3>
                <p>We're clear about what data we collect and how we use it</p>
              </div>
              <div className="summary-card">
                <Lock className="summary-icon" />
                <h3>Your Control</h3>
                <p>You have control over your personal information and privacy settings</p>
              </div>
              <div className="summary-card">
                <Users className="summary-icon" />
                <h3>No Selling</h3>
                <p>We never sell your personal information to third parties</p>
              </div>
            </div>
          </div>

          <div className="privacy-document">
            <div className="document-section">
              <h2>1. Information We Collect</h2>
              
              <h3>Personal Information</h3>
              <p>
                When you use our services, we may collect personal information that you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communications with us (emails, support tickets, feedback)</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                We automatically collect certain information when you visit our website or use our services:
              </p>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location information (if you enable location services)</li>
              </ul>
            </div>

            <div className="document-section">
              <h2>2. How We Use Your Information</h2>
              
              <p>We use the information we collect for the following purposes:</p>
              
              <h3>Service Provision</h3>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send technical notices and security alerts</li>
              </ul>

              <h3>Communication</h3>
              <ul>
                <li>Send you updates about our services and company news</li>
                <li>Respond to your comments and questions</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3>Analytics and Improvement</h3>
              <ul>
                <li>Analyze usage patterns to improve our services</li>
                <li>Conduct research and development</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </div>

            <div className="document-section">
              <h2>3. Information Sharing and Disclosure</h2>
              
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>

              <h3>Service Providers</h3>
              <p>
                We may share your information with trusted third-party service providers who assist us 
                in operating our website, conducting our business, or serving our users, provided they 
                agree to keep this information confidential.
              </p>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information when we believe in good faith that disclosure is 
                necessary to:
              </p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend our rights or property</li>
                <li>Prevent or investigate possible wrongdoing</li>
                <li>Protect the personal safety of users or the public</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be 
                transferred as part of that transaction.
              </p>
            </div>

            <div className="document-section">
              <h2>4. Data Security</h2>
              
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your personal information, 
                we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="document-section">
              <h2>5. Your Rights and Choices</h2>
              
              <p>You have the following rights regarding your personal information:</p>

              <h3>Access and Portability</h3>
              <ul>
                <li>Request access to your personal information</li>
                <li>Receive a copy of your data in a portable format</li>
              </ul>

              <h3>Correction and Deletion</h3>
              <ul>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
              </ul>

              <h3>Marketing Communications</h3>
              <ul>
                <li>Opt out of marketing emails at any time</li>
                <li>Update your communication preferences</li>
              </ul>

              <h3>Cookies and Tracking</h3>
              <ul>
                <li>Control cookie settings through your browser</li>
                <li>Opt out of certain tracking technologies</li>
              </ul>
            </div>

            <div className="document-section">
              <h2>6. Data Retention</h2>
              
              <p>
                We retain your personal information for as long as necessary to provide our services 
                and fulfill the purposes outlined in this privacy policy. We may also retain and use 
                your information to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <p>
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="document-section">
              <h2>7. International Data Transfers</h2>
              
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are conducted in accordance with applicable data protection 
                laws and that appropriate safeguards are in place to protect your information.
              </p>
            </div>

            <div className="document-section">
              <h2>8. Children's Privacy</h2>
              
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete 
                such information.
              </p>
            </div>

            <div className="document-section">
              <h2>9. Changes to This Privacy Policy</h2>
              
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "Last updated" date. 
                We encourage you to review this privacy policy periodically for any changes.
              </p>
            </div>

            <div className="document-section">
              <h2>10. Contact Us</h2>
              
              <p>
                If you have any questions about this privacy policy or our privacy practices, 
                please contact us:
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong> privacy@pixelhorse.in
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +91 99495 62299
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, 
                  Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;