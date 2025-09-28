interface SVGProps {
  svgName:
    | "bubble"
    | "profile"
    | "skills"
    | "linkedin"
    | "github"
    | "youtube"
    | "arrowdown"
    | "arrowleft"
    | "arrowright"
    | "projects"
    | "download"
    | "link"
    | "gmail";
  cssClass?: string;
  color?: string;
  /** *
   * @prop {string} - use the fill-color property from tailwind, the inside color is valid for linkedIn and
   * youtube
   */
  colorInside?: string;
}

// className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
// className={`${color ? color : "fill-amber-50"}`}

const SvgSelector = ({ svgName, cssClass, color, colorInside }: SVGProps) => {
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
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>profile_round [#1342]</title>{" "}
            <desc>Created with Sketch.</desc> <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
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
          enableBackground="new 0 0 1200 1200"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
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
    case "linkedin":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="24"
              cy="24"
              r="20"
              className={`${color ? color : "fill-[#0077B5]"}`}
            ></circle>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
              className={`${colorInside ? colorInside : "fill-amber-50"}`}
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
              className={`${colorInside ? colorInside : "fill-amber-50"}`}
            ></path>{" "}
          </g>
        </svg>
      );
    case "github":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"} ${
            color ? color : "fill-black"
          }`}
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -7559.000000)"
                className={`${color ? color : "fill-black"}`}
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "youtube":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="24"
              cy="24"
              r="20"
              className={`${color ? color : "fill-[#ff0000]"}`}
            ></circle>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z"
              className={`${colorInside ? colorInside : "fill-amber-50"}`}
            ></path>{" "}
          </g>
        </svg>
      );
    case "arrowdown":
      return (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"} ${
            color ? color : "fill-black"
          }`}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>down</title>{" "}
            <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>{" "}
          </g>
        </svg>
      );
    case "projects":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          mirror-in-rtl="true"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              className={`${color ? color : "fill-amber-50"}`}
              d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"
            ></path>{" "}
            <path
              className={`${color ? color : "fill-amber-50"}`}
              d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"
            ></path>{" "}
            <path
              className={`${color ? color : "fill-amber-50"}`}
              d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"
            ></path>{" "}
          </g>
        </svg>
      );
    case "arrowright":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
              className={`${color ? color : "fill-amber-50"}`}
            ></path>
          </g>
        </svg>
      );
    case "arrowleft":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
              className={`${color ? color : "fill-amber-50"}`}
            ></path>
          </g>
        </svg>
      );
    case "gmail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Gmail"
          role="img"
          viewBox="0 0 512 512"
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"} gmail`}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect
              width="512"
              height="512"
              rx="15%"
              className={`${color ? color : "fill-amber-50"}`}
            ></rect>
            <path
              d="M158 391v-142l-82-63V361q0 30 30 30"
              className={`${
                colorInside ? colorInside : "fill-amber-[#4285f4]"
              } gmailColor1`}
            ></path>
            <path
              d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
              className={`${
                colorInside ? colorInside : "fill-amber-[#ea4335]"
              } gmailColor2`}
            ></path>
            <path
              d="M354 391v-142l82-63V361q0 30-30 30"
              className={`${
                colorInside ? colorInside : "fill-amber-[#34a853]"
              } gmailColor5`}
            ></path>
            <path
              d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
              className={`${
                colorInside ? colorInside : "fill-amber-[#c5221f]"
              } gmailColor3`}
            ></path>
            <path
              d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
              className={`${
                colorInside ? colorInside : "fill-amber-[#fbbc04]"
              } gmailColor4`}
            ></path>
          </g>
        </svg>
      );
    case "download":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
              className={`${color ? color : "fill-amber-50"}`}
            ></path>{" "}
            <path
              d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
              className={`${color ? color : "fill-amber-50"}`}
            ></path>{" "}
          </g>
        </svg>
      );
    case "link":
      return (
        <svg
          className={`${cssClass ? cssClass : "w-[64px] h-[64px]"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
              className={`${color ? color : "stroke-amber-50"}`}
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
  }
};

export default SvgSelector;
