import axios from "axios";
import { getOne } from "./get";
import { URL } from "../helpers/localhostURL"

export const deleteData = async (id) => {
  const { title } = await getOne(id);
  const confirmed = window.confirm(
    `Ar tikrai norite ištrinti įrašą ID ${id}?`
  );

  if (!confirmed) {
    return;
  }
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};
