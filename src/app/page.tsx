"use client";
import  {useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);
    setUserInput('');
  };

  const handleDelete = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex justify-center items-center bg-slate-400 min-h-screen px-4 sm:px-8">
        <div className="bg-slate-500 py-8 px-10 border-slate-900 border-4 h-auto max-w-xl sm:max-w-2xl md:max-w-3xl rounded-lg shadow-lg w-full transition-all duration-300 ease-in-out">
          <form className="flex mb-6 w-full max-w-xl mx-auto">
            <input
              type="text"
              className="text-xl  lg:text-3xl sm:text-xl md:text-2xl border-slate-900 justify-center items-center border-4 border-r-0 px-5 py-3 rounded-r-none rounded-lg w-full"
              placeholder="Enter todays task"
              value={userInput}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              className="bg-slate-900 border-4 border-slate-950 text-white px-4 py-3 text-xl sm:text-2xl md:text-3xl font-bold rounded-l-none rounded-lg"
            >
              Add
            </button>
          </form>
          <ul className="space-y-4 max-w-xl w-full mx-auto py-5">
            {todoList.length >= 1 ? (
              todoList.map((task, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md"
                >
                  <span className="text-slate-900 font-mono text-xl sm:text-2xl md:text-3xl">{task}</span>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-600 hover:text-red-800 font-extrabold text-sm lg:text-lg md:text-lg"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="text-slate-950 text-2xl sm:text-3xl font-extrabold font-serif text-center py-6 border-t-4 border-double border-white">
                No task yet, adding some tasks
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
