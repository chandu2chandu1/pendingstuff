export enum ItemStatus { Pending, Completed }

export class ToDoList{

    public items: [{
        ItemId: number,
        ItemDescription: string,
        Status: ItemStatus
    }];

    constructor(public listId:number, public listDescription:string, items) {
        
    }
}

export class FakeToDoList{

    constructor() {
        
    }

    getToDoList() {
        let todoList: ToDoList[] = [
            new ToDoList(
                1, "Shopping List", [
                    { listId: 1, listDescription: "Books" },
                    { listId: 2, listDescription: "Bag" },
                    { listId: 3, listDescription: "Others" }
                ]
            ),
            new ToDoList(
                2, "Kitched Items", [
                    { listId: 1, listDescription: "Rice" },
                    { listId: 2, listDescription: "Oil" },
                    { listId: 3, listDescription: "Gas" }
                ]
            )
        ];
        return todoList;
    }

}