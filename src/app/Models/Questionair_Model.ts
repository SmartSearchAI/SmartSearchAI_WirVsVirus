export class Pairwise_Compare {

  Entities: Array<Entity>;
  Ratings: Array<Array<Number>>;

  constructor(Entities: Array<Entity>){
    this.Entities = Entities;
    let n: Number = Entities.length;
    this.Ratings = new Array(Entities.length).fill(-1).map(() => new Array(n).fill(-1));
  }

  GetQuestions(Random: Boolean = true){
    let questions: Array<{"Index": Array<number>, "Question": Question}> = new Array<{"Index": Array<number>, "Question": Question}>();
    this.Entities.forEach((entity, i) => {
      this.Entities.forEach((col,j) => {
        let component: Question;
          if(i == j){
            component = new Ranking(this.Entities[i]);
          } else {
            component = new Compare(this.Entities[i], this.Entities[j], i < j);
          }
          questions.push({"Index": [i, j], "Question": component});
      })
    });
    if(Random){
      questions.sort(function() {
        return .5 - Math.random();
      });
    }

    return questions;
  }

  GetScore(){

    let Improve: Score = new Score("Improve", this.Entities.length);
    let StatusQuo: Score = new Score("StatusQuo", this.Entities.length);
    let KnowHow: Score = new Score("KnowHow", this.Entities.length);

    this.Ratings.forEach((row: number[], i) => {
      row.forEach((value: number, j) => {
        /**Improve Area - Top Right Matrix */
        if(i > j) {
          if(value > 0){
              Improve.Values[i] += value;
          } else {
              Improve.Values[j] += value * -1;
          }
        /**StatusQuo Area - Bottom Left Matrix */
        } else if (i < j) {
          if(value > 0){
            StatusQuo.Values[i] += value;
          } else {
            StatusQuo.Values[j] += value * -1;
          }
        /**KnowHow Area - Diagonal Matrix */
        }else {
            KnowHow.Values[i] += value;
        }
      });
    });

    let result: Array<Score> = new Array<Score>();
    result.push(Improve);
    result.push(StatusQuo);
    result.push(KnowHow);
    return result;  
  }
};

export class Entity {
  Name: String;
  constructor(Name: String){
    this.Name = Name;
  }
}

export class Score {
  Title: String;
  Values: Array<number>;
  constructor(Title: String, n: number, val_default: number = 0){
    this.Title = Title;
    this.Values =  new Array(n).fill(val_default);
  }
}
/**
 * Questions to be representet by the input elements
 */
export class Question{
  Text: String;
  Short: String;
  Value: Number;
  Icon: String = "";
  Status: String = "";
  constructor(Text: String, Short: String = ""){
    this.Text = Text;
    this.Short = Short;
    this.Value = -1;
  }
}

class Compare_Values {
  Options: Array<{"Value": Number, "Text": String, "Short": String}>;
  constructor(){
    this.Options = new Array<{"Value": Number, "Text": String, "Short": String}>();
    this.Options.push({"Value": -9, "Text": "Left side is more relevant", "Short": "LEFT"});
    this.Options.push({"Value": -3, "Text": "", "Short": ""});
    this.Options.push({"Value": -1, "Text": "", "Short": ""});
    this.Options.push({"Value": 0, "Text": "Both items are equaly relevant", "Short": "SAME"});
    this.Options.push({"Value": 1, "Text": "", "Short": ""});
    this.Options.push({"Value": 3, "Text": "", "Short": ""});
    this.Options.push({"Value": 9, "Text": "Right side is more relevant", "Short": "RIGHT"});
  }
}
export class Compare extends Question {
  VALUES: Compare_Values;
  Left: Entity;
  Right: Entity;
  constructor(Left: Entity, Right: Entity, Direction: Boolean){
    if(Direction){
      super(`Where do you perform better?`, `Performance`);
      this.Status = "success";
      this.Icon = "smile"
    } else {
      super(`Where is improvement needed?`, `Improvement`);
      this.Status = "warning";
      this.Icon = "chart-line"
    }    
    this.Left = Left;
    this.Right = Right;
    this.VALUES = new Compare_Values();
  }
}

enum RANK_E {
  None = 1,
  Low,
  Medium, 
  High
}
export class Rank {
  Rank: Array<{"Rank": RANK_E, "Value": Number, "Text": String, "Short": String, "Tip": String}>
  static RANK = RANK_E;
  constructor(){
    this.Rank = new Array<{"Rank": RANK_E, "Value": Number, "Text": String, "Short": String, "Tip": String}>();
    this.Rank.push({"Rank": RANK_E.None, "Value": 1, "Text": "I dont know it", "Short": "No Clue", "Tip": "Never heard of it or read about it." });
    this.Rank.push({"Rank": RANK_E.Low, "Value": 3, "Text": "I have read/heard about it", "Short": "Low", "Tip": "It sounds familar. I heard about it or read about it - e.g. Talk, Internet, Magazine, Television"});
    this.Rank.push({"Rank": RANK_E.Medium, "Value": 7, "Text": "I tried it", "Short": "Medium", "Tip": "I tried it out in a project or with one of my coleeges. I dont feel like an expert yet"});
    this.Rank.push({"Rank": RANK_E.High, "Value": 9, "Text": "I am a Pro", "Short": "High", "Tip": "I used it in one more project within the last 12 Month. I can exchange with Experts about this topic."});
  }
}
export class Ranking extends Question{
  Entity: Entity;
  constructor(entity: Entity, Rating: Number = 9){
      super(`Are you familiar with ${entity.Name}?`, `Familarity`);
      this.Entity = entity;
      this.Icon = "award";
  }
}