export const browserDBInstance = (db:any) => {

    return {
      executeSql: (sql:any) => {
        return new Promise((resolve, reject) => {
          db.transaction((tx:any) => {
            tx.executeSql(sql, [], (tx:any, rs:any) => {
              resolve(rs)
            });
          });
        })
      },
      sqlBatch: (arr:any) => {
        return new Promise((r, rr) => {
          let batch:any = [];
          db.transaction((tx:any) => {
            for (let i = 0; i < arr.length; i++) {
              batch.push(new Promise((resolve, reject) => {
                tx.executeSql(arr[i], [], () => { resolve(true) })
              }))
              Promise.all(batch).then(() => r(true));
            }
          });
        })
      }
    }
  }
  