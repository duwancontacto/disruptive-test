import useContentStore from "@/store/contentStore";
import { ContentNotFound } from "./ContentNotFound";
import { Badge } from "../ui/badge";
import { IContent } from "@/types/Models/Contents";
import { Button } from "../ui/button";
import useAuthStore, { IAuthStore } from "@/store/authStore";
import { baseUrl } from "@/services";
import { downloadFile } from "@/util/DownloadFile";

export function ContentGrid() {
  const contents = useContentStore((state) => state.contents);
  const themes = useContentStore((state) => state.themes);
  const categories = useContentStore((state) => state.categories);

  const { isAuthenticated, modalAuthOpen } = useAuthStore(
    (state: IAuthStore) => ({
      isAuthenticated: state.isAuthenticated,

      modalAuthOpen: state.modalAuthOpen,
    })
  );

  if (contents.length === 0) return <ContentNotFound />;

  const getFormattedContents = (contents: IContent[]) => {
    return contents?.map((content: any) => {
      return {
        ...content,
        themeName: themes.find((theme) => theme._id === content.theme_id)?.name,
        categoryName: categories.find(
          (category) => category._id === content.category_id
        )?.name,
      };
    });
  };

  const handleViewContent = (contentId: string, extension: string) => {
    if (isAuthenticated) {
      return downloadFile(contentId, extension);
    }

    modalAuthOpen("login");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {getFormattedContents(contents)?.map((content) => (
        <div
          key={content._id}
          className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-900"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold">{content.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Created by: {content.creator}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">
                Category: {content.categoryName}
              </Badge>
              <Badge variant="secondary">Theme: {content.themeName}</Badge>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleViewContent(content._id, content.extension)
                }
              >
                View Content
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
