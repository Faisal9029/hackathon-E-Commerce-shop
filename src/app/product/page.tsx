import Cards from '../components/product-components/cards';
import Company from '../components/product-components/company';
import Header from '../components/product-components/header';
import Hero from '../components/product-components/hero';

import React from 'react';

const ProductPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Company />
        <Cards />
    </div>
  )
}

export default ProductPage;