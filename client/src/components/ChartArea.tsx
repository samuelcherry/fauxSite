import { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
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
    }, 1000);
    return () => {
      ws.close();
      clearInterval(interval);
    };
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="price" dot={false} />
    </LineChart>
  );
}
