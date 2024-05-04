export class User {
    id: string;
    title: string;
    artist: string;
    genres: string[] = [];
    releaseDate: Date;
    isExplicit: boolean = false;
    streams: number;
    
    constructor(id: string = '', title: string = '', artist: string = '', streams: number = 0, releaseDate: Date = new Date(), isExplicit: boolean = false, genres: string[] = []) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genres = genres;
        this.releaseDate = releaseDate;
        this.isExplicit = isExplicit;
        this.streams = streams;
    }
}

export interface iUser {
    id: string;
    title: string;
    artist: string;
    genres: string[]
    releaseDate: Date;
    isExplicit: boolean;
    streams: number;
}
