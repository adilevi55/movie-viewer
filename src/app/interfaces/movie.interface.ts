export interface MovieTrailers {
     'id': string;
     'results': Array<{ 'key': string, 'name': string }>;
    }
export interface MovieRecommendationsType {
     'page': number;
     'total_pages': number;
     'total_results': number;
     'results': object[];
    } /// :book
export interface Moviecredits {
    'id': number;
    'cast': object[];
    'crew': object[];
}
