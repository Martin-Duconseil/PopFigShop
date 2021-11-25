// import logo from './logo.svg';

import './App.css';
import {Card} from "react-bootstrap"


function Produit(props) {
  return <div>
    <h3>{props.name}</h3>
    <img src={props.source}></img>
    <p>Prix : {props.prix}</p>
  </div>
}

function Fiche(props) {
  return <div>
    <h3>{props.name}</h3>
    <img src={props.source}></img>
    <p>{props.description}</p>
    <p>Prix : {props.prix}</p>
    <button>Ajouter au panier</button>
  </div>
}

//function App() {

const App =() => {
  const cardInfo = [
      {
        image: "https://placekitten.com/100/100", 
        title: "Test", 
        text: "Hey" 
      },
      {
        image: "https://placekitten.com/100/100", 
        title: "Test", 
        text: "Hey" 
      },
      {
        image: "https://placekitten.com/100/100", 
        title: "Test", 
        text: "Hey" 
      },
      {
        image: "https://placekitten.com/100/100", 
        title: "Test", 
        text: "Hey" 
      }, 
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
              <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
          </Card>
    );
  };
  
    return <div>{cardInfo.map(renderCard)}</div>;
};
  
    <div>

      <h1>Bienvenue sur PopFigShop !</h1>

    {/* ////////////////////////////////// */}

      <div id="accueil">
        <div id="actualités">
        <h2>Les dernières actualités</h2>

        <img src="https://placekitten.com/350/350"/> <br></br>

      </div>

        {/* /// */}

      <h2>Pop à la une</h2>

     

      <Produit 
      source="https://placekitten.com/100/100"
      name="Ash from Pokemon"
      prix="14.99€"
      />

      <Produit 
      source="https://placekitten.com/98/98"
      name="The Flash in Chrome Color"
      prix="44.99€"
      />

      <Produit 
      source="https://placekitten.com/99/99"
      name="Steve from Minecraft with dog"
      prix="19.99€"
      />

      </div>

    {/* ////////////////////////////////// */}

      <Fiche 
      source="https://placekitten.com/300/300"
      name="Harry Potter with Philosopher's Stone"
      description="Funko a ici représenté Harry dans l'une des dernières scènes du premier film quand il parvient à prendre la pierre dans sa main. Il porte un pantalon beige et un pull rouge, tous deux déchirés et brulés après avoir passé de nombreuses épreuves pour en arriver là. On retrouve ses cheveux brun, ses lunettes rondes et bien sûr la cicatrice sur son front. Enfin, on retrouve donc la pierre ressemblant à un rubis ou un grenat, d'un rouge profond."
      prix="14.99€"
      />

    </div>


export default App;
