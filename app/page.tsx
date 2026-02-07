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
      details: 'We utilize advanced CAD software and simulation tools to create efficient, scalable designs tailored to your specific project requirements.'
    },
    {
      title: 'Power Distribution & Automation',
      description: 'Expert installation and maintenance of power distribution networks, including transformers, switchgear, and automated control systems.',
      details: 'Our solutions minimize downtime and maximize efficiency, integrating IoT technologies for real-time monitoring and management.'
    },
    {
      title: 'Renewable Energy Integration',
      description: 'From solar farms to wind turbines, we design and implement integrated renewable energy systems that reduce carbon footprints and energy costs.',
      details: 'We handle everything from feasibility studies to grid connection, ensuring seamless integration with existing infrastructure.'
    },
    {
      title: 'Project Management & Consulting',
      description: 'End-to-end project management services to keep your electrical projects on time and within budget.',
      details: 'Our consultants provide expert advice on regulatory compliance, risk assessment, and cost optimization strategies.'
    },
    {
      title: 'Maintenance & Troubleshooting',
      description: 'Routine maintenance programs and rapid response troubleshooting services to ensure uninterrupted operation of your electrical systems.',
      details: 'We offer predictive maintenance using AI-driven analytics to anticipate issues before they arise.'
    },
    {
      title: 'Compliance & Safety Audits',
      description: 'Thorough audits and certifications to ensure your electrical installations meet all international safety and quality standards.',
      details: 'Our team provides detailed reports and actionable recommendations to maintain peak safety and performance.'
    }
  ]

  const projects = [
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac20c2ab-59f1-4a40-8469-3e083efa5f28.png',
      title: '5MW Solar Power Plant',
      description: 'A state-of-the-art solar installation for a major utility company, featuring advanced tracking systems and integrated energy storage for maximum efficiency and reliability.',
      alt: 'Aerial view of large solar panel installation'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cd7eeaf8-45c1-46a6-b861-e84fc453caeb.png',
      title: 'Industrial Automation Upgrade',
      description: 'Complete overhaul of electrical systems for a leading automotive manufacturer, including PLC programming, sensor integration, and energy-efficient lighting solutions.',
      alt: 'High-tech manufacturing facility interior'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fbea3ac-47d2-49b1-b83d-9aafc7095e42.png',
      title: 'Smart Building Integration',
      description: 'Implementation of an IoT-based electrical management system for a 50-story office complex, reducing energy consumption by 30% through intelligent automation.',
      alt: 'Modern commercial building with LED lighting'
    },
    {
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08fb5768-3599-4038-af26-35a66ea9393c.png',
      title: 'Renewable Energy Grid Connection',
      description: 'Large-scale wind farm interconnection project, including high-voltage transmission lines and substations, connecting green energy to the national grid.',
      alt: 'Wind turbine farms in hilly terrain'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-4">
          <div className="text-primary-foreground text-xl md:text-2xl font-bold tracking-wider">
            ASEMMATECH COMPANY LIMITED
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`text-primary-foreground font-semibold px-4 py-2 rounded-md transition-colors capitalize ${
                    activeSection === section ? 'bg-secondary' : 'hover:bg-secondary/80'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden bg-primary text-center pb-4">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <li key={section} className="py-3">
                <button
                  onClick={() => handleNavClick(section)}
                  className={`text-primary-foreground font-semibold px-4 py-2 rounded-md capitalize ${
                    activeSection === section ? 'bg-secondary' : ''
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
          className="min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed bg-no-repeat pt-20"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/777be11a-2270-497f-aeeb-6f4b2114d667.png)'
          }}
        >
          <div className="max-w-7xl mx-auto px-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl mx-auto mb-5 drop-shadow-2xl text-balance">
              Welcome to ASEMMATECH COMPANY LIMITED : Powering Your Future
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-lg leading-relaxed text-pretty">
              Leading the way in electrical engineering with innovative solutions for commercial, industrial, and renewable energy projects. We deliver excellence through precision, sustainability, and expert craftsmanship.
            </p>
            <a 
              href="mailto:francisasempa8@gmail.com" 
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary hover:text-primary-foreground transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About AsemmaTech</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Founded in 2017, AsemmaTech has established itself as a premier electrical engineering company, blending cutting-edge technology with decades of industry expertise. Our team of certified engineers, designers, and technicians is dedicated to delivering top-tier solutions that meet the highest standards of safety, efficiency, and innovation.
                  </p>
                  <p>
                    We specialize in a wide range of sectors, including commercial buildings, industrial facilities, renewable energy installations, and infrastructure development. Our mission is to provide sustainable, reliable electrical systems that power communities, businesses, and industries forward.
                  </p>
                  <p>
                    With a proven track record of successful projects across the globe, we are committed to exceeding client expectations through personalized service, rigorous quality assurance, and ongoing support.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0aab2fdd-4a5c-4ac2-8b01-cef0dde8f069.png" 
                  alt="Engineers collaborating in modern electrical lab" 
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="min-h-screen pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-border"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform border border-border"
                >
                  <Image 
                    src={project.image}
                    alt={project.alt}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                    <button className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors font-semibold">
                      View Details
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
        <section className="min-h-screen pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="bg-card p-10 rounded-xl shadow-lg border border-border">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-foreground">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all bg-background"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-foreground">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all bg-background"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-foreground">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all bg-background"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-semibold text-foreground">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all bg-background"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all min-h-[150px] resize-y bg-background"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
              {formSubmitted && (
                <p className="text-green-600 font-semibold text-center mt-5">
                  Thank you! Your message has been sent successfully. We will be in touch soon.
                </p>
              )}
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
            <div>
              <h4 className="text-accent font-bold mb-3">Contact Info</h4>
              <div className="space-y-2">
                <p><strong>Phone:</strong> +233 24 530 0587</p>
                <p><strong>Email:</strong> francisasempa8@gmail.com</p>
                <p><strong>Address:</strong> Accra, Ghana</p>
              </div>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleNavClick('services')} className="hover:text-accent transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-accent transition-colors">
                    Featured Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('about')} className="hover:text-accent transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('contact')} className="hover:text-accent transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-bold mb-3">Follow Us</h4>
              <p className="mb-3">Stay updated with our latest projects and industry insights.</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-secondary">
            <p>&copy; 2026 AsemmaTech Company Limited. All rights reserved. Powered by innovation and expertise.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
