import Color from '../color';

class Colors {
  /**
   * The amber primary color and swatch.
   */
  static get amber() {
    return {
      50: new Color(0xfffff8e1),
      100: new Color(0xffffecb3),
      200: new Color(0xffffe082),
      300: new Color(0xffffd54f),
      400: new Color(0xffffca28),
      500: new Color(0xffffc107),
      600: new Color(0xffffb300),
      700: new Color(0xffffa000),
      800: new Color(0xffff8f00),
      900: new Color(0xffff6f00),
    };
  }

  static get amberAccent() {
    return {
      100: new Color(0xffffe57f),
      200: new Color(0xffffd740),
      400: new Color(0xffffc400),
      700: new Color(0xffffab00),
    };
  }

  /**
   * Completely opaque black.
   */
  static black = new Color(0xff000000);
  static black12 = Colors.black.withOpacity(0.12);
  static black26 = Colors.black.withOpacity(0.26);
  static black38 = Colors.black.withOpacity(0.38);
  static black45 = Colors.black.withOpacity(0.45);
  static black54 = Colors.black.withOpacity(0.54);
  static black87 = Colors.black.withOpacity(0.87);

  /**
   * The blue primary color and swatch.
   */
  static get blue() {
    return {
      50: new Color(0xffe3f2fd),
      100: new Color(0xffbbdefb),
      200: new Color(0xff90caf9),
      300: new Color(0xff64b5f6),
      400: new Color(0xff42a5f5),
      500: new Color(0xff2196f3),
      600: new Color(0xff1e88e5),
      700: new Color(0xff1976d2),
      800: new Color(0xff1565c0),
      900: new Color(0xff0d47a1),
    };
  }

  static get blueAccent() {
    return {
      100: new Color(0xff82b1ff),
      200: new Color(0xff448aff),
      400: new Color(0xff2979ff),
      700: new Color(0xff2962ff),
    };
  }

  /**
   * The blue-grey primary color and swatch.
   */
  static get blueGrey() {
    return {
      50: new Color(0xffeceff1),
      100: new Color(0xffcfd8dc),
      200: new Color(0xffb0bec5),
      300: new Color(0xff90a4ae),
      400: new Color(0xff78909c),
      500: new Color(0xff607d8b),
      600: new Color(0xff546e7a),
      700: new Color(0xff455a64),
      800: new Color(0xff37474f),
      900: new Color(0xff263238),
    };
  }

  /**
   * The brown primary color and swatch.
   */
  static get brown() {
    return {
      50: new Color(0xffefebe9),
      100: new Color(0xffd7ccc8),
      200: new Color(0xffbcaaa4),
      300: new Color(0xffa1887f),
      400: new Color(0xff8d6e63),
      500: new Color(0xff795548),
      600: new Color(0xff6d4c41),
      700: new Color(0xff5d4037),
      800: new Color(0xff4e342e),
      900: new Color(0xff3e2723),
    };
  }

  /**
   * The cyan primary color and swatch.
   */
  static get cyan() {
    return {
      50: new Color(0xffe0f7fa),
      100: new Color(0xffb2ebf2),
      200: new Color(0xff80deea),
      300: new Color(0xff4dd0e1),
      400: new Color(0xff26c6da),
      500: new Color(0xff00bcd4),
      600: new Color(0xff00acc1),
      700: new Color(0xff0097a7),
      800: new Color(0xff00838f),
      900: new Color(0xff006064),
    };
  }

  static get cyanAccent() {
    return {
      100: new Color(0xff84ffff),
      200: new Color(0xff18ffff),
      400: new Color(0xff00e5ff),
      700: new Color(0xff00b8d4),
    };
  }

