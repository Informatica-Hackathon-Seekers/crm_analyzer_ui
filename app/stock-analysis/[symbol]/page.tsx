"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Info, BarChart2, Calendar, Globe, DollarSign } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

// Mock data for stock details
const getStockData = (symbol: string) => {
  // This would be replaced with actual API calls in a real application
  const stockInfo = {
    AAPL: {
      name: "Apple Inc.",
      price: 173.75,
      change: 1.38,
      changePercent: 0.8,
      marketCap: "2.73T",
      peRatio: 28.7,
      dividend: 0.92,
      volume: "58.3M",
      avgVolume: "62.1M",
      high: 174.30,
      low: 171.96,
      open: 172.30,
      prevClose: 172.37,
      yearHigh: 198.23,
      yearLow: 124.17,
      up: true,
    },
    TSLA: {
      name: "Tesla Inc.",
      price: 248.50,
      change: 5.59,
      changePercent: 2.3,
      marketCap: "788.2B",
      peRatio: 70.3,
      dividend: 0,
      volume: "118.5M",
      avgVolume: "103.7M",
      high: 249.55,
      low: 242.11,
      open: 243.76,
      prevClose: 242.91,
      yearHigh: 299.29,
      yearLow: 101.81,
      up: true,
    },
    AMZN: {
      name: "Amazon.com Inc.",
      price: 134.68,
      change: -0.67,
      changePercent: -0.5,
      marketCap: "1.38T",
      peRatio: 104.4,
      dividend: 0,
      volume: "35.7M",
      avgVolume: "43.2M",
      high: 136.65,
      low: 133.38,
      open: 135.02,
      prevClose: 135.35,
      yearHigh: 146.57,
      yearLow: 81.43,
      up: false,
    },
    MSFT: {
      name: "Microsoft Corp.",
      price: 337.42,
      change: 3.67,
      changePercent: 1.1,
      marketCap: "2.51T",
      peRatio: 32.8,
      dividend: 2.72,
      volume: "22.1M",
      avgVolume: "26.4M",
      high: 338.56,
      low: 333.25,
      open: 334.28,
      prevClose: 333.75,
      yearHigh: 349.67,
      yearLow: 213.43,
      up: true,
    },
    GOOGL: {
      name: "Alphabet Inc.",
      price: 138.21,
      change: 0.96,
      changePercent: 0.7,
      marketCap: "1.74T",
      peRatio: 26.5,
      dividend: 0,
      volume: "25.3M",
      avgVolume: "31.8M",
      high: 139.16,
      low: 136.89,
      open: 137.42,
      prevClose: 137.25,
      yearHigh: 142.38,
      yearLow: 83.34,
      up: true,
    },
    META: {
      name: "Meta Platforms Inc.",
      price: 312.95,
      change: -3.81,
      changePercent: -1.2,
      marketCap: "802.4B",
      peRatio: 27.1,
      dividend: 0,
      volume: "19.8M",
      avgVolume: "23.5M",
      high: 317.24,
      low: 310.36,
      open: 316.48,
      prevClose: 316.76,
      yearHigh: 326.20,
      yearLow: 88.09,
      up: false,
    },
    NVDA: {
      name: "NVIDIA Corp.",
      price: 457.30,
      change: 14.18,
      changePercent: 3.2,
      marketCap: "1.13T",
      peRatio: 107.2,
      dividend: 0.16,
      volume: "42.6M",
      avgVolume: "49.3M",
      high: 459.77,
      low: 442.36,
      open: 445.12,
      prevClose: 443.12,
      yearHigh: 502.66,
      yearLow: 108.13,
      up: true,
    },
  };

  // Default to AAPL if symbol not found
  return stockInfo[symbol as keyof typeof stockInfo] || stockInfo.AAPL;
};

// Mock chart data
const generateChartData = (days: number, up: boolean) => {
  const data = [];
  let baseValue = 100;
  
  for (let i = 0; i < days; i++) {
    const randomFactor = Math.random() * 5 - (up ? 1.5 : 3);
    baseValue = baseValue + randomFactor;
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      value: baseValue,
      volume: Math.floor(Math.random() * 10000000) + 5000000,
    });
  }
  
  return data;
};

