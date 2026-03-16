# Running the Application

## Prerequisites

Make sure the following are installed:

* **Node.js** (v18 or later)
* **Python 3.4
* **MySQL Server**
* **npm** (comes with Node)

Verify installations:

```
node -v
npm -v
python --version
mysql --version
```

---

# Step 1 – Generate the Dataset

Install required Python packages:

```
pip install faker pandas numpy
```

Run the dataset generator:

```
python generate_dataset.py
```

This will generate the following CSV files:

```
customers.csv
products.csv
orders.csv
order_items.csv
events.csv
```

---

# Step 2 – Setup MySQL Database

Login to MySQL:

```
mysql -u root -p
```

Create the database:

```
CREATE DATABASE shopstream;
USE shopstream;
```

Run the database schema:

```
mysql -u root -p shopstream < database/schema.sql
```

---

# Step 3 – Load Data into MySQL

Install pipeline dependencies:

```
pip install pandas sqlalchemy pymysql
```

Run the ETL pipeline:

```
python pipeline/load_data.py
```

This script loads the CSV data into the MySQL database tables.

---

# Step 4 – Start Cube.js Analytics API

Navigate to the Cube.js project folder:

```
cd cubejs
```

Install dependencies:

```
npm install
```

Configure the `.env` file:

```
CUBEJS_DEV_MODE=true
CUBEJS_API_SECRET=secret123

CUBEJS_DB_TYPE=mysql
CUBEJS_DB_HOST=localhost
CUBEJS_DB_PORT=3306
CUBEJS_DB_NAME=ecommerce
CUBEJS_DB_USER=root
CUBEJS_DB_PASS=yourpassword
```

Start the Cube.js server:

```
npm run dev
```

Cube.js will run at:

```
http://localhost:4000
```

---

# Step 5 – Start the React Dashboard

Open a new terminal and go to the dashboard folder:

```
cd dashboard
```

Install dependencies:

```
npm install
```

Run the React dashboard:

```
npm start
```

The dashboard will be available at:

```
http://localhost:3000
```

---

# Application Architecture

```
Python (Dataset Generation + ETL Pipeline)
            |
            v
         MySQL Database
            |
            v
        Cube.js API
            |
            v
      React Dashboard
```

---

# Dashboard Features

* Revenue over time
* Orders by status
* Sales by product category
* Customers by country
* Event funnel analytics
* Date range filtering

---
