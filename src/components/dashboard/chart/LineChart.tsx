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
      {
        date: new Date(2024,4,2),
        stars: 130,
      },
      {
        date: new Date(2024,4,5),
        stars: 150,
      },
    ],
  },
  {
    label: 'Series 2',
    data: [
      {
        date: new Date(2024,3,2),
        stars: 200,
      },
      {
        date: new Date(2024,3,4),
        stars: 250,
      },
    ],
  },
]

 function LineChart() {
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

      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>

    
  );
}


export default memo(LineChart)