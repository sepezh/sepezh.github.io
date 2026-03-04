import { skillsCategories } from '../../../data/skills';

import classes from './HomeSkillsSection.module.css';

export default function HomeSkillsSection() {
  return (
    <section className={classes.skillsSection}>
      <h2>
        Skills<span className="purple">.</span>
      </h2>
      <div className={classes.skillsContainer}>
        {skillsCategories.map(category => (
          <div key={category.id} className={classes.skillsCategory}>
            <h4>{category.name}</h4>
            <ul className={classes.skillsList}>
              {category.skills.slice(0, 5).map(i => (
                <li key={i.id}>{i.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
