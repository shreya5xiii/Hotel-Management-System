import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Mongo from "./mongo.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

//to save signup data
app.post("/", async (req, res) => {
  const data = req.body;
  if (data.name && data.email && data.password && data.confirm_password) {
    try {
      const result = await Mongo.signup(data);
      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success", data: result.insertedId });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get data for login
app.get("/Login", async (req, res) => {
  const { email } = req.query;
  try {
    const formData = await Mongo.getAllsignup(email);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to addroom
app.post("/addroom", async (req, res) => {
  const data = req.body;
  if (
    data.roomno &&
    data.acNonac &&
    data.price &&
    data.available &&
    data.status &&
    data.bed
  ) {
    try {
      const result = await Mongo.addroom(data);
      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success", data: result.insertedId });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get room for updation
app.get("/getroom", async (req, res) => {
  const data = req.query;
  try {
    const formData = await Mongo.getroom(data);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to update roomdata
app.post("/Updateroom", async (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.roomno &&
    data.acNonac &&
    data.price &&
    data.available &&
    data.status &&
    data.bed
  ) {
    console.log("innnnnnnn");
    try {
      const result = await Mongo.Updateroom(data);

      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success" });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get all rooms
app.get("/getallroom", async (req, res) => {
  const data = req.query;
  console.log(data.dbName);
  try {
    const formData = await Mongo.getallroom(data.dbName);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to delete room
app.get("/Deleteroom", async (req, res) => {
  const data = req.query;
  console.log(data);
  try {
    const formData = await Mongo.deleteroom(data);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to add staff
app.post("/addemployee", async (req, res) => {
  const data = req.body;
  console.log("index.js", data);
  if (
    data.empid &&
    data.empname &&
    data.empage &&
    data.empadharno &&
    data.empgender &&
    data.empmobno &&
    data.empjob &&
    data.empsalary
  ) {
    try {
      const result = await Mongo.Addemp(data);

      console.log("Form data saved successfully:", result);

      res.status(201).json({ info: "success", data: result.insertedId });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get employee for updation
app.get("/Getemp", async (req, res) => {
  const data = req.query;

  try {
    const formData = await Mongo.getemp(data);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to update emp
app.post("/Updateemp", async (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.empid &&
    data.empname &&
    data.empage &&
    data.empadharno &&
    data.empgender &&
    data.empmobno &&
    data.empjob &&
    data.empsalary
  ) {
    try {
      const result = await Mongo.Updateemp(data);
      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success" });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get all emp
app.get("/getallemp", async (req, res) => {
  const data = req.query;
  console.log(data.dbName);
  try {
    const formData = await Mongo.getallemp(data.dbName);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to delete  emp
app.get("/Deleteemp", async (req, res) => {
  const data = req.query;
  console.log(data);
  try {
    const formData = await Mongo.deleteemp(data);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to get ro0m of our choice
app.get("/Search", async (req, res) => {
  const data = req.query;
  try {
    const formData = await Mongo.searchChoice(
      data.acNonac,
      data.bed,
      data.dbName
    );
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to book room
app.post("/Bookroom", async (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.custname &&
    data.custidtype &&
    data.custidnumber &&
    data.custmobno &&
    data.gender &&
    data.roomNo &&
    data.deposite
  ) {
    try {
      const result = await Mongo.book(data);
      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success", data: result.insertedId });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get room for checkout
app.get("/getroomforcheckout", async (req, res) => {
  const data = req.query;

  try {
    const formData = await Mongo.getroomforcheckout(data);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//check out
app.post("/checkout", async (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.roomno &&
    data.custname &&
    data.indate &&
    data.intime &&
    data.outdate &&
    data.outtime &&
    data.deposite &&
    data.finalamount
  ) {
    try {
      const result = await Mongo.checkout(data);
      console.log("Form data saved successfully:", result);
      res.status(201).json({ info: "success", data: result });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ info: "error", message: "Failed to save form data" });
    }
  } else {
    res
      .status(401)
      .json({ info: "error", message: "Please provide all details" });
  }
});

//to get all client history
app.get("/clienthistory", async (req, res) => {
  const data = req.query;
  console.log(data.dbName);
  try {
    const formData = await Mongo.clienthistory(data.dbName);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

//to get all employee history
app.get("/employeehistory", async (req, res) => {
  const data = req.query;
  console.log(data.dbName);
  try {
    const formData = await Mongo.employeehistory(data.dbName);
    res.status(200).json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res
      .status(500)
      .json({ info: "error", message: "Failed to fetch form data" });
  }
});

app.listen(port, () => {
  console.log("app is running at", port);
});
