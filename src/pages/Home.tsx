import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import './Home.css';
import { SQLiteService } from '../services/database';

// import { isPlatform } from '@ionic/react';
// import { getPlatforms } from '@ionic/react';
/*
0: "android"
1: "phablet"
2: "cordova"
3: "capacitor"
4: "mobile"
5: "hybrid"
*/



const Home: React.FC = () => { 

  const [showAlert, setShowAlert] = useState(false);
  
  // SQLITE SERVICE
  const sqliteService = new SQLiteService();
  
  const initDb1 = (): void => {
    // sqliteService.initializePlugin();

    // const info = sqliteService.platform;
    // console.log('Platform1: ', info);
    
  }
  
  function createtable() {
    
    sqliteService.query("CREATE TABLE users1 ( PersonID int )")
    .then((res: any)=>{
      console.log('res: ', res);      
    });
    
  } 

  /*
  if(isPlatform('android')) {
    console.log('Android system');         
  } else {
    console.log('Browser system');
    
  }  
  */
 
 //const initDb = (): void => {
   


    /*
      console.log('initDB fired!');
      try {
        SQLite.create({
          name: 'data.db', location: 'default'
        }).then(async (db: SQLiteObject) => {
            try {
              const create = await db.executeSql('create table if not exists danceMoves(name VARCHAR(32))', []);
              await console.log('Table created/exists. Msg: ', create);
              const insert = await db.executeSql('insert into danceMoves (name) values (?)', ['Macarena']);
              await console.log('Inserted Macarena: ', insert);
            } catch (e) {
              console.log('SQL error: ', e);
            }
        })
      } catch(e) {
        setShowAlert(true);
        console.log('please use a device: ', e)
      }
      */
    //};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonButton onClick={initDb1}>Init DB</IonButton>
          <IonButton onClick={createtable}>Create Table</IonButton>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Mamma mia!'}
            message={'This will only work on a device. Please refer to the README.'}
            buttons={['OK']}
          />
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};
export default Home;
