class HelloWorld {
  constructor(public message: string) {}

  say(): string {
    return this.message;
  }
}

var helloWorld = new HelloWorld("Hello World with TypeScript!");

document.body.innerHTML = helloWorld.say();
