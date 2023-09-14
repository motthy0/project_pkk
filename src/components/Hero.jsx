import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Ansan-so <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Gym & Aerobic</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Menyediakan berbagai kebutuhan untuk arobic dan tersedia berbagai alat
          untuk gym
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[80%] h-[100%] relative z-[5] mr-4"
        />
      </div>
    </section>
  );
};

export default Hero;
