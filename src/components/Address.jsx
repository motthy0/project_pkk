  import { Map } from "../assets";
  import styles, { layout } from "../style";
  
  const mapLink = 'https://maps.app.goo.gl/DFfhccae2831ajsB9';
  const whatsappLink = 'https://api.whatsapp.com/send?phone=+6285856711114&text=Halo,%20saya%20ingin%20bertanya%20tentang%20Gym%20anda.';


  const Billing = () => (

    <section id="map" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <a href={mapLink}>
        <img
          src={Map}
          alt="billing"
          className="w-[100%] h-[50%] relative z-[5]"
        /></a>
  
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Tentang <span style={{ color: "#00F6FF" }}>Ansan-So</span>
        </h2>
  
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          Untuk info lebih lanjut tentang Ansan-So
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        Silahkan chat{' '}
        <a href={whatsappLink} style={{ color: '#00F6FF', textDecoration: 'underline' }}>
          0858-5671-1114
        </a>
      </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          atau klik gambar untuk melihat info/alamat dari Ansan-So
        </p>
        <br />
      </div>
    </section>
  );
  
  export default Billing;
  