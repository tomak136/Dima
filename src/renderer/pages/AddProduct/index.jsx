import React from 'react';
import BackButton from '../../components/BackButton';
import * as styles from './styles.module.css';
import Card from '../../components/Card';
import InputWTitle from '../../components/InputwithTitle/Index';
import { Icons } from '../../components/SVGIcons';

import { catagory } from '../../MockData/catagory';
import AutoCompleteWithTitle from '../../components/AutoCompleteWithTitle';

function AddProduct() {
  return (
    <div>
      <div className={styles.BackButtomHeaderContainer}>
        <BackButton
          backRoute={'Products List'}
          currentRouteTitle={'Add New Product'}
        />
      </div>
      <div className={styles.addProductsContainer}>
        <div>
          <Card title="Description">
            <InputWTitle
              placeholder={'Enter Product Name'}
              title={'Product ID'}
              onChange={(e) => console.log(e.target.value)}
              name={'product_name'}
              disabled={true}
              value={'#1178564'}
            />
            <InputWTitle
              placeholder={'Enter Product Name'}
              title={'Product Name'}
              onChange={(e) => console.log(e.target.value)}
              name={'product_name'}
            />
            <InputWTitle
              placeholder={''}
              title={'Description'}
              onChange={(e) => console.log(e.target.value)}
              name={'description'}
              multiline
            />
          </Card>
          <Card title="Catagory">
            <AutoCompleteWithTitle options={catagory.data} label={'Catagory'} />
            <AutoCompleteWithTitle
              options={catagory.data}
              label={'Sub-Catagory'}
            />
          </Card>
        </div>
        <div>
          <Card title="Product Images">
            <div className={styles.productImageContainer}>
              <Icons
                type="build-in-progress"
                width={'4rem'}
                height={'4rem'}
                color={'lightgrey'}
              />

              <div>Build in progress....</div>
            </div>
          </Card>
          <Card title="Inventory">
          <InputWTitle
              placeholder={'Number Of Items'}
              title={'Quantity'}
              onChange={(e) => console.log(e.target.value)}
              name={'inventory'}
              type={'number'}
            />
          </Card>
          <Card title="Pricing">
          <InputWTitle
              placeholder={'Enter the Price'}
              title={'Price'}
              onChange={(e) => console.log(e.target.value)}
              name={'pricing'}
              type={'number'}
              min={"2"}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
