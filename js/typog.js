//Class
class typog {
    //Get arguments
    constructor(id, speed) {
      this.id = id;
      this.speed = speed;
    }
    //Write a string in the current div
    write(val, offset = 0) {
      return new Promise((resolve, reject) => {
        if (offset < val.length) {
          document.getElementById(this.id).innerHTML += val.charAt(offset);
          offset++;
          setTimeout(() => {
            this.write(val, offset);
          }, this.speed);
        }
        setTimeout(() => {
          resolve(val);
          clearTimeout(this);
        }, this.speed * val.length);
      });
    }
    //Delete string in the current div
    del(val, offset = 0) {
      return new Promise((resolve, reject) => {
        val = document.getElementById(this.id).textContent;
        if (offset < val.length) {
          val = val.substring(0, val.length - 1);
          document.getElementById(this.id).innerHTML = val;
          setTimeout(() => {
            this.del(val, offset);
          }, this.speed);
        }
        setTimeout(() => {
          resolve(val);
          clearTimeout(this);
        }, this.speed * val.length);
      });
    }
    //Infinite string writing/deleting
    infinite(val, to = 1500, i = 0) {
        let arr;
        if (Array.isArray(val)) {
            if (i >= val.length) {i = 0;}
            arr = val;
            val = val[i];
        }
        this.write(val).then(() => {
            setTimeout(() => {
                this.del().then(() => {
                    setTimeout(() => {
                        if(arr != undefined){val = arr}
                        this.infinite(val, to, i + 1);
                    }, to);
                });
            }, to);
        });
    }
}
