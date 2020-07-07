/**
 * BirdWhisperer
 * by 2gua
 */
var BirdWhisperer = /** @class */ (function () {
  function BirdWhisperer(message) {
    this.chirping = message;
  }
  BirdWhisperer.prototype.chirp = function () {
    return "Ah~ oh~ " + this.chirping;
  };
  return BirdWhisperer;
})();
var birdWhisperer = new BirdWhisperer("moddz coo-coo-coo...");
document.body.innerHTML = birdWhisperer.chirp();
//# sourceMappingURL=tstest.js.map
