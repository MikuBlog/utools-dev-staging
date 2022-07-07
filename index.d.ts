module "*.css" {
  const css: {[key: string]: string};
  export default css;
}

module '*.scss' {
  const scss: {[key: string]: string};
  export default scss;
}

module '*.less' {
  const less: {[key: string]: string};
  export default less;
}
