
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

export class TrialSource {
    Name: string;
    URL: string;
    Fields: Array<string> = new Array<string>();
    API: Dictionary<string> = {};
    constructor(Name: string, URL: string) {
        this.Name = Name;
        this.URL = URL;
    }
    exec(API: API_T, parameter: object) {
        switch (API) {
            case API_T.QUERY: {
                return this.query(parameter['expr']);
            }
        }
    }
    private query(expr: string) {
        let url = this.URL;
        let call = String(this.API[API_T.QUERY]);
        //String.format(call.format(expr, this.Fields.join(','));
        console.log(`{url}{call}`);
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
        source.API[API_T.QUERY] = 'query/study_fields?expr={0}&fields={1}';
        source.API[API_T.GET] = 'query/ct2/show/{0}?displayxml=false';
        source.API[API_T.STUDY_FIELDS_LIST] = 'info/study_fields_list';
        source.API[API_T.SEARCH_AREAS] = 'info/search_areas';
        return source;
    }
}
