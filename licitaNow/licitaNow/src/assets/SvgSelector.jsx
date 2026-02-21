const SvgSelector = ({ svgName, width, height, colorHEX, cssClass }) => {
  switch (svgName) {
    case "leftArrow":
      return (
        <svg className={cssClass ? cssClass : ""} width={width} height={height} viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill={colorHEX}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data:name="Group 64" transform="translate(-624.082 -383.588)">
            <path id="Path_56" data:name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill={colorHEX}>
            </path>
          </g> </g>
        </svg>
      );
    case "rightArrow":
      return(
        <svg className={cssClass ? cssClass : ""} width={width} height={height} viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill={colorHEX} transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data:name="Group 64" transform="translate(-624.082 -383.588)">
            <path id="Path_56" data:name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill={colorHEX}></path>
          </g> </g>
        </svg>
      );
    case "subMenuArrow":
      return(
        <svg className={cssClass ? cssClass : ""} width={width} height={height} fill={colorHEX} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke={colorHEX}><g id="SVGRepo_bgCarrier" strokeWidth="0">
          </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> 
            <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 "></polygon>
          </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>
        </svg>
      )
    case "profile":
      return(
        <svg className={cssClass ? cssClass : ""} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <path className={cssClass ? cssClass : ""} d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke={colorHEX} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path className={cssClass ? cssClass : ""} d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke={colorHEX} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path className={cssClass ? cssClass : ""} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={colorHEX} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      )
    case "creditCard":
      return(
        <svg className={cssClass ? cssClass : ""} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g id="Interface / Credit_Card_01">
            <path className={cssClass ? cssClass : ""} id="Vector" d="M3 11V15.8002C3 16.9203 3 17.4801 3.21799 17.9079C3.40973 18.2842 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H17.8031C18.921 19 19.48 19 19.9074 18.7822C20.2837 18.5905 20.5905 18.2842 20.7822 17.9079C21 17.4805 21 16.9215 21 15.8036V11M3 11V9M3 11H21M3 9V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V9M3 9H21M7 15H11M21 11V9" stroke={colorHEX} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </g> </g>
        </svg>
      )
      case "coin":
        return(
          <svg className={cssClass ? cssClass : ""} width={width} height={height} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g className={cssClass ? cssClass : ""} id="SVGRepo_iconCarrier" fill={colorHEX}> <g>
              <path class="st0" d="M313.281,186.359l-5.938-2.484c-9.781-4.141-19.953-6.219-30.219-6.219c-29.719,0-57.016,17.234-70.125,43.625 h99.125l-6.109,29.609H198.953c-0.125,1.672-0.203,3.391-0.203,5.109c0,4.219,0.375,8.531,1.094,12.859h96.5l-6.094,29.594h-78.859 c14.375,22.375,38.844,35.922,65.734,35.922c9.109,0,18.25-1.688,27.156-5l7.094-2.641v41.641l-3.891,1.047 c-9.984,2.688-20.188,4.047-30.359,4.047c-48.375,0-91.891-29.984-109.406-75.016h-25.016v-29.594h17.75 c-0.531-4.531-0.813-8.766-0.813-12.859c0-1.703,0.047-3.438,0.125-5.109h-17.063v-29.609h22.328 c15.156-48.922,60.688-82.766,112.094-82.766c13.656,0,27.063,2.406,39.891,7.094l4.266,1.563L313.281,186.359z"></path> 
              <path class="st0" d="M256,64c105.859,0,192,86.125,192,192c0,105.859-86.141,192-192,192c-105.875,0-192-86.141-192-192 C64,150.125,150.125,64,256,64 M256,0C114.609,0,0,114.625,0,256c0,141.391,114.609,256,256,256c141.375,0,256-114.609,256-256 C512,114.625,397.375,0,256,0z"></path>
            </g> </g>
          </svg>
        )
      case "location":
        return (
          <svg className={cssClass ? cssClass : ""} width={width} height={height} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeWinecap="round" strokeWinejoin="round"></g>
            <g className={cssClass ? cssClass : ""} id="SVGRepo_iconCarrier" fill={colorHEX}> <g>
              <path class="st0" d="M405.974,62.12C364.561,20.707,310.275,0,255.997,0C201.72,0,147.443,20.707,106.029,62.12 c-82.814,82.81-82.814,217.11,0,299.929L255.997,512l149.976-149.951C488.784,279.23,488.784,144.93,405.974,62.12z M382.328,338.394L255.997,464.708L129.68,338.403c-69.653-69.657-69.653-182.988,0-252.637 c33.738-33.738,78.601-52.322,126.318-52.322c47.717,0,92.584,18.584,126.322,52.322 C451.977,155.414,451.977,268.746,382.328,338.394z"></path>
              <path class="st0" d="M255.997,213.207c30.513,0,55.249-24.724,55.249-55.253c0-30.513-24.736-55.245-55.249-55.245 c-30.521,0-55.257,24.732-55.257,55.245C200.74,188.483,225.477,213.207,255.997,213.207z"></path>
              <path class="st0" d="M255.997,233.979c-43.785,0-79.274,35.502-79.274,79.274h158.546 C335.268,269.481,299.775,233.979,255.997,233.979z"></path>
            </g> </g>
          </svg>
        )
      case "hammer":
        return(
          <svg fill={colorHEX} className={cssClass ? cssClass : ""} width={width} height={height} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.467 407.467" xml:space="preserve" stroke={colorHEX}><g id="SVGRepo_bgCarrier" strokeWidth="0">
            </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
              <path d="M403.359,320.228L250.938,164.807l41.063-41.063l14.142,14.142l31.82-31.82L231.897,0l-31.819,31.819l14.142,14.142 L97.547,162.634l-14.142-14.142l-31.819,31.82l106.065,106.066l31.82-31.82l-14.142-14.142l40.254-40.254l152.421,155.422 L403.359,320.228z M221.29,31.819l10.606-10.606l84.854,84.853l-10.607,10.607l-3.535-3.535l0,0l-77.781-77.782l0,0L221.29,31.819z M168.258,254.558l-10.607,10.607l-84.853-84.853l10.606-10.607l3.536,3.536l77.782,77.782L168.258,254.558z M108.153,173.241 L224.826,56.568l56.568,56.569l-40.96,40.96l0,0l-17.677,17.678l-58.035,58.035L108.153,173.241z M240.33,175.414l141.919,144.711 l-14.143,14.142L226.189,189.556L240.33,175.414z"></path>
              <path d="M180.109,332.467h-156v30h-20v45h200v-45h-24V332.467z M39.109,347.467h126v15h-126V347.467z M189.109,377.467v15h-170v-15 h5h156H189.109z"></path>
            </g> </g>
          </svg>
        )
      case "todoList":
        return(
          <svg className={cssClass ? cssClass : ""} width={width} height={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xml:space="preserve" fill="#000000" stroke="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeWinecap="round" strokeWinejoin="round" stroke="#CCCCCC" strokeWidth="1.152"></g>
            <g className={cssClass ? cssClass : ""} id="SVGRepo_iconCarrier">
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="25" y1="24" x2="47" y2="24"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="25" y1="34" x2="47" y2="34"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="25" y1="44" x2="47" y2="44"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="25" y1="54" x2="47" y2="54"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="21" y1="24" x2="17" y2="24"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="21" y1="34" x2="17" y2="34"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="21" y1="44" x2="17" y2="44"></line>
              <line className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" x1="21" y1="54" x2="17" y2="54"></line>
              <polyline className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" points="23,8 10,8 10,63 54,63 54,8 41,8 "></polyline>
              <polygon className={cssClass ? cssClass : ""} fill="none" stroke={colorHEX} strokeWidth="2" strokeMiterlimit="10" points="36,5 36,1 28,1 28,5 24,5 22,13 42,13 40,5 "></polygon>
            </g>
          </svg>
        )
      case "archive":
        return(
          <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path className={cssClass ? cssClass : ""} fillRule="evenodd" clipRule="evenodd" d="M21 9.75H19.5V18.3107L18.3107 19.5H5.68934L4.5 18.3107L4.5 9.75H3V4.5H21V9.75ZM6 9.75L18 9.75V17.6893L17.6893 18H6.31066L6 17.6893L6 9.75ZM19.5 6V8.25L4.5 8.25L4.5 6L19.5 6ZM9.75 13.5H15V12H9.75V13.5Z" fill={colorHEX}>
              </path>
            </g>
          </svg>
        )
      case "worker":
        return(
          <svg className={cssClass ? cssClass : ""} width={width} height={height} viewBox="0 0 1024 1024" fill={colorHEX} class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke={colorHEX}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M276 1004.8c-34.4-8-158.4-57.6-168.8-126.4-7.2-44.8 10.4-88.8 48.8-120.8 28.8-24 100.8-69.6 130.4-84.8 11.2-5.6 27.2-12 41.6-18.4 40.8-17.6 56.8-25.6 60.8-32.8 4.8-11.2 4.8-19.2 0.8-40.8v-1.6l-1.6-1.6C371.2 560 330.4 510.4 320 480c-10.4-30.4-21.6-92-22.4-120v-6.4H214.4c1.6-12.8 7.2-40 16-55.2 12.8-22.4 32.8-41.6 36-43.2l3.2-1.6V248c0-18.4 10.4-82.4 56.8-128.8 56-56 134.4-96 185.6-96h3.2c51.2 0 129.6 40.8 185.6 96 46.4 46.4 56.8 110.4 56.8 128.8v4l3.2 1.6c3.2 1.6 23.2 20.8 36 43.2 8.8 15.2 13.6 42.4 16 55.2H728.8v6.4c0 28-12 89.6-22.4 120-10.4 30.4-51.2 80-68 97.6l-1.6 1.6v1.6c-4 21.6-4.8 29.6 0.8 40.8 3.2 8 19.2 15.2 60.8 32.8 14.4 6.4 29.6 12.8 41.6 18.4 30.4 15.2 101.6 60.8 130.4 84.8 38.4 32 56 76 48.8 120.8-11.2 68.8-134.4 118.4-168.8 126.4-25.6-8.8-163.2-20.8-212-20.8h-14.4c-3.2 0-6.4 0.8-11.2 0.8-4 0-8-0.8-11.2-0.8h-14.4c-48 1.6-185.6 13.6-211.2 22.4z m467.2-39.2l2.4-0.8c12-2.4 120.8-27.2 136-104.8 8-44-43.2-82.4-68-100-16.8-12.8-31.2-21.6-49.6-31.2l-8-4-41.6 234.4 6.4 0.8c10.4 1.6 17.6 3.2 20 4l2.4 1.6zM262.4 728.8c-21.6 11.2-35.2 20.8-49.6 31.2-24.8 18.4-76 56.8-68 100 15.2 77.6 123.2 102.4 136 104.8l2.4 0.8 1.6-1.6c2.4-0.8 10.4-2.4 20-4l6.4-0.8-41.6-234.4-7.2 4z m265.6 216c45.6 0.8 87.2 3.2 119.2 6.4l6.4 0.8 36.8-257.6-8-4c-6.4-3.2-13.6-5.6-20.8-8.8-27.2-11.2-55.2-22.4-66.4-61.6-1.6-7.2-2.4-14.4-1.6-22.4 0.8-9.6 4-17.6 7.2-28 0.8-4 2.4-7.2 4-12 18.4-16 44.8-54.4 58.4-80.8l8.8-18.4c6.4-16.8 12-56 15.2-85.6l0.8-7.2H338.4l0.8 7.2c4.8 43.2 10.4 72 15.2 85.6l8.8 18.4c14.4 27.2 40.8 65.6 59.2 81.6 1.6 4 2.4 8 4 11.2 3.2 9.6 6.4 18.4 7.2 28 0.8 8 0.8 15.2-1.6 22.4-11.2 39.2-39.2 50.4-66.4 61.6-7.2 3.2-14.4 5.6-20.8 8.8l-8 4 36.8 257.6 6.4-0.8c32.8-3.2 73.6-5.6 119.2-6.4H528zM308.8 261.6c-6.4 3.2-16 8.8-26.4 26.4-5.6 8.8-6.4 16-7.2 20.8l-0.8 7.2H751.2l-0.8-7.2c0-4.8-1.6-11.2-6.4-20.8-10.4-17.6-20.8-23.2-26.4-26.4 0-23.2 0.8-69.6-41.6-112-55.2-56-116.8-88.8-162.4-88.8-60.8 0-122.4 48.8-162.4 88.8-42.4 42.4-42.4 89.6-42.4 112z" fill="">
              </path>
            </g>
          </svg>
        )
      case "colab":
        return(
          <svg fill={colorHEX} className={cssClass ? cssClass : ""} width={width} height={height} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 795.601 795.601" xml:space="preserve" stroke={colorHEX}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <g> 
              <path d="M569,551.9L569,551.9L569,551.9c-0.2-1.6-0.6-3.199-1.1-4.6c-3.8-14.5-12.4-40.9-16.3-52.7c-0.4-2.1-1.101-4-2-5.899 V488.6l0,0c-2.4-5.1-6.301-9.399-11.101-12.3l0,0c-0.3-0.2-0.899-0.5-1.7-0.9c-0.3-0.199-0.699-0.3-1-0.5 c-9.5-4.5-38.6-16.1-38.6-16.1l0,0c-14.6-6.3-29.6-11.7-45-17.1l0,0l0,0l0,0l0,0c-2.7,11.399-28.8,87.3-33,97.8l-3.3-70.5 c1.1-1.7,1.899-3.601,2.7-5.4l10.899-21.5c-7.7,6.4-19.1,10.4-32,10.4c-12.5,0-23.8-3.9-31.399-10l10.6,21.1 c0.9,1.8,1.6,3.7,2.7,5.4l-3.3,70.5c-4.101-10.5-30.2-86.4-33-97.8l0,0l0,0l0,0l0,0c-15.4,5.5-30.5,10.899-45,17.1l0,0 c0,0-29.1,11.6-38.6,16.1c-0.3,0.2-0.7,0.301-1,0.5c-0.8,0.4-1.4,0.7-1.7,0.9l0,0c-4.8,2.9-8.7,7.2-11.1,12.3l0,0c0,0,0,0,0,0.101 c-0.9,1.899-1.5,3.899-2,5.899c-3.9,11.8-12.5,38.2-16.3,52.7c-0.5,1.5-0.9,3-1.1,4.6l0,0l0,0c-0.2,1.4-0.3,2.801-0.3,4.301 c0,15.5,12.6,28.1,28.1,28.1h287c15.5,0,28.1-12.6,28.1-28.1C569.4,554.701,569.2,553.3,569,551.9z"></path>
              <path d="M471.101,311.1c0-5,1-23,1-27.1c0-40.2-32.601-72.7-72.7-72.7l0,0l0,0H399.3h-0.1l0,0l0,0c-0.5,0-0.9,0-1.4,0 s-0.899,0-1.399,0l0,0l0,0H396.3h-0.1l0,0l0,0c-40.2,0-72.7,32.6-72.7,72.7c0,4.1,1,22.1,1,27.1c-1.8,0.1-18-3.8-16.3,15.7 c3.7,41.4,19.5,33.3,19.9,33.3c7.8,24.9,19.8,40.8,31.6,51c18.4,15.8,36.3,17.5,36.6,17.5c0.5,0,1,0,1.5,0l0,0l0,0 c0.5,0,1,0,1.5,0c0.301,0,18.101-1.7,36.4-17.3c11.9-10.1,24-26.1,31.8-51.1c0.5,0,16.2,8,19.9-33.3 C489.101,307.3,472.9,311.2,471.101,311.1z"></path>
              <path d="M203.4,550.4c0.1-1.1,0.5-3.199,0.7-4.3c0.3-1.8,0.9-3.5,1.4-5.3c4.3-14.4,11.6-38.5,16.2-52.4c0.7-2.8,1.6-5.6,2.8-8.3 l3.1-8.899c-10-4-20.2-7.7-30.6-11.4l0,0c-2.4,10-25.1,76.1-28.7,85.3l-2.9-61.5c1-1.5,1.6-3.1,2.4-4.7l9.5-18.8 c-6.7,5.601-16.7,9.101-27.9,9.101c-10.9,0-20.7-3.4-27.4-8.7l9.3,18.399c0.8,1.601,1.4,3.2,2.4,4.7l-2.9,61.5 c-3.6-9.2-26.4-75.3-28.7-85.3l0,0c-13.4,4.8-26.6,9.5-39.2,14.9l0,0c0,0-25.4,10.199-33.6,14c-0.3,0.1-0.6,0.3-0.9,0.399 c-0.7,0.4-1.2,0.601-1.5,0.8l0,0c-4.2,2.5-7.6,6.301-9.7,10.7l0,0c0,0,0,0,0,0.101c-0.8,1.6-1.3,3.399-1.7,5.199 c-3.4,10.301-10.9,33.301-14.2,45.9c-0.4,1.3-0.8,2.7-1,4l0,0l0,0C0.1,557,0,558.3,0,559.5C0,573,11,584,24.5,584h23.4 c33.5,0,67,0,100.4,0c0.4,0,0.9,0,1.3,0s0.9,0,1.3,0c20.2,0,40.5,0,60.7,0c-5.3-8.101-8.5-17.7-8.5-28.101 C203.1,554.3,203.1,552.3,203.4,550.4z"></path>
              <path d="M88.7,388.9c6.8,21.7,17.3,35.6,27.6,44.4c16.1,13.8,31.7,15.3,31.9,15.3c0.4,0,0.9,0,1.3,0c0.4,0,0.9,0,1.3,0 c0.3,0,15.7-1.5,31.7-15.1c10.4-8.8,20.9-22.7,27.8-44.6c0.4,0,14.2,7,17.4-29.1c1.5-17-12.7-13.6-14.2-13.7 c0-4.3,0.8-20,0.8-23.6c0-35-28.4-63.4-63.4-63.4l0,0h-0.1h-0.1l0,0l0,0c-0.4,0-0.8,0-1.2,0c-0.4,0-0.8,0-1.2,0l0,0l0,0h-0.1h-0.1 l0,0l0,0c-35,0-63.4,28.4-63.4,63.4c0,3.6,0.9,19.3,0.9,23.6c-1.5,0.1-15.7-3.3-14.2,13.7C74.5,395.8,88.3,388.9,88.7,388.9z"></path>
              <path d="M795.101,535.1c-0.2-2.3-0.5-4.6-0.801-6.8c0,0-1.3-7.4-1.6-8.5c-2.9-12.9-11-22.4-21.9-29.8c-2-1.4-4.1-2.601-6.3-3.7 c-2.8-1.5-45.399-15.5-46.5-15.8c0.3,1.5,0.4,3.1,0.5,4.8c5.9,4.2,23.4,19.2,15.5,47.3c0,0-12.5-14.899-25.3-16.899 c-12.2,21.199-32.9,48.1-44.1,55.199c-11.2-7.1-31.9-33.899-44.101-55.199c-12.8,1.899-25.3,16.899-25.3,16.899 c-7.9-28.1,9.5-43.1,15.5-47.3c0.1-1.7,0.2-3.4,0.5-4.8c-0.8,0.3-25.9,8.5-38.9,13c0.601,1.6,1.101,3.3,1.5,4.899 c4.601,13.9,12.4,37.9,16.2,52.4c0.2,0.6,1.7,7.2,2.101,9.6c0.3,1.9,0.3,3.9,0.3,5.801c0,10.399-3.101,20-8.5,28.1 c26.899,0,53.8,0,80.8,0c32.8,0,65.6,0,98.4,0c9.8,0,18.1-3,25-10.3c5.399-5.7,6.899-12.601,7.3-20c0.1-1.3,0.2-6.9,0.2-6.9 S795.101,535.201,795.101,535.1z"></path>
              <path d="M587.4,401.3c1,3.7,1.7,7.1,1.6,10.4c0,1.1-0.1,2.199-0.3,3.199c-0.9,3.101-7.5,13.601-8.5,15.4 c11.6,12.5,26.8,15.3,41.9,18.5c4.5,0.9,9,1.5,13.8,2.1c1.6,0.301,3.1,0.601,4.7,0.9l-7.7,22.4c0,0-0.2,32.699,31.399,52.6h0.2 c31.601-19.9,31.4-52.6,31.4-52.6l-7.7-22.4c1.6-0.3,3.2-0.6,4.7-0.9c4.8-0.6,9.399-1.199,13.8-2.1c15.1-3.2,30.4-6.1,41.9-18.5 c-1-1.8-7.601-12.2-8.5-15.4c-0.2-1.1-0.301-2.1-0.301-3.199c0-3.301,0.601-6.801,1.601-10.4c1-3.5,2.1-7,3.1-10.5 c5.101-11.4,8-24,8-37.3c0-49.5-39.3-89.7-88.2-90.6l0,0h-0.1h-0.1l0,0c-48.9,0.9-88.2,41.1-88.2,90.6c0,13.3,2.8,25.9,8,37.3 C585.4,394.4,586.5,397.8,587.4,401.3z"></path>
            </g> </g> </g>
          </svg>
        )
  }
};

export default SvgSelector;