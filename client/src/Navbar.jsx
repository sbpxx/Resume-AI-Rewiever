import "./Navbar.css"

export function Navbar({isLogged}){
return (
<nav>
    <a href="#">Moon workers</a>
    <ul>
        <li><a href="#">Analyse</a></li>
        <li><a href="#">Tarifs</a></li>
        {isLogged ? <li>Mon Compte</li> : <button>Connexion</button> }
        
    </ul>
</nav>
);
}