import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, FileText, Scale, Shield, Users, AlertTriangle, Clock } from 'lucide-react';
import './TermsOfService.css';
import { useNavigate } from 'react-router-dom';

const TermsOfService = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Terms of Service - Pixel Horse';
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
    <div className={`terms-of-service-page ${isVisible ? 'visible' : ''}`}>
      <div className="terms-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg" alt="Terms of Service" className="hero-image" />
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
            <h1 className="hero-title">Terms of Service</h1>
            <p className="hero-subtitle">Legal terms and conditions</p>
            <p className="hero-description">
              Please read these terms carefully before using our services. 
              By using Pixel Horse services, you agree to these terms.
            </p>
            <div className="last-updated">
              <Clock className="clock-icon" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="terms-content">
        <div className="content-container">
          <div className="terms-summary">
            <h2>Terms Overview</h2>
            <div className="summary-grid">
              <div className="summary-card">
                <Scale className="summary-icon" />
                <h3>Fair Usage</h3>
                <p>Clear guidelines for using our services responsibly</p>
              </div>
              <div className="summary-card">
                <Shield className="summary-icon" />
                <h3>Protection</h3>
                <p>Terms that protect both you and Pixel Horse</p>
              </div>
              <div className="summary-card">
                <Users className="summary-icon" />
                <h3>User Rights</h3>
                <p>Your rights and responsibilities as a user</p>
              </div>
              <div className="summary-card">
                <AlertTriangle className="summary-icon" />
                <h3>Limitations</h3>
                <p>Important limitations and liability information</p>
              </div>
            </div>
          </div>

          <div className="terms-document">
            <div className="document-section">
              <h2>1. Acceptance of Terms</h2>
              
              <p>
                By accessing and using Pixel Horse services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <p>
                These Terms of Service ("Terms") govern your use of our website located at 
                www.pixelhorse.co (the "Service") operated by Pixel Horse ("us", "we", or "our").
              </p>
            </div>

            <div className="document-section">
              <h2>2. Description of Service</h2>
              
              <p>
                Pixel Horse provides comprehensive digital services including:
              </p>
              
              <ul>
                <li>3D Anamorphic Advertising and Visual Content Creation</li>
                <li>Digital Marketing Services and Campaign Management</li>
                <li>IT Solutions and Enterprise Software Development</li>
                <li>IoT Solutions and Smart Device Integration</li>
                <li>Digital Experience and SaaS Platform Development</li>
                <li>UI/UX Design Services</li>
                <li>Blockchain Development and Cryptocurrency Solutions</li>
              </ul>

              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services 
                at any time with or without notice.
              </p>
            </div>

            <div className="document-section">
              <h2>3. User Accounts and Registration</h2>
              
              <h3>Account Creation</h3>
              <p>
                To access certain features of our services, you may be required to create an account. 
                You agree to provide accurate, current, and complete information during registration.
              </p>

              <h3>Account Security</h3>
              <ul>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You agree to notify us immediately of any unauthorized use of your account</li>
                <li>We are not liable for any loss or damage arising from unauthorized account access</li>
              </ul>

              <h3>Account Termination</h3>
              <p>
                We reserve the right to terminate or suspend your account at our sole discretion, 
                without notice, for conduct that we believe violates these Terms or is harmful to 
                other users, us, or third parties.
              </p>
            </div>

            <div className="document-section">
              <h2>4. Acceptable Use Policy</h2>
              
              <p>You agree not to use our services to:</p>
              
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </div>

            <div className="document-section">
              <h2>5. Intellectual Property Rights</h2>
              
              <h3>Our Content</h3>
              <p>
                All content, features, and functionality of our services, including but not limited to 
                text, graphics, logos, images, and software, are owned by Pixel Horse and are protected 
                by copyright, trademark, and other intellectual property laws.
              </p>

              <h3>User Content</h3>
              <p>
                You retain ownership of any content you provide to us. However, by submitting content, 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, 
                modify, and distribute such content in connection with our services.
              </p>

              <h3>Third-Party Content</h3>
              <p>
                Our services may contain content provided by third parties. We do not control or 
                endorse such content and are not responsible for its accuracy or legality.
              </p>
            </div>

            <div className="document-section">
              <h2>6. Payment Terms</h2>
              
              <h3>Service Fees</h3>
              <p>
                Certain services may require payment of fees. All fees are non-refundable unless 
                otherwise specified in writing. We reserve the right to change our fees at any time.
              </p>

              <h3>Payment Processing</h3>
              <ul>
                <li>Payments are processed through secure third-party payment processors</li>
                <li>You agree to provide accurate payment information</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
              </ul>

              <h3>Refund Policy</h3>
              <p>
                Refunds are handled on a case-by-case basis. Please contact our support team 
                to discuss any refund requests.
              </p>
            </div>

            <div className="document-section">
              <h2>7. Privacy and Data Protection</h2>
              
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                and protect your information when you use our services. By using our services, 
                you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </div>

            <div className="document-section">
              <h2>8. Disclaimers and Limitation of Liability</h2>
              
              <h3>Service Availability</h3>
              <p>
                We strive to maintain high service availability but do not guarantee uninterrupted 
                access. Services may be temporarily unavailable due to maintenance, updates, or 
                technical issues.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Pixel Horse shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but 
                not limited to loss of profits, data, or business opportunities.
              </p>

              <h3>Warranty Disclaimer</h3>
              <p>
                Our services are provided "as is" without warranties of any kind, either express 
                or implied, including but not limited to warranties of merchantability, fitness 
                for a particular purpose, or non-infringement.
              </p>
            </div>

            <div className="document-section">
              <h2>9. Indemnification</h2>
              
              <p>
                You agree to indemnify, defend, and hold harmless Pixel Horse and its officers, 
                directors, employees, and agents from any claims, damages, losses, or expenses 
                arising from your use of our services or violation of these Terms.
              </p>
            </div>

            <div className="document-section">
              <h2>10. Governing Law and Jurisdiction</h2>
              
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                of the courts in Hyderabad, India.
              </p>
            </div>

            <div className="document-section">
              <h2>11. Changes to Terms</h2>
              
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of 
                any material changes by posting the updated Terms on our website and updating 
                the "Last updated" date. Your continued use of our services after such changes 
                constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="document-section">
              <h2>12. Contact Information</h2>
              
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong> legal@pixelhorse.in
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +91 99495 62299
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, 
                  Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029
                </div>
                <div className="contact-item">
                  <strong>Website:</strong> www.pixelhorse.co
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;