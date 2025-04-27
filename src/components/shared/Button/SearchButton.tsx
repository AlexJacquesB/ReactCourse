import React from "react";
import { useSearchStore } from "../../../store/useSearchStore";
import { FaSearch } from "react-icons/fa";

export const SearchButton = () => {
  const openModal = useSearchStore((state) => state.openModal);
  return <button onClick={openModal}><FaSearch/> </button>;
};
