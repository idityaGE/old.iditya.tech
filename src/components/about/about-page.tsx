import { memo, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import EducationList from "./EducationSection"
import { skillList } from "@/config/skill.config"

import { LinkData } from "@/config/links.config"
import { PersonalData } from "@/config/personal.config"
import { EducationData } from "@/config/education.config"

function AboutPage() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const educationInView = useInView(educationRef, { once: true, amount: 0.3 });

  const links = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: LinkData.github },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: LinkData.linkedin },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: LinkData.twitter },
    { name: 'Mail', icon: <Mail className="h-5 w-5" />, url: LinkData.mail },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + (index * 0.1),
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <div className="min-h-screen pt-4 md:pt-6 pb-12">
      <div className="container mx-auto px-2">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="md:w-1/3 flex flex-col items-center"
          >
            <motion.div
              variants={avatarVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-75"
              ></motion.div>
              <Avatar className="w-48 h-48 border-4 border-background relative flex items-center justify-center">
                <img src={PersonalData.avatar} alt="Avatar" className="rounded-full" />
              </Avatar>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold mt-6 mb-2 text-center"
            >
              {PersonalData.name}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-4 text-center"
            >
              {PersonalData.title}
            </motion.p>
            <div className="flex space-x-4">
              {links.map(({ name, icon, url }, index) => (
                <motion.a
                  custom={index}
                  variants={linkVariants}
                  whileHover={{ scale: 1.1 }}
                  href={url}
                  key={name}
                >
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" about={name}>
                    {icon}
                    <span className="sr-only">{name}</span>
                  </Button>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            ref={aboutRef}
            variants={itemVariants}
            className="md:w-2/3"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              About Me
            </motion.h2>
            <div className="space-y-4">
              {PersonalData.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph.split(':').length > 1 ? <span className="font-bold dark:text-white">{paragraph.split(':')[0]}:</span> : null}
                  {paragraph.split(':').length > 1 ? paragraph.split(':').slice(1) : paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4"
          >
            Skills
          </motion.h2>
          <div className="space-y-3 pl-3">
            {Object.entries(skillList).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + (categoryIndex * 0.1), duration: 0.5 }}
              >
                <div className="flex flex-wrap gap-1">
                  <h3 className="text-md font-bold">{category}: </h3>
                  {skillList.map((skill, skillIndex) => (
                    <motion.p
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 + (skillIndex * 0.03), duration: 0.4 }}
                      whileHover={{ scale: 1.05, backgroundColor: "var(--primary-50)" }}
                      className="px-1 py-1 rounded bg-muted text-muted-foreground text-xs cursor-default"
                    >
                      {skill}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4"
          >
            Education
          </motion.h2>
          <ol className="relative border-l border-primary/30 space-y-8 pl-5">
            {EducationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
              >
                <EducationList {...item} />
              </motion.div>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  )
}

export default memo(AboutPage)
