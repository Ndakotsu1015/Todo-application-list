import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any, isSessionStorage: boolean = false): void {
    const storage = isSessionStorage ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string, isSessionStorage: boolean = false): any {
    const storage = isSessionStorage ? sessionStorage : localStorage;
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string, isSessionStorage: boolean = false): void {
    const storage = isSessionStorage ? sessionStorage : localStorage;
    storage.removeItem(key);
  }

  clear(isSessionStorage: boolean = false): void {
    const storage = isSessionStorage ? sessionStorage : localStorage;
    storage.clear();
  }
}
