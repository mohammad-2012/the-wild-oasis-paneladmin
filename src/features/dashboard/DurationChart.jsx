import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    grid-column: 1 / 2;
  }

  @media (max-width: 768px) {
    padding: 1.8rem 2rem;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    padding: 1.5rem;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: var(--color-grey-500);
  font-size: 1.6rem;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 2rem;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 240px;

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 640px) {
    height: 320px;
  }
`;

const startDataLight = [
  { duration: "1 night", value: 0, color: "#ef4444" },
  { duration: "2 nights", value: 0, color: "#f97316" },
  { duration: "3 nights", value: 0, color: "#eab308" },
  { duration: "4-5 nights", value: 0, color: "#84cc16" },
  { duration: "6-7 nights", value: 0, color: "#22c55e" },
  { duration: "8-14 nights", value: 0, color: "#14b8a6" },
  { duration: "15-21 nights", value: 0, color: "#3b82f6" },
  { duration: "21+ nights", value: 0, color: "#a855f7" },
];

const startDataDark = [
  { duration: "1 night", value: 0, color: "#b91c1c" },
  { duration: "2 nights", value: 0, color: "#c2410c" },
  { duration: "3 nights", value: 0, color: "#a16207" },
  { duration: "4-5 nights", value: 0, color: "#4d7c0f" },
  { duration: "6-7 nights", value: 0, color: "#15803d" },
  { duration: "8-14 nights", value: 0, color: "#0f766e" },
  { duration: "15-21 nights", value: 0, color: "#1d4ed8" },
  { duration: "21+ nights", value: 0, color: "#7e22ce" },
];

function prepareData(startData, stays) {
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj,
    );
  }

  const data =
    stays
      ?.reduce((arr, cur) => {
        const num = cur.numNights;
        if (num === 1) return incArrayValue(arr, "1 night");
        if (num === 2) return incArrayValue(arr, "2 nights");
        if (num === 3) return incArrayValue(arr, "3 nights");
        if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
        if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
        if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
        if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
        if (num >= 21) return incArrayValue(arr, "21+ nights");
        return arr;
      }, startData)
      ?.filter((obj) => obj.value > 0) || [];

  return data;
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays || []);

  const hasData = data.length > 0 && confirmedStays?.length > 0;

  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>
      {!hasData ? (
        <EmptyMessage>No data available for the selected period</EmptyMessage>
      ) : (
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Pie
                data={data}
                nameKey="duration"
                dataKey="value"
                innerRadius="30%"
                outerRadius="45%"
                cx="50%"
                cy="50%"
                paddingAngle={3}
              >
                {data.map((entry) => (
                  <Cell
                    fill={entry.color}
                    stroke={entry.color}
                    key={entry.duration}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `${value} stays`,
                  props.payload.duration,
                ]}
              />
              <Legend
                verticalAlign={window.innerWidth > 640 ? "middle" : "bottom"}
                align={window.innerWidth > 640 ? "right" : "center"}
                width={window.innerWidth > 640 ? "30%" : "100%"}
                layout={window.innerWidth > 640 ? "vertical" : "horizontal"}
                iconSize={window.innerWidth > 480 ? 15 : 12}
                iconType="circle"
                formatter={(value, entry) => entry.payload.duration}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      )}
    </ChartBox>
  );
}

export default DurationChart;
