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
  }
};

export default SvgSelector;