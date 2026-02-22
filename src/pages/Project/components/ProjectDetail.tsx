import classes from './ProjectDetail.module.css';

type Props = {
  about: string;
  challenges: string;
  results: string;
};

export default function ProjectDetail({ about, challenges, results }: Props) {
  return (
    <div className={classes.moreDetail}>
      <DetailBlock title="About" text={about} />
      <DetailBlock title="Challenges" text={challenges} />
      <DetailBlock title="Results" text={results} />
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
