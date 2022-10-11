[
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
];
productName totalUrgentQuantity 
Steel beam
Iron rod
50
60
1. Filter the Urgent Orders
Select * from Orders where status = "urgent"
[
{ id: 1, productName: "Steel beam", status: "urgent", quantity: 20 }, 
{_id: 2, product Name: "Steel beam", status: "urgent", quantity: 30 }, 
{_id: 4, product Name: "Iron rod", status: "urgent", quantity: 50 }, 
{ id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }

-- 2. Group by productNane & Sum
Select productName, sum(Quantity) as totalurgentQuantity 
from Orders
where status = "urgent" 
group by product Name

db.orders.insertMany([
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
])