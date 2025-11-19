import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SUDEHA GLOBAL
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leading the way in innovative IT solutions, empowering businesses worldwide with cutting-edge technology and exceptional service.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.div 
            className="space-y-6 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Founded with a vision to transform the digital landscape, SUDEHA GLOBAL has grown into a trusted partner for businesses seeking innovative IT solutions. Our journey began with a simple belief: technology should empower, not complicate.
            </p>
            <p>
              Over the years, we've worked with diverse clients across industries, delivering custom web applications, mobile solutions, intelligent automation, and AI-powered systems. Each project strengthens our commitment to excellence and innovation.
            </p>
            <p>
              Today, SUDEHA GLOBAL stands as a beacon of reliability and creativity in the IT industry. We don't just build software; we craft experiences that drive growth, efficiency, and success for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 border-border bg-card h-full">
                <motion.div 
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver innovative, reliable, and scalable IT solutions that empower businesses to achieve their full potential. We strive to be the trusted technology partner that drives digital transformation and creates lasting value.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 border-border bg-card h-full">
                <motion.div 
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be recognized globally as the leading provider of cutting-edge IT solutions, known for our innovation, quality, and commitment to client success. We envision a future where technology seamlessly enhances every aspect of business.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We pursue excellence in everything we do, delivering quality that exceeds expectations.
              </p>
            </Card>
            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and building strong partnerships with our clients.
              </p>
            </Card>
            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, embracing new technologies to deliver cutting-edge solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;