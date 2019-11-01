export class Pairwise_Compare {

  Entities: Array<Entity>;
  Ratings: Array<Array<Number>>;

  constructor(Entities: Array<Entity>){
    this.Entities = Entities;
    this.Ratings = new Array(Entities.length);
    this.Ratings.forEach(element => {
      this.Ratings.push(new Array(Entities.length));
    });
  }

  GetQuestions(Random: Boolean = true){
    let quesitons: Array<Question> = new Array<Question>();
    this.Entities.forEach((entity, i) => {
      this.Entities.forEach((col,j) => {
        let component: Question;
          if(i == j){
            component = new Ranking(this.Entities[i]);
          } else {
            component = new Compare(this.Entities[i], this.Entities[j], i < j);
          }
          quesitons.push(component);
      })
    });
    if(Random){
      quesitons.sort(function() {
        return .5 - Math.random();
      });
    }

    return quesitons;
  }
};

export class Entity {
  Name: String;
  constructor(Name: String){
    this.Name = Name;
  }
}
/**
 * Questions to be representet by the input elements
 */
export class Question{
  Text: String;
  Short: String;
  Value: Number;
  constructor(Text: String, Short: String = ""){
    this.Text = Text;
    this.Short = Short;
    this.Value = -1;
  }
}
export class Compare extends Question {
  Left: Entity;
  Right: Entity;
  Rating: Number;
  constructor(Left: Entity, Right: Entity, Direction: Boolean){
    if(Direction){
      super(`Where do you perform better?`, `Performance`);
    } else {
      super(`Where is improvement needed?`, `Improvement`);
    }    
    this.Left = Left;
    this.Right = Right;
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
  Rating: Number;
  Entity: Entity;
  constructor(entity: Entity, Rating: Number = 9){
      super(`Are you familiar with ${entity.Name}?`, `Familarity`);
      this.Entity = entity;
  }
}