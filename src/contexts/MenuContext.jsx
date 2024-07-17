import { createContext, useState } from "react";

export const MenuContext = createContext({
    id: '',
    name: '',
    img: null,
    description: '',
    price: null,
})

const MenuContextProvider = ({ children }) => {
    const [currentItem, setCurrentItem] = useState({})

    return (
        <MenuContext.Provider value={{ currentItem, setCurrentItem }}>
            { children }
        </MenuContext.Provider>
    )
}

export default MenuContextProvider