import { Readable, Transform, Writable } from "node:stream";
// Docs do Node Stream: https://nodejs.org/api/stream.html
// Definição pelo ChatGPT:
// "Um stream no Node.js é uma interface abstrata usada para lidar com dados que fluem em uma sequência contínua e potencialmente infinita de bytes. Streams oferecem uma maneira de trabalhar com dados pedaço por pedaço, o que é especialmente útil para conjuntos de dados grandes ou para processar dados em tempo real."

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
    }, 500);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, enconding, callback) {
    const transformed = Math.pow(Number(chunk.toString()), -1);

    callback(null, Buffer.from(transformed.toString()));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, enconding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
