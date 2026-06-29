import TextReveal from "./TextReveal";
import useViewTransition from "../hooks/useViewTransition";

const Navbar = () => {
  const { navigateTo } = useViewTransition();

  return (
    <div className="w-full absolute top-0 left-0 p-5 flex items-center justify-between">

      <div>
        <TextReveal splitBy="chars">
          <h1 className="text-2xl font-semibold cursor-pointer"
              onClick={() => navigateTo("/")}>
            Dashboard.Tech
          </h1>
        </TextReveal>
      </div>

      <div className="flex gap-5">

        <button
          onClick={() => navigateTo("/")}
          className="cursor-pointer"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigateTo("/notes")}
          className="cursor-pointer"
        >
          Notes
        </button>

        <button
          onClick={() => navigateTo("/quotes")}
          className="cursor-pointer"
        >
          Quotes
        </button>

        <button
          onClick={() => navigateTo("/timer")}
          className="cursor-pointer"
        >
          Pomodoro Timer
        </button>

      </div>

    </div>
  );
};

export default Navbar;