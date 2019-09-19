import { DOMNodeCollection } from './dom_node_collection'

const functions = [];
window.$l = function (arg) {
  let collection;
  if (arg instanceof HTMLElement) {
    const arr = [arg];
    collection = new DOMNodeCollection(arr);
    return collection
  } else if (typeof arg === "string") {
    const nodeList = document.querySelectorAll(arg);
    const arr = Array.from(nodeList);
    collection = new DOMNodeCollection(arr);
    return collection
  } else if (arg instanceof Function) {
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
      ) { 
        arg();
      } else {
      functions.push(arg);
      document.addEventListener("DOMContentLoaded", () => {
        while (functions.length > 0) {
          let fn = functions.shift();
          fn();
        }
      });
    }
  }
}

window.$l.extend = function(arg, ...args) {
  args.forEach(obj => {
    Object.keys(obj).forEach(key => {
      arg[key] = obj[key];
    })
  })
  return arg;
}

window.$l.ajax = function(options){
  const defaults = {
    method: 'GET',
    url: document.URL,
    data: "",
    success: function (){},
    error: function(){} }
  const merged = $l.extend(defaults, options);
  
  const xhr = new XMLHttpRequest();
  xhr.open(merged.method, merged.url)
  xhr.responseType = merged.contentType;

  xhr.onload = function () {
    console.log(xhr.status) // for status info
    console.log(xhr.responseType) //the type of data that was returned
    console.log(xhr.response) //the actual response. For JSON api calls, this will be a JSON string
    if (xhr.status === 200) {
      merged.success(xhr.response);
    } else {
      merged.error();
    }
  }
  const optionalData = merged.data;
  xhr.send(optionalData);
}

$l(() => {
  const $ul = $l('ul');
  $ul.on("click", () => alert('hi'));


  $l.ajax({
    type: 'GET',
    contentType: "json",
    url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
    success(data) {
      console.log("We have your weather!")
      console.log(data);
    },
    error() {
      console.error("An error occurred.");
    },
  });
})