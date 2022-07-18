import { Link } from "react-router-dom";
import classes from './nav.module.css';
function Navigations() {
    return (
        <header className={classes.header}>

            <div className={classes.logo}>React MeetUp </div>

            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>All AllMeet Ups</Link>
                    </li>
                    <li>
                        <Link to={'/new-meetsup'}>Add New Meet Up</Link>
                    </li>
                    <li>
                        <Link to={'/favorties'}> My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigations;