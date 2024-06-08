import { coursesOverviewDummy } from "../../utils/dummy";
import CoursesOverviewItem from "./CoursesOverviewItem";

function CoursesOverview() {

    const allItems = coursesOverviewDummy.map(current => <CoursesOverviewItem key={current.id} currentItem={current} />)

    return ( <ul className="w-full flex justify-between h-[15%]">{allItems}</ul> );
}

export default CoursesOverview;