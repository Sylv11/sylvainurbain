import darkBlob from '../assets/img/blob.svg'
import darkBlob2 from '../assets/img/blob2.svg'
import lightBlob from '../assets/img/light_blob.svg'
import lightBlob2 from '../assets/img/light_blob2.svg'
import { IShapeProps } from '../interfaces'

export const bubblesFirstSubcontainer: IShapeProps[] = [{
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

export const bubblesSecondSubcontainer: IShapeProps[] = [{
  size: 200,
  position: {
      bottom: '10',
      right: '300',
  },
  speed: 6,
  animated: true,
}]

export const darkBlobsProps: IShapeProps[] = [{
  size: 250,
  position: {
      top: '210',
      left: '40',
  },
  speed: 5,
  animated: true,
  src: darkBlob,
  alt: 'darkBlob',
}, {
  size: 250,
  position: {
      top: '50',
      right: '40',
  },
  speed: 7,
  animated: true,
  src: darkBlob2,
  alt: 'darkBlob2',
}]

export const lightBlobsProps: IShapeProps[] = [{
  size: 250,
  position: {
      top: '210',
      left: '40',
  },
  speed: 5,
  animated: true,
  src: lightBlob,
  alt: 'lightBlob',
}, {
  size: 250,
  position: {
      top: '50',
      right: '40',
  },
  speed: 7,
  animated: true,
  src: lightBlob2,
  alt: 'lightBlob2',
}]

export const craters: IShapeProps[] = [{
  size: 5,
  position: {
    top: '25',
    left: '25'
  }
}, {
  size: 12,
  position: {
    bottom: '10',
    right: '5'
  }
}, {
  size: 10,
  position: {
    top: '18',
    left: '2'
  }
}, {
  size: 6,
  position: {
    bottom: '32',
    left: '16'
  }
}, {
  size: 2,
  position: {
    bottom: '30',
    left: '28'
  }
}, {
  size: 2,
  position: {
    bottom: '5',
    left: '30'
  }
}, {
  size: 3,
  position: {
    top: '33',
    left: '9'
  }
}, {
  size: 3,
  position: {
    top: '15',
    left: '21'
  }
}, {
  size: 5,
  position: {
    top: '8',
    left: '5'
  }
}]