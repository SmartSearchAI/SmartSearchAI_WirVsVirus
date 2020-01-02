
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
};

export class StudySource {
    Name: string;
    URL: string;
    Fields: Array<string> = new Array<string>();
    API: Dictionary<string> = {};
    constructor(Name: string, URL: string) {
        this.Name = Name;
        this.URL = URL;
    }
}