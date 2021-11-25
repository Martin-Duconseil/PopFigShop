// import logo from './logo.svg';
import './App.css';

function App() {
  return (
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

      <div id="produitréduit">

        <img src="https://placekitten.com/100/100"/>

        <h3>Harry Potter with Philosopher's Stone</h3>

        <p>Prix : 15.99€</p>

      </div>

      </div>

    {/* ////////////////////////////////// */}

      <div id="fiche produit">
        <h2>Figurine Pop Harry Potter with Philosopher's Stone</h2>

        <img src="https://placekitten.com/300/300"/> <br></br>

        <p>Funko a ici représenté Harry dans l'une des dernières scènes du premier film quand il parvient à prendre la pierre dans sa main. Il porte un pantalon beige et un pull rouge, tous deux déchirés et brulés après avoir passé de nombreuses épreuves pour en arriver là. On retrouve ses cheveux brun, ses lunettes rondes et bien sûr la cicatrice sur son front. Enfin, on retrouve donc la pierre ressemblant à un rubis ou un grenat, d'un rouge profond.</p>

        <p>Prix : 14.99€</p>

        <button>Ajouter au panier</button><br></br>
      </div>

    </div>
    
  );
}

export default App;
