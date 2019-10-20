export class Module_Entry {
  Label: String;
  Icon: ImageBitmap;

  constructor() {
    this.Label = '';
    this.Icon = null;
  }
}

export class Module {
  Entries: Array<Module_Entry>;

  constructor() {
    this.Entries = [];
  }

  
}
