import { useState } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import Modal from "react-modal";
import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useSearchStore } from "../../store/useSearchStore";
import { FaSearch } from "react-icons/fa";

const SearchModal: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const { pokemonData } = useGetPokemon(currentSearch);
  const [isOpen, closeModal] = useSearchStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);

  const onClickSearch = () => setCurrentSearch(filter.toLowerCase());

  const handleCloseModal = () => {
    setFilter("");
    closeModal();
    setCurrentSearch("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={
        "w-6/12 h-4/12 mx-auto bg-white p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
      }
    >
      <input type="text" value={filter} onChange={handleInputChange} className="border p-2"/>
      <button onClick={onClickSearch}><FaSearch/></button>
      {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
    </Modal>
  );
};

export default SearchModal;
