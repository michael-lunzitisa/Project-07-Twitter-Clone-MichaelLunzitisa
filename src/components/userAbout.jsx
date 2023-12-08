import { build } from "vite";

const UserAbout = () => {
    return ( 
        <div>
            <button>Edit profile</button>
            <h2>Michael Lunzitisa</h2>
            <p>@Michael_lunz</p>
            <p className="profile__content">Always seeking Purus non cupidatat explicabo nec! 
            Consectetuer nibh? Quisquam earum laoreet mollitia quod impedit qui earum reprehenderit ea, 
            perferendis dolor proident quia risus fugit. Minus minus, aliqua exercitation nulla dolore 
            atque </p>
            <span className="trends__text__small">#WebDevelopment #Coder #TechEnthusiast</span>
            <ul className="user__stats">
                Passionner du developpement web<li><span className="stat__value">98</span> Following</li>
                <li><span className="stat__value">42,000</span> Followers</li>
            </ul>
        </div>
     );
}
 
export default UserAbout;