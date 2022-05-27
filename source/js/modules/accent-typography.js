export default class AccentTypography {
  constructor(
      selector,
      timer,
      classForActivate,
      property,
      delay,
      timeOffsetForLetter,
      isOneWord
  ) {
    this._selector = selector;
    this._nodeElement = document.querySelector(this._selector);
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._timeOffsetForLetter = timeOffsetForLetter;
    this._delay = delay;
    this._isOneWord = isOneWord;
    this.prePareText();
  }

  random(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random / min) * min;
  }

  createElement(letter, wordLength, numberWord) {
    const span = document.createElement(`span`);
    const delay = this.random(this._timeOffsetForLetter, wordLength * this._timeOffsetForLetter);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${numberWord * (wordLength * this._timeOffsetForLetter) + delay + this._delay}ms`;
    return span;
  }

  prePareText() {
    if (!this._nodeElement) {
      return;
    }
    let text;
    if (!this._isOneWord) {
      text = this._nodeElement.textContent.trim().split(` `).filter((letter)=>letter !== ``);
    } else {
      text = [this._nodeElement.textContent];
    }

    const content = text.reduce((fragmentParent, word, numberWord) => {
      const wordElement = Array.from(word).reduce((fragment, letter, index, array) => {
        fragment.appendChild(this.createElement(letter, array.length, numberWord));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._nodeElement.innerHTML = ``;
    this._nodeElement.appendChild(content);
  }

  runAnimation() {
    if (!this._nodeElement) {
      return;
    }
    this._nodeElement.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._nodeElement.classList.remove(this._classForActivate);
  }
}

