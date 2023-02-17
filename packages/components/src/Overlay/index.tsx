import InternalOverlay from './Overlay';
import InternalPopup from './Popup';

type OverlayType = typeof InternalOverlay;
interface OverlayInterface extends OverlayType {
  Popup: typeof InternalPopup;
}

const Overlay = InternalOverlay as OverlayInterface;
Overlay.Popup = InternalPopup;

export const Popup = InternalPopup;
export default Overlay;
