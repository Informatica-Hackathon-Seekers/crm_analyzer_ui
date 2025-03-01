"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, TrendingUp, BarChart, LineChart, FileUp } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const trendCards = [
  {
    title: "AI in Finance",
    description: "How artificial intelligence is transforming financial markets and investment strategies.",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sustainable Investing",
    description: "The rise of ESG factors and their impact on investment decisions and market trends.",
    icon: <BarChart className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Crypto Market Analysis",
    description: "Latest trends and analysis of cryptocurrency markets and blockchain technology.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const tiers = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential features for casual users",
    features: [
      "Basic trend analysis",
      "Limited stock data",
      "Daily market updates",
      "1 file upload per day",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Advanced features for serious investors",
    features: [
      "Advanced trend analysis",
      "Real-time stock data",
      "Personalized alerts",
      "Unlimited file uploads",
      "AI-powered insights",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "Complete solution for professional traders",
    features: [
      "All Pro features",
      "API access",
      "Custom reports",
      "Dedicated support",
      "Team collaboration",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted dark:from-background dark:via-background dark:to-accent">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 dark:from-primary dark:to-indigo-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Discover with Us
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Your gateway to the latest trends, stock analysis, and more. Unlock insights, elevate decisions.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20 dark:from-violet-400/10 dark:to-blue-400/10" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Data visualization"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trend Cards Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Trends</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with the most recent market trends and insights
              </p>
            </motion.div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {trendCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {card.icon}
                      <CardTitle>{card.title}</CardTitle>
                    </div>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* File Upload Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Extract Valuable Insights
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Upload your files and let our AI analyze them for valuable market insights
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto mt-12 max-w-3xl rounded-xl border bg-card p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Upload Files</h3>
                <p className="text-muted-foreground">
                  Drag and drop your files here or click to browse
                </p>
              </div>
              <div className="grid w-full gap-4">
                <Button className="w-full">
                  <FileUp className="mr-2 h-4 w-4" />
                  Select Files
                </Button>
                <Button variant="outline" className="w-full">
                  Extract Information
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tier Information Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose Your Plan
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Select the perfect plan that suits your needs and budget
              </p>
            </div>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className={`relative overflow-hidden ${tier.popular ? 'border-primary shadow-md' : ''}`}>
                  {tier.popular && (
                    <div className="absolute right-0 top-0">
                      <div className="bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{tier.price}</span>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4 text-primary"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}