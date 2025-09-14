interface SVGProps {
  svgName: "bubble";
  cssClass?: string;
}

// className={`${cssClass ? cssClass : ""}`}

const SvgSelector = ({ svgName, cssClass }: SVGProps) => {
  switch (svgName) {
    case "bubble":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="visual"
          viewBox="0 0 400 400"
          width="500px"
          height="500px"
          version="1.1"
        >
          <g className={`${cssClass ? cssClass : ""}`}>
            <path
              d="M98 -79.1C116.3 -55.3 113 -15.1 106.7 29C100.3 73.2 90.9 121.3 59.9 143.7C28.8 166.1 -24 162.8 -74.2 142.9C-124.3 123 -171.8 86.5 -178.8 44.2C-185.9 1.8 -152.3 -46.5 -115.8 -74.5C-79.2 -102.5 -39.6 -110.3 0.1 -110.4C39.9 -110.5 79.7 -102.9 98 -79.1"
              fill="#424656"
            />
          </g>
        </svg>
      );
  }
};

export default SvgSelector;
