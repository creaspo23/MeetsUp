import classes from '../layouts/layout.module.css';
import Navigations from './nav';

function Layout(props) {
    return (
        <div>
            <Navigations />
            <main className={classes.main}>
                {props.children}
            </main>

        </div>
    );
}

export default Layout;