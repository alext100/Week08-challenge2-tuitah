import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import ReactTimeAgo from "react-time-ago";
import styles from "../../styles/TuitCard.module.css";

TimeAgo.addLocale(es);

const TuitCard = ({ tuit }) => (
  <>
    <article
      className={`${styles["tuit-card"]} col-md-5 col-12 row justify-content-center`}
    >
      <div className="col-12 row">
        <p className={`${styles["tuit-card__text"]} col-12`}>{tuit.text}</p>
        <p className={`${styles["tuit-card__date"]}  col-md-9 col-12`}>
          <ReactTimeAgo date={Date.parse(tuit.date)} locale="es" />
        </p>
        <p className={`${styles["tuit-card__likes"]} col-md-3 col-12`}>
          Likes: {tuit.likes}
        </p>
      </div>
      <div className="col-12 row">
        <button type="button" className="btn btn-dark col-md-6 col-12">
          Like
        </button>
        <button type="button" className="btn btn-danger col-md-6 col-12">
          Delete
        </button>
      </div>
    </article>
  </>
);

export default TuitCard;
