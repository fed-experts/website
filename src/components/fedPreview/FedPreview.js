import React from 'react';
import PropTypes from 'prop-types';
import styles from './fedPreview.module.scss';
// import Img from 'gatsby-image';

const FedPreview = (props) => {
  return (
    <article className={styles.fedPreview}>
      <h2><label>Name:</label> {props.name}</h2>
      <div><label>Experties:</label> {props.expertise}</div>
      {props.email && <div><label>Email:</label> <a href={`mailto:${props.email}`}>{props.email} </a></div> }
      <section className={styles.links}>
        {props.linkedin && <a href={props.linkedin} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.linkedInLogo.publicURL} alt="LinkedIn Logo" /></a>}
        {props.github && <a href={props.github} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.githubLogo.publicURL} alt="Github Logo" /></a>}
        {props.facebook && <a href={props.facebook} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.facebookLogo.publicURL} alt="Facebook Logo" /></a>}
        {props.twitter && <a href={props.twitter} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.twitterLogo.publicURL} alt="Twitter Logo" /></a>}
        {props.medium && <a href={props.medium} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.mediumLogo.publicURL} alt="Medium Logo" /></a>}
        {props.websiteblog && <a href={props.websiteblog} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.websiteLogo.publicURL} alt="Website Logo" /></a>}
        {props.youtube && <a href={props.youtube} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.youtubeLogo.publicURL} alt="Youtube Logo" /></a>}
        {props.codepen && <a href={props.codepen} rel="noopener noreferrer" target="_blank"><img className={styles.logo} src={props.logos.codepenLogo.publicURL} alt="Codepen Logo" /></a>}
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
  logos: PropTypes.object,
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
  logos: {},
};

export default FedPreview;
