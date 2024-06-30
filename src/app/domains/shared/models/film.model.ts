export interface Film {
    id: number;
    title: string;
    vote_average: number;
    overview: string;
    adult?: boolean; 
    backdrop_path?: string;  
    original_language?: string;
    original_title?: string;
    popularity?: string;
    poster_path?: string;
    release_date?: string;
    video?: boolean;
    vote_count?: number;
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