import classNames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../color';
import Colors from '../colors';
import LoaderScreen from './components/loader-screen';

interface LoaderProps {
  color?: Color;
  size?: number;
  thickness?: number;
}

interface LoaderStylesProps {
  color: Color;
  size: number;
  thickness: number;
}

const useStyles = createUseStyles({
  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  wrapper: ({ size }: LoaderStylesProps) => ({
    display: 'inline-block',
    position: 'relative',
    width: size,
    height: size,
  }),
  item: ({ color, thickness }: LoaderStylesProps) => ({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxSizing: 'border-box',
    borderWidth: thickness,
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: color.toRGBA(),
  }),
  item1: {
    animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.45s infinite normal none running $rotate',
  },
  item2: {
    animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.3s infinite normal none running $rotate',
  },
  item3: {
    animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) -0.15s infinite normal none running $rotate',
  },
  item4: {
    animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) 0s infinite normal none running $rotate',
  },
});

type LoaderComponent = React.FC<LoaderProps> & {
  Screen: typeof LoaderScreen;
};

export const Loader: LoaderComponent = ({ color = Colors.blue[500], size = 16, thickness = 2 }) => {
  const styles = useStyles({ color, size, thickness });

  return (
    <div className={styles.wrapper}>
      <span className={classNames(styles.item, styles.item1)} />
      <span className={classNames(styles.item, styles.item2)} />
      <span className={classNames(styles.item, styles.item3)} />
      <span className={classNames(styles.item, styles.item4)} />
    </div>
  );
};

Loader.Screen = LoaderScreen;

export default Loader;
