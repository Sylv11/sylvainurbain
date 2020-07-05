import blob from '../assets/img/blob.svg'
import blob2 from '../assets/img/blob2.svg'
import { ILivingShapeProps } from '../interfaces'

export const livingBubblesPropsFirstSubcontainer: ILivingShapeProps[] = [{
  size: 190,
  position: {
      top: '200',
      right: '500',
  },
  speed: 7,
  animated: true,
}, {
  size: 100,
  position: {
      top: '350',
      left: '80',
  },
  speed: 6,
  animated: true,
}, {
  size: 75,
  position: {
      bottom: '25',
      right: '350',
  },
  speed: 5,
  animated: true,
}, {
  size: 225,
  position: {
      top: '-50',
      left: '-125',
  },
}, {
  size: 215,
  position: {
      top: '100',
      left: '225',
  },
}, {
  size: 90,
  position: {
      top: '425',
      left: '325',
  },
}, {
  size: 30,
  position: {
      top: '20',
      left: '550',
  },
}, {
  size: 250,
  position: {
      top: '-150',
      right: '250',
  },
}, {
  size: 75,
  position: {
      top: '175',
      right: '200',
  },
}]

export const livingBubblesPropsSecondSubcontainer: ILivingShapeProps[] = [{
  size: 200,
  position: {
      bottom: '10',
      right: '300',
  },
  speed: 6,
  animated: true,
}]

export const livingBlobProps: ILivingShapeProps[] = [{
  size: 250,
  position: {
      top: '210',
      left: '40',
  },
  speed: 5,
  animated: true,
  src: blob,
  alt: 'blob',
}, {
  size: 250,
  position: {
      top: '50',
      right: '40',
  },
  speed: 7,
  animated: true,
  src: blob2,
  alt: 'blob2',
}]