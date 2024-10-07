
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export { default as Button } from './components/Button/Button';
// export  {default as ThemeProvider} from './context/ThemeContext'
export {default as Slider} from "./components/Slider/Slider"