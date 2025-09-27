import { motion } from "motion/react";
import usePortView from "../customHooks/usePortView";

interface RandomDivProps {
  /**
   * @props [partOfScreen]
   *if partOfScreen == 1, we need to render from 1% to 32% of the screen
    if partOfScreen == 2, we need to render from 33% to 65% of the screen
    if partOfScreen == 3, we need to render from 66% to 98% of the screen
   */
  partOfScreen: 1 | 2 | 3;
}

const getRandomArbitrary = (min: number, max: number) => {
  console.log(min, max, window.screen.width / 3);
  return Math.random() * (max - min) + min;
};

const RandomDiv = ({ partOfScreen }: RandomDivProps) => {
  const equalParts = window.screen.width / 3;
  const random_y = getRandomArbitrary(0, window.screen.height - 100);
  const random_size = getRandomArbitrary(1, 2);
  const min_width = () => {
    if (partOfScreen == 1) return 1;
    else if (partOfScreen == 2) return equalParts;
    else return equalParts * 2;
  };
  const max_width = () => {
    if (partOfScreen == 1) return equalParts;
    else if (partOfScreen == 2) return equalParts * 2;
    else return equalParts * 3;
  };

  return (
    <motion.div
      className="bg-amber-50 absolute rounded-full"
      initial={{ y: random_y, boxShadow: "0px 0px 0px 0px #fefefeb" }}
      animate={{
        opacity: [1, 0],
        y: getRandomArbitrary(random_y + 100, window.screen.height),
        scale: [0.5, 2, 1],
        boxShadow: [`0px 0px 0px ${random_size + 1}px #fefefe09`],
      }}
      transition={{
        duration: getRandomArbitrary(5, 30),
        repeat: Infinity,
        ease: "easeIn",
      }}
      style={{
        left: `${getRandomArbitrary(min_width(), max_width())}px`,
        width: `${random_size}px`,
        height: `${random_size}px`,
      }}
    ></motion.div>
  );
};

const StarEffect = () => {
  const portView = usePortView();
  const part1 = portView == "small" ? 20 : 33;
  const part2 = portView == "small" ? 40 : 66;
  return (
    <div className="w-[98%] h-screen fixed top-0 left-[1%] z-0">
      {Array.from({ length: portView == "small" ? 60 : 100 }).map(
        (_, index) => (
          <RandomDiv
            partOfScreen={index < part1 ? 1 : index < part2 ? 2 : 3}
            key={index}
          />
        )
      )}
    </div>
  );
};

export default StarEffect;
