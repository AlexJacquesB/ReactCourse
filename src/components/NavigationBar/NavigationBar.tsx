import React from "react"
import { Link } from "react-router-dom"
import pokeball from "../../assets/pokeball.png"
import { SearchButton } from "../shared/Button/SearchButton";

const NavigationBar: React.FC = () => (
    <nav className="mx-auto bg-red-600 flex justify-between h-12 items-center shadpw-lg">
        <div className="mx-auto flex items-center justify-between w-9/12">
            <Link to="/">
                <img src={pokeball} alt="Poke Logo" className="w-10 h-10"/>
            </Link>
            <div className="flex gap-5 text-white font-bold text-lg items-center">
                <Link className="hover:text-black" to="/">Pokedex</Link>
                <Link className="hover:text-black" to="/favorite">Favorites</Link>
                <SearchButton />
            </div>
        </div>
    </nav>
)

export default NavigationBar;