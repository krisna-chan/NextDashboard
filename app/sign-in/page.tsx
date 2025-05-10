"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import * as z from "zod"
import { LockKeyhole, Mail, EyeIcon, EyeOffIcon } from "lucide-react"

// Import shadcn components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Form submission handler
  function onSubmit(values: FormSchemaType) { 
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-zinc-200">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-50">Polymer</h1>
          <p className="mt-2 text-zinc-400">Sign in to your account</p>
        </div>
        
        <Card className="border-zinc-800 bg-zinc-900/60 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-zinc-50">Sign in</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <FormControl>
                          <Input 
                            placeholder="name@example.com"
                            className="border-zinc-800 bg-zinc-950/70 pl-10 text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-zinc-700 ring-offset-zinc-900"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-zinc-300">Password</FormLabel>
                        <Link 
                          href="/forgot-password" 
                          className="text-sm text-blue-400 hover:text-blue-300"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <FormControl>
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="border-zinc-800 bg-zinc-950/70 pl-10 pr-10 text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-zinc-700 ring-offset-zinc-900"
                            {...field}
                          />
                        </FormControl>
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-zinc-500 hover:text-zinc-300"
                          aria-label={showPassword ? "Hide password" : "Show password"} 
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-zinc-700 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-zinc-400 font-normal">
                          Remember me
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </Form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-zinc-800" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-zinc-900 px-2 text-xs text-zinc-500">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 hover:border-zinc-700">
                Google
              </Button>
              <Button variant="outline" className="border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 hover:border-zinc-700">
                GitHub
              </Button>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center border-t border-zinc-800 p-6">
            <p className="text-sm text-zinc-400">
              Dont have an account?{" "}
              <Link 
                href="/signup" 
                className="text-blue-400 hover:text-blue-300"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}