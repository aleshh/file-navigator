export interface DirectoryNode {
  type: "directory";
  name: string;
  children: FileSystemNode[];
}

export interface FileNode {
  type: "file";
  name: string;
  size: number;
  modified: string;
}

export type FileSystemNode = DirectoryNode | FileNode;
