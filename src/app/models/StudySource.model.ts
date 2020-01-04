
export enum API_T {
    GET = 1,
    QUERY,
    STUDY_FIELDS_LIST,
    SEARCH_AREAS
}

interface Dictionary<T> {
    [Key: number]: T;
}

export class StudySource {
    Name: string;
    URL: string;
    API: Dictionary<string> = {};
    constructor(Name: string, URL: string) {
        this.Name = Name;
        this.URL = URL;
    }
}