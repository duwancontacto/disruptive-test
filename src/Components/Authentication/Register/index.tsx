"use client";
import Link from "next/link";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Dialog, DialogContent } from "@/Components/ui/dialog";
import useAuthStore, { IAuthStore } from "@/store/authStore";
import { FieldValues, useForm } from "react-hook-form";
import { IRegisterPayload } from "@/types/Services/AuthInterface";
import { useToast } from "@/Components/ui/use-toast";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

export default function RegisterModal() {
  const { toast } = useToast();
  const { modalAuthOpen, registerUser } = useAuthStore((state: IAuthStore) => ({
    modalAuthOpen: state.modalAuthOpen,
    registerUser: state.registerUser,
  }));
  const authOpen = useAuthStore((state: IAuthStore) => state.authOpen);

  const isOpen = authOpen === "register";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      await registerUser(data as IRegisterPayload);
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

  const password = watch("password", "");

  function handleRoleChange(selectedValue: string) {
    setValue("role", selectedValue, { shouldValidate: true });
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => modalAuthOpen(null)}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Register for an account
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Already have an account?
              <button
                className="font-normal ps-1 text-indigo-600 hover:underline dark:text-indigo-400"
                onClick={(e) => {
                  e.preventDefault();
                  modalAuthOpen("login");
                }}
              >
                Sign in
              </button>
            </p>
          </div>
          <Card className="border-0">
            <CardContent className="space-y-4 pt-5">
              <div className="grid gap-2">
                <Label htmlFor="email">Alias</Label>
                <Input
                  id="alias"
                  placeholder="Ej: John Doe"
                  required
                  type="text"
                  {...register("alias", { required: true })}
                />
              </div>
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
                <Label htmlFor="role">Role</Label>
                <Select required onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="creator">Creator</SelectItem>
                    <SelectItem value="reader">Reader</SelectItem>
                  </SelectContent>
                </Select>
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
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                </div>
                <Input
                  id="confirmPassword"
                  required
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />

                {errors.confirmPassword && (
                  <p className="mt-2 text-red-400 dark:text-gray-400 text-sm">
                    {errors.confirmPassword.message as string}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Register
              </Button>
            </CardFooter>
          </Card>
        </form>
      </DialogContent>
    </Dialog>
  );
}
