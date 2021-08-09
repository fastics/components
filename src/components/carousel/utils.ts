export const THRESHOLD = 0.75;

export const findFirstVisibleIndex = (childRefs: HTMLElement[]) =>
  childRefs.findIndex((child) => child.getAttribute('visible'));

export const findLastVisibleIndex = (childRefs: HTMLElement[]) => {
  const reversedIndex = childRefs
    // "reverse" mutates existing array, that's why we copy it via "slice"
    .slice()
    .reverse()
    .findIndex((child) => child.getAttribute('visible'));
  const count = childRefs.length - 1;
  return reversedIndex >= 0 ? count - reversedIndex : reversedIndex;
};

export const scrollLeftToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const actualScrollForIndex = firstVisibleIndex < scrollStep ? 0 : firstVisibleIndex - scrollStep;

  itemRefs[actualScrollForIndex].scrollIntoView({ behavior: 'smooth' });
};

export const scrollRightToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  const lastIndex = itemRefs.length - 1;
  const actualScrollForIndex =
    lastIndex - lastVisibleIndex < scrollStep ? lastIndex : lastVisibleIndex + scrollStep;
  itemRefs[actualScrollForIndex].scrollIntoView({ behavior: 'smooth' });
};

export const scrollToStep = (scrollStep: number, itemRefs: HTMLElement[]) => {
  itemRefs[scrollStep].scrollIntoView({ behavior: 'smooth' });
};

export const showHideIndicator = (
  itemRefs: HTMLElement[],
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void,
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  if (lastVisibleIndex === -1 && firstVisibleIndex === -1) {
    setLeftIndicator(false);
    setRightIndicator(false);
  }
  lastVisibleIndex < itemRefs.length - 1 ? setRightIndicator(true) : setRightIndicator(false);
  firstVisibleIndex > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
};
