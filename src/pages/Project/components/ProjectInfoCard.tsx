import classes from './ProjectInfoCard.module.css';

type Props = {
  client: string;
  year: number;
  role: string;
};

export default function ProjectInfoCard({ client, year, role }: Props) {
  return (
    <div className={classes.detailCard}>
      <InfoBlock label="Client" value={client} />
      <InfoBlock label="Year" value={year} />
      <InfoBlock label="My role" value={role} />
    </div>
  );
}

export function InfoBlock({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <p className={classes.cardInfo}>
      <span className={classes.label}>{label}</span>
      <span className={classes.value}>{value}</span>
    </p>
  );
}
