export default class Env {
  static userAgent = navigator.userAgent;

  static isMobileDevice(): boolean {
    return (Env.isIphone() || Env.isIpod() || Env.isIpad() || Env.isAndroid() || Env.isWindowsPhone());
  }

  static isIphone(): boolean {
    return (Env.userAgent.indexOf('iPhone') !== -1 && !Env.isIpad()) || Env.isIpod();
  }

  static isIE(): boolean {
    return (/msie/.test(Env.userAgent.toLowerCase()) || /trident/.test(Env.userAgent.toLowerCase()));
  }

  static isChromeCast(): boolean {
    return (/CrKey/.test(Env.userAgent));
  }

  static isIE7(): boolean {
    return (/msie 7/.test(Env.userAgent.toLowerCase()));
  }

  static isIE8(): boolean {
    return (document.documentMode === 8);
  }

  static isIE9(): boolean {
    return (document.documentMode === 9);
  }

  static isIE11(): boolean {
    return (/trident\/7.0/.test(Env.userAgent.toLowerCase()));
  }

  static isEdge(): boolean {
    return (/edge/.test(Env.userAgent.toLowerCase()));
  }

  static isDesktopSafari(): boolean {
    return (Env.isSafari() && !Env.isMobileDevice());
  }

  static isSafari(): boolean {
    return (/safari/).test(Env.userAgent.toLowerCase()) && !Env.isChrome() && !Env.isEdge();
  }

  static isIE9Comp(): boolean {
    return (/msie 7/.test(Env.userAgent.toLowerCase()) && /trident\/5/.test(Env.userAgent.toLowerCase()));
  }

  static isIE10Comp(): boolean {
    return (/msie 7/.test(Env.userAgent.toLowerCase()) && /trident\/6/.test(Env.userAgent.toLowerCase()));
  }

  static isIphone4(): boolean {
    return (Env.isIphone() && (window.devicePixelRatio && window.devicePixelRatio >= 2 ));
  }

  static isIpod(): boolean {
    return (Env.userAgent.indexOf('iPod') !== -1 );
  }

  static isIpad(): boolean {
    return (Env.userAgent.indexOf('iPad') !== -1);
  }

  static isIpad2(): boolean {
    return (Env.isIpad() && window.devicePixelRatio && window.devicePixelRatio < 2);
  }

  static isIpad3(): boolean {
    return (/OS 3_/.test(Env.userAgent) && Env.isIpad());
  }

