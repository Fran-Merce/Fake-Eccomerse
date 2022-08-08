import React from 'react'
import { LoaderImg, LoaderStyled } from './LoaderStyled'

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderImg src="/assets/imgs/loaderImg.png" alt="" />
    </LoaderStyled>
  )
}
