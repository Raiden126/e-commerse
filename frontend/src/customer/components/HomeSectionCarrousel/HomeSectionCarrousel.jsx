import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomseSectionCard from "../HomeSectionCard/HomseSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarrousel = () => {
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const items = mens_kurta
    .slice(0, 10)
    .map((item, index) => <HomseSectionCard key={index} product={item} />);

  return (
    <div className="">
      <div className="relative p-5 border">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "white",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        
        <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            backgroundColor: "white",
          }}
          aria-label="next"
          onClick={slidePrev}
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarrousel;
