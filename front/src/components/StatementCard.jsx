function StatementCard({ entry }) {
  const date = new Date(entry.date);
  const today = new Date();
  return (
    <>
      <div
        key={entry.id}
        className="m-3 p-2 rounded flex flex-col justify-center items-center bg-[#2F4F4F]"
      >
        <p>{entry.name}</p>
        <p>{entry.date}</p>
        {date < today ? (
          <>
            <p>{entry.comment}</p>
            <p>{entry.rating}</p>{" "}
          </>
        ) : (
          <p>{entry.status}</p>
        )}
      </div>
    </>
  );
}

export default StatementCard;