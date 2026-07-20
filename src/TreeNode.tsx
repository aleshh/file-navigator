import { useState } from "react";
import { getFileWithIcon } from "./utils";
import type { DirectoryNode } from "./types";

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
        {getFileWithIcon(data, open)}
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
