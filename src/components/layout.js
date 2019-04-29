import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
