// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

let searchFood = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

    fetch(url)
        .then(res => res.json())
        .then(data => dsisplayMeal(data))

}
searchFood()
const dsisplayMeal = (meals) => {

    const container = document.getElementById('container')
    meals.forEach(meal => {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `

        <div class="img">
          <img class="" src="jacket-1.png" alt="">
        </div>

        <div class="detail">
           <h2>name:lorem</h2>
           <p>Lorem ipsum dolor sit amet.</p>
        </div>
    
    `
    })

}
