import TextReveal from "./TextReveal";
import useViewTransition from "../hooks/useViewTransition";
import HoverText from "./HoverText";

const Navbar = () => {
  const { navigateTo } = useViewTransition();

  return (
    <div className="w-full absolute top-0 left-0 p-5 flex items-center justify-between">

      <div>
        <TextReveal >
          <h1 className="text-2xl font-semibold cursor-pointer"
            onClick={() => navigateTo("/")}>
              <HoverText text="Dashboard.Tech" />
            
          </h1>
        </TextReveal>
      </div>

      <div className="flex gap-5">

        <button
          onClick={() => navigateTo("/")}
          className="cursor-pointer"
        >
          <TextReveal>
          <HoverText text="Dashboard" />
          </TextReveal>
        </button>

        <button
          onClick={() => navigateTo("/notes")}
          className="cursor-pointer"
        >
           <TextReveal>
            <HoverText text="Notes" />
          </TextReveal>
        </button>

        <button
          onClick={() => navigateTo("/quotes")}
          className="cursor-pointer"
        >
           <TextReveal>
            <HoverText text="Quotes" />
          </TextReveal>
        </button>

        <button
          onClick={() => navigateTo("/timer")}
          className="cursor-pointer"
        >
           <TextReveal>
            <HoverText text="Pomodoro Timer" />
          </TextReveal>
        </button>

      </div>

    </div>
  );
};

export default Navbar;