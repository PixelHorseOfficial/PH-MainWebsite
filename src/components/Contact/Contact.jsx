// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
// // // // import './Contact.css';

// // // // const Contact = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     company: '',
// // // //     service: '',
// // // //     message: ''
// // // //   });
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitStatus, setSubmitStatus] = useState(null);
// // // //   const [inView, setInView] = useState(false);
// // // //   const contactRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           setInView(true);
// // // //         }
// // // //       },
// // // //       { threshold: 0.2 }
// // // //     );

// // // //     if (contactRef.current) {
// // // //       observer.observe(contactRef.current);
// // // //     }

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   const handleInputChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
    
// // // //     // Simulate form submission
// // // //     setTimeout(() => {
// // // //       setIsSubmitting(false);
// // // //       setSubmitStatus('success');
// // // //       setFormData({
// // // //         name: '',
// // // //         email: '',
// // // //         company: '',
// // // //         service: '',
// // // //         message: ''
// // // //       });
      
// // // //       setTimeout(() => {
// // // //         setSubmitStatus(null);
// // // //       }, 5000);
// // // //     }, 2000);
// // // //   };

// // // //   const contactInfo = [
// // // //     {
// // // //       icon: <Mail />,
// // // //       title: 'Email Us',
// // // //       info: 'hello@pixelhorse.com',
// // // //       description: 'Send us an email anytime',
// // // //       color: '#00FFFF',
// // // //       gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
// // // //     },
// // // //     {
// // // //       icon: <Phone />,
// // // //       title: 'Call Us',
// // // //       info: '+1 (555) 123-4567',
// // // //       description: 'Mon-Fri from 8am to 5pm',
// // // //       color: '#FF00FF',
// // // //       gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)'
// // // //     },
// // // //     {
// // // //       icon: <MapPin />,
// // // //       title: 'Visit Us',
// // // //       info: '123 Innovation Street, Tech City',
// // // //       description: 'Come visit our office',
// // // //       color: '#FF6600',
// // // //       gradient: 'linear-gradient(135deg, #FF6600, #FF0000)'
// // // //     },
// // // //     {
// // // //       icon: <Clock />,
// // // //       title: 'Working Hours',
// // // //       info: 'Mon-Fri: 8AM - 6PM',
// // // //       description: 'Weekend consultations available',
// // // //       color: '#008080',
// // // //       gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
// // // //     }
// // // //   ];

// // // //   const services = [
// // // //     '3D Anamorphic Advertising',
// // // //     'IT Services & Solutions',
// // // //     'Digital Marketing',
// // // //     'AI Systems & Prompt Engine',
// // // //     'Other'
// // // //   ];

// // // //   const features = [
// // // //     { icon: <MessageCircle />, text: 'Quick Response Time' },
// // // //     { icon: <Globe />, text: 'Global Support' },
// // // //     { icon: <Star />, text: 'Expert Consultation' },
// // // //     { icon: <CheckCircle />, text: 'Free Initial Assessment' }
// // // //   ];

// // // //   return (
// // // //     <section className={`contact ${inView ? 'in-view' : ''}`} ref={contactRef}>
// // // //       <div className="contact-background">
// // // //         <div className="bg-gradient gradient-1"></div>
// // // //         <div className="bg-gradient gradient-2"></div>
// // // //         <div className="bg-gradient gradient-3"></div>
// // // //       </div>

// // // //       <div className="contact-container">
// // // //         <div className="contact-header">
// // // //           <div className="header-badge">
// // // //             <Send className="badge-icon" />
// // // //             <span>Get In Touch</span>
// // // //           </div>
// // // //           <h2 className="contact-title">Let's Create Something Amazing</h2>
// // // //           <p className="contact-subtitle">
// // // //             Ready to transform your vision into reality? We're here to help you 
// // // //             every step of the way with our innovative solutions.
// // // //           </p>
// // // //         </div>

// // // //         <div className="contact-content">
// // // //           <div className="contact-info-section">
// // // //             <div className="info-header">
// // // //               <h3 className="info-title">Get in Touch</h3>
// // // //               <p className="info-description">
// // // //                 We'd love to hear from you. Choose the best way to reach us.
// // // //               </p>
// // // //             </div>

// // // //             <div className="contact-info-grid">
// // // //               {contactInfo.map((item, index) => (
// // // //                 <div
// // // //                   key={index}
// // // //                   className="info-card"
// // // //                   style={{
// // // //                     '--info-color': item.color,
// // // //                     '--info-gradient': item.gradient,
// // // //                     '--info-delay': `${index * 0.2}s`
// // // //                   }}
// // // //                 >
// // // //                   <div className="info-icon-container">
// // // //                     <div className="info-icon">{item.icon}</div>
// // // //                     <div className="info-glow"></div>
// // // //                   </div>
// // // //                   <div className="info-content">
// // // //                     <h4 className="info-title-card">{item.title}</h4>
// // // //                     <p className="info-main">{item.info}</p>
// // // //                     <p className="info-desc">{item.description}</p>
// // // //                   </div>
// // // //                   <div className="info-overlay"></div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="contact-features">
// // // //               <h4 className="features-title">Why Choose Us?</h4>
// // // //               <div className="features-grid">
// // // //                 {features.map((feature, index) => (
// // // //                   <div key={index} className="feature-item">
// // // //                     <div className="feature-icon">{feature.icon}</div>
// // // //                     <span className="feature-text">{feature.text}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="contact-form-section">
// // // //             <div className="form-container">
// // // //               <div className="form-header">
// // // //                 <h3 className="form-title">Send us a Message</h3>
// // // //                 <p className="form-description">
// // // //                   Fill out the form below and we'll get back to you within 24 hours.
// // // //                 </p>
// // // //               </div>

