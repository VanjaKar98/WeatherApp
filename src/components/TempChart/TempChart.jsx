import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CustomTooltip from "../CustomTooltip/CustomTooltip";

export default function TempChart({ data, isMobile, unitX, unitY }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#63b3ed" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#63b3ed" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          unit="h"
          interval={isMobile ? 1 : 2}
          tick={{ fill: "#475569", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          unit="°"
          tick={{ fill: "#475569", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          content={<CustomTooltip unitX={unitX} unitY={unitY} />}
          cursor={{ stroke: "#63b3ed", strokeWidth: 0.5 }}
          offset={40}
        />
        <Area
          type="monotone"
          dataKey="temp"
          stroke="#63b3ed"
          strokeWidth={2.5}
          fill="url(#tempGrad)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
