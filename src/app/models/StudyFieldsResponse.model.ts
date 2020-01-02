
import {Study, ClinicalTrialStudy} from './Study.model';

export class StudyFieldsResponse {
    $Expression: string;
    $Fields: Array<string>;
    $Version: {API: string, Data: string};
    $Rank: {min: number; max: number};
    $NStudies: {Avail: number; Found: number; Returned: number};
    $Studies: Array<Study>;
    constructor(Expression: string, Fields: Array<string>, Studies: Array<Study>,
                Rank: {min: number; max: number},
                NStudies: {Avail: number; Found: number; Returned: number},
                Version: {API: string, Data: string}) {
        this.$Expression = Expression;
        this.$Fields = Fields;
        this.$Studies = Studies;
        this.$Rank = Rank;
        this.$NStudies = NStudies;
    }
}

export class ClinicalTrialsResponse extends StudyFieldsResponse {
    constructor(resp: {APIVrs: string, DataVrs: string, Expression: string, FieldList: Array<string>,
                MaxRank: number, MinRank: number, NStudiesAvail: number, NStudiesFound: number, NStudiesReturned: number,
                StudyFields: Array<object>}) {
        const Studies: Array <Study> = resp.StudyFields.map(item => new ClinicalTrialStudy(item));
        const Rank = {min: resp.MinRank, max: resp.MaxRank};
        const NStudies = {Avail: resp.NStudiesAvail, Found: resp.NStudiesFound, Returned: resp.NStudiesReturned};
        const Version = {API: resp.APIVrs, Data: resp.DataVrs};

        super(resp.Expression, resp.FieldList, Studies, Rank, NStudies, Version);
    }
    static fromObject(resp: object) {
        return new ClinicalTrialsResponse({APIVrs: resp['APIVrs'], DataVrs: resp['DataVrs'],
            Expression: resp['Expression'], FieldList: resp['FieldList'],
            MaxRank: resp['MaxRank'], MinRank: resp['MinRank'],
            NStudiesAvail: resp['NStudiesAvail'], NStudiesFound: resp['NStudiesFound'], NStudiesReturned: resp['NStudiesReturned'],
            StudyFields: resp['StudyFields']}
        );
    }
}
