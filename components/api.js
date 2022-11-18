import AsyncStorage from "@react-native-async-storage/async-storage";

export class API {
    constructor() {
        this.load('requests')
    }

    store = {}

    async load(name) {
        if (!name) return;
        const text = await AsyncStorage.getItem(name);
        try {
            this.store[name] = JSON.parse(text);
        } catch (e) {
            this.store[name] = text;
        }
        return true;
    }

    async save(name) {
        if (!name) return; // save all
        const text = JSON.stringify(this.store[name]);
        await AsyncStorage.setItem(name, text);
        return true;
    }

    async get(name, defaultValue) {
        if (this.store[name] === undefined) {
            await this.load(name);
        }
        return this.store[name] || defaultValue || null;
    }

    async set(name, value) {
        this.store[name] = value;
        await this.save(name);
        return true;
    }
}

export const api = new API();