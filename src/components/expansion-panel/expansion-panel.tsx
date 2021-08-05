import classnames from 'classnames';
import { FC, ReactChild, ReactChildren } from 'react';

import Icon from '../icon';
import IconButton from '../icon-button';
import Icons from '../icons';
import Padding from '../padding';
import classes from './expansion-panel.module.scss';
import useExpansion from './useExpansion';

interface ExpansionPanelClassNames {
  wrapper?: string;
  header?: string;
  headerIconButton?: string;
  contentOuter?: string;
  contentInner?: string;
}

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
  classNames?: ExpansionPanelClassNames;
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  headerBuilder,
  children,
  classNames,
}) => {
  const { ref: contentRef, contentHeight, isExpanded, toggleExpand } = useExpansion(children);

  return (
    <div
      className={classnames(
        classes.wrapper,
        { [classes.wrapper__open]: isExpanded },
        classNames?.wrapper,
      )}
    >
      <div className={classnames(classes.header, classNames?.header)}>
        {headerBuilder({ isExpanded })}

        <IconButton
          onPress={toggleExpand}
          icon={<Icon icon={Icons.keyboard_arrow_down} className={classes.arrow} />}
          padding={Padding.all(24)}
          className={classNames?.headerIconButton}
        />
      </div>

      <div
        ref={contentRef}
        className={classnames(classes.content, classNames?.contentOuter)}
        style={{ maxHeight: contentHeight }}
      >
        <div className={classnames(classes.content_inner, classNames?.contentInner)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