// Mock news data
const getNewsData = (symbol: string) => {
  return [
    {
      id: 1,
      title: `${symbol} Reports Strong Quarterly Earnings, Exceeding Expectations`,
      source: "Financial Times",
      time: "2 hours ago",
      url: "#",
    },
    {
      id: 2,
      title: `Analysts Raise Price Target for ${symbol} Following Product Launch`,
      source: "Bloomberg",
      time: "5 hours ago",
      url: "#",
    },
    {
      id: 3,
      title: `${symbol} Announces New Strategic Partnership to Expand Market Reach`,
      source: "Reuters",
      time: "Yesterday",
      url: "#",
    },
    {
      id: 4,
      title: `Industry Outlook: How ${symbol} is Positioned for Future Growth`,
      source: "Wall Street Journal",
      time: "2 days ago",
      url: "#",
    },
  ];
};

export default function StockDetailPage() {
  const params = useParams();
  const symbol = typeof params.symbol === "string" ? params.symbol : "AAPL";
  
  const stockData = getStockData(symbol);
  const chartData = generateChartData(30, stockData.up);
  const newsData = getNewsData(symbol);

  return (
    <div className="flex flex-col">
      <section className="w-full py-8 md:py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">{stockData.name}</h1>
                <span className="text-sm font-medium text-muted-foreground">
                  {symbol}
                </span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-3xl font-bold">${stockData.price.toFixed(2)}</span>
                <span
                  className={`flex items-center text-lg ${
                    stockData.up ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stockData.up ? (
                    <TrendingUp className="mr-1 h-5 w-5" />
                  ) : (
                    <TrendingDown className="mr-1 h-5 w-5" />
                  )}
                  {stockData.change.toFixed(2)} ({stockData.changePercent.toFixed(2)}%)
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleString()}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Market Cap</span>
                  </div>
                  <p className="mt-1 text-lg font-bold">{stockData.marketCap}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">P/E Ratio</span>
                  </div>
                  <p className="mt-1 text-lg font-bold">{stockData.peRatio}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">52W High</span>
                  </div>
                  <p className="mt-1 text-lg font-bold">${stockData.yearHigh}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">52W Low</span>
                  </div>
                  <p className="mt-1 text-lg font-bold">${stockData.yearLow}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke={stockData.up ? "hsl(var(--chart-1))" : "hsl(var(--chart-3))"}
                          fill={stockData.up ? "hsl(var(--chart-1) / 0.2)" : "hsl(var(--chart-3) / 0.2)"}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey="volume"
                          fill="hsl(var(--chart-2))"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Price Information</h3>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Open</p>
                            <p className="font-medium">${stockData.open}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Previous Close</p>
                            <p className="font-medium">${stockData.prevClose}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Day High</p>
                            <p className="font-medium">${stockData.high}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Day Low</p>
                            <p className="font-medium">${stockData.low}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Trading Information</h3>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Volume</p>
                            <p className="font-medium">{stockData.volume}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Avg. Volume</p>
                            <p className="font-medium">{stockData.avgVolume}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Fundamentals</h3>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Market Cap</p>
                            <p className="font-medium">{stockData.marketCap}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">P/E Ratio</p>
                            <p className="font-medium">{stockData.peRatio}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Dividend</p>
                            <p className="font-medium">
                              {stockData.dividend ? `$${stockData.dividend}` : "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">52W Range</p>
                            <p className="font-medium">
                              ${stockData.yearLow} - ${stockData.yearHigh}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">About {stockData.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {stockData.name} is a leading company in its industry, focused on innovation and growth.
                          The company has a strong market position and continues to expand its product offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="news" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {newsData.map((news) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-lg border p-4 hover:bg-muted/50"
                      >
                        <a href={news.url} className="block">
                          <h3 className="font-medium hover:underline">{news.title}</h3>
                          <div className="mt-2 flex items-center text-sm text-muted-foreground">
                            <Globe className="mr-1 h-3 w-3" />
                            <span>{news.source}</span>
                            <span className="mx-2">•</span>
                            <span>{news.time}</span>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}