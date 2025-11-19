import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Smartphone, Zap, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import webMobileImage from "@/assets/web-mobile-dev.jpg";
import automationImage from "@/assets/automation-ai.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Create powerful, responsive websites that engage your audience and drive business growth.",
      features: [
        "Custom website design",
        "Responsive & mobile-first",
        "E-commerce solutions",
        "Content management systems",
        "SEO optimization",
        "Performance optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Build native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "Native app performance",
        "UI/UX design",
        "App store deployment",
        "Ongoing maintenance",
      ],
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline your operations and boost productivity with intelligent automation solutions.",
      features: [
        "Workflow automation",
        "Process optimization",
        "Integration services",
        "Custom automation tools",
        "Data synchronization",
        "Reporting & analytics",
      ],
    },
    {
      icon: Brain,
      title: "AI-Powered Applications",
      description: "Leverage artificial intelligence to transform your business and gain competitive advantages.",
      features: [
        "Machine learning solutions",
        "Natural language processing",
        "Predictive analytics",
        "Computer vision",
        "Chatbots & virtual assistants",
        "AI integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive IT solutions designed to accelerate your digital transformation and drive business success.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {(index === 0 || index === 2) && (
                    <motion.img
                      src={index === 0 ? webMobileImage : automationImage}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-auto mb-6 border border-primary/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                  <Card className="p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground border-0">
                    <motion.div 
                      className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-primary-foreground/90 text-lg">{service.description}</p>
                  </Card>
                </motion.div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card className="p-8 border-border bg-card">
                  <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary to-accent text-center border-0">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Contact Us Today <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
