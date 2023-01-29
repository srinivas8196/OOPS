class food {
    constructor(season, color) {
      this.s = season;
      this.c = color;
    }
    greet = function () {
      console.log("hello, this is", this.s);
    };
  }
  
  // food.prototype.greet() {
  //     console.log("hello");
  // }
  
  var indian = new food("summer", "yellow");
  // console.log(indian.s);
  // console.log(indian);
  indian.greet();
  