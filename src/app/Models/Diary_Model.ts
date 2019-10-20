export enum Mood {
    Low = 1,
    Medium,
    High
}


export class Diary_Entry {

  Date: String;
  HWPL_Value: {H: Number, W: Number, P: Number, L: Number};
  HWPL_Text: String;
  Mood: Mood;

  constructor(){
    this.Date = "";
    this.HWPL_Value = {
      H:75,
      W:20,
      P:40,
      L:95
    };
    this.HWPL_Text="";
    this.Mood = 1;
  }

  set_arguments(date, h, w, p, l, text, mood,a ){
    this.Date = date;
    this.HWPL_Value = {
      H:h,
      W:w,
      P:p,
      L:l
    };
    this.HWPL_Text=text;
    this.Mood = mood;
  }


};

export class Diary {
  Entries: Array<Diary_Entry>;

  constructor(){
    this.Entries = []
  }

}
