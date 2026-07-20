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

function FileList({ files }: { files: FileSystemNode[] }) {
  return (
    <div className="files">
      <table>
        <thead>
          <th>Name</th>
          <th>Size</th>
          <th>Modified</th>
        </thead>
        <tbody>
          {files.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              {item.type === "file" ? (
                <>
                  <td>{item.size}</td>
                  <td>{item.modified}</td>
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
