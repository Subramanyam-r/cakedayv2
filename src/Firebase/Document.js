import { db } from "./init"

class Collection {
    name

    constructor(collection_name) {
        this.name = collection_name;
    }

    async findAll() {
        let querySnapshot = await db.collection(this.name).get();
        return this.#getResultArrayFromSnapshot(querySnapshot);
    }

    #getResultArrayFromSnapshot(querySnapshot) {
        let docs = [];
        querySnapshot.forEach(doc => docs.push(doc.data()))
        return docs;
    }
}

class User extends Collection {
    constructor() {
        super("users")
    }
}

export { User }