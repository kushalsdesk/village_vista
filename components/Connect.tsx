"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import { Footer } from "./Footer";

interface ConnectProps {
  onVisible: () => void;
}

export function Connect({ onVisible }: ConnectProps) {
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    accountNumber: "",
    ifsc: "",
    upiId: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation Data:", formData);
    alert("Thank you for your donation!");
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [onVisible]);

  return (
    <section
      ref={ref}
      id="connect"
      className="relative flex flex-col bg-white snap-start"
    >
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1 w-full max-w-md"
        >
          <Image
            src="/donate.png"
            alt="Helping hands united in support"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1 text-center lg:text-left max-w-lg"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-natural-500 mb-6">
            Help Us Make a
            <span className="block text-natural-300">Difference</span>
          </h2>
          <p className="text-natural-400 mb-8 text-lg">
            Your contribution helps us support rural communities and sustainable
            agriculture. Every donation makes an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-natural-500 hover:bg-natural-400 text-natural-900 text-lg group"
                >
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Donate via UPI
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-natural-800 text-natural-100">
                <DialogHeader>
                  <DialogTitle>Make a Donation</DialogTitle>
                  <DialogDescription className="text-natural-300">
                    Fill in the details below to make a secure donation
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        onChange={handleChange}
                        className="bg-natural-700 text-natural-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                        className="bg-natural-700 text-natural-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="amount">Amount (₹)</Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        required
                        onChange={handleChange}
                        className="bg-natural-700 text-natural-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        name="upiId"
                        required
                        onChange={handleChange}
                        className="bg-natural-700 text-natural-100"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        onChange={handleChange}
                        className="bg-natural-700 text-natural-100"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-natural-500 text-natural-900"
                  >
                    Complete Donation
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-natural-500 text-natural-300 hover:bg-natural-700 text-lg"
                >
                  Bank Transfer
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-natural-800 text-natural-100">
                <DialogHeader>
                  <DialogTitle>Bank Transfer Details</DialogTitle>
                  <DialogDescription className="text-natural-300">
                    Use these details to make a bank transfer
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">Account Name</div>
                    <div>Agri Rural Development</div>
                    <div className="font-medium">Account Number</div>
                    <div>1234567890</div>
                    <div className="font-medium">IFSC Code</div>
                    <div>ABCD0123456</div>
                    <div className="font-medium">Bank Name</div>
                    <div>Sample Bank</div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}
