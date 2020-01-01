
export enum TrialSource_T {
    CLINICALTRIALS = 1
}
export enum API_T {
    GET = 1,
    QUERY,
    STUDY_FIELDS_LIST,
    SEARCH_AREAS
}

interface Dictionary<T> {
    [Key: number]: T;
}

String.prototype.format = String.prototype.f = function() {
    let s = this;
    let i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
}
export class TrialSource {
    Name: string;
    URL: string;
    Fields: Array<string> = new Array<string>();
    API: Dictionary<string> = {};
    constructor(Name: string, URL: string) {
        this.Name = Name;
        this.URL = URL;
    }
}

export abstract class TrialSourceFactory {
    public static GetSource(Type: TrialSource_T) {
        switch (Type) {
            case TrialSource_T.CLINICALTRIALS: {
                return this.GetClinicalTrialsSource();
            }
            default: {
                console.log(`Invalid Type: ${Type}`);
                return null;
            }
        }
    }

    private static GetClinicalTrialsSource() {
        let source: TrialSource = new TrialSource('ClinicalTrials.gov', 'https://clinicaltrials.gov/api/');
        source.Fields = ['NCTId', 'Condition', 'BriefTitle'];
        source.API[API_T.QUERY] = 'query/study_fields?expr={0}&fields={1}&fmt=JSON';
        source.API[API_T.GET] = 'query/ct2/show/{0}?&fmt=JSON';
        source.API[API_T.STUDY_FIELDS_LIST] = 'info/study_fields_list&fmt=JSON';
        source.API[API_T.SEARCH_AREAS] = 'info/search_areas&fmt=JSON';
        return source;
    }
}
