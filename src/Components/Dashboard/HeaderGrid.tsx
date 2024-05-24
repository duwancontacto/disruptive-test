import { Button } from "@/Components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuCheckboxItem,
} from "@/Components/ui/dropdown-menu";
import { CiFilter } from "react-icons/ci";
import useAuthStore from "@/store/authStore";
import { useState } from "react";
import ContentModal from "./ContentModal";
import useContentStore from "@/store/contentStore";
import Image from "next/image";

export function HeaderGrid() {
  const [open, setOpen] = useState(false);
  const { themes, categories, getContents } = useContentStore((state) => ({
    themes: state.themes,
    categories: state.categories,
    getContents: state.getContents,
  }));
  const { user } = useAuthStore((state) => ({
    user: state.user,
  }));
  const isReader = user?.role === "creator";

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Content Dashboard</h1>
      <div className="flex items-center gap-4">
        <ContentModal open={open} setOpen={setOpen} />
        {isReader && (
          <Button onClick={() => setOpen(true)} size="sm">
            Add Content
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              <CiFilter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <p className="text-gray-600">Categories</p>
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuCheckboxItem
                key={category._id}
                onClick={() => getContents("", "", category._id)}
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                </div>
              </DropdownMenuCheckboxItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <p className="text-gray-600">Themes</p>
            </DropdownMenuItem>

            {themes.map((theme) => (
              <DropdownMenuCheckboxItem
                key={theme._id}
                onClick={() => getContents("", theme._id)}
              >
                <div className="flex items-center gap-2">
                  <Image
                    alt="Theme"
                    className="rounded-md"
                    height="24"
                    src={theme.image as string}
                    style={{
                      aspectRatio: "24/24",
                      objectFit: "cover",
                    }}
                    width="24"
                  />
                  <span>{theme.name}</span>
                </div>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
