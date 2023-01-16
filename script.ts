class Styles {
  public addCustomStyle(
    styleIdentifier: string,
    selector: string,
    attributes: any,
    mediaQuery?: string
  ): void {
    const styleElement = <HTMLStyleElement>document.createElement("style");
    document.body.appendChild(styleElement);
    styleElement.setAttribute("id", styleIdentifier);

    const selectorExsistInDocument = document.querySelectorAll(selector).length
      ? true
      : false;

    if (mediaQuery) {
      if (selectorExsistInDocument && selector && attributes) {
        styleElement.innerHTML =
          "@media (" +
          mediaQuery +
          ") " +
          " { " +
          selector +
          " " +
          attributes +
          " } ";
      }
    } else {
      if (selectorExsistInDocument && selector && attributes) {
        styleElement.innerHTML = selector + " " + attributes;
      }
    }
  }
}

const instance = new Styles();
instance.addCustomStyle(
  "myStyle",
  ".someClassName",
  "{background-color: yellow }",
  "max-width: 909px"
);
