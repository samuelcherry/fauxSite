import { useEffect, useState, useRef } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

type PricePoint = {
  time: string;
  price: number;
};

export default function BTCChart() {
  const [data, setData] = useState<PricePoint[]>([]);
  const latestPrice = useRef<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://data-stream.binance.vision/ws/btcusdt@trade",
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      latestPrice.current = parseFloat(message.p);
    };
    const interval = setInterval(() => {
      if (latestPrice.current !== null) {
        setData((prev) => {
          const newData = [
            ...prev,
            {
              time: new Date().toLocaleTimeString(),
              price: latestPrice.current!,
            },
          ];
          return newData.slice(-50);
        });
      }
    }, 60000);
    return () => {
      ws.close();
      clearInterval(interval);
    };
  }, []);

  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      style={{ background: "#0f172a", borderRadius: "8px" }}
    >
      <defs>
        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid stroke="#1e293b" strokeDasharray="2 2" />

      <XAxis
        dataKey="time"
        stroke="#94a3b8"
        tick={{ fontSize: 12 }}
        tickLine={false}
        axisLine={false}
      />

      <YAxis
        domain={["auto", "auto"]}
        stroke="#94a3b8"
        tick={{ fontSize: 12 }}
        tickLine={false}
        axisLine={false}
      />

      <Tooltip
        contentStyle={{
          backgroundColor: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "6px",
        }}
        labelStyle={{ color: "#94a3b8" }}
        formatter={(value) => [`$${(value as number).toFixed(2)}`, "BTC"]}
        cursor={{ stroke: "#475569", strokeWidth: 1 }}
      />

      <Area
        type="monotone"
        dataKey="price"
        stroke="#22c55e"
        fill="url(#priceGradient)"
        isAnimationActive={false}
      />
    </LineChart>
  );
}
