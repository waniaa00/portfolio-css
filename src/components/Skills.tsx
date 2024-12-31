import "@/app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container ">
      <div className="skills-grid">
        <div className="skills-left" data-aos="zoom-in">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
            As a multifaceted UI designer and front-end
            developer, I seamlessly blend creativity with technical expertise.
            With a strong foundation in Next.js, React.js, and JavaScript, I
            craft visually stunning and responsive digital experiences. Driven
            by a passion for innovation and a commitment to excellence, I
            continually seek out cutting-edge technologies to enhance my skills.
            With a meticulous approach and dedication to hard work, I deliver
            high-quality solutions that exceed expectations. My portfolio
            showcases a curated selection of my work, demonstrating my ability
            to balance aesthetics with functionality. I&apos;m excited to collaborate
            on projects that challenge me creatively and technologically, and
            look forward to contributing my expertise to dynamic teams.
          </p>
        </div>
        <div className="skills-right">
            <div className='skills-icons-grid'>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Next.JS</h2>
                    <h2 data-aos="zoom-in-up">React.JS</h2>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                </div>

                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.JS</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
