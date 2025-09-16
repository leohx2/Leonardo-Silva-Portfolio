interface SVGProps {
  svgName: "bubble" | "profile" | "skills";
  cssClass?: string;
  color?: string;
}

// className={`${cssClass ? cssClass : ""}`}
// className={`${color ? color : ""}`}

const SvgSelector = ({ svgName, cssClass, color }: SVGProps) => {
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
    case "profile":
      return (
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>profile_round [#1342]</title>{" "}
            <desc>Created with Sketch.</desc> <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -2159.000000)"
                className={`${color ? color : "fill-amber-50"}`}
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                    id="profile_round-[#1342]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "skills":
      return (
        <svg
          version="1.1"
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"} ${`${
            color ? color : "fill-amber-50"
          }`}`}
          viewBox="0 0 1200 1200"
          enable-background="new 0 0 1200 1200"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="path23237"
              inkscape:connector-curvature="0"
              d="M0,131.213v234.375h1200V131.213H0z M752.856,189.222h385.62v118.359 h-385.62V189.222L752.856,189.222z M0,482.849v234.375h1200V482.85L0,482.849L0,482.849z M487.72,540.857h650.757v118.358H487.72 V540.857L487.72,540.857z M0,834.412v234.375h1200V834.412H0z M894.946,892.42h243.529v118.359H894.946V892.42L894.946,892.42z"
            ></path>{" "}
          </g>
        </svg>
      );
  }
};

export default SvgSelector;