// // // //               <form onSubmit={handleSubmit} className="contact-form">
// // // //                 <div className="form-row">
// // // //                   <div className="form-group">
// // // //                     <label htmlFor="name" className="form-label">Full Name *</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="name"
// // // //                       name="name"
// // // //                       value={formData.name}
// // // //                       onChange={handleInputChange}
// // // //                       required
// // // //                       className="form-input"
// // // //                       placeholder="Your full name"
// // // //                     />
// // // //                   </div>
// // // //                   <div className="form-group">
// // // //                     <label htmlFor="email" className="form-label">Email Address *</label>
// // // //                     <input
// // // //                       type="email"
// // // //                       id="email"
// // // //                       name="email"
// // // //                       value={formData.email}
// // // //                       onChange={handleInputChange}
// // // //                       required
// // // //                       className="form-input"
// // // //                       placeholder="your@email.com"
// // // //                     />
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="form-row">
// // // //                   <div className="form-group">
// // // //                     <label htmlFor="company" className="form-label">Company</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="company"
// // // //                       name="company"
// // // //                       value={formData.company}
// // // //                       onChange={handleInputChange}
// // // //                       className="form-input"
// // // //                       placeholder="Your company name"
// // // //                     />
// // // //                   </div>
// // // //                   <div className="form-group">
// // // //                     <label htmlFor="service" className="form-label">Service Interested In</label>
// // // //                     <select
// // // //                       id="service"
// // // //                       name="service"
// // // //                       value={formData.service}
// // // //                       onChange={handleInputChange}
// // // //                       className="form-select"
// // // //                     >
// // // //                       <option value="">Select a service</option>
// // // //                       {services.map((service, index) => (
// // // //                         <option key={index} value={service}>{service}</option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="form-group">
// // // //                   <label htmlFor="message" className="form-label">Message *</label>
// // // //                   <textarea
// // // //                     id="message"
// // // //                     name="message"
// // // //                     value={formData.message}
// // // //                     onChange={handleInputChange}
// // // //                     required
// // // //                     rows="6"
// // // //                     className="form-textarea"
// // // //                     placeholder="Tell us about your project..."
// // // //                   ></textarea>
// // // //                 </div>

// // // //                 <button 
// // // //                   type="submit" 
// // // //                   className={`form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
// // // //                   disabled={isSubmitting}
// // // //                 >
// // // //                   <div className="submit-content">
// // // //                     {isSubmitting ? (
// // // //                       <>
// // // //                         <div className="loading-spinner"></div>
// // // //                         <span>Sending Message...</span>
// // // //                       </>
// // // //                     ) : submitStatus === 'success' ? (
// // // //                       <>
// // // //                         <CheckCircle className="submit-icon" />
// // // //                         <span>Message Sent Successfully!</span>
// // // //                       </>
// // // //                     ) : (
// // // //                       <>
// // // //                         <Send className="submit-icon" />
// // // //                         <span>Send Message</span>
// // // //                         <ArrowRight className="submit-arrow" />
// // // //                       </>
// // // //                     )}
// // // //                   </div>
// // // //                 </button>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
// // // import './Contact.css';

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     company: '',
// // //     service: '',
// // //     message: ''
// // //   });
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [submitStatus, setSubmitStatus] = useState(null);
// // //   const [inView, setInView] = useState(false);
// // //   const contactRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setInView(true);
// // //         }
// // //       },
// // //       { threshold: 0.2 }
// // //     );

// // //     if (contactRef.current) {
// // //       observer.observe(contactRef.current);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const handleInputChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
    
// // //     // Simulate form submission
// // //     setTimeout(() => {
// // //       setIsSubmitting(false);
// // //       setSubmitStatus('success');
// // //       setFormData({
// // //         name: '',
// // //         email: '',
// // //         company: '',
// // //         service: '',
// // //         message: ''
// // //       });
      
// // //       setTimeout(() => {
// // //         setSubmitStatus(null);
// // //       }, 5000);
// // //     }, 2000);
// // //   };

// // //   const contactInfo = [
// // //     {
// // //       icon: <Mail />,
// // //       title: 'Email Us',
// // //       info: 'hello@pixelhorse.com',
// // //       description: 'Send us an email anytime',
// // //       color: '#00FFFF',
// // //       gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
// // //     },
// // //     {
// // //       icon: <Phone />,
// // //       title: 'Call Us',
// // //       info: '+91 99495 62299',
// // //       description: 'Mon-Fri from 9am to 6pm IST',
// // //       color: '#FF00FF',
// // //       gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)'
// // //     },
// // //     {
// // //       icon: <MapPin />,
// // //       title: 'Visit Us',
// // //       info: '3-5-1094/14/1, Narayanaguda, Hyderabad, 500029',
// // //       description: 'Come visit our office',
// // //       color: '#FF6600',
// // //       gradient: 'linear-gradient(135deg, #FF6600, #FF0000)'
// // //     },
// // //     {
// // //       icon: <Clock />,
// // //       title: 'Working Hours',
// // //       info: 'Mon-Fri: 9AM - 6PM IST',
// // //       description: 'Weekend consultations available',
// // //       color: '#008080',
// // //       gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
// // //     }
// // //   ];