  static isAndroid44(): boolean {
    return (Env.userAgent.indexOf('Android 4.4') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid43(): boolean {
    return (Env.userAgent.indexOf('Android 4.3') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid42(): boolean {
    return (Env.userAgent.indexOf('Android 4.2') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid41(): boolean {
    return (Env.userAgent.indexOf('Android 4.1') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid40(): boolean {
    return (Env.userAgent.indexOf('Android 4.0') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid2(): boolean {
    return (Env.userAgent.indexOf('Android 2.') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid(): boolean {
    return (Env.userAgent.indexOf('Android') !== -1 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isAndroid4andUp(): boolean {
    let androidUAStringRegEx = /Android (\d+)\.\d+\.\d+/;
    let res = androidUAStringRegEx.exec(Env.userAgent);
    if (res === null) {
      return false;
    }
    return (res[1] > 4 && Env.userAgent.indexOf('Windows') === -1);
  }

  static isSamsungStockBrowser(): boolean {
    return (Env.userAgent.indexOf('SamsungBrowser') !== -1);
  }

  static isFirefox(): boolean {
    return (Env.userAgent.indexOf('Firefox') !== -1 );
  }

  static isChrome(): boolean {
    return (Env.userAgent.indexOf('Chrome') !== -1 && !Env.isEdge());
  }

  static isAndroidNativeBrowser(): boolean {
    return (Env.isAndroid() && !Env.isFirefox() && !Env.isChrome());
  }

  static isAndroidChromeNativeBrowser(): boolean {
    return (Env.isAndroid() && Env.isChrome());
  }

  static isOldAndroidChromeNativeBrowser(): boolean {
    let regExpResult = Env.userAgent.match(/Chrome\/([0-9][0-9])/);
    if (regExpResult instanceof Array && regExpResult.length > 1) {
      return Env.isAndroidChromeNativeBrowser() && parseInt(regExpResult[1]) < 30;
    }
    return false;
  }

  static isMobileChrome(): boolean {
    return (Env.isAndroid4andUp() && Env.userAgent.indexOf('Chrome') !== -1);
  }

  static isWindowsPhone(): boolean {
    return (Env.userAgent.indexOf('Windows Phone') !== -1);
  }

  static isIOS(): boolean {
    return (Env.isIphone() || Env.isIpod() || Env.isIpad());
  }

  static isIOS3(): boolean {
    return (/OS 3_/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS4(): boolean {
    return (/OS 4_/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS5(): boolean {
    return (/OS 5_/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS6(): boolean {
    return (/OS 6_/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS7(): boolean {
    return (/OS 7_/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS71(): boolean {
    return (/OS 7_1/.test(Env.userAgent) && Env.isIOS());
  }

  static isIOS8(): boolean {
    // Known Limitation - It will return false for iOS8 Simulator
    return (/OS 8_/.test(Env.userAgent) || /Version\/8/.test(Env.userAgent)) && Env.isIOS();
  }

  static isIOS9(): boolean {
    // Known Limitation - It will return false for iOS9 Simulator
    return (/OS 9_/.test(Env.userAgent) || /Version\/9/.test(Env.userAgent)) && Env.isIOS();
  }

  static isIOS10(): boolean {
    // Known Limitation - It will return false for iOS10 Simulator
    return (/OS 10_/.test(Env.userAgent) || /Version\/10/.test(Env.userAgent)) && Env.isIOS();
  }

  static isIOSBelow9(): boolean {
    return (Env.isIOS() && (Env.isIOS3() || Env.isIOS4() || Env.isIOS5() || Env.isIOS6() || Env.isIOS7() || Env.isIOS8()));
  }

  static isIOSBelow10(): boolean {
    return (Env.isIOSBelow9() || Env.isIOS9());
  }

  static isIOSAbove7(): boolean {
    return (Env.isIOS8() || Env.isIOS9() || Env.isIOS10());
  }

  static isSilk(): boolean {
    return (/\bSilk\b/.test(Env.userAgent));
  }

  // Does the client has native touch bindings?
  static hasNativeTouchBindings(): boolean {
    return (Env.isAndroid41() || Env.isAndroid42() || (Env.isAndroid() && Env.isFirefox()));
  }

  // Detect small mobile device (smartphones)
  static isDeviceLessThan480P(): boolean {
    return matchMedia('only screen and (max-device-width: 480px)').matches;
  }

  static hasMouseEvents(): boolean {
    return !Env.isMobileDevice();
  }

  static isTouchDevice(): boolean {
    return ('ontouchstart' in window);
  }

  static isMacintosh(): boolean {
    return (navigator.platform.indexOf('Mac') > -1);
  }

  static isWindows(): boolean {
    return (navigator.platform.indexOf('Win') > -1);
  }

  static getUserOS(): string {
    let os = "";
    let clientStrings = [
      {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
      {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
      {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
      {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
      {s: 'Android', r: /Android/},
      {s: 'Linux', r: /(Linux|X11)/},
      {s: 'iOS', r: /(iPhone|iPad|iPod)/},
      {s: 'Mac OS X', r: /Mac OS X/},
      {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
    ];
    for (let id in clientStrings) {
      let cs = clientStrings[id];
      if (cs.r.test(Env.userAgent)) {
        os = cs.s;
        break;
      }
    }
    return os;
  }
}
