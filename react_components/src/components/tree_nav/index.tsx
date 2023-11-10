import { ReactNode, useState } from "react";

interface TreeNavProps {
  title?: string;
  callback?: (nav: TreeNavProps) => void;
  childs?: Array<TreeNavProps>;
}
const TreeNav = (tree: TreeNavProps) => {
  const [isShowChilds, setIsShowChilds] = useState(false);
  const generateTree = (tree: TreeNavProps) => {
    return (
      <>
        <div
          onClick={() => {
            tree.callback && tree.callback(tree);
            setIsShowChilds(!isShowChilds);
          }}
          className=" flex h-12 w-64 items-center justify-center rounded-lg bg-slate-300"
          key={tree.title}
        >
          {tree.title}
        </div>
        <div
          className={` mb-2 box-border h-0 space-y-2 overflow-hidden pt-1  transition-all`}
          style={{
            height: `${isShowChilds ? `${tree.childs!.length * 3.5}rem` : `0`}`,
          }}
        >
          {tree.childs &&
            tree.childs.map(
              (child): ReactNode => (
                <div
                  key={child.title}
                  onClick={() => child.callback && child.callback(child)}
                  className={`ml-6 flex h-12 w-64 items-center justify-center rounded-lg bg-slate-300`}
                >
                  {child.title}
                </div>
              ),
            )}
        </div>
      </>
    );
  };
  return (
    <div className=" mb-2 select-none space-y-2 font-mono text-xl font-bold">
      {generateTree(tree)}
    </div>
  );
};

export default TreeNav;
