import { useEffect, useState } from "react";
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

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const price = parseFloat(message.p);

      setData((prev) => {
        const newData = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            price,
          },
        ];
        return newData.slice(-50);
      });
    };
    return () => ws.close();
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis domain={["auto auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="price" dot={false} />
    </LineChart>
  );
}
