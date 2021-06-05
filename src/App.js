
import PropTypes from "prop-types"



function Food( { name,picture } ){
  return <div>
          <h2> I like {name} </h2>
          <img src={ picture } alt={name}/>
        </div>
}

const foodILike = [
  { 
    id:1,
    name:"Blueberries",
    image:"https://blueberry.org/wp-content/uploads/2021/04/Fresh-Highbush-Blueberries-in-Heart-Dish-edited-768x769.jpg"
  },

  { 
    id:2,
    name:"salmon sashimi",
    image:"https://www.manusmenu.com/wp-content/uploads/2016/05/1-Salmon-Sashimi-with-Ponzu-3-1-of-1.jpg"
  }
]

Food.protoType = { name:PropTypes.string.isRequired }



function App() {
  return (
    <div className="App">
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
    ))}

    </div>
  );
}

export default App;
