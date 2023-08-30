export default function TopButton({ name, index }) {
  return (
    <div className="text-center bg-black text-white px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800">
      {name}
    </div>
  );
}
