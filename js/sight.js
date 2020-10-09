const { tsThisType } = require("jscodeshift");

class SVGElement {
  constructor(type) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createAttributeNS(namespace, type);
    return this;
  }
}
