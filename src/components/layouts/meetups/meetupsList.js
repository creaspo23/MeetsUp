import MeetsUpItem from './meetupItems';
import classes from './MeetupList.module.css';
function MeetupList(probs) {
    return (
        <ul className={classes.list}>
            {probs.meetups.map(meetups => <MeetsUpItem
                key={meetups.id}
                id={meetups.id}
                image={meetups.image}
                title={meetups.title}
                address={meetups.address}
                description={meetups.description} />)}
        </ul>
    );
}

export default MeetupList;