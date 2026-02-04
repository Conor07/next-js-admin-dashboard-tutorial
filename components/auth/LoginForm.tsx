"use client";

import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const formSchema = z.object({
  email: z.email("Please enter a vaid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push("/");
  };
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold mb-4">Login</h3>

        <CardDescription>
          Please enter your credentials to login.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xl font-bold text-zinc-500 dark:text-secondary/70">
                    Email
                  </FormLabel>

                  <FormControl>
                    <Input
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                      placeholder="Enter Email"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xl font-bold text-zinc-500 dark:text-secondary/70">
                    Password
                  </FormLabel>

                  <FormControl>
                    <Input
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                      placeholder="Enter Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full dark:bg-slate-800 dark:text-white"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
