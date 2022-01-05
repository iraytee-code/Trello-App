import AddCard from "./AddCard";
import FeatureList from "./FeatureList";
import PhoneFeature from "./PhoneFeature";
const MainFeature = () => {
  return (
    <div className="main">
      <PhoneFeature />
      <FeatureList />
      <AddCard />
    </div>
  );
};

export default MainFeature;
