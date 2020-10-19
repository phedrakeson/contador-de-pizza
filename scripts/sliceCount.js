export default class SliceTotal {
  constructor() {
    this.sliceTotal = 0;
  }
  sliceCountPlus() {
    this.sliceTotal++
  }
  sliceCountMinus() {
    this.sliceTotal--
  }
  sliceCountRender() {
    let html = document.getElementById('render');
    html.innerHTML = `${this.sliceTotal}`
  }
}
