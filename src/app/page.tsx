import Image from "next/image";
import SpeakeratiMatrix from "@/components/SpeakeratiMatrix";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="logo">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Speakerati"
          width={300}
          height={300}
          priority
        />
      </div>
      <h2>
        Welcome to the <em>Speakerati Speaker Status Program</em>!
      </h2>
      <p>
        A pioneering recognition system for frequent conference speakers, as a
        member of the Speakerati, your journey is celebrated with progressively
        prestigious levels.
      </p>
      <p>
        Starting at Radon, you&apos;ll advance through stages like Tritium,
        Technetium, and Cobalt, culminating in elite levels such as Polonium,
        Plutonium, and the ultimate Uranium. Each level acknowledges your
        growing influence and expertise, offering exclusive perks, networking
        opportunities, and prime visibility at top events. Embrace your radiance
        and let your impact be felt far and wide.
      </p>
      <SpeakeratiMatrix />
    </main>
  );
}
