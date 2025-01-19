

import React, { useState, useEffect } from "react";

interface Testimonial {
  description: string;
  name: string;
  logo: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    description:
      "“The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my bank.”",
    name: "Olakunbi Adedipe, Odu Fashion",
    logo: "/img/odu.png",
    image: "/img/olakunbi-odu-84db5233ec896b858bd36431f475e84c.png",
  },
  {
    description:
      "“Brass has been a game changer for our business operations. Their platform is incredibly intuitive and customer support is top-notch. Highly recommended!”",
    name: "Feranmi Ajetunmobi, Ni-Fries  ",
    logo: "/img/nefries.png",
    image: "/img/feranmi-nifries-82cce619334c31103e84d81b82ce43e1.png",
  },
  {
    description:
      "“Managing finances has never been easier. Brass provides seamless tools that cater to my business needs effortlessly. I trust them completely.”",
    name: "Simi Adejumo, Hustler Capital",
    logo: "/img/hustler.png",
    image: "/img/simi-hustler-e41ea6af9e1b032774548a2d1c1ab44e.png",
  },
];

const Businesses: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const { description, name, logo, image } = testimonials[currentTestimonial];

  return (
    <section className=" md:pt-[200px] ">
      <div className="px-10 mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-[30px] font-[600] text-center m-auto max-w-[475px]  leading-tight mb-4">
            Built for today’s ambitious businesses
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Thousands of forward-thinking businesses rely on Brass every day to
            turbo-charge their business financial operations
          </p>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center border border-black">
        {/* Testimonial Content */}
        <div
          className="bg-black text-white flex flex-col justify-center items-center w-full h-full p-10 md:p-16"
        >
          <h3 className="text-xl font-medium leading-relaxed mb-4">
            {description}
          </h3>
          <p className="text-gray-400 mt-[3rem]  font-semibold mb-6">{name}</p>
          <div className="flex mt-[3rem] items-center justify-center space-x-3 mb-6">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                  index === currentTestimonial
                    ? "bg-white scale-125"
                    : "bg-gray-500"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
         <div className="mt-[3rem] h-[3rem] w-full  "> <img src={logo} alt="Logo" className="h-10 mx-auto" /></div>
        </div>

        {/* Testimonial Image */}
        <div className="w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Businesses;
