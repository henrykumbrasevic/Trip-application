import Card from "../components/TripCard";
import { useItemContext } from "../context/ItemContext";

function ItemsPage() {
  const { items, loading, error } = useItemContext();

  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {!error && items.map((entry) => <Card entry={entry} key={entry.id} />)}
        {error && <div>error</div>}
        {loading && <div>loading ...</div>}
      </div>
    </>
  );
}

export default ItemsPage;