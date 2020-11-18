import React, { useState } from "react";
import { CategoryAdd } from "./CategoryAdd";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
    //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

    const [categories, setCategories] = useState(["Dragon Ball"]);

    // const handleAdd = () => {
    //     //setCategories([...categories, "HunterXHunter"]);
    //     setCategories((cats) => [...categories, "HunterXHunter"]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
