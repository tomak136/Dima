import React from 'react'
import { Icons } from '../SVGIcons'
import * as styles from './styles.module.css'
import { useNavigate } from 'react-router'

function BackButton({route}) {
    const navigate = useNavigate()
  return (
    <button type='button' onClick={()=>{navigate(-1)}} className={styles.BackButton}><Icons type={'back-button'} color={'grey'} width={24} height={24}/></button>
  )
}

export default BackButton