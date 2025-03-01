"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BarChart2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Welcome to Trendlytics</h1>
            <p className="mt-2 text-muted-foreground">
              Sign in to your account or create a new one
            </p>
          </div>

          <Tabs
            defaultValue="signin"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="signin" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sign In</CardTitle>
                      <CardDescription>
                        Enter your credentials to access your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link
                            href="#"
                            className="text-xs text-muted-foreground hover:text-primary"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sign In</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sign Up</CardTitle>
                      <CardDescription>
                        Create a new account to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-signup">Email</Label>
                        <Input
                          id="email-signup"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-signup">Password</Label>
                        <Input
                          id="password-signup"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Create Account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>

      {/* Right Side - Branding */}
      <div className="relative hidden flex-1 bg-gradient-to-br from-primary/20 via-primary/10 to-background md:block">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="flex h-full flex-col items-center justify-center p-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BarChart2 className="h-20 w-20 text-primary" />
          </motion.div>
          <motion.h2
            className="mt-6 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trendlytics
          </motion.h2>
          <motion.p
            className="mt-2 max-w-md text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Unlock Insights, Elevate Decisions
          </motion.p>
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-lg bg-background/50 p-4 backdrop-blur">
              <h3 className="font-medium">Real-time Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Get instant insights on market trends
              </p>
            </div>
            <div className="rounded-lg bg-background/50 p-4 backdrop-blur">
              <h3 className="font-medium">Smart Predictions</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered forecasting for better decisions
              </p>
            </div>
            <div className="rounded-lg bg-background/50 p-4 backdrop-blur">
              <h3 className="font-medium">Portfolio Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your investments in one place
              </p>
            </div>
            <div className="rounded-lg bg-background/50 p-4 backdrop-blur">
              <h3 className="font-medium">Custom Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Stay informed with personalized notifications
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}