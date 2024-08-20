import Link from "next/link"

async function RecipesDetailsId(id) {
    try{
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await response.json()
        return data
    }
    catch(e){
        console.log(e)
    }
}


export default async function RecipesDetails({params}){
    const recipeid = await RecipesDetailsId(params.details)
    return(
        <div>
           <Link href={'/recipes'}> <button>Back</button></Link>
            <h1>Recipes Details</h1>
            <div className="container">
            <img src={recipeid.image} alt={recipeid.name} className="recipe-image" />
            <div className="text-center">
                <h2 className="detail-item">{recipeid.mealType}</h2>
                <h2 className="detail-item">{recipeid.name}</h2>
                <h2 className="detail-item">{recipeid.instructions}</h2>
                <h2 className="detail-item">{recipeid.ingredients}</h2>
                <h2 className="detail-item">{recipeid.difficulty}</h2>
            </div>
        </div>
        </div>
        
    )
}