// // //   const services = [
// // //     '3D Anamorphic Advertising',
// // //     'IT Services & Solutions',
// // //     'Digital Marketing',
// // //     'AI Systems & Prompt Engine',
// // //     'Other'
// // //   ];

// // //   const features = [
// // //     { icon: <MessageCircle />, text: 'Quick Response Time' },
// // //     { icon: <Globe />, text: 'Global Support' },
// // //     { icon: <Star />, text: 'Expert Consultation' },
// // //     { icon: <CheckCircle />, text: 'Free Initial Assessment' }
// // //   ];

// // //   return (
// // //     <section className={`contact ${inView ? 'in-view' : ''}`} ref={contactRef}>
// // //       <div className="contact-background">
// // //         <div className="bg-gradient gradient-1"></div>
// // //         <div className="bg-gradient gradient-2"></div>
// // //         <div className="bg-gradient gradient-3"></div>
// // //       </div>

// // //       <div className="contact-container">
// // //         <div className="contact-header">
// // //           <div className="header-badge">
// // //             <Send className="badge-icon" />
// // //             <span>Get In Touch</span>
// // //           </div>
// // //           <h2 className="contact-title">Let's Build Your Vision</h2>
// // //           <p className="contact-subtitle">
// // //             Transform your ideas into reality with our cutting-edge solutions. Contact us today!
// // //           </p>
// // //         </div>

// // //         <div className="contact-content">
// // //           <div className="contact-info-section">
// // //             <div className="info-header">
// // //               <h3 className="info-title">Connect With Us</h3>
// // //               <p className="info-description">
// // //                 Reach out through your preferred channel.
// // //               </p>
// // //             </div>

// // //             <div className="contact-info-grid">
// // //               {contactInfo.map((item, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="info-card"
// // //                   style={{
// // //                     '--info-color': item.color,
// // //                     '--info-gradient': item.gradient,
// // //                     '--info-delay': `${index * 0.2}s`
// // //                   }}
// // //                 >
// // //                   <div className="info-icon-container">
// // //                     <div className="info-icon">{item.icon}</div>
// // //                     <div className="info-glow"></div>
// // //                   </div>
// // //                   <div className="info-content">
// // //                     <h4 className="info-title-card">{item.title}</h4>
// // //                     <p className="info-main">{item.info}</p>
// // //                     <p className="info-desc">{item.description}</p>
// // //                   </div>
// // //                   <div className="info-overlay"></div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="contact-features">
// // //               <h4 className="features-title">Why Partner With Us?</h4>
// // //               <div className="features-grid">
// // //                 {features.map((feature, index) => (
// // //                   <div key={index} className="feature-item">
// // //                     <div className="feature-icon">{feature.icon}</div>
// // //                     <span className="feature-text">{feature.text}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="contact-form-section">
// // //             <div className="form-container">
// // //               <div className="form-header">
// // //                 <h3 className="form-title">Send Us a Message</h3>
// // //                 <p className="form-description">
// // //                   Share your project details, and we’ll respond within 24 hours.
// // //                 </p>
// // //               </div>

// // //               <form onSubmit={handleSubmit} className="contact-form">
// // //                 <div className="form-row">
// // //                   <div className="form-group">
// // //                     <label htmlFor="name" className="form-label">Full Name *</label>
// // //                     <input
// // //                       type="text"
// // //                       id="name"
// // //                       name="name"
// // //                       value={formData.name}
// // //                       onChange={handleInputChange}
// // //                       required
// // //                       className="form-input"
// // //                       placeholder="Your full name"
// // //                     />
// // //                   </div>
// // //                   <div className="form-group">
// // //                     <label htmlFor="email" className="form-label">Email Address *</label>
// // //                     <input
// // //                       type="email"
// // //                       id="email"
// // //                       name="email"
// // //                       value={formData.email}
// // //                       onChange={handleInputChange}
// // //                       required
// // //                       className="form-input"
// // //                       placeholder="your@email.com"
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div className="form-row">
// // //                   <div className="form-group">
// // //                     <label htmlFor="company" className="form-label">Company</label>
// // //                     <input
// // //                       type="text"
// // //                       id="company"
// // //                       name="company"
// // //                       value={formData.company}
// // //                       onChange={handleInputChange}
// // //                       className="form-input"
// // //                       placeholder="Your company name"
// // //                     />
// // //                   </div>
// // //                   <div className="form-group">
// // //                     <label htmlFor="service" className="form-label">Service Interested In</label>
// // //                     <select
// // //                       id="service"
// // //                       name="service"
// // //                       value={formData.service}
// // //                       onChange={handleInputChange}
// // //                       className="form-select"
// // //                     >
// // //                       <option value="">Select a service</option>
// // //                       {services.map((service, index) => (
// // //                         <option key={index} value={service}>{service}</option>
// // //                       ))}
// // //                     </select>
// // //                   </div>
// // //                 </div>

// // //                 <div className="form-group">
// // //                   <label htmlFor="message" className="form-label">Message *</label>
// // //                   <textarea
// // //                     id="message"
// // //                     name="message"
// // //                     value={formData.message}
// // //                     onChange={handleInputChange}
// // //                     required
// // //                     rows="6"
// // //                     className="form-textarea"
// // //                     placeholder="Tell us about your project..."
// // //                   ></textarea>
// // //                 </div>

