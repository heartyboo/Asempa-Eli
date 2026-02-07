'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log('[v0] Form submitted:', Object.fromEntries(formData))
    
    e.currentTarget.reset()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const services = [
    {
      title: 'Electrical System Design',
      description: 'Comprehensive design services for low and high-voltage electrical systems, ensuring optimal performance and compliance with all regulatory standards.',
      details: 'We utilize advanced CAD software and simulation tools to create efficient, scalable designs tailored to your specific project requirements.',
      image: '/service-design.jpg'
    },
    {
      title: 'Power Distribution & Automation',
      description: 'Expert installation and maintenance of power distribution networks, including transformers, switchgear, and automated control systems.',
      details: 'Our solutions minimize downtime and maximize efficiency, integrating IoT technologies for real-time monitoring and management.',
      image: '/service-power.jpg'
    },
    {
      title: 'Renewable Energy Integration',
      description: 'From solar farms to wind turbines, we design and implement integrated renewable energy systems that reduce carbon footprints and energy costs.',
      details: 'We handle everything from feasibility studies to grid connection, ensuring seamless integration with existing infrastructure.',
      image: '/service-renewable.jpg'
    },
    {
      title: 'Project Management & Consulting',
      description: 'End-to-end project management services to keep your electrical projects on time and within budget.',
      details: 'Our consultants provide expert advice on regulatory compliance, risk assessment, and cost optimization strategies.',
      image: '/service-consulting.jpg'
    },
    {
      title: 'Maintenance & Troubleshooting',
      description: 'Routine maintenance programs and rapid response troubleshooting services to ensure uninterrupted operation of your electrical systems.',
      details: 'We offer predictive maintenance using AI-driven analytics to anticipate issues before they arise.',
      image: '/service-maintenance.jpg'
    },
    {
      title: 'Compliance & Safety Audits',
      description: 'Thorough audits and certifications to ensure your electrical installations meet all international safety and quality standards.',
      details: 'Our team provides detailed reports and actionable recommendations to maintain peak safety and performance.',
      image: '/service-compliance.jpg'
    }
  ]

  const projects = [
    {
      image: '/project-solar.jpg',
      title: '5MW Solar Power Plant',
      description: 'A state-of-the-art solar installation for a major utility company, featuring advanced tracking systems and integrated energy storage for maximum efficiency and reliability.',
      alt: 'Aerial view of large solar panel installation'
    },
    {
      image: '/project-industrial.jpg',
      title: 'Industrial Automation Upgrade',
      description: 'Complete overhaul of electrical systems for a leading automotive manufacturer, including PLC programming, sensor integration, and energy-efficient lighting solutions.',
      alt: 'High-tech manufacturing facility interior'
    },
    {
      image: '/project-building.jpg',
      title: 'Smart Building Integration',
      description: 'Implementation of an IoT-based electrical management system for a 50-story office complex, reducing energy consumption by 30% through intelligent automation.',
      alt: 'Modern commercial building with LED lighting'
    },
    {
      image: '/project-wind.jpg',
      title: 'Renewable Energy Grid Connection',
      description: 'Large-scale wind farm interconnection project, including high-voltage transmission lines and substations, connecting green energy to the national grid.',
      alt: 'Wind turbine farms in hilly terrain'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary z-50 shadow-2xl backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-4">
          <div className="text-primary-foreground text-xl md:text-2xl font-bold tracking-wider hover:text-accent transition-colors cursor-pointer">
            ASEMMATECH COMPANY LIMITED
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-secondary/20 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`text-primary-foreground font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 capitalize relative overflow-hidden group ${
                    activeSection === section ? 'bg-secondary shadow-lg scale-105' : 'hover:bg-secondary/80 hover:scale-105 hover:shadow-md'
                  }`}
                >
                  <span className="relative z-10">{section}</span>
                  {activeSection !== section && (
                    <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden bg-primary text-center pb-4 border-t border-secondary/30 animate-in slide-in-from-top duration-300">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <li key={section} className="py-3">
                <button
                  onClick={() => handleNavClick(section)}
                  className={`text-primary-foreground font-semibold px-6 py-2 rounded-md capitalize transition-all hover:scale-105 ${
                    activeSection === section ? 'bg-secondary' : 'hover:bg-secondary/60'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section 
          className="min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed bg-no-repeat pt-20 relative overflow-hidden"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.5)), url(/hero-bg.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          <div className="max-w-7xl mx-auto px-5 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-5xl mx-auto mb-6 drop-shadow-2xl text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Welcome to <span className="text-accent">ASEMMATECH</span> COMPANY LIMITED : Powering Your Future
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 drop-shadow-lg leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Leading the way in electrical engineering with innovative solutions for commercial, industrial, and renewable energy projects. We deliver excellence through precision, sustainability, and expert craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <a 
                href="mailto:francisasempa8@gmail.com" 
                className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl transform"
              >
                Get in Touch
              </a>
              <button
                onClick={() => handleNavClick('projects')}
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/30 shadow-xl transform"
              >
                View Projects
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left duration-1000">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">About <span className="text-secondary">AsemmaTech</span></h2>
                <div className="space-y-5 text-foreground leading-relaxed text-lg">
                  <p className="hover:text-primary transition-colors duration-300">
                    Founded in 2017, AsemmaTech has established itself as a premier electrical engineering company, blending cutting-edge technology with decades of industry expertise. Our team of certified engineers, designers, and technicians is dedicated to delivering top-tier solutions that meet the highest standards of safety, efficiency, and innovation.
                  </p>
                  <p className="hover:text-primary transition-colors duration-300">
                    We specialize in a wide range of sectors, including commercial buildings, industrial facilities, renewable energy installations, and infrastructure development. Our mission is to provide sustainable, reliable electrical systems that power communities, businesses, and industries forward.
                  </p>
                  <p className="hover:text-primary transition-colors duration-300">
                    With a proven track record of successful projects across the globe, we are committed to exceeding client expectations through personalized service, rigorous quality assurance, and ongoing support.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-secondary hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="px-6 py-3 bg-muted text-foreground font-bold rounded-xl hover:bg-accent hover:text-primary hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Our Services
                  </button>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-in fade-in slide-in-from-right duration-1000">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <Image 
                    src="/about-team.jpg" 
                    alt="Engineers collaborating in modern electrical lab" 
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl w-full h-auto relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section 
          className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative"
          style={{
            backgroundImage: 'linear-gradient(rgba(245, 247, 255, 0.97), rgba(245, 247, 255, 0.95)), url(/services-bg.jpg)'
          }}
        >
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">Our <span className="text-secondary">Services</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive electrical engineering solutions tailored to your needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group overflow-hidden relative animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300">{service.details}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">Featured <span className="text-secondary">Projects</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Showcasing our commitment to excellence and innovation in electrical engineering</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-border group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={project.alt}
                      width={600}
                      height={300}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                    <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">{project.title}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">{project.description}</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold group-hover:gap-4">
                      View Details
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto px-5 relative z-10">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-1000">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">Get in <span className="text-secondary">Touch</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-150">
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground">+233 24 530 0587</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-2">Email</h4>
                <p className="text-sm text-muted-foreground break-all">francisasempa8@gmail.com</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Accra, Ghana</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-card p-10 rounded-2xl shadow-2xl border border-border backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-foreground">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background hover:border-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background hover:border-primary/50"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background hover:border-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-semibold text-foreground">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background hover:border-primary/50"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[150px] resize-y bg-background hover:border-primary/50"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-secondary hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {formSubmitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in slide-in-from-bottom duration-500">
                  <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent successfully. We will be in touch soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-12">
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-accent font-bold mb-4 text-xl flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Info
              </h4>
              <div className="space-y-3 text-primary-foreground/90">
                <p className="hover:text-accent transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <strong>Phone:</strong> +233 24 530 0587
                </p>
                <p className="hover:text-accent transition-colors flex items-center gap-2 justify-center md:justify-start break-all">
                  <strong>Email:</strong> francisasempa8@gmail.com
                </p>
                <p className="hover:text-accent transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <strong>Address:</strong> Accra, Ghana
                </p>
              </div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-accent font-bold mb-4 text-xl flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleNavClick('services')} className="hover:text-accent transition-all hover:translate-x-2 inline-block">
                    → Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-accent transition-all hover:translate-x-2 inline-block">
                    → Featured Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('about')} className="hover:text-accent transition-all hover:translate-x-2 inline-block">
                    → About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('contact')} className="hover:text-accent transition-all hover:translate-x-2 inline-block">
                    → Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-accent font-bold mb-4 text-xl flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                About AsemmaTech
              </h4>
              <p className="mb-4 text-primary-foreground/90 leading-relaxed">Stay updated with our latest projects and industry insights. We're committed to powering your future with innovative electrical solutions.</p>
              <button 
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 hover:text-accent transition-colors">&copy; 2026 AsemmaTech Company Limited. All rights reserved. Powered by innovation and expertise.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
