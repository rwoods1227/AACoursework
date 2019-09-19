export class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(str){
    if (str){
      this.arr.forEach(element => {
        element.innerHTML = str; 
      });
    }
    else{
      return this.arr[0].innerHTML;
    }
  }
  empty(){
    this.arr.forEach(element => {
      element.innerHTML = "";
    });
  }

  append(ele){
    if (ele instanceof DOMNodeCollection){
      ele.arr.forEach(element => {
        this.append(element);
      });
    } else if (ele instanceof HTMLElement){
      this.arr.forEach(element => {
        element.innerHTML += ele.outerHTML;
      });
    } else if (typeof ele === "string"){
      this.arr.forEach(element => {
        element.innerHTML += ele;
      });
    }
  }

  attr(attrName, value) {
    if (value) {
      this.arr.forEach(element => {
        element.setAttribute(attrName, value);
      });
    } else {
     return this.arr[0].getAttribute(attrName);
    }
  }

  addClass(className) {
    this.arr.forEach(element => {
      element.classList.add(className);
    });
  }

  removeClass(className) {
    this.arr.forEach(element => {
      element.classList.remove(className);
    });
  }

  children() {
    let array = [];
    this.arr.forEach(element => {
      const nodeList = element.children;
      array = array.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(array);
  }

  parent() {
    let array = [];
    this.arr.forEach(element => {
      const nodeList = [element.parentNode]; 
     array = array.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(array);
  }

  find(selector){
    let array = [];
    this.arr.forEach(element => {
      const nodeList = element.querySelectorAll(selector);
      array = array.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(array);
  }

  remove(selector){
    if(selector){
      this.find(selector).empty()
    }
    else {
      this.empty();
    }
  }

  on(event, callback){
    this.arr.forEach(element => {
      element.addEventListener(event, callback)
      element.callback = callback;
    });
  }

  off(event){
    this.arr.forEach(element => {
      element.removeEventListener(event, element.callback)
    });
  }
}