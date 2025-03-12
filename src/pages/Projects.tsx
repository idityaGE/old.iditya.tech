import { ProjectCard } from "@/components/project/card/project-card";
import { ProjectData } from "@/config/project.config";
import { LinkData } from "@/config/links.config";
import { Mail, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [...ProjectData];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="px-2" variants={itemVariants}>
        <h1 className="text-3xl font-bold mb-7">Projects</h1>
        <motion.p
          className="text-base text-muted-foreground mb-5"
          variants={itemVariants}
        >
          I love building side projects that solve either my own or someone else's problems. Here is an extensive list of all the stuff I have built.
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground mb-6"
          variants={itemVariants}
        >
          Want to discuss on projects or collaborate on something? Feel free to&nbsp;
          <a
            href={LinkData.twitter}
            target="_blank"
            className="dark:hover:text-white hover:text-black duration-300"
          >
            @<b className="font-semibold underline underline-offset-2 px-1">
              <strong>{LinkData.twitter.split("/").pop()}</strong>
            </b>
          </a>
        </motion.p>

        <motion.div
          className="bg-muted/50 rounded-lg p-4 border border-border flex items-start gap-3 mb-9"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="text-amber-500 mt-0.5 flex-shrink-0">
            <AlertTriangle size={20} />
          </div>
          <p className="text-sm text-muted-foreground">
            These projects are hosted on free services that may occasionally enter hibernation mode. <br />
            If you encounter any issues, please{" "}
            <a
              href={LinkData.mail}
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 dark:hover:text-white hover:text-black duration-200">
              contact me
              <Mail size={18} />
            </a>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
