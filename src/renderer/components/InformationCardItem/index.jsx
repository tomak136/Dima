import React from 'react'
import * as styles from './styles.module.css'
import { Icons } from '../SVGIcons'

function InformationCardItem(item) {
  return (
      <div className={styles.informationItemContainer}>
        <div className={styles.informationItemIcon}>
          <Icons
            type={item.iconType}
            width={24}
            height={24}
            color={item.iconColor}
          />
        </div>
        <div className={styles.headerCountContainer}>
          <div className={styles.informationHeader}>{item.header}</div>
          <div className={styles.informationCount}>{item.count}</div>
        </div>
      </div>
  )
}

export default InformationCardItem