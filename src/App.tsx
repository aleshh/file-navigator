import { useEffect, useState } from "react";
import TreeNode from "./TreeNode";
import FileList from "./FileList";

interface DirectoryNode {
  type: "directory";
  name: string;
  children: FileSystemNode[];
}

interface FileNode {
  type: "file";
  name: string;
  size: number;
  modified: string;
}

type FileSystemNode = DirectoryNode | FileNode;

function App() {
  const [data, setData] = useState<null | DirectoryNode>(null);
  const [currentDirectory, setCurrentDirectory] = useState<
    FileSystemNode[] | null
  >(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch("/macos_directory_tree.json");

      try {
        const data: DirectoryNode = await response.json();
        setData(data);
        setCurrentDirectory(data?.children);
      } catch {
        throw new Error("Error loading data");
      }
    }
    loadData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="wrapper">
        <div className="folders">
          <TreeNode data={data} setCurrentDirectory={setCurrentDirectory} />
        </div>
        {currentDirectory ? <FileList files={currentDirectory} /> : null}
      </div>
    </>
  );
}

export default App;
