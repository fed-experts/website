import React from 'react';
import PropTypes from 'prop-types';
import styles from './fedPreview.module.scss';
import FedPreview from './FedPreview';

const FedList = (props) => {
  const feds = props.feds;
  const fedsComponents = feds.map((fed, index) => (
    <FedPreview key={fed.id} {...fed} />
  ));

  return (
    <section className={styles.fedPreviewList}>
    {fedsComponents}
    </section>
  );
};

FedList.propTypes = {
  feds: PropTypes.array
};

FedList.defaultProps = {
  feds: []
};

export default FedList;
