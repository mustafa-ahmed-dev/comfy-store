import { Link } from "react-router-dom";

import hero1 from "./../../../assets/hero1.webp";
import hero2 from "./../../../assets/hero2.webp";
import hero3 from "./../../../assets/hero3.webp";
import hero4 from "./../../../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  // you can add `grid-cols-1` but it is already added by default, so no need
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl first-letter:capitalize">
          we are changing the way people shop
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          amet nihil distinctio, voluptatum aliquam nostrum est totam obcaecati
          dolor nobis!
        </p>

        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize">
            Our products
          </Link>
        </div>
      </div>

      <div className="h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((carouselImage, i) => {
          return (
            <div key={i} className="carousel-item">
              <img
                src={carouselImage}
                alt={`Carousel image ${i + 1}`}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
