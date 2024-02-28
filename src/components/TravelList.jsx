import { useState } from "react";
import travelData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelData);
  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  const getlabel = (plan) => {
    const cost = plan.totalCost;
    const allInclusive = plan.allInclusive;

    if (cost <= 350) {
      return "Great Deal" + (allInclusive ? ", All Inclusive" : "");
    } else if (cost >= 1500) {
      return "Premium" + (allInclusive ? ", All Inclusive" : "");
    } else {
      return allInclusive ? "All Inclusive" : "";
    }
  };

  return (
    <div>
      {travelPlans.map((plan) => (
        <div className="container" key={plan.id}>
          <div>
            <img className="img" src={plan.image} alt={plan.destination} />
          </div>
          <div>
            <h3 className="destinationName">{plan.destination}</h3>
            <p>{plan.description}</p>
            <p>Duration: {plan.days} days</p>
            <p>
              <span className="boldText">Price:</span> ${plan.totalCost} (
              {getlabel(plan)})
            </p>
          </div>

          <button onClick={() => handleDelete(plan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