  /**
   * The deep orange primary color and swatch.
   */
  static get deepOrange() {
    return {
      50: new Color(0xfffbe9e7),
      100: new Color(0xffffccbc),
      200: new Color(0xffffab91),
      300: new Color(0xffff8a65),
      400: new Color(0xffff7043),
      500: new Color(0xffff5722),
      600: new Color(0xfff4511e),
      700: new Color(0xffe64a19),
      800: new Color(0xffd84315),
      900: new Color(0xffbf360c),
    };
  }

  static get deepOrangeAccent() {
    return {
      100: new Color(0xffff9e80),
      200: new Color(0xffff6e40),
      400: new Color(0xffff3d00),
      700: new Color(0xffdd2c00),
    };
  }

  /**
   * The deep purple primary color and swatch.
   */
  static get deepPurple() {
    return {
      50: new Color(0xffede7f6),
      100: new Color(0xffd1c4e9),
      200: new Color(0xffb39ddb),
      300: new Color(0xff9575cd),
      400: new Color(0xff7e57c2),
      500: new Color(0xff673ab7),
      600: new Color(0xff5e35b1),
      700: new Color(0xff512da8),
      800: new Color(0xff4527a0),
      900: new Color(0xff311b92),
    };
  }

  static get deepPurpleAccent() {
    return {
      100: new Color(0xffb388ff),
      200: new Color(0xff7c4dff),
      400: new Color(0xff651fff),
      700: new Color(0xff6200ea),
    };
  }

  /**
   * The green primary color and swatch.
   */
  static get green() {
    return {
      50: new Color(0xffe8f5e9),
      100: new Color(0xffc8e6c9),
      200: new Color(0xffa5d6a7),
      300: new Color(0xff81c784),
      400: new Color(0xff66bb6a),
      500: new Color(0xff4caf50),
      600: new Color(0xff43a047),
      700: new Color(0xff388e3c),
      800: new Color(0xff2e7d32),
      900: new Color(0xff1b5e20),
    };
  }

  static get greenAccent() {
    return {
      100: new Color(0xffb9f6ca),
      200: new Color(0xff69f0ae),
      400: new Color(0xff00e676),
      700: new Color(0xff00c853),
    };
  }

  /**
   * The grey primary color and swatch.
   */
  static get grey() {
    return {
      50: new Color(0xfffafafa),
      100: new Color(0xfff5f5f5),
      200: new Color(0xffeeeeee),
      300: new Color(0xffe0e0e0),
      350: new Color(0xffd6d6d6), // only for raised button while pressed in light theme
      400: new Color(0xffbdbdbd),
      500: new Color(0xff9e9e9e),
      600: new Color(0xff757575),
      700: new Color(0xff616161),
      800: new Color(0xff424242),
      850: new Color(0xff303030), // only for background color in dark theme
      900: new Color(0xff212121),
    };
  }

  /**
   * The indigo primary color and swatch.
   */
  static get indigo() {
    return {
      50: new Color(0xffe8eaf6),
      100: new Color(0xffc5cae9),
      200: new Color(0xff9fa8da),
      300: new Color(0xff7986cb),
      400: new Color(0xff5c6bc0),
      500: new Color(0xff3f51b5),
      600: new Color(0xff3949ab),
      700: new Color(0xff303f9f),
      800: new Color(0xff283593),
      900: new Color(0xff1a237e),
    };
  }

  static get indigoAccent() {
    return {
      100: new Color(0xff8c9eff),
      200: new Color(0xff536dfe),
      400: new Color(0xff3d5afe),
      700: new Color(0xff304ffe),
    };
  }

  /**
   * The light blue primary color and swatch.
   */
  static get lightBlue() {
    return {
      50: new Color(0xffe1f5fe),
      100: new Color(0xffb3e5fc),
      200: new Color(0xff81d4fa),
      300: new Color(0xff4fc3f7),
      400: new Color(0xff29b6f6),
      500: new Color(0xff03a9f4),
      600: new Color(0xff039be5),
      700: new Color(0xff0288d1),
      800: new Color(0xff0277bd),
      900: new Color(0xff01579b),
    };
  }

