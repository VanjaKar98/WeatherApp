import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CustomTooltip from "../CustomTooltip/CustomTooltip";

export default function RainChart({ data, isMobile, unitX, unitY }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
        <XAxis
          dataKey="time"
          unit="h"
          interval={isMobile ? 1 : 2}
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          unit="%"
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          domain={[0, "auto"]}
        />
        <Tooltip
          content={<CustomTooltip unitX={unitX} unitY={unitY} />}
          cursor={{ fill: "rgba(99, 179, 237, 0.05)" }}
          offset={40}
        />
        <Bar
          dataKey="rain"
          fill="rgba(99, 179, 237, 0.5)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
