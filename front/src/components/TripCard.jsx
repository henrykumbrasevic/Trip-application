import Button from "./Button";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { firstLetterCapitalizer } from "../helpers/firstLetterCapitalizer";
import { useState } from "react";
import { deleteItemById } from "../helpers/delete"

function Card({ entry }) {


  const { user } = useAuth();
  const [update, setUpdate] = useState(0);


  const deleteItemHandler = () => {
    try {
      deleteItemById(entry.id);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div
        key={entry.id}
        className="m-3 p-2 rounded flex flex-col justify-center items-center bg-[#DEB887] shadow-2xs "
      >
        <img
          src={entry.image}
          alt="destination picture"
          className="w-100 h-50 rounded object-cover m-2 shadow-sm"
        />
        <p className="font-bold">Destination: {entry.name}</p>
        <p>Price: {`€${entry.price}`}</p>
        <p className="italic">
          Category: {firstLetterCapitalizer(entry.category)}
        </p>
        {entry.rating === 0 ? (
          <p>The trip has no ratings yet.</p>
        ) : (
          <p>Rating: {entry.rating}</p>
        )}

        {entry.available ? (
          <Link to={`/trips/${entry.id}`}>
            <Button buttonType={"registration"}>See available dates</Button>
          </Link>
        ) : (
          <p className="italic">Currently no dates</p>
        )}
        {user
          ? user.roles?.includes("ROLE_ADMIN") && (
              <div className="flex">
                  <Button buttonType={"registration"}>Edit</Button>
                  <Button buttonType={"registration"} onClick={deleteItemHandler}>Delete</Button>
              </div>
            )
          : ""}
      </div>
    </>
  );
}

export default Card;