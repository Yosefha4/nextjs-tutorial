import Image from "next/image";
import Link from "next/link";
import Drink1 from "./randomDrink1.jpg";

console.log(Drink1);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch single drink.");
  }
  return response.json();
};

const DrinkItem = async ({ params }) => {
  const data = await fetchSingleDrink(params.id);
  const title = data?.drinks[0].strDrink;
  const imgSrc = data?.drinks[0].strDrinkThumb;

  console.log(title, imgSrc);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>

      <Image src={Drink1} alt={title} className="w-48 h-48 rounded" />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default DrinkItem;
