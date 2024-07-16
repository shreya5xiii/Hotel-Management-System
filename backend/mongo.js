import { MongoClient, ServerApiVersion } from "mongodb";

const uri = ""; //mongo db url
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

class Mongo {
  static async signup(data) {
    try {
      const collectionName1 = "room";
      const collectionName2 = "employee";
      const collectionName3 = "employeehistory";
      console.log("connecting");
      await client.connect();
      //to create seperate database and collection for new hotel
      const adminDb = client.db(data.name);
      await adminDb.createCollection(collectionName1);
      await adminDb.createCollection(collectionName2);
      await adminDb.createCollection(collectionName3);
      //to save signup hotel
      const db = client.db("hotel");
      const col = db.collection("signuphotel");
      const doc = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
      };
      const existingDoc = await col.findOne(doc);
      if (existingDoc) {
        console.log("already registered ");
      } else {
        const result = await col.insertOne(doc);
        console.log(
          `A document was inserted with the _id: ${result.insertedId}`
        );
        return result;
      }
    } catch (e) {
      return e;
    } finally {
      await client.close();
    }
  }

  //to get login email
  static async getAllsignup(email) {
    try {
      await client.connect();
      const db = client.db("hotel");
      const col = db.collection("signuphotel");
      const formData = await col.find({ email: email }).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to add room
  static async addroom(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("room");

      const doc = {
        roomno: data.roomno,
        acNonac: data.acNonac,
        price: data.price,
        available: data.available,
        status: data.status,
        bed: data.bed,
      };
      const existingDoc = await col.findOne({ roomno: data.roomno });
      if (existingDoc) {
        console.log("Document already exists");
        return;
      }
      // Insert the document
      const result = await col.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result;
    } catch (e) {
      console.error("Error:", e);
      return e;
    } finally {
      await client.close();
    }
  }

  //to get  room for updation
  static async getroom(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("room");
      const room = await col.find({ roomno: data.roomNo }).toArray();
      return room;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  // to occupy ie. to update availability
  static async Updateroom(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("room");
      const filter = { roomno: data.realroomNo };
      const update = {
        $set: {
          roomno: data.roomno,
          acNonac: data.acNonac,
          price: data.price,
          available: data.available,
          status: data.status,
          bed: data.bed,
        },
      };
      const result = await col.updateOne(filter, update);
      if (result.modifiedCount === 1) {
        console.log("Document updated successfully");
        return result;
      } else {
        console.log("Document not found or not updated");
      }
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to get all room
  static async getallroom(dbName) {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("room");
      const formData = await col.find({}).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to delete room
  static async deleteroom(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("room");
      const c = await col.findOne({
        $and: [{ roomno: data.roomno }, { available: "occupied" }],
      });
      if (c) {
        return;
      } else {
        const result = await col.deleteOne({ roomno: data.roomno });
        if (result.deletedCount === 1) {
          console.log("Document deleted successfully");
          return result;
        } else {
          console.log("Document not found or not deleted");
        }
      }
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  static async Addemp(data) {
    try {
      console.log("connecting");
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("employee");
      const col2 = db.collection("employeehistory");
      const doc = {
        empid: data.empid,
        empname: data.empname,
        empage: data.empage,
        empadharno: data.empadharno,
        empgender: data.empgender,
        empmobno: data.empmobno,
        empjob: data.empjob,
        empsalary: data.empsalary,
        working: data.working,
      };
      const existingDoc = await col.findOne({ empid: data.empid });
      if (existingDoc) {
        console.log("Document already exists");
        return;
      }
      await col2.insertOne(doc);
      const result = await col.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result;
    } catch (e) {
      console.error("Error:", e);
      return e;
    } finally {
      await client.close();
    }
  }

  //to get  employee for updation
  static async getemp(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("employee");
      const emp = await col.find({ empid: data.empid }).toArray();
      return emp;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //  ie. to update emp
  static async Updateemp(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("employee");
      const col2 = db.collection("employeehistory");
      const filter = { empid: data.realempid };
      const update = {
        $set: {
          empid: data.empid,
          empname: data.empname,
          empage: data.empage,
          empadharno: data.empadharno,
          empgender: data.empgender,
          empmobno: data.empmobno,
          empjob: data.empjob,
          empsalary: data.empsalary,
        },
      };
      await col2.updateOne(filter, update);
      const result = await col.updateOne(filter, update);
      if (result.modifiedCount === 1) {
        console.log("Document updated successfully");
        return result;
      } else {
        console.log("Document not found or not updated");
      }
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to get all emp
  static async getallemp(dbName) {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("employee");
      const formData = await col.find({}).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to delete emp
  static async deleteemp(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("employee");
      const col2 = db.collection("employeehistory");
      const filter = { empid: data.empid };
      const update = {
        $set: {
          working: "no",
        },
      };
      await col2.updateOne(filter, update);
      const result = await col.deleteOne({ empid: data.empid });
      if (result.deletedCount === 1) {
        console.log("Document deleted successfully");
        return result;
      } else {
        console.log("Document not found or not deleted");
      }
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to get allchoices
  static async searchChoice(a, b, dbName) {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("room");
      const query = {
        acNonac: a,
        bed: b,
        available: "available",
        status: "clean",
      };
      const formData = await col.find(query).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to book room
  static async book(data) {
    try {
      console.log("connecting");
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("currentbooking");
      const col2 = db.collection("historyofbooking");
      const doc = {
        custname: data.custname,
        custidtype: data.custidtype,
        custidnumber: data.custidnumber,
        custmobno: data.custmobno,
        gender: data.gender,
        roomNo: data.roomNo,
        indate: data.indate,
        intime: data.intime,
        deposite: data.deposite,
        price: data.price,
      };
      const existingDoc = await col.findOne({
        $or: [{ custidnumber: doc.custidnumber }, { mobno: doc.custmobno }],
      });
      if (existingDoc) {
        console.log("Document already exists");
        return;
      }
      const colu = db.collection("room");
      const filter = { roomno: data.roomNo };
      const update = { $set: { available: "occupied" } };
      const r = await colu.updateOne(filter, update);
      if (r.modifiedCount === 1) {
        console.log("Document updated successfully");
      } else {
        console.log("Document not found or not updated");
      }
      // Insert the document
      const history = await col2.insertOne(doc);
      const result = await col.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result;
    } catch (e) {
      console.error("Error:", e);
      return e;
    } finally {
      await client.close();
    }
  }

  //to get  room for checkout
  static async getroomforcheckout(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("currentbooking");
      const room = await col.find({ roomNo: data.roomNo }).toArray();
      return room;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //check out
  static async checkout(data) {
    try {
      await client.connect();
      const db = client.db(data.dbName);
      const col = db.collection("room");
      const filter = { roomno: data.roomno };
      const update = {
        $set: {
          available: "available",
          status: "dirty",
        },
      };

      await col.updateOne(filter, update);
      const col2 = db.collection("currentbooking");
      await col2.deleteOne({ roomNo: data.roomno });
      const col3 = db.collection("historyofbooking");
      const filter2 = { roomNo: data.roomno };
      const update2 = {
        $set: {
          outdate: data.outdate,
          outtime: data.outtime,
          finalamount: data.finalamount,
        },
      };
      const result = await col3.updateOne(filter2, update2);

      if (result.modifiedCount === 1) {
        console.log("Document updated successfully");
        return result;
      } else {
        console.log("Document not found or not updated");
      }
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to get all client history
  static async clienthistory(dbName) {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("historyofbooking");
      const formData = await col.find({}).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }

  //to get all emp history
  static async employeehistory(dbName) {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("employeehistory");
      const formData = await col.find({}).toArray();
      return formData;
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  }
}

export default Mongo;
