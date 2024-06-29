export interface Film {
    adult: boolean; 
    backdrop_path: string; 
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    belongs_to_collection?: {}; 
    budget?: number; 
    genres?: {}; 
    homepage?: string;
    imdb_id?: string; 
    origin_country?: string[];
    genre_ids?: number[];
    production_companies?: {}; 
    production_countries?: {}; 
    revenue?: number;
    runtime?: number;
    spoken_languages?: {}; 
    status?: string;
    tagline?: string;
   
}