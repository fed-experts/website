import React from 'react';
import PropTypes from 'prop-types';
import styles from './fedPreview.module.scss';


const FedPreview = (props) => {
  return (
    <article className={styles.fedPreview}>
      <h2><label>Name:</label> {props.name}</h2>
      <div><label>Email:</label> <a href={`mailto:${props.email}`}>{props.email}</a></div>
      <div><label>Experties:</label> {props.expertise}</div>
      <section className={styles.links}>
        {props.linkedin && <a href={props.linkedin}>LinkedIn</a>}
        {props.github && <a href={props.github}>Github</a>}
        {props.facebook && <a href={props.facebook}>Facebook</a>}
        {props.twitter && <a href={props.twitter}>Twitter</a>}
        {props.medium && <a href={props.medium}>Medium</a>}
        {props.websiteblog && <a href={props.websiteblog}>Website</a>}
        {props.youtube && <a href={props.youtube}>Youtube</a>}
        {props.codepen && <a href={props.codepen}>Codepen</a>}
      </section>
    </article>
  );
};

FedPreview.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  expertise: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  medium: PropTypes.string,
  websiteblog: PropTypes.string,
  linkedin: PropTypes.string,
  youtube: PropTypes.string,
  github: PropTypes.string,
  codepen: PropTypes.string,
};

FedPreview.defaultProps = {
  id:'',
  name:'',
  expertise:'',
  email:'',
  twitter:'',
  facebook:'',
  medium:'',
  websiteblog:'',
  linkedin:'',
  youtube:'',
  github:'',
  codepen:'',
};

export default FedPreview;
