import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner: {discount, desc, largeText1, largeText2, saleTime, smallText, product, midText, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{discount}</p>
          <p>{saleTime}</p>
        </div>
        <img src={'https://i0.wp.com/www.discamp.com/wp-content/uploads/2020/04/buzo-algodon-friza-gris.png?resize=300%2C300&ssl=1'} className='footer-banner-image' />
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner