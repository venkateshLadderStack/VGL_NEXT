/**
 *
 * @author  Rishabh Aggarwal <rishabhaggarwal2003@gmail.com>
 */

//
let initialized = false;
let debug = false;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn(
      "Pixel not initialized before using call ReactSnapchatPixel.init with required params"
    );
  }
  return initialized;
};

//
const log = (...args) => {
  console.info(...["[react-snapchat-pixel]"].concat(args));
};

//
const defaultOptions = {
  debug: false,
};

//
export default {
  init(pixelId, advancedMatching = {}, options = defaultOptions) {
    /* eslint-disable */
    (function (e, t, n) {
      if (e.snaptr) return;
      var a = (e.snaptr = function () {
        a.handleRequest
          ? a.handleRequest.apply(a, arguments)
          : a.queue.push(arguments);
      });
      a.queue = [];
      var s = "script";
      var r = t.createElement(s);
      r.async = !0;
      r.src = n;
      var u = t.getElementsByTagName(s)[0];
      u.parentNode.insertBefore(r, u);
    })(window, document, "https://sc-static.net/scevent.min.js");
    /* eslint-enable */

    if (!pixelId) {
      console.warn("Please insert pixel id for initializing");
    } else {
      snaptr("init", pixelId, advancedMatching); // eslint-disable-line no-undef

      initialized = true;
      ({ debug } = options);
    }
  },

  pageView() {
    if (!verifyInit()) {
      return;
    }

    snaptr("track", "PAGE_VIEW"); // eslint-disable-line no-undef

    if (debug) {
      log("called snaptr('track', 'PageView');");
    }
  },

  track(title, data) {
    if (!verifyInit()) {
      return;
    }

    snaptr("track", title, data); // eslint-disable-line no-undef

    if (debug) {
      log(`called snaptr('track', '${title}');`);

      if (data) {
        log("with data", data);
      }
    }
  },

  snaptr(...args) {
    if (!verifyInit()) {
      return;
    }

    snaptr(...args); // eslint-disable-line no-undef

    if (debug) {
      log(`called snaptr('${args.slice(0, 2).join("', '")}')`);

      if (args[2]) {
        log("with data", args[2]);
      }
    }
  },
};
