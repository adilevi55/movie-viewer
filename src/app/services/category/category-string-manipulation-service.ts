import { Injectable } from '@angular/core';
import { ReturnObjectType} from '../../interfaces/return-object-type.interface';
@Injectable({
    providedIn: 'root'
})

export class CategoryStringManipulationService {

    changeCategoryString(category: string): ReturnObjectType {
        const categoryForHttpReq = category.replace(/-/g, '_');
        const categoryText = category.replace(/-/g, ' ');
        const returnObject = {
            'categoryText': categoryText,
            'categoryForHttpReq': categoryForHttpReq
        };
        return returnObject;
    }
}
