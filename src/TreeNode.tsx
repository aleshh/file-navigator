import { useState } from "react";
import { getFileWithIcon } from "./utils";
import type { DirectoryNode } from "./types";

function TreeNode({
  data,
  setCurrentDirectory,
  name,
  selectedNode,
  setSelectedNode,
}: {
  data: DirectoryNode;
  setCurrentDirectory: () => {};
  name: string;
  selectedNode: string;
  setSelectedNode: () => {};
}) {
  const [open, setOpen] = useState(false);

  const nodeName = name + "/" + data.name;
  const selected = nodeName === selectedNode;

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
        className={`bareButton ${selected ? "selected" : ""}`}
        type="button"
        onClick={() => {
          if (data.type !== "directory") return;
          setCurrentDirectory(data.children);
          setSelectedNode(nodeName);
        }}
      >
        {getFileWithIcon(data, open)}
      </button>
      {open ? (
        <div className="indented">
          {data.children.map((item) => (
            <TreeNode
              key={item.name}
              data={item}
              setCurrentDirectory={setCurrentDirectory}
              name={nodeName}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default TreeNode;
