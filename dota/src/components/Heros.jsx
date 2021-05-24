import { useState, useEffect } from 'react';

export default function Heros() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()

    // const Dota2Api = require("dota2-api");

    // const da = Dota2Api.create("F1C3BD20842DC2863C697D6D48DE6600", 570);

    // const options = { game_mode: 1 };
    // da.getMatchHistory(options).then(
    //     (result) => {
    //         console.log(result);
    //     },
    //     (errorResponseStatusText) => {
    //         console.log(errorResponseStatusText);
    //     }
    // );


    useEffect(() => {
        fetch(
            "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=00525C0E3751C36DEDC4102061BE66E3"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        {/* {item.name} {item.price} */}
                        {/* {item.heroId} {item.roleId} */}
                    </li>
                ))}
            </ul>
        );
    }
}
