import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Apa <span style={{ color: "#00F6FF" }}>saja</span> yang{" "}
        <br className="sm:block hidden" />{" "}
        <span style={{ color: "#00F6FF" }}>ada</span> disini?
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        Ada berbagai macam alat gym yang bisa digunakan untuk melatih jasmani
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        Tempat yang nyaman, bersih, dan sehat
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        Ada juga tempat yang luas untuk senam, aerobik, maupun latihan bela diri
      </p>
      <br />
    </div>
  </section>
);

export default Billing;
