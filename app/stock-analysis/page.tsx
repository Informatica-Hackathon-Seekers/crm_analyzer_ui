"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import MarketIndicesSection from "@/components/marketIndicesSection";
import Link from "next/link";

// Mock data for market indices
const marketIndices = [
  { name: "Sensex", value: "59,832.97", change: "+0.7%", up: true },
  { name: "Nifty", value: "17,853.20", change: "+0.8%", up: true },
  { name: "Bank Nifty", value: "41,559.40", change: "-0.3%", up: false },
  { name: "Nifty IT", value: "28,690.65", change: "+1.2%", up: true },
];

// Mock data for sliding stocks
const slidingStocks = [
  { name: "Tesla", symbol: "TSLA", price: "$248.50", change: "+2.3%", up: true },
  { name: "Apple", symbol: "AAPL", price: "$173.75", change: "+0.8%", up: true },
  { name: "Amazon", symbol: "AMZN", price: "$134.68", change: "-0.5%", up: false },
  { name: "Microsoft", symbol: "MSFT", price: "$337.42", change: "+1.1%", up: true },
  { name: "Google", symbol: "GOOGL", price: "$138.21", change: "+0.7%", up: true },
  { name: "Meta", symbol: "META", price: "$312.95", change: "-1.2%", up: false },
  { name: "Netflix", symbol: "NFLX", price: "$484.08", change: "+2.5%", up: true },
  { name: "NVIDIA", symbol: "NVDA", price: "$457.30", change: "+3.2%", up: true },
];

// Mock data for today's stocks
const todaysStocks = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    price: "$173.75",
    change: "+0.8%",
    marketCap: "2.73T",
    volume: "58.3M",
    up: true,
  },
  {
    name: "Microsoft Corp.",
    symbol: "MSFT",
    price: "$337.42",
    change: "+1.1%",
    marketCap: "2.51T",
    volume: "22.1M",
    up: true,
  },
  {
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    price: "$134.68",
    change: "-0.5%",
    marketCap: "1.38T",
    volume: "35.7M",
    up: false,
  },
  {
    name: "Tesla Inc.",
    symbol: "TSLA",
    price: "$248.50",
    change: "+2.3%",
    marketCap: "788.2B",
    volume: "118.5M",
    up: true,
  },
  {
    name: "Meta Platforms Inc.",
    symbol: "META",
    price: "$312.95",
    change: "-1.2%",
    marketCap: "802.4B",
    volume: "19.8M",
    up: false,
  },
  {
    name: "NVIDIA Corp.",
    symbol: "NVDA",
    price: "$457.30",
    change: "+3.2%",
    marketCap: "1.13T",
    volume: "42.6M",
    up: true,
  },
];

export default function StockAnalysisPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/stock-analysis/${searchQuery.trim()}`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Market Indices */}
      <MarketIndicesSection />

      {/* Search Box */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stock Analysis
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Search for any stock to get detailed analysis and insights
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for a stock (e.g., AAPL, TSLA)"
                className="h-14 rounded-full pl-6 pr-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-2 h-10 w-10 rounded-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sliding Moving Navs */}
      <section className="w-full overflow-hidden py-6 bg-card">
        <div className="relative">
          {/* Top Nav - Moving Left */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex w-max space-x-8 px-4"
          >
            {[...slidingStocks, ...slidingStocks].map((stock, i) => (
              <Link
                href={`/stock-analysis/${stock.symbol}`}
                key={`top-${i}`}
                className="flex items-center space-x-3 rounded-lg border bg-card p-3 shadow-sm hover:bg-accent/50"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    stock.up ? "bg-green-100" : "bg-red-100"
                  } ${
                    stock.up ? "text-green-600" : "text-red-600"
                  } dark:bg-opacity-20`}
                >
                  {stock.up ? (
                    <TrendingUp className="h-5 w-5" />
                  ) : (
                    <TrendingDown className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stock.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {stock.symbol}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{stock.price}</span>
                    <span
                      className={`text-sm ${
                        stock.up ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.change}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Bottom Nav - Moving Right */}
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="mt-4 flex w-max space-x-8 px-4"
          >
            {[...slidingStocks.reverse(), ...slidingStocks.reverse()].map(
              (stock, i) => (
                <Link
                  href={`/stock-analysis/${stock.symbol}`}
                  key={`bottom-${i}`}
                  className="flex items-center space-x-3 rounded-lg border bg-card p-3 shadow-sm hover:bg-accent/50"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      stock.up ? "bg-green-100" : "bg-red-100"
                    } ${
                      stock.up ? "text-green-600" : "text-red-600"
                    } dark:bg-opacity-20`}
                  >
                    {stock.up ? (
                      <TrendingUp className="h-5 w-5" />
                    ) : (
                      <TrendingDown className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{stock.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {stock.symbol}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>{stock.price}</span>
                      <span
                        className={`text-sm ${
                          stock.up ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {stock.change}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Today's Stocks */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Today's Stocks</h2>
            <p className="mt-2 text-muted-foreground">
              Top performing stocks in the market today
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {todaysStocks.map((stock, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href={`/stock-analysis/${stock.symbol}`}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold">{stock.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {stock.symbol}
                            </p>
                          </div>
                          <div
                            className={`flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              stock.up
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            } dark:bg-opacity-20`}
                          >
                            {stock.up ? (
                              <TrendingUp className="mr-1 h-3 w-3" />
                            ) : (
                              <TrendingDown className="mr-1 h-3 w-3" />
                            )}
                            {stock.change}
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between">
                            <span className="text-2xl font-bold">
                              {stock.price}
                            </span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">Market Cap</p>
                              <p className="font-medium">{stock.marketCap}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Volume</p>
                              <p className="font-medium">{stock.volume}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          {/* Simplified stock chart */}
                          <div className="h-16 w-full overflow-hidden rounded-md bg-muted/50">
                            <svg
                              viewBox="0 0 100 20"
                              className={`h-full w-full ${
                                stock.up ? "text-green-500" : "text-red-500"
                              }`}
                              preserveAspectRatio="none"
                            >
                              <path
                                d={
                                  stock.up
                                    ? "M0,10 L10,12 L20,8 L30,15 L40,10 L50,18 L60,16 L70,19 L80,14 L90,20 L100,16"
                                    : "M0,10 L10,8 L20,12 L30,5 L40,10 L50,2 L60,4 L70,1 L80,6 L90,0 L100,4"
                                }
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}