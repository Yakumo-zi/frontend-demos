interface Props {
  icon?: string;
  name?: string;
  desc?: string;
  link?: string;
}
const Linkcard = ({
  icon = "/public/assets/js.png",
  name = "Link Name",
  desc = "Link Description",
  link,
}: Props) => {
  return (
    <div
      onClick={() => {
        if (link) {
          window.open(link);
        }
      }}
      className=" box-border flex h-16 w-60 cursor-pointer select-none flex-col space-x-2 space-y-2 rounded-2xl  border bg-slate-50 p-4 transition-all hover:h-36 hover:shadow-lg hover:ring-2  hover:ring-slate-400 hover:ring-opacity-25"
    >
      <div className="flex items-center justify-around">
        <img src={icon} className=" h-8 w-8 rounded-full bg-cover" />
        <div className=" flex h-8 w-36  items-center justify-center font-mono text-lg font-bold">
          <div>{name}</div>
        </div>
      </div>
      <div className=" box-border line-clamp-2 overflow-hidden text-ellipsis text-sm  text-slate-500">
        {desc}
      </div>
    </div>
  );
};

export default Linkcard;
