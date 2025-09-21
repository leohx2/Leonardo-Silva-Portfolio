import Carousel from "../Carousel";

const AtelierDaEssencia = () => {
  return (
    <div className="flex flex-col">
      <div className="flex text-amber-50 gap-x-5">
        <div className=" basis-1/2">
          <p className=" pb-4">
            A single page style webiste for a holistic therapist in Portugal. A
            responsive site with services, contact/booking flow, and a calming
            UI.
          </p>
        </div>
        <div className="sm:basis-1/2">
          <Carousel
            unique_ID={"atelier da essencia"}
            size={3}
            images_info={[
              {
                address:
                  "./src/assets/atelierDaEssencia/Atelier da Essência.png",
                alt: "Site inicial page",
              },
              {
                address: "./src/assets/atelierDaEssencia/atelier_services.png",
                alt: "Part of the available services",
              },
              {
                address: "./src/assets/atelierDaEssencia/atelier_eventos.png",
                alt: "events page",
              },
            ]}
            cssClass="w-full max-h-[400px] rounded-sm overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AtelierDaEssencia;
