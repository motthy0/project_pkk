import styles from "./style";
import { Billing, Business, Footer, Navbar, Testimonials, Hero , IMG, Video, Address} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <div className={`${styles.textWhite} ${styles.heading2} ${styles.fontBold} ${styles.marginBottom}`}>Gallery         <span style={{ color: "#00F6FF" }}>Ansan-So Gym & Aerobic</span>
</div>
        <IMG/>
        <Video/>
        <Address/>
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;