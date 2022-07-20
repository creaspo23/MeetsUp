import MeetsUpItem from './meetupItems';
import classes from './MeetupList.module.css';
function MeetupList(props) {
  
    return (
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetsUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  }

export default MeetupList;