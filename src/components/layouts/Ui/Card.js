import classess from './Card.module.css';

function Card(probs) {
    return (
        <div className={classess.card}>
            {probs.children}
        </div>
    );

}
export default Card;