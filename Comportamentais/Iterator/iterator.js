const playlist = {
  musicas: ["0", "1", "2"],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.musicas[i++],
        done: i > this.musicas.length
      })
    };
  }
};

for (const musica of playlist) {
  console.log(`${musica}`);
}