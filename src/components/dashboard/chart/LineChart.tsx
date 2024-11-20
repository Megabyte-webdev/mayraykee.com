<<<<<<< HEAD
// LineChart.js
=======
>>>>>>> main
import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React, { memo } from "react";
import { AxisOptions, Chart } from "react-charts";

type DailyStars = {
  date: Date,
  stars: number,
}

type Series = {
  label: string,
  data: DailyStars[]
}

const data: Series[] = [
  {
    label: 'Series 1',
    data: [
<<<<<<< HEAD
      { date: new Date(2024, 4, 2), stars: 130 },
      { date: new Date(2024, 4, 5), stars: 150 },
=======
      {
        date: new Date(2024,4,2),
        stars: 130,
      },
      {
        date: new Date(2024,4,5),
        stars: 150,
      },
>>>>>>> main
    ],
  },
  {
    label: 'Series 2',
    data: [
<<<<<<< HEAD
      { date: new Date(2024, 3, 2), stars: 200 },
      { date: new Date(2024, 3, 4), stars: 250 },
=======
      {
        date: new Date(2024,3,2),
        stars: 200,
      },
      {
        date: new Date(2024,3,4),
        stars: 250,
      },
>>>>>>> main
    ],
  },
]

<<<<<<< HEAD
function LineChart() {
=======
 function LineChart() {
>>>>>>> main
  const { randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: datum => datum.date,
    }),
    []
  )

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: datum => datum.stars,
      },
    ],
    []
  )

  return (
<<<<<<< HEAD
    <div className="w-full h-full overflow-hidden"> {/* Added overflow-hidden */}
      <ResizableBox style={{ width: '100%', height: '100%' }}>
=======

      <ResizableBox>
>>>>>>> main
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
<<<<<<< HEAD
            // Setting responsive: true directly inside the Chart component options
            // responsive: true,
          }}
          style={{ maxHeight: '100%', width: '100%' }}
        />
      </ResizableBox>
    </div>
  );
}

export default memo(LineChart);
=======
          }}
        />
      </ResizableBox>

    
  );
}


export default memo(LineChart)
>>>>>>> main
