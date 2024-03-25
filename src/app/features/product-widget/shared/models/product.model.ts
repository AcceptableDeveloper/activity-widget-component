import { ProductAction } from "../enums/product-action.enum";
import { ProductColor } from "../enums/product-color.enum";
import { ProductType } from "../enums/product-type.enum";

export class Product {
    public id!: number;
    public type!: ProductType;
    public amount!: number;
    public action!: ProductAction;
    public active!: boolean;
    public linked!: boolean;
    public selectedColor!: ProductColor;


    public constructor(data?: Record<string, any>) {
        if (data) {
            Object.assign(this, data)
        }
    }
}
