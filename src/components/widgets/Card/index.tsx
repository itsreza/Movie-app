import React from 'react';
import Badge from '../../UI/Badge';
import ImageLazyLoader from '../../UI/ImageLazyLoader';
import H1 from '../../UI/Typography/H1';
import classes from './index.module.scss';

type Props = {
  image: string;
  title: string;
  voteAverage: number;
  vote: number;
  date: string;
  scrollPosition?: any;
};

// w500 or original size
const imageURL = `https://image.tmdb.org/t/p/w500/`;

export default function Card({ image, title, vote, voteAverage, date, scrollPosition }: Props) {
  return (
    <div className={classes.card}>
      <div style={{ isolation: 'isolate' }}>
        <div className={classes.image}>
          <ImageLazyLoader src={`${imageURL}${image}`} />
          <div className={classes.badge_section}>
            <Badge label={voteAverage} />
          </div>
        </div>
      </div>
      <div className={classes.card_content}>
        <H1>{title}</H1>
        <div className={classes.description_section}>
          <div>
            voted: <span>{vote}</span>
          </div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
}
