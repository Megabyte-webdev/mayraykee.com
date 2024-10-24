import { usersDummyWithReviews } from "../../utils/dummy";
import NameTag from "../../../components/NameTag";
import { Rating } from "react-simple-star-rating";
import "../../../css/extras.css";

function UserReviews() {
  const getReviews = usersDummyWithReviews.map((currentReview) => (
    <li
      key={currentReview.id}
      className="h-full flex flex-col items-center justify-between py-[1.5%] px-[1%] w-[25%] bg-white rounded-[10px]"
    >
      <div className="w-full flex flex-col relative">
        <NameTag
          initials={currentReview.initials}
          initialsBackground={currentReview.initialsBackground}
          name={currentReview.name}
        />
        <div className="w-fit h-fit pl-[20%]  bottom-[-10px] left-2 absolute">
          <Rating
            className="w-full pb-[3px]"
            size={10}
            readonly
            initialValue={currentReview.rating}
          />
        </div>
      </div>
        <p className="text-small text-gray-400 w-full">{currentReview.comment}</p>
    </li>
  ));

  return (
    <div className="w-full h-[28%] flex flex-col justify-between">
      <h2 className="font-semibold text-md text-gray-700">User Reviews</h2>

      <ul className="h-[75%] w-full justify-between flex">{getReviews}</ul>
    </div>
  );
}

export default UserReviews;
