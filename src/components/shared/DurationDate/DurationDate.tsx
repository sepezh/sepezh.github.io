export default function DurationDate({ start, end }: { start: string; end: string }) {
  const getDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  console.log(startDate, endDate, "DURATION");
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth() + 1; // +1 to include the starting month

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const { years, months } = getDuration(start, end);


  return (
    <span>
      {years > 0 && `${years} yr${years > 1 ? "s" : ""}`}{" "}
      {months > 0 && `${months} mo${months > 1 ? "s" : ""}`}
    </span>
  );
}
