"use client";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent } from "@/Components/ui/dialog";
import useAuthStore, { IAuthStore } from "@/store/authStore";
import { FieldValues, useForm } from "react-hook-form";
import { ILoginPayload } from "@/types/Services/AuthInterface";
import { useToast } from "@/Components/ui/use-toast";
import { useEffect } from "react";

export default function LoginModal() {
  const { toast } = useToast();
  const { modalAuthOpen, login } = useAuthStore((state: IAuthStore) => ({
    modalAuthOpen: state.modalAuthOpen,
    login: state.login,
  }));
  const authOpen = useAuthStore((state: IAuthStore) => state.authOpen);

  const isOpen = authOpen === "login";

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data as ILoginPayload);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "An error occurred",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    if (isOpen) reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={() => modalAuthOpen(null)}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-md space-y-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Sign in to your account
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Don&apos;t have an account?
                <button
                  className=" text-indigo-600 hover:underline dark:text-indigo-400 font-normal ps-1"
                  onClick={(e) => {
                    e.preventDefault();
                    modalAuthOpen("register");
                  }}
                >
                  Register
                </button>
              </p>
            </div>
            <Card className="border-0">
              <CardContent className="space-y-4 pt-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Ej: m@example.com"
                    required
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    required
                    type="password"
                    {...register("password", { required: true })}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit">
                  Sign in
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
