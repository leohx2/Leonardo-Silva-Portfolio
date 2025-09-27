import "./Badges.css";
interface BadgesProps {
  skill:
    | "html"
    | "js"
    | "ts"
    | "css"
    | "tailwind"
    | "c"
    | "react"
    | "git"
    | "preact";
  text: string;
}

const Badges = ({ skill, text }: BadgesProps) => {
  return (
    <div
      className={`${skill}logo badge_container items-center flex justify-center rounded-md`}
    >
      <div className="badge_inside z-10 flex items-center justify-center rounded-md border-none bg-badge text-amber-50 flex-col gap-y-8">
        <img
          src={`/src/assets/${skill}logo.png`}
          alt={`logo from ${skill}`}
          className="sm:h-14 h-8"
        />
        <p className="font-bold sm:text-xl text-md">{text}</p>
      </div>
    </div>
  );
};

export default Badges;
