import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const Buf = Buffer.from(i.toString());

        this.push(Buf);
      }
    }, 250);
  }
}

fetch("http://localhost:3334", {
  method: "Post",
  body: new OneToHundredStream(),
  duplex: "half",
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });
