import classes from './AboutStorySection.module.css';

export default function AboutStorySection() {
  return (
    <section>
      <h2>
        My Story<span className="purple">.</span>
      </h2>
      <div className={classes.textWrapper}>
        <p>
          <b>My journey into software development began in 2019</b>, when I
          realized that accounting couldn’t satisfy my curiosity and passion for
          problem-solving. I was drawn to programming because it combines logic,
          creativity, and continuous learning.
        </p>

        <p>
          I started learning through platforms like Udemy, Coursera, Khan
          Academy, and Harvard’s CS50. From the beginning, coding felt natural
          to me, structured, logical, and deeply engaging.
        </p>

        <p>
          Soon after, I joined a bootcamp where I collaborated with students
          from top Iranian universities to build a full e-commerce application.
          That experience strengthened my technical foundation and confirmed
          that software development was the right path for me.
        </p>

        <p>
          Seven months after starting my coding journey, I joined Parvan Pajooh
          as a Frontend Developer, where my professional career officially began
        </p>
      </div>
    </section>
  );
}
