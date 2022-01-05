import { foodList } from "../FoodData";
const FeatureList = () => {
  const food = foodList.map((foodtype) => (
    <li className="food-list" key={foodtype.id}>
      {foodtype.foodName}
    </li>
  ));
  return <div className="mylist">{food}</div>;
};

export default FeatureList;