// // //                 <button 
// // //                   type="submit" 
// // //                   className={`form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
// // //                   disabled={isSubmitting}
// // //                 >
// // //                   <div className="submit-content">
// // //                     {isSubmitting ? (
// // //                       <>
// // //                         <div className="loading-spinner"></div>
// // //                         <span>Sending Message...</span>
// // //                       </>
// // //                     ) : submitStatus === 'success' ? (
// // //                       <>
// // //                         <CheckCircle className="submit-icon" />
// // //                         <span>Message Sent Successfully!</span>
// // //                       </>
// // //                     ) : (
// // //                       <>
// // //                         <Send className="submit-icon" />
// // //                         <span>Send Message</span>
// // //                         <ArrowRight className="submit-arrow" />
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Contact;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
// // import './Contact.css';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     mobile: '',
// //     company: '',
// //     service: '',
// //     otherService: '',
// //     message: ''
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitStatus, setSubmitStatus] = useState(null);
// //   const [inView, setInView] = useState(false);
// //   const contactRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setInView(true);
// //         }
// //       },
// //       { threshold: 0.2 }
// //     );

// //     if (contactRef.current) {
// //       observer.observe(contactRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     // Simulate form submission
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       setSubmitStatus('success');
// //       setFormData({
// //         name: '',
// //         email: '',
// //         mobile: '',
// //         company: '',
// //         service: '',
// //         otherService: '',
// //         message: ''
// //       });
      
// //       setTimeout(() => {
// //         setSubmitStatus(null);
// //       }, 5000);
// //     }, 2000);
// //   };

// //   const contactInfo = [
// //     {
// //       icon: <Mail />,
// //       title: 'Email Us',
// //       info: 'admin@pixelhorse.in',
// //       description: 'Send us an email anytime',
// //       color: '#00FFFF',
// //       gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
// //     },
// //     {
// //       icon: <Phone />,
// //       title: 'Call Us',
// //       info: '+91 99495 62299',
// //       description: 'Mon-Fri from 10am to 6pm IST',
// //       color: '#FF00FF',
// //       gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)'
// //     },
// //     {
// //       icon: <MapPin />,
// //       title: 'Visit Us',
// //       info: '3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029',
// //       description: 'Come visit our office',
// //       color: '#FF6600',
// //       gradient: 'linear-gradient(135deg, #FF6600, #FF0000)'
// //     },
// //     {
// //       icon: <Clock />,
// //       title: 'Working Hours',
// //       info: 'Mon-Fri: 10AM - 6PM IST',
// //       description: 'Weekend consultations available',
// //       color: '#008080',
// //       gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
// //     }
// //   ];

// //   const services = [
// //     '3D Anamorphic Advertising',
// //     'IT Services & Solutions',
// //     'Digital Marketing',
// //     'AI Systems & Prompt Engine',
// //     'Other'
// //   ];

// //   const features = [
// //     { icon: <MessageCircle />, text: 'Quick Response Time' },
// //     { icon: <Globe />, text: 'Global Support' },
// //     { icon: <Star />, text: 'Expert Consultation' },
// //     { icon: <CheckCircle />, text: 'Free Initial Assessment' }
// //   ];

// //   return (
// //     <section className={`pxh-contact ${inView ? 'in-view' : ''}`} ref={contactRef}>
// //       <div className="pxh-contact-background">
// //         <div className="pxh-bg-gradient pxh-gradient-1"></div>
// //         <div className="pxh-bg-gradient pxh-gradient-2"></div>
// //         <div className="pxh-bg-gradient pxh-gradient-3"></div>
// //       </div>

// //       <div className="pxh-contact-container">
// //         <div className="pxh-contact-header">
// //           <div className="pxh-header-badge">
// //             <Send className="pxh-badge-icon" />
// //             <span>Get In Touch</span>
// //           </div>
// //           <h2 className="pxh-contact-title">Let's Build Your Vision</h2>
// //           <p className="pxh-contact-subtitle">
// //             Transform your ideas into reality with our cutting-edge solutions. Contact us today!
// //           </p>
// //         </div>

// //         <div className="pxh-contact-content">
// //           <div className="pxh-contact-info-section">
// //             <div className="pxh-info-header">
// //               <h3 className="pxh-info-title">Connect With Us</h3>
// //               <p className="pxh-info-description">
// //                 Reach out through your preferred channel.
// //               </p>
// //             </div>

// //             <div className="pxh-contact-info-grid">
// //               {contactInfo.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="pxh-info-card"
// //                   style={{
// //                     '--info-color': item.color,
// //                     '--info-gradient': item.gradient,
// //                     '--info-delay': `${index * 0.2}s`
// //                   }}
// //                 >
// //                   <div className="pxh-info-icon-container">
// //                     <div className="pxh-info-icon">{item.icon}</div>
// //                     <div className="pxh-info-glow"></div>
// //                   </div>
// //                   <div className="pxh-info-content">
// //                     <h4 className="pxh-info-title-card">{item.title}</h4>
// //                     <p className="pxh-info-main">{item.info}</p>
// //                     <p className="pxh-info-desc">{item.description}</p>
// //                   </div>
// //                   <div className="pxh-info-overlay"></div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="pxh-contact-features">
// //               <h4 className="pxh-features-title">Why Partner With Us?</h4>
// //               <div className="pxh-features-grid">
// //                 {features.map((feature, index) => (
// //                   <div key={index} className="pxh-feature-item">
// //                     <div className="pxh-feature-icon">{feature.icon}</div>
// //                     <span className="pxh-feature-text">{feature.text}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="pxh-contact-form-section">
// //             <div className="pxh-form-container">
// //               <div className="pxh-form-header">
// //                 <h3 className="pxh-form-title">Send Us a Message</h3>
// //                 <p className="pxh-form-description">
// //                   Share your project details, and we’ll respond within 24 hours.
// //                 </p>
// //               </div>

