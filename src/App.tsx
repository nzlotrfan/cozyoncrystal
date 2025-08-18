import { useRef } from "react";
import img1 from "./assets/1.jpg";
import reu from "./assets/reu.webp";
import styles from "./App.module.css";

function App() {
  const start = new Date("11-12-2023");
  const end = new Date();
  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();
  const monthsHosting = yearsDiff * 12 + monthsDiff;

  const mainRef = useRef<HTMLElement>(null);
  const formHeaderRef = useRef<HTMLHeadingElement>(null);

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToForm = () => {
    if (formHeaderRef.current) {
      formHeaderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <img src={img1} className={styles.hero} alt="Hero" />
        <div className={styles.overlay}>
          <h1>Cozy On Crystal</h1>
          <p>Welcome to Cozy on Crystal, Glendene, Auckland!</p>
        </div>
        <button onClick={scrollToMain}>Explore</button>
      </div>
      <main ref={mainRef} id="main">
        <h2>About</h2>
        <p className={styles.description}>
          Discover comfort and style in our newly-built 2023 Airbnb retreat. This small but cozy
          home is perfect for a relaxing getaway, conveniently located in the heart of Glendene.
          Enjoy the fully equipped kitchen, unwind in the modern shared living area, and indulge in
          the tranquility of the backyard deck. With easy access to local attractions and public
          transport, this is your ideal home base for exploring Auckland.
        </p>
        <p onClick={scrollToForm}>
          ➡️ <span>Book direct & save!</span>
        </p>
        <h2>Your host</h2>
        <div className={styles.hostInfoContainer}>
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <img src={reu} alt="Host Reuben" />
              <p>Reuben</p>
              <p>Superhost</p>
            </div>
            <div className={styles.cardRight}>
              <div className={styles.cardReviews}>
                <p>9</p>
                <p>Reviews</p>
              </div>
              <div className={styles.cardRating}>
                <p>5</p>
                <p>Star Rating</p>
              </div>
              <div className={styles.cardMonths}>
                <p>{monthsHosting}</p>
                <p>Months Hosting</p>
              </div>
            </div>
          </div>
          <div className={styles.aboutReuben}>
            <ul>
              <li>Born in the 90s</li>
              <li>Fun fact: I'm a jazz singer in my spare time!</li>
              <li>Lives in Auckland, New Zealand</li>
              <li>My work: Web developer</li>
              <li>Speaks English</li>
            </ul>
            <p>
              I am a kiwi who loves exploring, the Lord of the Rings, and meeting new people. I also
              love jazz and classical music, as well as everything in-between.
            </p>
          </div>
        </div>
        <h1 ref={formHeaderRef}>Book direct and save!</h1>
        <p>
          You can book either via{" "}
          <a href="https://www.airbnb.co.nz/rooms/1022536520374354153">AirBnB</a>{" "}
          <strong>
            or you can book directly via my website (using the below form) and receive a discount.
          </strong>
        </p>
      </main>
      <div className={styles.form}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc5vVqKfqTjTDwZLcfOeZAcVIDGgwkTxSqiRbVI6-GCchjm4w/viewform?embedded=true"
          width="100%"
          className={styles.frame}
          title="Booking Form"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}

export default App;
