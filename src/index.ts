export function log(str: string) {
  console.log(str);
}

log('Hello world!');

class A {
  greeting = 'Hello vili!';
}

log(new A().greeting);
