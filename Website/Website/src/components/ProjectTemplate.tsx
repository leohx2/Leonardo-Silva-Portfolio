import Carousel from "./Carousel";
import type { ImagesProp } from "./Carousel";

interface ProjectProps {
  title: string;
  brief: string;
  bulletPoints: string[];
  images_info?: ImagesProp[];
  /**
   * @props string - pass the css class to define the width and height
   */
  carouselCss?: string;
  video?: React.ReactNode;
}

const ProjectTemplate = ({
  title,
  brief,
  bulletPoints,
  images_info,
  carouselCss,
  video,
}: ProjectProps) => {
  return (
    <div className="flex max-lg:flex-col text-amber-50 gap-x-5 lg:tracking-wider">
      <div className="min-h-[400px] basis-[45%] flex flex-col gap-y-4 ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{brief}</p>
        <ul className="list-disc list-inside max-sm:text-sm flex flex-col gap-y-2 pb-2">
          {bulletPoints.map((point, index) => (
            <li key={index * point.length}>{point}</li>
          ))}
        </ul>
      </div>
      {images_info && (
        <div className="sm:basis-[45%] pb-4 max-sm:pt-2">
          <Carousel
            unique_ID={title}
            images_info={images_info}
            cssClass={`${
              carouselCss ? carouselCss : "w-full lg:h-[400px] h-[300px]"
            }`}
          />
        </div>
      )}
      {video && video}
    </div>
  );
};

export default ProjectTemplate;