// //               <form onSubmit={handleSubmit} className="pxh-contact-form">
// //                 <div className="pxh-form-row">
// //                   <div className="pxh-form-group">
// //                     <label htmlFor="name" className="pxh-form-label">Full Name *</label>
// //                     <input
// //                       type="text"
// //                       id="name"
// //                       name="name"
// //                       value={formData.name}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="pxh-form-input"
// //                       placeholder="Your full name"
// //                     />
// //                   </div>
// //                   <div className="pxh-form-group">
// //                     <label htmlFor="email" className="pxh-form-label">Email Address *</label>
// //                     <input
// //                       type="email"
// //                       id="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="pxh-form-input"
// //                       placeholder="your@email.com"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="pxh-form-row">
// //                   <div className="pxh-form-group">
// //                     <label htmlFor="mobile" className="pxh-form-label">Mobile Number</label>
// //                     <input
// //                       type="tel"
// //                       id="mobile"
// //                       name="mobile"
// //                       value={formData.mobile}
// //                       onChange={handleInputChange}
// //                       className="pxh-form-input"
// //                       placeholder="Your mobile number"
// //                     />
// //                   </div>
// //                   <div className="pxh-form-group">
// //                     <label htmlFor="company" className="pxh-form-label">Company</label>
// //                     <input
// //                       type="text"
// //                       id="company"
// //                       name="company"
// //                       value={formData.company}
// //                       onChange={handleInputChange}
// //                       className="pxh-form-input"
// //                       placeholder="Your company name"
// //                     />
// //                   </div>
// //                   <div className="pxh-form-group">
// //                     <label htmlFor="service" className="pxh-form-label">Service Interested In</label>
// //                     <select
// //                       id="service"
// //                       name="service"
// //                       value={formData.service}
// //                       onChange={handleInputChange}
// //                       className="pxh-form-select"
// //                     >
// //                       <option value="">Select a service</option>
// //                       {services.map((service, index) => (
// //                         <option key={index} value={service}>{service}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 </div>

// //                 {formData.service === 'Other' && (
// //                   <div className="pxh-form-row">
// //                     <div className="pxh-form-group">
// //                       <label htmlFor="otherService" className="pxh-form-label">Specify Other Service</label>
// //                       <input
// //                         type="text"
// //                         id="otherService"
// //                         name="otherService"
// //                         value={formData.otherService}
// //                         onChange={handleInputChange}
// //                         className="pxh-form-input"
// //                         placeholder="Please specify the service"
// //                       />
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="pxh-form-group">
// //                   <label htmlFor="message" className="pxh-form-label">Message *</label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     value={formData.message}
// //                     onChange={handleInputChange}
// //                     required
// //                     rows="6"
// //                     className="pxh-form-textarea"
// //                     placeholder="Tell us about your project..."
// //                   ></textarea>
// //                 </div>

