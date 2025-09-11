interface BadgesProps {
  skill: "html" | "js" | "ts" | "css" | "tailwind" | "c";
}

const Badges = () => {
  return (
    <div className="badge">
      <div className="badge_inside"> content </div>
    </div>
  );
};

export default Badges;
