import classNames from 'classnames';
import React, { ReactChild, ReactChildren } from 'react';

import { IconButton, Padding } from '../../molecules';
import Icon from '../icon';
import Icons from '../icons';
import classes from './expansion-panel.module.scss';
import useExpansion from './useExpansion';

interface ExpansionPanelProps {
  /**
   * The component builder that builds the expansion panels' header.
   */
  headerBuilder: ({ isExpanded }: { isExpanded: boolean }) => JSX.Element;
  /**
   * The body of the expansion panel that's displayed below the header.
   * It's only displayed when panel is expanded.
   */
  children: ReactChildren | ReactChild;
}

export const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ headerBuilder, children }) => {
  const { ref: contentRef, contentHeight, isExpanded, toggleExpand } = useExpansion(children);

  return (
    <div className={classNames(classes.wrapper, { [classes.wrapper__open]: isExpanded })}>
      <div className={classes.header}>
        {headerBuilder({ isExpanded })}

        <IconButton
          onPress={toggleExpand}
          icon={<Icon icon={Icons.keyboard_arrow_down} className={classes.arrow} />}
          padding={Padding.all(24)}
        />
      </div>

      <div ref={contentRef} className={classes.content} style={{ maxHeight: contentHeight }}>
        <div className={classes.content_inner}>{children}</div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
