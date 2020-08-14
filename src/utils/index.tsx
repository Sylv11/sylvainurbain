import React from 'react'

import { IShapeProps, ShapeType } from "../interfaces"
import { BUBBLE_TYPE, BLOB_TYPE, CRATER_TYPE } from "../constants/globals"
import { LivingBubble } from "../components/LivingBubble"
import { LivingBlob } from "../components/LivingBlob"
import { Crater } from "../components/Crater"

export const buildShapes = (shapesToBuild: IShapeProps[], type: ShapeType): JSX.Element[] => shapesToBuild.map((shapesToBuild: IShapeProps, index: number): JSX.Element => {
  switch(type) {
  case BUBBLE_TYPE: 
      return <LivingBubble {...shapesToBuild} key={index} />
  case BLOB_TYPE:
      return <LivingBlob {...shapesToBuild} key={index} />
  case CRATER_TYPE:
      return <Crater {...shapesToBuild} key={index} />
  default:
      return <LivingBubble {...shapesToBuild} key={index} />
  }
})