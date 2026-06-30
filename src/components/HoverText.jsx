const HoverText = ({ text }) => {
  return (
    <div className="group cursor-pointer overflow-hidden">
      <div className="flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative overflow-hidden  flex items-center"
          >
            <span
              className="
                block
                transition-transform
                duration-300
                ease-[cubic-bezier(.76,0,.24,1)]
                group-hover:-translate-y-full
              "
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>

            <span
              className="
                absolute
                left-0
                top-full
                transition-transform
                duration-200
                ease-[cubic-bezier(.76,0,.24,1)]
                group-hover:-translate-y-full
                text-red-500
              "
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HoverText;