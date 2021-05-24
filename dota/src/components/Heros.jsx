import { useState, useEffect } from 'react';

export default function Heros() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch("https://api.stratz.com/api/v1/Hero/1/purchasePattern")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    // setItems(result);
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
