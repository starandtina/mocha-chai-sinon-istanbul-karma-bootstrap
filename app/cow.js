// cow.js
(function (exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function (target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target + "!";
    },
    greetsToConsole: function (target) {
      if (!target)
        return console.error("missing target");
      console.log(this.name + " greets " + target);
    },
    // async code
    lateGreets: function (target, cb) {
      setTimeout(function (self) {
        try {
          cb(null, self.greets(target));
        } catch (err) {
          cb(err);
        }
      }, 1000, this);
    }
  };
})(this);