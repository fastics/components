import { render } from '@testing-library/react';

import Alignment from '../alignment';
import Align from './align';

type Direction = 'flex-start' | 'flex-end' | 'center';

const expectDirections = (
  elm: HTMLElement,
  justifyContent: Direction | '',
  alignItems: Direction | '',
) => {
  const headerClass = elm.className;
  const headerRoot = document.getElementsByClassName(headerClass);
  const style = window.getComputedStyle(headerRoot[0]);

  expect(style.justifyContent).toBe(justifyContent);
  expect(style.alignItems).toBe(alignItems);
};

describe('Align', () => {
  it('should render successfully with top left', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.topLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-start', 'flex-start');
  });

  it('should render successfully with top center', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.topCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'center', 'flex-start');
  });

  it('should render successfully with top right', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.topRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-end', 'flex-start');
  });

  it('should render successfully with center left', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.centerLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-start', 'center');
  });

  it('should render successfully with center', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.center}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'center', 'center');
  });

  it('should render successfully with center right', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.centerRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-end', 'center');
  });

  it('should render successfully with bottom left', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.bottomLeft}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-start', 'flex-end');
  });

  it('should render successfully with bottom center', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.bottomCenter}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'center', 'flex-end');
  });

  it('should render successfully with bottom right', () => {
    const { getByTestId } = render(
      <Align alignment={Alignment.bottomRight}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, 'flex-end', 'flex-end');
  });

  it('should render successfully with bad alignment', () => {
    const { getByTestId } = render(
      // @ts-expect-error
      <Align alignment={undefined}>
        <span>Hello Test</span>
      </Align>,
    );

    const divElement = getByTestId('align');

    expectDirections(divElement, '', '');
  });
});
