export default function Header() {
  return (
    <>
      <nav className="w-full bg-slate-800 h-34">
        <div className="text-white p-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-center">
          Todo App
        </div>
      </nav>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center bg-slate-600 pt-8 pb-6">
        Plan Your Day, Conquer Your Goals
      </h1>
    </>
  );
}