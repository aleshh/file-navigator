import { getFileWithIcon } from "./utils";
import type { FileSystemNode } from "./types";

function formatFileSize(input: number): string {
  const units = ["bytes", "kb", "mb", "gb", "tb"];

  for (const unit of units) {
    if (input < 1000 || unit === "tb") {
      return Math.round(input * 100) / 100 + " " + unit;
    }
    input = input / 1000;
  }
}

function FileList({ files }: { files: FileSystemNode[] }) {
  return (
    <div className="files">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((item) => (
            <tr key={item.name}>
              <td>{getFileWithIcon(item)}</td>
              {item.type === "file" ? (
                <>
                  <td>{formatFileSize(item.size)}</td>
                  <td>{new Date(item.modified).toLocaleDateString()}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;
