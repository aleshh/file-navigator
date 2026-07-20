import type { FileSystemNode } from "./types";

function getExtension(fileName: string): string {
  if (!fileName.includes(".")) return "";

  const parts = fileName.split(".");
  return parts[parts.length - 1];
}

export function getFileWithIcon(
  file: FileSystemNode,
  open: boolean = false,
): string {
  const extension = getExtension(file.name);
  const icon = (() => {
    switch (extension) {
      case "app":
        return "🚀";
      case "zip":
      case "pkg":
      case "dmg":
        return "📦";
      case "heic":
      case "jpg":
      case "png":
        return "🖼️";
      case "m4a":
      case "mp3":
      case "wav":
      case "aiff":
        return "🔈";
      case "plist":
        return "⚙️";
      case "json":
        return "🗃️";
    }
    if (file.type === "file") return "📄";
    if (open === true) return "📂";
    return "📁";
  })();

  return `${icon} ${file.name}`;
}
