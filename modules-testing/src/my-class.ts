export class MyClass {
  hello() {
    let type: string;
    try {
      const dir = __dirname;
      type = 'CommonJS';
    } catch (e) {
      type = 'ESModule';
    }
    console.log('Hello!', type);
  }
}
