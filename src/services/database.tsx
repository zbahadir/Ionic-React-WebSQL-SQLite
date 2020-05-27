import { Observable, from } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { browserDBInstance } from './browser';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


const { Device } = Plugins;

declare var window: any;

class SQLiteService {
  sqlite: any = {};
  isService: boolean;
  platform: string;
  sql: any;

  constructor() {
    this.isService = false;
    this.platform = "";
    this.sqlite = SQLite;
  
  
    this.initializePlugin();
  
  }
  
  // SQL QUERY
  query(query: any) {
    return this.sql.executeSql(query, []).then((res: any) => {
      return res;
    });      
  }


  /**
   * Plugin Initialization
   */
  async initializePlugin(): Promise<void> {
    
    const info = await Device.getInfo();
    this.platform = info.platform;
    if (this.platform === "ios" || this.platform === "android") {
      console.log('SQLite');
      this.sql = SQLiteObject;
      this.sqlite.create({
        name: 'sqlite_native.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.sql = db;
          this.isService = true;
      });
 
 
    } else {
      
    console.log('WebSQL');      
     const SQL_DB_NAME = 'sqlite_browser.db';
     const db = window.openDatabase(SQL_DB_NAME, '1.0', 'DEV', 5 * 1024 * 1024);
     this.sql = browserDBInstance(db);      
     this.isService = true;

    }
    return;
  }


}


export {SQLiteService};
