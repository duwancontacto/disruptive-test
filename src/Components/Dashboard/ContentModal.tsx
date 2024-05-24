"use client";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { FieldValues, useForm } from "react-hook-form";
import { useToast } from "@/Components/ui/use-toast";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useContentStore from "@/store/contentStore";
import { Category } from "@/types/Models/Categories";
import { IContentPayload } from "@/types/Services/ContentInterface";

interface IContentModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const getAvailableCategoriesExtensions = (
  categories: Category[],
  categories_id: string[]
) => {
  const availableCategories = categories.filter((category) =>
    categories_id.includes(category._id)
  );

  const extensions: string[] = [];
  availableCategories.map((category) =>
    category.extensions.map((ext) => extensions.push(ext))
  );
  return extensions.map((ext) => `.${ext}`).join(",");
};

export default function ContentModal({ open, setOpen }: IContentModalProps) {
  const { toast } = useToast();
  const { themes, categories, UploadContent, loadingUploadContent } =
    useContentStore((state) => ({
      themes: state.themes,
      categories: state.categories,
      loadingUploadContent: state.loadingUploadContent,
      UploadContent: state.UploadContent,
    }));

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    try {
      await UploadContent(data as IContentPayload);
      setOpen(false);
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
    if (open) reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const { theme_id } = watch();

  const themeCategories = themes.find((t) => t._id === theme_id)?.categories_id;
  const extensions = getAvailableCategoriesExtensions(
    categories,
    themeCategories || []
  );

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="sm:max-w-[425px] w-full">
        <DialogHeader>
          <DialogTitle>Add New Content</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new content item.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <Label className="w-full text-left" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter content name"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Label className="w-full text-left" htmlFor="theme">
              Theme
            </Label>
            <Select
              required
              onValueChange={(selectedValue) =>
                setValue("theme_id", selectedValue, { shouldValidate: true })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme._id} value={theme._id}>
                    {theme.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {theme_id && (
            <div className="grid grid-cols-1 gap-4">
              <Label className="w-full text-left" htmlFor="file">
                Content
              </Label>

              <Label className="w-full text-left text-xs" htmlFor="file">
                Allowed file types: {extensions}
              </Label>

              <Input
                id="file"
                type="file"
                accept={extensions}
                required
                {...register("file", {
                  required: true,
                  validate: (files) => {
                    const file = files[0];
                    if (file) {
                      const extension = file.name
                        .split(".")
                        .pop()
                        .toLowerCase();
                      if (!extensions.includes(extension)) {
                        return "Invalid file type";
                      }
                    }
                    return true; // ningun archivo seleccionado es tratado como válido
                  },
                })}
              />
            </div>
          )}
          <DialogFooter>
            <Button disabled={loadingUploadContent} type="submit">
              Save
            </Button>
            <div>
              <Button
                disabled={loadingUploadContent}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
