import classes from './AboutIntroSection.module.css';

export default function AboutIntroSection() {
  return (
    <section>
      <h1>
        About me<span className="purple">.</span>
      </h1>
      <p className={classes['about-me-text']}>
        Developing beautiful and functional websites is what I love doing, and
        that's why I give my all in every new challenge.
      </p>
    </section>
  );
}
