export interface SuccessMoviesType {
    'page': number; 'total_pages': number; 'total_results': number;
    'results': [
        {
            'adult': boolean, 'genre_ids': [],
            'backdrop_path': string, 'original_language': string,
            'id': number, 'overview': string,
            'original_title': string, 'poster_path': string,
            'popularity': number, 'title': string,
            'release_date': string, 'vote_average': number,
            'video': boolean, 'vote_count': number
        }
    ];
}
