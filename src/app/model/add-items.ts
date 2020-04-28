export class AddItems {
    id: string;
    name: string;
    price: string;
    quantity: string;
    image: string;
    desc: string;
} 

export class OrderItems {
    id: number;
    email: string;
    order: OrderData[];
}

export class OrderItem {
    id: number;
    email: string;
    order: string;
}

export class OrderData {
    id:number;
    email: string; 
    name: string;
    quantity: string;
}