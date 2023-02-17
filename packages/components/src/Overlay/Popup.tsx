import { ReactElement, useCallback, useRef, cloneElement, useState } from 'react';
import Overlay, { OverlayProps } from './Overlay';
import { PlacementType } from './placement';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface popupProps extends Omit<OverlayProps, 'children'> {
  trigger: ReactElement;
  children: ReactElement | string;
  placement?: PlacementType;
  triggerType?: 'hover' | 'click';
}

const Popup = (props: popupProps) => {
  const { placement = 'bottomLeft',trigger, triggerType = 'click', children, ...others } = props;

  const triggerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const mouseEnterTimer = useRef(null);
  const mouseOutTimer = useRef(null);

  const triggerRefCallback = useCallback(node => {
    triggerRef.current = node;
  }, []);

  const handleMouseEnter = () => {
    if (mouseOutTimer.current) {
      clearTimeout(mouseOutTimer.current);
      mouseOutTimer.current = null;
    }
    if (!mouseEnterTimer.current && !visible) {
      mouseEnterTimer.current = setTimeout(() => {
        setVisible(true);
      }, 100);
    }
  }

  const handleMouseLeave = () => {
    if (mouseEnterTimer.current) {
      clearTimeout(mouseEnterTimer.current);
      mouseEnterTimer.current = null;
    }
    if (!mouseOutTimer.current && visible) {
      mouseOutTimer.current = setTimeout(() => {
        setVisible(false);
      }, 100);
    }
  }

  const overlayProps: any = {};
  const triggerProps = {
    ref: triggerRefCallback,
  } as any;
  if (triggerType === 'hover') {
    triggerProps.onMouseEnter =  handleMouseEnter;
    triggerProps.onMouseLeave =  handleMouseLeave;
    overlayProps.onMouseEnter =  handleMouseEnter;
    overlayProps.onMouseLeave =  handleMouseLeave;
  } else {
    triggerProps.onClick = () => setVisible(true);
  }

  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  const triggerEle = typeof trigger === 'string' ? <span>{trigger}</span>: trigger;

  const triggerNode = cloneElement(triggerEle, triggerProps);

  return <>
    {triggerNode}
    <Overlay
      {...others}
      {...overlayProps}
      placement={placement}
      target={() => triggerRef.current}
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      {typeof children === 'string' ?
        <div style={{ border: '1px solid #999' }}>{children}</div> : children}
    </Overlay>
  </>
}

export default Popup;