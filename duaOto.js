let Oto = function () {
    this.element = document.getElementById("oto");
    self = this;
    let speedx = Number(1);
    let speedy = Number(1);
    this.chonOto = function (anh) {
        self.element.src = anh;
    };
    let x = self.element.style;
    let khung = 300;
    this.diThang = function () {
        x.left = parseInt(x.left) + speedx + 'px';
        //console.log(x.left);
        this.chonOto("Capture.PNG");
    };
    this.diLui = function () {
        x.left = parseInt(x.left) - speedx + 'px';
        // this.chonOto("anh2.png");
        // console.log(this.chonOto());
    };
    this.diLen = function () {
        x.top = parseInt(x.top) - speedy + 'px';
        // this.chonOto(anh3.PNG);
    };

    this.diXuong = function () {
        x.top = parseInt(x.top) + speedy + 'px';
        this.chonOto("anh2.PNG");
        // this.size();
    };
    this.size = function () {
        this.element.width = 50 + 'px';
        this.element.height = 90 + 'px';
    };

    this.check = function () {
        if (parseInt(x.left) < khung && parseInt(x.top) <= 0) {
            self.diThang();
        } else if (parseInt(x.left) >= khung && parseInt(x.top) < khung) {
            self.diXuong();
        } else if (parseInt(x.top) >= khung && parseInt(x.left) > 0) {
            self.diLui();
        } else if (parseInt(x.left) <= 0 && parseInt(x.top) <= khung) {
            self.diLen();
        }

    };

    setInterval(function () {
        self.check();
        console.log(x.left+'/'+x.top)

    }, 2);
};
let oto = new Oto();
console.log(window.innerHeight);

