import { createRoot } from "react-dom/client";
import { Code2, Download, MapPin, Sparkles } from "lucide-react";
import { resume } from "./resume-data";
import { getCurrentSkills } from "./lib/resume";
import "./styles.css";

const skillGroups = [
  ["language", "言語"],
  ["frontend", "フロントエンド"],
  ["backend", "バックエンド"],
  ["database", "データベース"],
  ["cloud", "クラウド"],
  ["devops", "DevOps"]
] as const;

const App = () => {
  const currentSkills = getCurrentSkills(resume.skills);

  return (
    <main className="resume-shell">
      <header className="hero">
        <div className="hero__identity">
          <p className="eyebrow">Resume / {resume.updatedAt}</p>
          <h1>
            {resume.person.nameJa}
            <span>{resume.person.nameEn}</span>
          </h1>
          <p className="hero__title">{resume.person.title}</p>
          <div className="meta-row" aria-label="基本情報">
            <span>
              <MapPin size={16} aria-hidden="true" />
              {resume.person.location}
            </span>
            <a href={`https://github.com/${resume.person.github}`}>
              <Code2 size={16} aria-hidden="true" />
              {resume.person.github}
            </a>
          </div>
        </div>
        <aside className="hero__panel" aria-label="現在の主要技術">
          <p>Current stack</p>
          <ul>
            {currentSkills.map((skill) => (
              <li key={skill.name}>
                <span>{skill.name}</span>
                <b>{skill.level}</b>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <section className="summary-band" aria-labelledby="summary-title">
        <div>
          <Sparkles aria-hidden="true" />
          <h2 id="summary-title">LLMによる要点整理</h2>
        </div>
        <ul>
          {resume.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="strengths-title">
        <div className="section-heading">
          <p>Strengths</p>
          <h2 id="strengths-title">強み・得意領域</h2>
        </div>
        <div className="strength-grid">
          {resume.strengths.map((strength) => (
            <article className="strength-card" key={strength.title}>
              <h3>{strength.title}</h3>
              <p>{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p>Skills</p>
          <h2 id="skills-title">スキルサマリー</h2>
        </div>
        <div className="skill-matrix">
          {skillGroups.map(([category, label]) => {
            const skills = resume.skills.filter((skill) => skill.category === category);

            return (
              <article className="skill-group" key={category}>
                <h3>{label}</h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <div>
                        <strong>{skill.name}</strong>
                        <span>{skill.note}</span>
                      </div>
                      <em>{skill.level} / {skill.years}</em>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="scale-note">S: リード可能 / A: 実務で設計・開発可能 / B: 実務経験あり / C: 個人開発・学習経験</p>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="section-heading">
          <p>Experience</p>
          <h2 id="experience-title">職務経歴</h2>
        </div>
        <div className="timeline">
          {resume.experiences.map((experience) => (
            <article className="experience-card" key={experience.no}>
              <div className="experience-card__index">No. {experience.no}</div>
              <div className="experience-card__body">
                <div className="experience-card__header">
                  <div>
                    <h3>{experience.title}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <time>{experience.period}</time>
                </div>
                <p className="experience-card__summary">{experience.summary}</p>
                <ul className="achievement-list">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p>Personal work</p>
          <h2 id="projects-title">個人開発</h2>
        </div>
        <p>{resume.personalProjects}</p>
        <a className="download-link" href="/resume/resume.pdf">
          <Download size={16} aria-hidden="true" />
          PDFを開く
        </a>
      </section>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
