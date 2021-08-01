import darkBlob from '../assets/img/dark_blob.svg'
import darkBlob2 from '../assets/img/dark_blob2.svg'
import lightBlob from '../assets/img/light_blob.svg'
import lightBlob2 from '../assets/img/light_blob2.svg'
import { IShapeProps } from '../interfaces'

export const BUBBLES_1: IShapeProps[] = [{
  size: 25,
  position: {
      top: '33',
      right: '35',
  },
  speed: 7,
  animated: true,
}, {
  size: 15,
  position: {
      top: '60',
      left: '8',
  },
  speed: 6,
  animated: true,
}, {
  size: 15,
  position: {
      bottom: '8',
      right: '25',
  },
  speed: 5,
  animated: true,
}, {
  size: 30,
  position: {
      top: '-9',
      left: '-11',
  },
}, {
  size: 10,
  position: {
      top: '15',
      left: '18',
  },
}, {
  size: 23,
  position: {
      top: '65',
      left: '25',
  },
}, {
  size: 25,
  position: {
      top: '6',
      left: '40',
  },
}, {
  size: 15,
  position: {
      top: '-150',
      right: '250',
  },
}, {
  size: 15,
  position: {
      top: '25',
      right: '10',
  },
}]

export const BUBBLES_2: IShapeProps[] = [{
  size: 20,
  position: {
      bottom: '3',
      right: '22',
  },
  speed: 6,
  animated: false,
}]

export const DARK_BLOBS: IShapeProps[] = [{
  size: 25,
  position: {
      top: '55',
      left: '6',
  },
  speed: 5,
  animated: true,
  src: darkBlob,
  alt: 'darkBlob',
}, {
  size: 30,
  position: {
      top: '20',
      right: '6',
  },
  speed: 7,
  animated: true,
  src: darkBlob2,
  alt: 'darkBlob2',
}]

export const LIGHT_BLOBS: IShapeProps[] = [{
  size: 25,
  position: {
      top: '55',
      left: '6',
  },
  speed: 5,
  animated: true,
  src: lightBlob,
  alt: 'lightBlob',
}, {
  size: 30,
  position: {
      top: '20',
      right: '6',
  },
  speed: 7,
  animated: true,
  src: lightBlob2,
  alt: 'lightBlob2',
}]

export const CRATERS: IShapeProps[] = [{
  size: 0.9,
  position: {
    top: '25',
    left: '25'
  }
}, {
  size: 2.5,
  position: {
    bottom: '10',
    right: '5'
  }
}, {
  size: 1.5,
  position: {
    top: '18',
    left: '2'
  }
}, {
  size: 1,
  position: {
    bottom: '32',
    left: '16'
  }
}, {
  size: 0.5,
  position: {
    bottom: '30',
    left: '28'
  }
}, {
  size: 0.8,
  position: {
    bottom: '5',
    left: '30'
  }
}, {
  size: 0.4,
  position: {
    top: '33',
    left: '9'
  }
}, {
  size: 1,
  position: {
    top: '8',
    left: '5'
  }
}]