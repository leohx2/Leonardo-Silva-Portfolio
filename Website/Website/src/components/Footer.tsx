import { motion } from "motion/react";
import SvgSelector from "../assets/SvgSelector";
import SocialMedias from "./SocialMedias";

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t-1 border-badge bg-badge/20 text-amber-50 relative z-2 flex pb-8 pt-8 justify-center max-sm:text-center max-sm:pb-16">
      <div className="relative flex flex-col gap-y-8 justify-center text-amber-50 w-[90%]">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          Leonardo Dev
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          Thank you for visiting my portfolio, feel free to contact me!
        </motion.p>
        <div className="flex gap-x-8 text-lg font-bold max-sm:flex-col gap-y-4 max-sm:items-center max-sm:pb-14">
          <motion.a
            href="mailto:leobgse@gmail.com"
            target="_blank"
            className="flex gap-x-2 p-[0.7rem_2rem] border-badge border-1 rounded-md sm:opacity-85 w-fit"
            whileHover={{ opacity: 1, background: "#414148" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1, once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            E-mail me
            <SvgSelector svgName="link" cssClass="w-6 h-6" />
          </motion.a>
          <motion.a
            href="/src/assets/LeonardoSilvaCv.pdf"
            download
            className="flex gap-x-2 p-[0.7rem_2rem] border-badge border-1 rounded-md sm:opacity-85 w-fit"
            whileHover={{ opacity: 1, background: "#414148" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1, once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            Download my CV <SvgSelector svgName="download" cssClass="w-6 h-6" />
          </motion.a>
        </div>
        <SocialMedias
          cssClass="absolute md:flex-col md:gap-y-4 md:right-0 flex max-sm:gap-x-4 max-sm:bottom-0 max-sm:justify-around max-sm:w-full"
          hasLine={false}
        />
      </div>
    </footer>
  );
};

export default Footer;
