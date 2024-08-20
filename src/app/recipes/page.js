import Link from "next/link";

async function Recipes() {
  try {
    const recipesdata = await fetch("https://dummyjson.com/recipes");
    const data = await recipesdata.json();
    return data.recipes;
  } catch (e) {
    console.log(e);
  }
}

export default async function Recepies() {
  const listrecipes = await Recipes();
  return (
    <div>
        <center>
            <h1>All Recipes</h1>
        </center>
        <div className="card-container">
        
      {listrecipes.map((recipe) => (
        <div className="card-list-item">
          <div className="card">
            <img src={recipe.image} className="card-img-top" />

            <div className="lastdiv">
              <h3 className="card-title">{recipe.name}</h3>
              <Link href={`recipes/${recipe.id}`} className="link">
                <button className="btn-primary">View</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
