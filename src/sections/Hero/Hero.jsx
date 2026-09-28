import { useState } from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twiterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [previewTheme, setPreviewTheme] = useState(null);

  const nextTheme = theme === "light" ? "dark" : "light";
  const isPreviewingTheme = previewTheme !== null;
  const themeIcon = (previewTheme || theme) === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twiterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const handleThemeToggle = (event) => {
    const button = event.currentTarget;
    document.documentElement.classList.add("theme-transitioning");
    setPreviewTheme(nextTheme);
    window.setTimeout(() => {
      const transition = toggleTheme(button);
      if (transition) {
        transition.finished.finally(() => {
          document.documentElement.classList.remove("theme-transitioning");
          setPreviewTheme(null);
        });
      } else {
        document.documentElement.classList.remove("theme-transitioning");
        setPreviewTheme(null);
      }
    }, 250);
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Hung Le"
        />
        <button
          type="button"
          className={`${styles.colorMode} ${
            isPreviewingTheme ? styles.previewing : ""
          } ${previewTheme ? styles[previewTheme] : ""}`}
          onClick={handleThemeToggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          disabled={isPreviewingTheme}
        >
          <img src={themeIcon} alt="" />
        </button>
      </div>
      <div className={styles.info}>
        <h1>
          Hung
          <br />
          Le
        </h1>
        <h2>Msc Student</h2>
        <span>
          <a href="https://twitter.com/hiephp1611" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/hiephp1611" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://linkedin.com/in/hung-hiep-le-648b8715b"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Machine Learning Enthusiast | Master's Student at Chalmers University
          of Technology
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
