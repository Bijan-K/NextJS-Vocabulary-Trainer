export default function MainHolder() {
  const test = (event) => {
    event.preventDefault();
  };

  const test2 = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      className="w-full h-full bg-slate-600 flex items-center justify-center"
      onClick={test}
    >
      <div
        className="shadow shadow-orange-100 rounded-xl bg-slate-700 px-24 py-[20px] cursor-grab"
        onClick={test2}
      >
        <span className="text-white text-8xl">infrignable</span>
      </div>
    </div>
  );
}
