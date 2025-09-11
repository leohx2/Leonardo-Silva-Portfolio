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
          src={`/images/${skill}logo.png`}
          alt={`logo from ${skill}`}
          className="h-20"
        />
        <p className="font-bold text-xl">{text}</p>
      </div>
    </div>
  );
};

export default Badges;