  static get lightBlueAccent() {
    return {
      100: new Color(0xff80d8ff),
      200: new Color(0xff40c4ff),
      400: new Color(0xff00b0ff),
      700: new Color(0xff0091ea),
    };
  }

  /**
   * The light green primary color and swatch.
   */
  static get lightGreen() {
    return {
      50: new Color(0xfff1f8e9),
      100: new Color(0xffdcedc8),
      200: new Color(0xffc5e1a5),
      300: new Color(0xffaed581),
      400: new Color(0xff9ccc65),
      500: new Color(0xff8bc34a),
      600: new Color(0xff7cb342),
      700: new Color(0xff689f38),
      800: new Color(0xff558b2f),
      900: new Color(0xff33691e),
    };
  }

  static get lightGreenAccent() {
    return {
      100: new Color(0xffccff90),
      200: new Color(0xffb2ff59),
      400: new Color(0xff76ff03),
      700: new Color(0xff64dd17),
    };
  }

  /**
   * The lime primary color and swatch.
   */
  static get lime() {
    return {
      50: new Color(0xfff9fbe7),
      100: new Color(0xfff0f4c3),
      200: new Color(0xffe6ee9c),
      300: new Color(0xffdce775),
      400: new Color(0xffd4e157),
      500: new Color(0xffcddc39),
      600: new Color(0xffc0ca33),
      700: new Color(0xffafb42b),
      800: new Color(0xff9e9d24),
      900: new Color(0xff827717),
    };
  }

  static get limeAccent() {
    return {
      100: new Color(0xfff4ff81),
      200: new Color(0xffeeff41),
      400: new Color(0xffc6ff00),
      700: new Color(0xffaeea00),
    };
  }

  /**
   * The orange primary color and swatch.
   */
  static get orange() {
    return {
      50: new Color(0xfffff3e0),
      100: new Color(0xffffe0b2),
      200: new Color(0xffffcc80),
      300: new Color(0xffffb74d),
      400: new Color(0xffffa726),
      500: new Color(0xffff9800),
      600: new Color(0xfffb8c00),
      700: new Color(0xfff57c00),
      800: new Color(0xffef6c00),
      900: new Color(0xffe65100),
    };
  }

  static get orangeAccent() {
    return {
      100: new Color(0xffffd180),
      200: new Color(0xffffab40),
      400: new Color(0xffff9100),
      700: new Color(0xffff6d00),
    };
  }

  /**
   * The pink primary color and swatch.
   */
  static get pink() {
    return {
      50: new Color(0xfffce4ec),
      100: new Color(0xfff8bbd0),
      200: new Color(0xfff48fb1),
      300: new Color(0xfff06292),
      400: new Color(0xffec407a),
      500: new Color(0xffe91e63),
      600: new Color(0xffd81b60),
      700: new Color(0xffc2185b),
      800: new Color(0xffad1457),
      900: new Color(0xff880e4f),
    };
  }

  static get pinkAccent() {
    return {
      100: new Color(0xffff80ab),
      200: new Color(0xffff4081),
      400: new Color(0xfff50057),
      700: new Color(0xffc51162),
    };
  }

  /**
   * The purple primary color and swatch.
   */
  static get purple() {
    return {
      50: new Color(0xfff3e5f5),
      100: new Color(0xffe1bee7),
      200: new Color(0xffce93d8),
      300: new Color(0xffba68c8),
      400: new Color(0xffab47bc),
      500: new Color(0xff9c27b0),
      600: new Color(0xff8e24aa),
      700: new Color(0xff7b1fa2),
      800: new Color(0xff6a1b9a),
      900: new Color(0xff4a148c),
    };
  }

  static get purpleAccent() {
    return {
      100: new Color(0xffea80fc),
      200: new Color(0xffe040fb),
      400: new Color(0xffd500f9),
      700: new Color(0xffaa00ff),
    };
  }

