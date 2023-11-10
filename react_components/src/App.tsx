import TreeNav from "./components/tree_nav";

interface TreeNavProps {
  title?: string;
  callback?: (nav: TreeNavProps) => void;
  childs?: Array<TreeNavProps>;
}
function App() {
  const treeProps: Array<TreeNavProps> = [
    {
      title: "1",
      callback: (tree) => {
        console.log(tree.title);
      },
      childs: [
        {
          title: "1.1",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "1.2",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "1.3",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "1.4",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "1.5",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "1.6",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
      ],
    },
    {
      title: "2",
      callback: (tree) => {
        console.log(tree.title);
      },
      childs: [
        {
          title: "2.1",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "2.2",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "2.3",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
        {
          title: "2.4",
          callback: (tree) => {
            console.log(tree.title);
          },
        },
      ],
    },
  ];
  return (
    <div className=" h-96">
      {treeProps.map((tree) => (
        <TreeNav key={tree.title} {...tree}></TreeNav>
      ))}
    </div>
  );
}

export default App;
