import styled from '@emotion/styled'
import React, { useState } from 'react'

const Link = styled.div`
    img {
        padding-right: 1rem;
    }
`

const Links = ({icon, link, nameIcon, route}) => {

  return (
    <Link>
        <a href={route}>
            <p className={`${link === 'Not Available' && 'not-available'} `}>
            <img src={icon} alt={nameIcon}/>{link}
        </p></a>
    </Link>
  )
}

export default Links
