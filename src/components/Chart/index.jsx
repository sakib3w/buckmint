import React, { useState } from "react";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {
  useLevelIncomeDataUserQuery,
  useRoiIncomeDataUserQuery,
} from "../../Services/earningApi";

const Chart = () => {
  const { data } = useLevelIncomeDataUserQuery();
  const LevelData = data?.level_income;
  // const { data: levelIncomeChart } = useGetLevelIncomeDataUserChartQuery();
  // const { data: roiIncomeChart } = useGetRoiIncomeDataUserChartQuery();
  // console.log(
  //   roiIncomeChart?.roiIncomeDailyTotal,
  //   levelIncomeChart?.levelIncomeDailyDate,
  //   levelIncomeChart?.levelIncomeDailyTotal
  // );

  // /* roi income */
  const { data: roiIncome } = useRoiIncomeDataUserQuery();
  // console.log(roiIncome);

  const [state, setState] = useState({
    series: [
      {
        name: "ROI",
        data: [],
      },
      {
        name: "Level Income",
        data: [],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [],
      },
      chart: {
        foreColor: "orange",
        height: 350,
        type: "area",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  useEffect(() => {
    const createIncomeLevelData = async () => {
      /* level income */
      let levelIncomeDailyTotal = [];
      let levelIncomeDailyDate = [];
      for (let i = 0; i < 9; i++) {
        let date = new Date();
        let dailyIncome = 0;
        let week = date.setDate(date.getDate() - i);
        let specificDate = new Date(week).toDateString();
        for (let j = 0; j < LevelData?.length; j++) {
          const checkingDate = new Date(LevelData[j]?.date).toDateString();
          if (specificDate === checkingDate) {
            dailyIncome += LevelData[j].amount;
          }
        }
        levelIncomeDailyTotal.push(parseFloat(dailyIncome.toFixed(3)));
        levelIncomeDailyDate.push(specificDate);
      }

      levelIncomeDailyDate.pop();

      /* roi income */
      let roiIncomeDailyTotal = [];
      let roiIncomeDailyDate = [];
      for (let i = 0; i < 8; i++) {
        let date = new Date();
        let dailyIncome = 0;
        let week = date.setDate(date.getDate() - i);
        let specificDate = new Date(week).toDateString();
        // console.log(specificDate);
        for (let j = 0; j < roiIncome?.length; j++) {
          const checkingDate = new Date(roiIncome[j]?.date).toDateString();
          // console.log(specificDate, checkingDate);
          if (specificDate === checkingDate) {
            dailyIncome += parseFloat(roiIncome[j].amount);
          }
        }
        roiIncomeDailyTotal.push(parseFloat(dailyIncome.toFixed(3)));
        roiIncomeDailyDate.push(specificDate);
      }
      /* extra data increase */
      let date = new Date();
      let week = date.setDate(date.getDate() + 1);
      let specificDate = new Date(week).toDateString();
      roiIncomeDailyDate.unshift(specificDate);
      levelIncomeDailyDate.unshift(specificDate);

      const newObj = {
        series: [
          {
            name: "ROI",
            // data: parseInt(roiIncomeDailyTotal)?.toFixed(3),
            data: roiIncomeDailyTotal,
          },
          {
            name: "Level Income",
            data: levelIncomeDailyTotal,
            // data: parseInt(levelIncomeDailyTotal)?.toFixed(3),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: true,
              tools: {
                download: false,
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: levelIncomeDailyDate,
          },
          tooltip: {
            x: {
              format: "dd/MM/yy",
            },
          },
        },
      };
      await setState(newObj);
    };
    createIncomeLevelData();
  }, [LevelData, roiIncome]);

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default Chart;
