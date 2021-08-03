import { act, renderHook } from '@testing-library/react-hooks';

import useTextEditingController from './useTextEditingController';

describe('TextField/useTextEditingController', () => {
  it('should clear input', () => {
    const { result } = renderHook(() =>
      useTextEditingController({ listenValue: true, initialValue: 'Hello Tests' }),
    );

    expect(result.current.value).toBe('Hello Tests');

    act(() => {
      result.current.clear();
    });

    expect(result.current.value).toBe('');
  });

  it('should handle selection', () => {
    const { result } = renderHook(() =>
      useTextEditingController({ listenValue: false, initialValue: 'Hello Tests' }),
    );

    act(() => {
      result.current.handleSelectionChange({
        target: { selectionStart: 0, selectionEnd: 5, value: 'Hello Tests' },
      } as any);
    });

    expect(result.current.selectedText).toBe('Hello');
  });

  it('should handle change', () => {
    const { result } = renderHook(() =>
      useTextEditingController({ listenValue: true, initialValue: 'Hello Tests' }),
    );

    act(() => {
      result.current.handleChange({
        target: { value: 'Toto' },
      } as any);
    });

    expect(result.current.value).toBe('Toto');
  });

  it('should return correct value', () => {
    const { result } = renderHook(() =>
      useTextEditingController({ listenValue: false, initialValue: 'Hello Tests' }),
    );

    // It's undefined since we have no ref to give.
    expect(result.current.getValue()).toBe(undefined);
  });
});
