// export function getDetails(tableName){
//     try {
//         MongoClient.connect(url,
//           { useUnifiedTopology: true },
//           function (err, db) {
//             if (err) throw err;
//             var dbo = db.db("shopping");
//             dbo.collection(tableName).find({}, { projection: { _id: 0 } })
//               .toArray(function (err, result) {
//                 if (err) throw err;
//                 res.json(result);
//                 console.log((new Date()).toUTCString());
//                 db.close();
//               })
//           }
//         )
//       } catch (error) {
//         console.log(error)
//       }
// }

export function getDetails(tableName){
  try {
      MongoClient.connect(url,
        { useUnifiedTopology: true },
        function (err, db) {
          if (err) throw err;
          var dbo = db.db("shopping");
          dbo.collection(tableName).find({}, { projection: { _id: 0 } })
            .toArray(function (err, result) {
              if (err) throw err;
              res.json(result);
              console.log((new Date()).toUTCString());
              db.close();
            })
        }
      )
    } catch (error) {
      console.log(error)
    }
}