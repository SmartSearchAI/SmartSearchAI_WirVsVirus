export interface Dictionary<T> {
    [Key: string]: T;
}
export class Study {
    $Rank: number;
    $Id: string;
    $BriefTitle: string;
    $Fields: Dictionary<string>;
    constructor(Rank: number, Id: string, BriefTitle: string, Fields: Dictionary<string>) {
        this.$Rank = Rank;
        this.$Id = Id;
        this.$BriefTitle = BriefTitle;
        this.$Fields = Fields;
    }
}

export class ClinicalTrialStudy extends Study {
    constructor(item: object) {
        let fields: Dictionary<string> = {};
        let Id: string;
        let Rank: number;
        let BriefTitle: string;
        let props: Array<string>;
        props = Object.getOwnPropertyNames(item);
        props.forEach(prop => {
            const value = item[prop];
            switch (prop){
                case 'NCTId': {
                    Id = value[0]; break;
                }
                case 'Rank': {
                    Rank = value; break;
                }
                case 'BriefTitle': {
                    BriefTitle = value[0]; break;
                }
                default: {
                    fields[prop] = value[0]; break;
                }
            }
        });
        super(Rank, Id, BriefTitle, fields);
    }
}