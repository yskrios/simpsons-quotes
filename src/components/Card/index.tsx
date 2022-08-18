import { FC } from "react";
import { Quote } from "../../models/quote.model";
import styles from "./styles.module.scss";

type Props = { quote: Quote };

const characterDirections = {
  right: "Right",
  left: "Left",
};

const Card: FC<Props> = ({ quote }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div
          className={styles.quoteSection}
          style={{
            order:
              quote.characterDirection === characterDirections.right ? 1 : 2,
          }}
        >
          <div className={styles.quote}>
            <h2 className={styles.cardTitle}>{quote.quote}</h2>
            <p className={styles.author}>{quote.character}</p>
          </div>
        </div>
        <figure
          className={styles.figureAuthor}
          style={{
            order:
              quote.characterDirection === characterDirections.right ? 2 : 1,
          }}
        >
          <img src={quote.image} alt={quote.character} />
        </figure>
      </div>
    </div>
  );
};

export default Card;
