import travelPlansDate from "../assets/travel-plans.json";
import classes from "./travelList.module.css";
const TravelList = () => {
  console.log(travelPlansDate);

  return travelPlansDate.map((travel) => {
    return (
      <div className={classes.container} key={travel.id}>
        <div>
          <img className={classes.img} src={travel.image} />
        </div>
        <div className={classes.destinationName}>
          <h1>{travel.destination} ({travel.days} Days)</h1>
          <p>{travel.description}</p>
          <p>
            <span className={classes.boldText}>Price:</span>
            {travel.totalCost}
          </p>
        </div>
      </div>
    );
  });
};

export default TravelList;
