
type point = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';
export type PointsType = [point, point];
export type PlacementType = 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'rightTop' | 'right' | 'rightBottom' | 'bottomLeft' | 'bottom' | 'bottomRight';

const placementMap = {
  topLeft: ['bl', 'tl'],
  top: ['bc', 'tc'],
  topRight: ['br', 'tr'],
  leftTop: ['tr', 'tl'],
  left: ['cr', 'cl'],
  leftBottom: ['br', 'bl'],
  rightTop: ['tl', 'tr'],
  right: ['cl', 'cr'],
  rightBottom: ['bl', 'br'],
  bottomLeft: ['tl', 'bl'],
  bottom: ['tc', 'bc'],
  bottomRight: ['tr', 'br'],
}

interface placementConfig {
  target: HTMLElement;
  overlay: HTMLElement;
  placement?: PlacementType;
  points?: PointsType;
  beforePosition?: Function;
}

export default function getPlacement({
  target,
  overlay,
  placement,
  points: opoints = ['tl', 'bl'] as PointsType,
  beforePosition,
}: placementConfig) {
  if (!target || !overlay) {
    return {};
  }
  const { width: twidth, height: theight, left: tleft, top: ttop } = target.getBoundingClientRect();
  const { width: owidth, height: oheight } = overlay.getBoundingClientRect();
  const { left: cleft, top: ctop } = document.body.getBoundingClientRect();
  const { scrollWidth: cwidth, scrollHeight: cheight, scrollTop: cscrollTop, scrollLeft: cscrollLeft } = document.body;

  function getTopLeft(placement) {
    let points: PointsType = opoints;
    if (placement && placement in placementMap) {
      points = placementMap[placement] as PointsType;
    }
  
    const baseTop = ttop - ctop + cscrollTop;
    const baseLeft = tleft - cleft + cscrollLeft;
  
    let top = baseTop;
    let left = baseLeft;
  
    switch (points[1][0]) {
      case 't':
        top += 0;
        break;
      case 'c':
        top += theight / 2;
        break;
      case 'b':
        top += theight;
        break;
    }
    switch (points[1][1]) {
      case 'l':
        left += 0;
        break;
      case 'c':
        left += twidth / 2;
        break;
      case 'r':
        left += twidth;
        break;
    }
  
    switch (points[0][0]) {
      case 't':
        top += 0;
        break;
      case 'c':
        top -= oheight / 2;
        break;
      case 'b':
        top -= oheight;
        break;
    }
  
    switch (points[0][1]) {
      case 'l':
        left += 0;
        break;
      case 'c':
        left -= owidth / 2;
        break;
      case 'r':
        left -= owidth;
        break;
    }

    return {
      left,
      top,
    }
  }

  let realPlacement = placement;
  const {left, top} = getTopLeft(placement);


  let result = {
    position: 'absolute',
    top,
    left
  };

  if(left < 0 || top < 0 || left + owidth > cwidth || top + oheight > cheight) {
    let newPlacement = placement;
    if (top < 0) {
      newPlacement = newPlacement.replace('top', 'bottom') as PlacementType;
      newPlacement = newPlacement.replace('Bottom', 'Top') as PlacementType;
    }
    if (left < 0) {
      newPlacement = newPlacement.replace('left', 'right') as PlacementType;
      newPlacement = newPlacement.replace('Right', 'Left') as PlacementType;
    }
    if (top + oheight > cheight) {
      newPlacement = newPlacement.replace('bottom', 'top') as PlacementType;
      newPlacement = newPlacement.replace('Top', 'Bottom') as PlacementType;
    }
    if (left + owidth > cwidth) {
      newPlacement = newPlacement.replace('right', 'left') as PlacementType;
      newPlacement = newPlacement.replace('Left', 'Right') as PlacementType;
    }

    const {left: nleft, top: ntop} = getTopLeft(newPlacement);

    result.left = nleft;
    result.top = ntop;
    realPlacement = newPlacement;
  }

  if(result.left <0 ) {
    result.left = 0
  }
  if (result.top <0) {
    result.top = 0
  }
  // 

  if (typeof beforePosition === 'function') {
    result = beforePosition(result, {
      target: {
        width: twidth,
        height: theight,
      },
      placement: realPlacement
    })
  }

  return result;
}