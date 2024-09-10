const url = "https://www.hecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  // Check if the response is ok
  if (!response.ok) {
    throw new Error("Failed to fetch drinks.");
  }
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl font-bold">Drinks Page</h1>
    </div>
  );
};

export default DrinksPage;
