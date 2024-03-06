import { useState, useEffect } from "react";
import { getCategories, addCategory } from "../services/apiFacade";
import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";

export const Categories = () => {
    const [categories, setCategories] = useState<Array<string>>();
    const [categoryToAdd, setCategoryToAdd] = useState<string>("");
    const auth = useAuth();

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);

    // const handleAddCategory = () => {
    //     if (categoryToAdd.length > 0) {
    //         // setCategories([...categories, categoryToAdd]);
    //         // setCategoryToAdd("");
    //         // const newCategory = await addCategory(categoryToAdd);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (categoryToAdd.length > 0) {
            await addCategory(categoryToAdd);
            getCategories().then((res) => setCategories(res));
        }
    };

    return (
        <>
            <h2>Categories</h2>
            <p>Browse recipes by category.</p>
            {auth.isLoggedInAs(["ADMIN"]) && (
                <form onSubmit={handleSubmit}>
                    add new category:
                    <input
                        value={categoryToAdd}
                        type="text"
                        style={{ margin: "5px" }}
                        onChange={(e) => setCategoryToAdd(e.target.value)}
                    ></input>
                    <button type="submit">add</button>
                </form>
            )}

            <ul>
                {categories?.map((category) => (
                    <li key={category}>
                        {category}
                        <Link to={`/recipes?category=${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const Desktops = () => <h3>Desktop PC Page</h3>;
export const Laptops = () => <h3>Laptops Page</h3>;
