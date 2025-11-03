import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    const ULR = "http://localhost:3000/meals";

    async function fetchMeals() {
      const res = await fetch(ULR);

      if (!res.ok) {
      }

      const meals = await res.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal}/>;
      })}
    </ul>
  );
}
