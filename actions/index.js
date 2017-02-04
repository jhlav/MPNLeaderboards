import CHANGE_VIEW from './constants';

export default function changeView(view) {
  return {
    type: CHANGE_VIEW,
    view,
  };
}
