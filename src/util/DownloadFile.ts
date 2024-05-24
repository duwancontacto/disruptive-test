import { baseUrl } from "@/services";

export function downloadFile(contentId: string, extension: string) {
  const authToken = localStorage.getItem("token");
  fetch(`${baseUrl}/contents/download/${contentId}`, {
    method: "GET",
    headers: {
      Authorization: `${authToken}`,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      // Creamos un enlace en memoria para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `file-${contentId}.${extension}`); // Puedes poner el nombre del archivo que desees
      document.body.appendChild(link);
      link.click();

      // Limpiamos y removemos el enlace
      link?.parentNode && link?.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => console.error("Error downloading file:", error));
}
