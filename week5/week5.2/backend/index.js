const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodoSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const completedPayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(completedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Ypu sent wrong inputs",
    });
    return;
  }
  await todo.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo updated",
  });
});
app.delete("/delete", async (req, res) => {
  const id = req.body.id;
  await todo.findOneAndDelete({
    _id: id,
  });
  res.json({
    msg: "todo deleted",
  });
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
