export interface Producto{
    id:string,
    site_id:string,
    title:string;
    condition:string;
    seller_id:number;
    state_name:string;
    use_thumbnail_id: boolean;
    category_id?: string;
    official_store_id: number;
    price: number;
    address:string;
    permalink:string;
    base_price: number;
    thumbnail: string;
    seller_address:{
        id:string;
    },
    attributes:[
        {
            [k:string]:string | number
        }
    ];
    buying_mode?:string | number
}

export interface ResponseProductos{
    site_id:string;
    state_name:string;
    results:Producto[];
    query?:string;
}