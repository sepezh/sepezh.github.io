import type { FC, ReactNode } from "react";
import classes from "./IntroSection.module.css";

type IntroSectionProps = {
  greeting?: string;
  emoji?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  profileImg: string;
};

const IntroSection: FC<IntroSectionProps> = ({
  greeting,
  emoji,
  title,
  subtitle,
  description,
  children,
  profileImg,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.introText}>
        {greeting && (
          <p>
            {greeting}
            <span className={classes.emoji}>{emoji}</span>
          </p>
        )}
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>

      <div className={classes.introImg}>
        <div className={classes.circle}>
          <div>
            <div>
              <img className={classes.profileImg} src={profileImg} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
