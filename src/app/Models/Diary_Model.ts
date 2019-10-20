export enum Mood {
    Low = 1,
    Medium,
    High
}
  
export class Diary_Entry {
Date: Date;
HWPL_Value: {H: Number, W: Number, P: Number, L: Number};
HWPL_Text: String;
Mood: Mood;
};
  
export class Diary {
Entries: Array<Diary_Entry>;
}