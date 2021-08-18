import { render } from '@testing-library/react';

import Result, { ResultStatus } from './result';

describe('Result', () => {
  it('should render successfully with success', () => {
    render(<Result title="Hello Testing World!" status={ResultStatus.SUCCESS} />);
  });

  it('should render successfully with info', () => {
    render(<Result title="Your operation has been executed." status={ResultStatus.INFO} />);
  });

  it('should render successfully with warning', () => {
    render(
      <Result title="There are some problems with your operation." status={ResultStatus.WARNING} />,
    );
  });

  it('should render successfully with error', () => {
    render(
      <Result
        title="Submission Failed"
        subtitle="Please check and modify the following information before resubmitting."
        status={ResultStatus.ERROR}
      />,
    );
  });

  it('should render successfully with unknown status', () => {
    render(
      <Result
        title="Submission Failed"
        subtitle="Please check and modify the following information before resubmitting."
        // @ts-expect-error
        status="unknown"
      />,
    );
  });
});
