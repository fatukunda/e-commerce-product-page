import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { IImage } from "src/models/Product";

import prevIcon from "../../assets/images/chevron-left.svg";
import nextIcon from "../../assets/images/chevron-right.svg";
import {
  getNextImage,
  getPreviousImage,
  setCurrentImage,
} from "src/store/slices/sliderSlice";

const Slider = () => {
  const images: IImage[] = useAppSelector((state) => state.slider.images);
  const currentImage: IImage = useAppSelector(
    (state) => state.slider.currentImage
  );
  const dispatch = useAppDispatch();

  return (
    <div className="relative lg:max-w-md">
      <button
        type="button"
        className="absolute left-4 top-[40%] flex aspect-square w-10 items-center justify-center rounded-full bg-white lg:-left-8 lg:top-[32%] lg:w-20"
        onClick={() => dispatch(getPreviousImage())}
        data-testid="get-previous-btn"
      >
        <img
          src={prevIcon}
          alt="previous"
          className="absolute top-1/2 left-1/2 h-fit max-w-full -translate-x-2 -translate-y-1/2"
        />
      </button>

      <img
        src={currentImage.src}
        alt="product"
        className="block w-full max-w-full lg:rounded-xl"
        data-testid="current-image"
      />

      <button
        type="button"
        className=" absolute right-4 top-[40%] flex aspect-square w-10 items-center justify-center rounded-full bg-white lg:-right-8 lg:top-[32%] lg:w-20"
        onClick={() => dispatch(getNextImage())}
        data-testid="get-next-btn"
      >
        <img
          src={nextIcon}
          alt="next"
          className="fit-w-full absolute top-1/2 left-1/2 h-fit -translate-x-1.5 -translate-y-1/2"
        />
      </button>

      <div className="hidden md:my-8 md:flex md:w-full md:items-center md:justify-evenly lg:justify-evenly">
        {images.map((image) => (
          <div
            key={image.id}
            className={`rounded-xl ${
              image.id === currentImage.id && "outline outline-primary"
            }`}
          >
            <img
              src={image.src}
              alt="product"
              className={`w-32 rounded-lg transition-all duration-300 hover:cursor-pointer hover:opacity-40 lg:w-[88px] ${
                image.id === currentImage.id && "opacity-40"
              }`}
              onClick={() => dispatch(setCurrentImage(image))}
              data-testid="selected-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
