class ${
  constructor(selector){
    if(selector.startsWith('.')){
      this.elements = [...document.getElementsByClassName(selector.slice(1))];
    }
    else if(selector.startsWith('#')){
      this.elements = [document.getElementById(selector.slice(1))];
    }
    else {
      this.elements = [...document.getElementsByTagName(selector)];
    }
  }
  hide(){
    this.elements.forEach( elem => elem.style.display = 'none');
    return this;
  }
  show(){
    this.elements.forEach( elem => elem.style.display = 'inherit');
    return this;
  }
  addClassName(className){
    this.elements.forEach( elem => elem.classList.add(className));
    return this;
  }
  removeClassName(className){
    this.elements.forEach( elem => elem.classList.remove(className));
    return this;
  }
  text(txt){
    this.elements.forEach( elem => elem.innerText = txt);
    return this;
  }
  addChild(tagName){
    this.elements.forEach( elem => {
      elem.appendChild(document.createElement(tagName))
    });
    return this;
  }
}

console.log('here');
