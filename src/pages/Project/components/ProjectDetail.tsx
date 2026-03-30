import type { featureType } from '../../../data/projects';
import classes from './ProjectDetail.module.css';

type Props = {
  about: string;
  features: featureType[];
  challenges: string[];
  results: string[];
};

export default function ProjectDetail({
  about,
  features,
  challenges,
  results,
}: Props) {
  return (
    <div className={classes.moreDetail}>
      <DetailBlock title="About" text={about} />
      <DetailList
        title="Features"
        items={features}
        className={classes.featuresList}
      />
      <DetailList
        title="Challenges"
        items={challenges}
        className={classes.challengesList}
      />
      <DetailList title={"Results"} items={results} className={classes.resultsList} />
    </div>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function DetailList({
  title,
  items,
  className,
}: {
  title: string;
  items: string[] | featureType[];
  className?: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className={className}>
        {items.map((item, index) => {
          if (typeof item === 'object') {
            return (
              <li key={index}>
                <b>{item.key} :</b> <span>{item.value}</span>
              </li>
            );
          }

          return <li key={index}>{item as string}</li>;
        })}
      </ul>
    </div>
  );
}