  /**
   * The red primary color and swatch.
   */
  static get red() {
    return {
      50: new Color(0xffffebee),
      100: new Color(0xffffcdd2),
      200: new Color(0xffef9a9a),
      300: new Color(0xffe57373),
      400: new Color(0xffef5350),
      500: new Color(0xfff44336),
      600: new Color(0xffe53935),
      700: new Color(0xffd32f2f),
      800: new Color(0xffc62828),
      900: new Color(0xffb71c1c),
    };
  }

  static get redAccent() {
    return {
      100: new Color(0xffff8a80),
      200: new Color(0xffff5252),
      400: new Color(0xffff1744),
      700: new Color(0xffd50000),
    };
  }

  /**
   * The teal primary color and swatch.
   */
  static get teal() {
    return {
      50: new Color(0xffe0f2f1),
      100: new Color(0xffb2dfdb),
      200: new Color(0xff80cbc4),
      300: new Color(0xff4db6ac),
      400: new Color(0xff26a69a),
      500: new Color(0xff009688),
      600: new Color(0xff00897b),
      700: new Color(0xff00796b),
      800: new Color(0xff00695c),
      900: new Color(0xff004d40),
    };
  }

  static get tealAccent() {
    return {
      100: new Color(0xffa7ffeb),
      200: new Color(0xff64ffda),
      400: new Color(0xff1de9b6),
      700: new Color(0xff00bfa5),
    };
  }

  /**
   * Completely invisible.
   */
  static transparent = new Color(0x00000000);

  /**
   * Completely opaque white.
   */
  static white = new Color(0xffffffff);
  static white10 = Colors.white.withOpacity(0.1);
  static white12 = Colors.white.withOpacity(0.12);
  static white24 = Colors.white.withOpacity(0.24);
  static white30 = Colors.white.withOpacity(0.3);
  static white38 = Colors.white.withOpacity(0.38);
  static white54 = Colors.white.withOpacity(0.4);
  static white60 = Colors.white.withOpacity(0.6);
  static white70 = Colors.white.withOpacity(0.7);

  /**
   * The yellow primary color and swatch.
   */
  static get yellow() {
    return {
      50: new Color(0xfffffde7),
      100: new Color(0xfffff9c4),
      200: new Color(0xfffff59d),
      300: new Color(0xfffff176),
      400: new Color(0xffffee58),
      500: new Color(0xffffeb3b),
      600: new Color(0xfffdd835),
      700: new Color(0xfffbc02d),
      800: new Color(0xfff9a825),
      900: new Color(0xfff57f17),
    };
  }

  static get yellowAccent() {
    return {
      100: new Color(0xffffff8d),
      200: new Color(0xffffff00),
      400: new Color(0xffffea00),
      700: new Color(0xffffd600),
    };
  }

  static accents = [
    Colors.redAccent,
    Colors.pinkAccent,
    Colors.purpleAccent,
    Colors.deepPurpleAccent,
    Colors.indigoAccent,
    Colors.blueAccent,
    Colors.lightBlueAccent,
    Colors.cyanAccent,
    Colors.tealAccent,
    Colors.greenAccent,
    Colors.lightGreenAccent,
    Colors.limeAccent,
    Colors.yellowAccent,
    Colors.amberAccent,
    Colors.orangeAccent,
    Colors.deepOrangeAccent,
  ] as const;

  static primaries = [
    Colors.red,
    Colors.pink,
    Colors.purple,
    Colors.deepPurple,
    Colors.indigo,
    Colors.blue,
    Colors.lightBlue,
    Colors.cyan,
    Colors.teal,
    Colors.green,
    Colors.lightGreen,
    Colors.lime,
    Colors.yellow,
    Colors.amber,
    Colors.orange,
    Colors.deepOrange,
    Colors.brown,
    // The grey swatch is intentionally omitted because when picking a color
    // randomly from this list to colorize an application, picking grey suddenly
    // makes the app look disabled.
    Colors.blueGrey,
  ] as const;
}

export default Colors;
