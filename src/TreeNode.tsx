import { useState } from "react";

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

function TreeNode({
  data,
  setCurrentDirectory,
}: {
  data: DirectoryNode;
  setCurrentDirectory: () => {};
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="openerSpace">
        {data.children ? (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="bareButton blue"
              type="button"
            >
              {open ? "▼" : "▶︎"}
            </button>{" "}
          </>
        ) : null}
      </div>
      <button
        className="bareButton"
        type="button"
        onClick={() => setCurrentDirectory(data.children)}
      >
        {data.type === "file" ? "📄 " : "📁 "}
        {data.name}
      </button>
      {open ? (
        <div className="indented">
          {data.children.map((item) => (
            <TreeNode
              key={item.name}
              data={item}
              setCurrentDirectory={setCurrentDirectory}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default TreeNode;
