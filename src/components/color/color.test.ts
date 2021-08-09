import Color from './color';

describe('Color', () => {
  it('should return correct string representation', () => {
    const color = new Color(0xffffffff);
    expect(color.toString()).toEqual('Color(0xffffffff)');
  });

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

  describe('Red HSLA', () => {
    it('should have alpha to 255 by default', () => {
      const colorHSLA = Color.fromHSLA(0, 100, 50);

      // @ts-expect-error
      expect(colorHSLA.alpha).toBe(255);
    });

    it('should return correct RGB from HSL with perfect red', () => {
      const colorHSL = Color.fromHSLA(0, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 255, 0, 0);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL with darker red', () => {
      const colorHSL = Color.fromHSLA(0, 100, 40, 255);
      const colorRGBA = Color.fromARGB(255, 204, 0, 0);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL with less saturated red', () => {
      const colorHSL = Color.fromHSLA(0, 80, 40, 255);
      const colorRGBA = Color.fromARGB(255, 184, 20, 20);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });
  });

  describe('Green HSL', () => {
    it('should return correct RGB from HSL with perfect green', () => {
      const colorHSL = Color.fromHSLA(120, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 0, 255, 0);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL another green', () => {
      const colorHSL = Color.fromHSLA(100, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 85, 255, 0);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });
  });

  describe('Blue HSL', () => {
    it('should return correct RGB from HSL with perfect blue', () => {
      const colorHSL = Color.fromHSLA(240, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 0, 0, 255);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL turquoise', () => {
      const colorHSL = Color.fromHSLA(170, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 0, 255, 213);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL light blue', () => {
      const colorHSL = Color.fromHSLA(190, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 0, 213, 255);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });
  });

  describe('Pink HSL', () => {
    it('should return correct RGB from HSL with light pink', () => {
      const colorHSL = Color.fromHSLA(260, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 85, 0, 255);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });

    it('should return correct RGB from HSL with pink', () => {
      const colorHSL = Color.fromHSLA(310, 100, 50, 255);
      const colorRGBA = Color.fromARGB(255, 255, 0, 212);

      // @ts-expect-error
      expect(colorHSL.value).toEqual(colorRGBA.value);
    });
  });
});
