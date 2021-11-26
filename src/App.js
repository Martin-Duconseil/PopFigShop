// import logo from './logo.svg';

import './App.css';
import {Card} from "react-bootstrap"

//function App() {

const App =() => {

  const cardInfo = [
      {
        quantity: 0,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MDM/33/a5/e8/15246643/1505-1/tsp20201209131941/Figurine-Funko-Pop-Games-Pokemon-S1-10-Pikachu-Avant-premiere-Fnac.jpg", 
        title: "Pikachu - Pokémon", 
        price: 14.99,
        desc: "Comme dans le jeu vidéo et le dessin animé, Pikachu est bien sûr tout jaune et représenté debout sur ses pattes arrière. Il est souriant et ses petites joues sont roses. On peut aussi voir que ses grandes oreilles ont les pointes noires et son petit nez est légèrement en relief. Enfin, bien sûr il a aussi cette fameuse queue en forme d'éclair qui rappelle ses pouvoirs liés à l'électricité. Cette figurine a globalement des formes simples qui sont bien fidèles avec l'esprit coloré et relativement enfantin des personnages du jeu vidéo et de la série."
      },

      {
        quantity: 0,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MDM/4f/16/e2/14816847/3756-1/tsp20211122220030/Figurine-Funko-Pop-Star-Wars-The-Mandalorian-With-The-Child-25-cm.jpg", 
        title: "The Mandalorian with The Child - Star Wars", 
        price: 34.99,
        desc: "Le Mandalorian porte sa tenue des premiers épisodes. Son armure est à ce moment assez sommaire avec des bouts de cuir et de tissu de différentes couleurs et seulement quelques morceaux de métal au niveau des bras, des épaules et d'un genou. Il porte aussi une cape marron ainsi que son arme produisant des décharges électriques dans le dos. Son visage est lui complètement caché par son casque au style bien spécifique des mandaloriens. Enfin, il tient donc le jeune Yoda dans ses bras avec sa peau verte et ses adorables grandes oreilles. Il se tient avec un bras légèrement en avant, un petit sourire et sa longue robe beige lui tenant chaud." 
      },

      {
        quantity: 0,
        image: "https://static.fnac-static.com/multimedia/Images/FR/MDM/20/11/f9/16322848/3756-1/tsp20211122220523/Figurine-Funko-Pop-Spider-Man-No-Way-Home-Black-and-Gold-Suit.jpg", 
        title: "Spiderman Black and Gold Suit - Spiderman No Way Home", 
        price: 14.99,
        desc: "En effet, en plus d'un costume amélioré et une meilleure protection, le costume d'Iron Spider est enrichi d'un dispositif en forme de pattes d'araignées qui lui permet de s'accrocher ou de s'ancrer avec sur n'importe quelle surface s'il tombe ou doit retenir quelque chose. Son costume est donc du traditionnel bleu Spider Man avec des bottes, un masque et des gants rouges. Sur son torse, des touches de doré rappelant les couleurs d'Iron Man forment un motif d'araignée et on reconnait bien sûr la toile d'araignée sur son visage. Et enfin de son dos partent les quatre grandes pattes d'araignée rouges et dorées se terminant en sortes de crochets." 
      },

  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
              <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.price}€</Card.Text>
                <button type="button" class="btn btn-outline-primary">Voir plus d'infos</button>
              </Card.Body>
          </Card>
    );
  };
  
    return <div>{cardInfo.map(renderCard)}</div>;
};

export default App;