// //                 <button 
// //                   type="submit" 
// //                   className={`pxh-form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
// //                   disabled={isSubmitting}
// //                 >
// //                   <div className="pxh-submit-content">
// //                     {isSubmitting ? (
// //                       <>
// //                         <div className="pxh-loading-spinner"></div>
// //                         <span>Sending Message...</span>
// //                       </>
// //                     ) : submitStatus === 'success' ? (
// //                       <>
// //                         <CheckCircle className="pxh-submit-icon" />
// //                         <span>Message Sent Successfully!</span>
// //                       </>
// //                     ) : (
// //                       <>
// //                         <Send className="pxh-submit-icon" />
// //                         <span>Send Message</span>
// //                         <ArrowRight className="pxh-submit-arrow" />
// //                       </>
// //                     )}
// //                   </div>
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import React, { useState, useRef, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
// import emailjs from 'emailjs-com';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     company: '',
//     service: '',
//     otherService: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [inView, setInView] = useState(false);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Prepare template parameters for EmailJS
//     const templateParams = {
//       title: formData.service || 'General Inquiry',
//       name: formData.name,
//       time: new Date().toLocaleString(),
//       message: formData.message,
//       email: formData.email
//     };

//     emailjs.send(
//       'service_6hxcwsj',   // Replace with your EmailJS Service ID
//       'template_dpbq4op',  // Replace with your EmailJS Template ID
//       templateParams,
//       'TczuycyO99xpATAvi'    // Replace with your EmailJS Public Key
//     )
//     .then(() => {
//       setIsSubmitting(false);
//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         mobile: '',
//         company: '',
//         service: '',
//         otherService: '',
//         message: ''
//       });
//       setTimeout(() => setSubmitStatus(null), 5000);
//     })
//     .catch(() => {
//       setIsSubmitting(false);
//       setSubmitStatus('error');
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail />,
//       title: 'Email Us',
//       info: 'admin@pixelhorse.in',
//       description: 'Send us an email anytime',
//       color: '#00FFFF',
//       gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
//     },
//     {
//       icon: <Phone />,
//       title: 'Call Us',
//       info: '+91 99495 62299',
//       description: 'Mon-Fri from 10am to 6pm IST',
//       color: '#FF00FF',
//       gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)'
//     },
//     {
//       icon: <MapPin />,
//       title: 'Visit Us',
//       info: '3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029',
//       description: 'Come visit our office',
//       color: '#FF6600',
//       gradient: 'linear-gradient(135deg, #FF6600, #FF0000)'
//     },
//     {
//       icon: <Clock />,
//       title: 'Working Hours',
//       info: 'Mon-Fri: 10AM - 6PM IST',
//       description: 'Weekend consultations available',
//       color: '#008080',
//       gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
//     }
//   ];

//   const services = [
//     '3D Anamorphic Advertising',
//     'IT Services & Solutions',
//     'Digital Marketing',
//     'AI Systems & Prompt Engine',
//     'Other'
//   ];

//   const features = [
//     { icon: <MessageCircle />, text: 'Quick Response Time' },
//     { icon: <Globe />, text: 'Global Support' },
//     { icon: <Star />, text: 'Expert Consultation' },
//     { icon: <CheckCircle />, text: 'Free Initial Assessment' }
//   ];

//   return (
//     <section className={`pxh-contact ${inView ? 'in-view' : ''}`} ref={contactRef}>
//       <div className="pxh-contact-background">
//         <div className="pxh-bg-gradient pxh-gradient-1"></div>
//         <div className="pxh-bg-gradient pxh-gradient-2"></div>
//         <div className="pxh-bg-gradient pxh-gradient-3"></div>
//       </div>

//       <div className="pxh-contact-container">
//         <div className="pxh-contact-header">
//           <div className="pxh-header-badge">
//             <Send className="pxh-badge-icon" />
//             <span>Get In Touch</span>
//           </div>
//           <h2 className="pxh-contact-title">Let's Build Your Vision</h2>
//           <p className="pxh-contact-subtitle">
//             Transform your ideas into reality with our cutting-edge solutions. Contact us today!
//           </p>
//         </div>

//         <div className="pxh-contact-content">
//           <div className="pxh-contact-info-section">
//             <div className="pxh-info-header">
//               <h3 className="pxh-info-title">Connect With Us</h3>
//               <p className="pxh-info-description">
//                 Reach out through your preferred channel.
//               </p>
//             </div>

//             <div className="pxh-contact-info-grid">
//               {contactInfo.map((item, index) => (
//                 <div
//                   key={index}
//                   className="pxh-info-card"
//                   style={{
//                     '--info-color': item.color,
//                     '--info-gradient': item.gradient,
//                     '--info-delay': `${index * 0.2}s`
//                   }}
//                 >
//                   <div className="pxh-info-icon-container">
//                     <div className="pxh-info-icon">{item.icon}</div>
//                     <div className="pxh-info-glow"></div>
//                   </div>
//                   <div className="pxh-info-content">
//                     <h4 className="pxh-info-title-card">{item.title}</h4>
//                     <p className="pxh-info-main">{item.info}</p>
//                     <p className="pxh-info-desc">{item.description}</p>
//                   </div>
//                   <div className="pxh-info-overlay"></div>
//                 </div>
//               ))}
//             </div>

//             <div className="pxh-contact-features">
//               <h4 className="pxh-features-title">Why Partner With Us?</h4>
//               <div className="pxh-features-grid">
//                 {features.map((feature, index) => (
//                   <div key={index} className="pxh-feature-item">
//                     <div className="pxh-feature-icon">{feature.icon}</div>
//                     <span className="pxh-feature-text">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="pxh-contact-form-section">
//             <div className="pxh-form-container">
//               <div className="pxh-form-header">
//                 <h3 className="pxh-form-title">Send Us a Message</h3>
//                 <p className="pxh-form-description">
//                   Share your project details, and we’ll respond within 24 hours.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="pxh-contact-form">
//                 <div className="pxh-form-row">
//                   <div className="pxh-form-group">
//                     <label htmlFor="name" className="pxh-form-label">Full Name *</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="pxh-form-input"
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div className="pxh-form-group">
//                     <label htmlFor="email" className="pxh-form-label">Email Address *</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="pxh-form-input"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="pxh-form-row">
//                   <div className="pxh-form-group">
//                     <label htmlFor="mobile" className="pxh-form-label">Mobile Number</label>
//                     <input
//                       type="tel"
//                       id="mobile"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleInputChange}
//                       className="pxh-form-input"
//                       placeholder="Your mobile number"
//                     />
//                   </div>
//                   <div className="pxh-form-group">
//                     <label htmlFor="company" className="pxh-form-label">Company</label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="pxh-form-input"
//                       placeholder="Your company name"
//                     />
//                   </div>
//                   <div className="pxh-form-group">
//                     <label htmlFor="service" className="pxh-form-label">Service Interested In</label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       className="pxh-form-select"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service}>{service}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 {formData.service === 'Other' && (
//                   <div className="pxh-form-row">
//                     <div className="pxh-form-group">
//                       <label htmlFor="otherService" className="pxh-form-label">Specify Other Service</label>
//                       <input
//                         type="text"
//                         id="otherService"
//                         name="otherService"
//                         value={formData.otherService}
//                         onChange={handleInputChange}
//                         className="pxh-form-input"
//                         placeholder="Please specify the service"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 <div className="pxh-form-group">
//                   <label htmlFor="message" className="pxh-form-label">Message *</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows="6"
//                     className="pxh-form-textarea"
//                     placeholder="Tell us about your project..."
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className={`pxh-form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
//                   disabled={isSubmitting}
//                 >
//                   <div className="pxh-submit-content">
//                     {isSubmitting ? (
//                       <>
//                         <div className="pxh-loading-spinner"></div>
//                         <span>Sending Message...</span>
//                       </>
//                     ) : submitStatus === 'success' ? (
//                       <>
//                         <CheckCircle className="pxh-submit-icon" />
//                         <span>Message Sent Successfully!</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="pxh-submit-icon" />
//                         <span>Send Message</span>
//                         <ArrowRight className="pxh-submit-arrow" />
//                       </>
//                     )}
//                   </div>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    designation: '',
    service: '',
    otherService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [inView, setInView] = useState(false);
  const contactRef = useRef(null);

  // Refs for the animation layers below (2D-only: no perspective/rotateX/rotateY/translateZ)
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoSectionRef = useRef(null);
  const infoGridRef = useRef(null);
  const featuresRef = useRef(null);
  const formSectionRef = useRef(null);
  const submitBtnRef = useRef(null);

  const titleWords = "Let's Build Your Vision".split(' ');
  const subtitleText =
    'Transform your ideas into reality with our cutting-edge solutions. Contact us today!';
  const subtitleWords = subtitleText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ────────────────────────────────
  // Scroll-driven entrance choreography — every motion here is 2D
  // (opacity, x/y translate, scale, clip-path). No rotateX/Y or translateZ.
  // ────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 24, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.8)',
          scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
        }
      );

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll('.pxh-title-word'),
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            delay: 0.1,
            ease: 'power4.out',
            scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current.querySelectorAll('.pxh-subtitle-word'),
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.02,
            delay: 0.35,
            ease: 'power3.out',
            scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
          }
        );
      }

      if (infoGridRef.current) {
        const cards = infoGridRef.current.querySelectorAll('.pxh-info-card');
        gsap.fromTo(
          cards,
          { opacity: 0, x: -50, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: infoGridRef.current, start: 'top 85%' },
          }
        );
      }

      if (featuresRef.current) {
        const feats = featuresRef.current.querySelectorAll('.pxh-feature-item');
        gsap.fromTo(
          feats,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 90%' },
          }
        );
      }

      if (formSectionRef.current) {
        gsap.fromTo(
          formSectionRef.current,
          { opacity: 0, clipPath: 'inset(0 0 12% 0)', y: 30 },
          {
            opacity: 1,
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: formSectionRef.current, start: 'top 85%' },
          }
        );

        const groups = formSectionRef.current.querySelectorAll('.pxh-form-group, .pxh-form-submit');
        gsap.fromTo(
          groups,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: formSectionRef.current, start: 'top 80%' },
          }
        );
      }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  // Magnetic (2D translate only) hover for the header badge
  const handleBadgeMove = useCallback((e) => {
    const badge = e.currentTarget;
    const rect = badge.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    gsap.to(badge, { x, y, duration: 0.4, ease: 'power2.out' });
  }, []);
  const handleBadgeLeave = useCallback((e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  }, []);

  // Magnetic liquid-fill submit button: tracks cursor for both the
  // clip-path fill origin and a gentle magnetic pull
  const handleSubmitMove = useCallback((e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--fill-x', `${px}%`);
    btn.style.setProperty('--fill-y', `${py}%`);
    const x = (e.clientX - rect.left - rect.width / 2) * 0.06;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
  }, []);
  const handleSubmitLeave = useCallback((e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template parameters for EmailJS with all fields, including dynamic subject
    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile || 'Not provided',
      company: formData.company || 'Not provided',
      designation: formData.designation || 'Not provided',
      service: formData.service || 'Not specified',
      otherService: formData.service === 'Other' ? formData.otherService || 'Not specified' : 'N/A',
      message: formData.message,
      time: new Date().toLocaleString(),
      subject: `${formData.name || 'Unknown User'}'s Inquiry about ${formData.service || 'General'}`
    };

    emailjs.send(
      'service_6hxcwsj',   // Replace with your EmailJS Service ID
      'template_dpbq4op',  // Replace with your EmailJS Template ID
      templateParams,
      'TczuycyO99xpATAvi'    // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        designation: '',
        service: '',
        otherService: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email Us',
      info: 'admin@pixelhorse.in',
      description: 'Send us an email anytime',
      color: '#008080',
      gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      info: '+91 99495 62299',
      description: 'Mon-Fri from 10am to 6pm IST',
      color: '#008080',
      gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
    },
    {
      icon: <MapPin />,
      title: 'Visit Us',
      info: '3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029',
      description: 'Come visit our office',
      color: '#008080',
      gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
    },
    {
      icon: <Clock />,
      title: 'Working Hours',
      info: 'Mon-Fri: 10AM - 6PM IST',
      description: 'Weekend consultations available',
      color: '#008080',
      gradient: 'linear-gradient(135deg, #008080, #00FFFF)'
    }
  ];

  const services = [
    '3D Anamorphic Advertising',
    'IT Services & Solutions',
    'Digital Marketing',
    'AI Systems & Prompt Engine',
    'Other'
  ];

  const features = [
    { icon: <MessageCircle />, text: 'Quick Response Time' },
    { icon: <Globe />, text: 'Global Support' },
    { icon: <Star />, text: 'Expert Consultation' },
    { icon: <CheckCircle />, text: 'Free Initial Assessment' }
  ];

  return (
    <section className={`pxh-contact ${inView ? 'in-view' : ''}`} ref={contactRef}>
      <div className="pxh-contact-background">
        <div className="pxh-bg-gradient pxh-gradient-1"></div>
        <div className="pxh-bg-gradient pxh-gradient-2"></div>
        <div className="pxh-bg-gradient pxh-gradient-3"></div>
      </div>

      <div className="pxh-contact-container">
        <div className="pxh-contact-header">
          <div
            className="pxh-header-badge"
            ref={badgeRef}
            onMouseMove={handleBadgeMove}
            onMouseLeave={handleBadgeLeave}
          >
            <span className="pxh-badge-ping"></span>
            <Send className="pxh-badge-icon" />
            <span>Get In Touch</span>
          </div>
          <h2 className="pxh-contact-title" ref={titleRef}>
            {titleWords.map((word, i) => (
              <span className="pxh-title-word-mask" key={i}>
                <span className="pxh-title-word">{word}</span>
              </span>
            ))}
          </h2>
          <p className="pxh-contact-subtitle" ref={subtitleRef}>
            {subtitleWords.map((word, i) => (
              <span className="pxh-subtitle-word-mask" key={i}>
                <span className="pxh-subtitle-word">{word}&nbsp;</span>
              </span>
            ))}
          </p>
        </div>

        <div className="pxh-contact-content">
          <div className="pxh-contact-info-section" ref={infoSectionRef}>
            <div className="pxh-info-header">
              <h3 className="pxh-info-title">Connect With Us</h3>
              <p className="pxh-info-description">
                Reach out through your preferred channel.
              </p>
            </div>

            <div className="pxh-contact-info-grid" ref={infoGridRef}>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="pxh-info-card"
                  style={{
                    '--info-color': item.color,
                    '--info-gradient': item.gradient,
                    '--info-delay': `${index * 0.2}s`
                  }}
                >
                  <div className="pxh-info-icon-container">
                    <div className="pxh-info-icon">{item.icon}</div>
                    <div className="pxh-info-glow"></div>
                  </div>
                  <div className="pxh-info-content">
                    <h4 className="pxh-info-title-card">{item.title}</h4>
                    <p className="pxh-info-main">{item.info}</p>
                    <p className="pxh-info-desc">{item.description}</p>
                  </div>
                  <div className="pxh-info-overlay"></div>
                  <div className="pxh-info-shine"></div>
                </div>
              ))}
            </div>

            <div className="pxh-contact-features" ref={featuresRef}>
              <h4 className="pxh-features-title">Why Partner With Us?</h4>
              <div className="pxh-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="pxh-feature-item">
                    <div className="pxh-feature-icon">{feature.icon}</div>
                    <span className="pxh-feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pxh-contact-form-section" ref={formSectionRef}>
            <div className="pxh-form-container">
              <div className="pxh-form-header">
                <h3 className="pxh-form-title">Send Us a Message</h3>
                <p className="pxh-form-description">
                  Share your project details, and we’ll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="pxh-contact-form">
                <div className="pxh-form-row">
                  <div className="pxh-form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pxh-form-input"
                      placeholder="Your full name"
                    />
                    <label htmlFor="name" className="pxh-form-label pxh-floating">Full Name *</label>
                  </div>
                  <div className="pxh-form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pxh-form-input"
                      placeholder="your@email.com"
                    />
                    <label htmlFor="email" className="pxh-form-label pxh-floating">Email Address *</label>
                  </div>
                </div>

                <div className="pxh-form-row">
                  <div className="pxh-form-group">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="pxh-form-input"
                      placeholder="Your mobile number"
                    />
                    <label htmlFor="mobile" className="pxh-form-label pxh-floating">Mobile Number</label>
                  </div>
                  <div className="pxh-form-group">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="pxh-form-input"
                      placeholder="Your company name"
                    />
                    <label htmlFor="company" className="pxh-form-label pxh-floating">Company</label>
                  </div>
                  <div className="pxh-form-group">
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="pxh-form-input"
                      placeholder="Your designation"
                    />
                    <label htmlFor="designation" className="pxh-form-label pxh-floating">Designation</label>
                  </div>
                </div>

                <div className="pxh-form-row">
                  <div className="pxh-form-group">
                    <label htmlFor="service" className="pxh-form-label">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="pxh-form-select"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.service === 'Other' && (
                  <div className="pxh-form-row">
                    <div className="pxh-form-group">
                      <input
                        type="text"
                        id="otherService"
                        name="otherService"
                        value={formData.otherService}
                        onChange={handleInputChange}
                        className="pxh-form-input"
                        placeholder="Please specify the service"
                      />
                      <label htmlFor="otherService" className="pxh-form-label pxh-floating">Specify Other Service</label>
                    </div>
                  </div>
                )}

                <div className="pxh-form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="pxh-form-textarea"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <label htmlFor="message" className="pxh-form-label pxh-floating">Message *</label>
                </div>

                <button
                  type="submit"
                  ref={submitBtnRef}
                  onMouseMove={handleSubmitMove}
                  onMouseLeave={handleSubmitLeave}
                  className={`pxh-form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'pxh-shake' : ''}`}
                  disabled={isSubmitting}
                >
                  <div className="pxh-submit-content">
                    {isSubmitting ? (
                      <>
                        <div className="pxh-loading-spinner"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <svg className="pxh-check-draw" viewBox="0 0 52 52">
                          <circle className="pxh-check-circle" cx="26" cy="26" r="24" fill="none" />
                          <path className="pxh-check-mark" fill="none" d="M14 27l7 7 16-16" />
                        </svg>
                        <span>Message Sent Successfully!</span>
                        <span className="pxh-burst">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <span
                              key={i}
                              className="pxh-burst-dot"
                              style={{ '--rot': `${i * 45}deg` }}
                            ></span>
                          ))}
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="pxh-submit-icon" />
                        <span>Send Message</span>
                        <ArrowRight className="pxh-submit-arrow" />
                      </>
                    )}
                  </div>
                </button>
                {submitStatus === 'error' && (
                  <p className="pxh-submit-error">Error sending message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
