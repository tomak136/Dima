import React from 'react';
import * as styles from './styles.module.css';
import { Icons } from '../../components/SVGIcons';
import InformationCardItem from '../../components/InformationCardItem';
import ProductsList from '../../components/ProductsList';
import { Outlet } from 'react-router';




function Products() {
  return (
    <div className={styles.wrapperContainer}>

      <div className={styles.informationContainer}>
        <InformationCardItem
          iconType={'Products'}
          iconColor={'green'}
          header="All Products"
          count={240}
        />
        <InformationCardItem
          iconType={'Products'}
          iconColor={'green'}
          header="All Products"
          count={240}
        />
        <InformationCardItem
          iconType={'Products'}
          iconColor={'green'}
          header="Low Stock"
          count={240}
        />
      </div>
      <div className={styles.allProductsContainer}>
          <ProductsList/>
      </div>
    </div>
  );
}

export default Products;
