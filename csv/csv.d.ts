declare module 'csv-stringify' {

  interface Options {
    columns?: string[];
    delimiter?: string;
    eof?: boolean;
    escape?: any;
    header?: boolean;
    quote?: any;
    quoted?: boolean;
    quotedEmpty?: boolean;
    quotedString?: boolean;
    rowDelimiter?: string;
  }

  // make this module callable
  function stringify(data: any, options: Options, callback: (err: any, output: string) => void): void;
  export = stringify;
}
