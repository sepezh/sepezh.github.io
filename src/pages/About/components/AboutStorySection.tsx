import classes from './AboutStorySection.module.css';

export default function AboutStorySection() {
  return (
    <section>
      <h2>
        My Story<span className="purple">.</span>
      </h2>
      <div className={classes.textWrapper}>
        <p>
          My journey into software development began in 2019, when I realized
          that accounting could never satisfy my curious, persistent, and
          problem‑driven nature. I wanted a career that challenged me—something
          that required deep thinking, creativity, and the kind of
          problem‑solving that keeps you growing every day.
        </p>

        <p>
          I started learning through online platforms like Udemy, Khan Academy,
          Coursera, and Harvard’s CS50. From the very first lessons, I felt an
          immediate connection. Coding matched the way my mind works—it was
          structured, logical, and endlessly challenging in the best possible
          way.
        </p>

        <p>
          I continued learning and eventually joined a bootcamp, where I
          collaborated with students from some of Iran’s top universities to
          build an e‑commerce application. That experience taught me how to
          think systematically and strengthened my foundation as a frontend
          developer.
        </p>

        <p>
          Seven months after I began learning to code, I joined ParvanPajouh, a
          company focused on building and improving websites and applications
          for its clients. That was the moment my professional journey truly
          began—turning curiosity into skill, and skill into a career.
        </p>
      </div>
    </section>
  );
}
