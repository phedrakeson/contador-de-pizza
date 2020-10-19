export default class SliceTotal {
  constructor() {
    this.sliceTotal = 0;
  }
  sliceCountPlus() {
    return this.sliceTotal++;
  }
  sliceCountMinus() {
    return this.sliceTotal--;
  }
  sliceCountRender() {
    let html = document.getElementById('render');
    html.innerHTML = `${this.sliceTotal}`
  }
}
