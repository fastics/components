import Color from './color';

describe('Atoms/Color', () => {
  it('should reject when incorrect value is passed', () => {
    expect(() => {
      Color.fromARGB(256, 255, 255, 255);
    }).toThrow('Alpha channel should be between 0 and 255');
    expect(() => {
      Color.fromARGB(255, 256, 255, 255);
    }).toThrow('Red channel should be between 0 and 255');
    expect(() => {
      Color.fromARGB(255, 255, 256, 255);
    }).toThrow('Green channel should be between 0 and 255');
    expect(() => {
      Color.fromARGB(255, 255, 255, 256);
    }).toThrow('Blue channel should be between 0 and 255');
  });

  it('should create a Color instance from ARGB', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.alpha).toBe(255);
    // @ts-expect-error
    expect(color.red).toBe(255);
    // @ts-expect-error
    expect(color.green).toBe(255);
    // @ts-expect-error
    expect(color.blue).toBe(255);
  });

  it('should change alpha', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.alpha).toBe(255);

    const color2 = color.withAlpha(100);

    // Test that original color is unchanged
    // @ts-expect-error
    expect(color.alpha).toBe(255);
    // @ts-expect-error
    expect(color2.alpha).toBe(100);
    // @ts-expect-error
    expect(color2.red).toBe(255);
    // @ts-expect-error
    expect(color2.green).toBe(255);
    // @ts-expect-error
    expect(color2.blue).toBe(255);
  });

  it('should change red', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.red).toBe(255);

    const color2 = color.withRed(100);

    // Test that original color is unchanged
    // @ts-expect-error
    expect(color.red).toBe(255);
    // @ts-expect-error
    expect(color2.red).toBe(100);
    // @ts-expect-error
    expect(color2.alpha).toBe(255);
    // @ts-expect-error
    expect(color2.green).toBe(255);
    // @ts-expect-error
    expect(color2.blue).toBe(255);
  });

  it('should change green', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.green).toBe(255);

    const color2 = color.withGreen(100);

    // Test that original color is unchanged
    // @ts-expect-error
    expect(color.green).toBe(255);
    // @ts-expect-error
    expect(color2.green).toBe(100);
    // @ts-expect-error
    expect(color2.alpha).toBe(255);
    // @ts-expect-error
    expect(color2.red).toBe(255);
    // @ts-expect-error
    expect(color2.blue).toBe(255);
  });

  it('should change blue', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.blue).toBe(255);

    const color2 = color.withBlue(100);

    // Test that original color is unchanged
    // @ts-expect-error
    expect(color.blue).toBe(255);
    // @ts-expect-error
    expect(color2.blue).toBe(100);
    // @ts-expect-error
    expect(color2.alpha).toBe(255);
    // @ts-expect-error
    expect(color2.red).toBe(255);
    // @ts-expect-error
    expect(color2.green).toBe(255);
  });

  it('should change opacity', () => {
    const color = Color.fromARGB(255, 255, 255, 255);

    // @ts-expect-error
    expect(color.alpha).toBe(255);

    const color2 = color.withOpacity(0);
    const color3 = color2.withOpacity(1);
    const color4 = color3.withOpacity(0.5);

    // Test that original color is unchanged
    // @ts-expect-error
    expect(color.alpha).toBe(255);
    // @ts-expect-error
    expect(color2.alpha).toBe(0);
    // @ts-expect-error
    expect(color3.alpha).toBe(255);
    // @ts-expect-error
    expect(color4.alpha).toBe(128);

    expect(() => {
      color4.withOpacity(3);
    }).toThrow('Opacity should be between 0 and 1');
    expect(() => {
      color4.withOpacity(-21);
    }).toThrow('Opacity should be between 0 and 1');
  });

  it('should return correct brightness', () => {
    const colorLight = new Color(0xffffffff);
    const colorDark = new Color(0xff000000);

    expect(colorLight.estimateBrightness()).toBe('light');
    expect(colorDark.estimateBrightness()).toBe('dark');
  });

  it('should return correct RGB from HSL with perfect red', () => {
    const colorHSL = Color.fromHSL(0, 100, 50);
    const colorRGBA = Color.fromARGB(255, 255, 0, 0);

    // @ts-expect-error
    expect(colorHSL.value).toEqual(colorRGBA.value);
  });

  it('should return correct RGB from HSL with darker red', () => {
    const colorHSL = Color.fromHSL(0, 100, 40);
    const colorRGBA = Color.fromARGB(255, 204, 0, 0);

    // @ts-expect-error
    expect(colorHSL.value).toEqual(colorRGBA.value);
  });

  it('should return correct RGB from HSL with less saturated red', () => {
    const colorHSL = Color.fromHSL(0, 80, 40);
    const colorRGBA = Color.fromARGB(255, 184, 20, 20);

    // @ts-expect-error
    expect(colorHSL.value).toEqual(colorRGBA.value);
  });
});
