import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CustomTooltip from "../CustomTooltip/CustomTooltip";

export default function WindChart({ data, isMobile, unitX, unitY }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#68d391" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#68d391" stopOpacity={0} />
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
          unit="km/h"
          tick={{ fill: "#475569", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          content={<CustomTooltip unitX={unitX} unitY={unitY} />}
          cursor={{ stroke: "#68d391", strokeWidth: 0.5 }}
        />
        <Area
          type="monotone"
          dataKey="wind"
          stroke="#68d391"
          strokeWidth={2.5}
          fill="url(#windGrad)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
