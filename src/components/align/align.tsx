import React, { CSSProperties, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import Alignment from '../alignment';

interface AlignProps {
  /**
   * The `alignment` prop is mandatory. It sets the children alignment.
   *
   * @example
   * <Align alignment={Alignment.center} />
   */
  alignment: Alignment;

  /**
   * The children you want to align.
   */
  children: ReactNode;
}

interface AlignStylesProps {
  alignment: Alignment;
}

const getJustifyContent = (alignment: Alignment): CSSProperties['justifyContent'] | null => {
  switch (alignment) {
    case Alignment.topLeft:
    case Alignment.bottomLeft:
    case Alignment.centerLeft:
      return 'flex-start';

    case Alignment.center:
    case Alignment.bottomCenter:
    case Alignment.topCenter:
      return 'center';

    case Alignment.bottomRight:
    case Alignment.centerRight:
    case Alignment.topRight:
      return 'flex-end';

    default:
      return null;
  }
};

const getAlignItems = (alignment: Alignment): CSSProperties['alignItems'] | null => {
  switch (alignment) {
    case Alignment.topLeft:
    case Alignment.topCenter:
    case Alignment.topRight:
      return 'flex-start';

    case Alignment.centerLeft:
    case Alignment.center:
    case Alignment.centerRight:
      return 'center';

    case Alignment.bottomLeft:
    case Alignment.bottomCenter:
    case Alignment.bottomRight:
      return 'flex-end';

    default:
      return null;
  }
};

const useStyles = createUseStyles({
  wrapper: ({ alignment }: AlignStylesProps) => ({
    display: 'flex',
    flex: 1,
    justifyContent: getJustifyContent(alignment) ?? null,
    alignItems: getAlignItems(alignment) ?? null,
  }),
});

export const Align: React.FC<AlignProps> = ({ alignment, children }) => {
  const styles = useStyles({ alignment });

  return <div className={styles.wrapper}>{children}</div>;
};

export default Align;
