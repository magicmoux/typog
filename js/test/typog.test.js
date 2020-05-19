class typog {
    constructor(id, speed) {
      this.id = id, this.speed = speed;
      window.addEventListener("blur", () => {window.stop();})
    }
    //Write a string
    write(val, offset = 0) {
      return new Promise((resolve, reject) => {
        if (offset < val.length) {
          document.getElementById(this.id).innerHTML += val.charAt(offset);
          offset++;
          setTimeout(() => {this.write(val, offset);}, this.speed);
        }
        setTimeout(() => {
          resolve(val);
        }, this.speed * val.length);
      });
    }
    //Delete textcontent of defined element
    del(stopOffset, val, offset = 0) {
      return new Promise((resolve, reject) => {
        val = document.getElementById(this.id).textContent;
        if(stopOffset <= 0){return;}
        if(!stopOffset) stopOffset = val.length;
        if (offset < stopOffset) {
          stopOffset -= 1;
          document.getElementById(this.id).innerHTML = val.substring(0, val.length - 1);
          setTimeout(() => {
            this.del(stopOffset, val, offset);
          }, this.speed);
        }
        setTimeout(() => {
          resolve(val);
        }, 100);
      });
    }
    //Ininite writing
    infinite(val, to = 1500, i = 0) {
        let arr;
        if (Array.isArray(val)) {
            if (i >= val.length) {i = 0;}
            arr = val;
            val = val[i];
        }
        this.write(val).then((key) => {
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
