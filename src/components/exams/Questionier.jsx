import { CiCircleCheck } from "react-icons/ci";

function Questionier() {
  return (
    <div className="h-full flex flex-col w-[68%] rounded-[10px]  gap-[2%] divide-y py-[1%] bg-white">
      <h2 className="flex font-bold text-md text-gray-400 px-[3%]">
        Prep Review Quiz: History and Background
      </h2>
      <div className="px-[3%] h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[3%] items-center justify-center h-[50%]">
          <span className="font-semibold text-green ">Good Job!</span>
          <span className="font-normal text-black text-small ">
            You passed this quiz with a score of:{" "}
          </span>
          <span className="text-green text-xl">100%</span>
          <span className="font-normal text-black text-small">
            You need 85 % to pass
          </span>
          <span className="text-sm font-semibold cursor-pointer hover:underline">RETAKE QUIZ</span>
          <button className="bg-green text-white rounded-[5px] px-[10px] hover:scale-105 duration-50 text-sm py-[5px] text-small font-semibold">CONTINUE</button>
        </div> 

        <ul className="w-full px-[10%] flex flex-col gap-[15px]">
            <li className="flex items-center gap-2 bg-gray-200 p-[10px]">
                <p className="text-small">How do you know your learners are retaining knowledge in appropriate volumes and timeframes? That’s right: You throw in assessments, and see if the students “catch your drift”. Obviously, there is a boring </p>
                <CiCircleCheck className="text-7xl text-green"/>
            </li>
            <li className="flex items-center gap-2 bg-gray-200 p-[10px]">
                <p className="text-small">We could use many eloquent metaphors, yet it all boils down to the same: Keep your message –or question– clear and succinct. The more concisely you formulate the questions, the better. </p>
                <CiCircleCheck className="text-7xl text-green"/>
            </li>
            <li className="flex items-center gap-2 bg-gray-200 p-[10px]">
                <p className="text-small">By neglecting the kaleidoscope of question types and sticking to a single option, you are missing out on a wealth of perspectives and assessment techniques. Some  </p>
                <CiCircleCheck className="text-7xl text-green"/>
            </li>

        </ul>
      </div>
    </div>
  );
}

export default Questionier;
