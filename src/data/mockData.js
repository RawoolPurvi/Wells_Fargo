//Mockdata.js

// src/data/mockData.js

const branches = [
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Alice",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000, transaction_date: '23-02-2023' },
          { type: "RD", amount: 5000, transaction_date: '22-01-2023' },
          { type: "ATM", amount: 20000, fee: 70, transaction_date: '25-01-2023' },
          { type: "ATM", amount: 30000, fee: 50, transaction_date: '05-02-2023' },
          { type: "ATM", amount: 4000, fee: 10, transaction_date: '03-03-2023' },
          { type: "ATM", amount: 4000, fee: 50, transaction_date: '02-04-2023' }
        ],
      },
      {
        name: "Bob",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000, transaction_date: '02-05-2023' },
          { type: "RD", amount: 10000, transaction_date: '12-06-2023' },
          { type: "ATM", amount: 400, fee: 30 }
        ],
      },
      {
        name: "Charlie",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000, transaction_date: '17-07-2023' },
          { type: "RD", amount: 10500, transaction_date: '12-04-2023' },
          { type: "ATM", amount: 700, fee: 70, transaction_date: '16-08-2023' },
          { type: "ATM", amount: 800, fee: 80, transaction_date: '24-09-2023' },
          { type: "ATM", amount: 500, fee: 50, transaction_date: '13-03-2023' },
          { type: "ATM", amount: 600, fee: 60, transaction_date: '26-05-2023' },
          { type: "ATM", amount: 700, fee: 70, transaction_date: '15-01-2023' },
          { type: "ATM", amount: 500, fee: 40, transaction_date: '14-12-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Trutiya",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000, transaction_date: '14-06-2023' },
          { type: "RD", amount: 50000, transaction_date: '16-02-2023' },
          { type: "ATM", amount: 200, fee: 20, transaction_date: '16-06-2023' },
          { type: "ATM", amount: 1, fee: 10, transaction_date: '02-07-2023' },
          { type: "ATM", amount: 3000, fee: 30, transaction_date: '15-11-2023' }
        ],
      },
      {
        name: "Soumya",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000, transaction_date: '02-12-2023' },
          { type: "RD", amount: 10000, transaction_date: '02-04-2023' },
        ],
      },
      {
        name: "Purvi",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000, transaction_date: '22-04-2023' },
          { type: "RD", amount: 10500, transaction_date: '12-05-2023' },
          { type: "ATM", amount: 400, fee: 30, transaction_date: '15-06-2023' },
          { type: "ATM", amount: 500, fee: 40, transaction_date: '13-03-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Francisco",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Suvarna",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10780, transaction_date: '01-01-2023' },
          { type: "RD", amount: 50000, transaction_date: '02-04-2023' },
          { type: "ATM", amount: 200, fee: 20, transaction_date: '03-06-2023' },
          { type: "ATM", amount: 3000, fee: 30, transaction_date: '04-08-2023' },
          { type: "ATM", amount: 3000, fee: 30, transaction_date: '05-03-2023' },
          { type: "ATM", amount: 400, fee: 40, transaction_date: '06-09-2023' },
          { type: "ATM", amount: 500, fee: 50, transaction_date: '07-04-2023' },
          { type: "ATM", amount: 500, fee: 50, transaction_date: '08-04-2023' },
          { type: "ATM", amount: 100, fee: 10, transaction_date: '09-10-2023' }
        ],
      },
      {
        name: "Hari",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000, transaction_date: '10-01-2023' },
          { type: "RD", amount: 10000, transaction_date: '11-05-2023' },
          { type: "ATM", amount: 3000, fee: 20, transaction_date: '12-04-2023' },
          { type: "ATM", amount: 400, fee: 30, transaction_date: '13-03-2023' }
        ],
      },
      {
        name: "Niharika",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '14-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '15-07-2023'  },
          { type: "ATM", amount: 400, fee: 30,transaction_date : '16-11-2023'  },
          { type: "ATM", amount: 400, fee: 30,transaction_date : '17-03-2023'  },
          { type: "ATM", amount: 500, fee: 40,transaction_date : '18-08-2023'  }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sahana",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '19-05-2023'  },
          { type: "RD", amount: 50000,transaction_date : '20-06-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '21-02-2023'  },
          { type: "ATM", amount: 3000, fee: 1,transaction_date : '22-01-2023'  }
        ],
      },
      {
        name: "Bava",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '23-01-2023'  },
          { type: "RD", amount: 10000,transaction_date : '24-02-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '25-08-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '26-04-2023'  }
        ],
      },
      {
        name: "Swapnali",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '27-10-2023'  },
          { type: "RD", amount: 15000,transaction_date : '28-08-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '29-05-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '30-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sapna",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '29-02-2023'  },
          { type: "RD", amount: 50000,transaction_date : '28-05-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '27-09-2023'  },
          { type: "ATM", amount: 3000, fee: 1,transaction_date : '26-08-2023'  }
        ],
      },
      {
        name: "Shreya",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '25-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '24-03-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '23-08-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-07-2023'  }
        ],
      },
      {
        name: "Suman",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '21-06-2023'  },
          { type: "RD", amount: 15000,transaction_date : '20-02-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '19-08-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '18-03-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Manhattan",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Rajat",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 1000,transaction_date : '17-03-2023'  },
          { type: "RD", amount: 50000,transaction_date : '16-07-2023'  },
          { type: "ATM", amount: 200, fee: 0 ,transaction_date : '15-02-2023' },
          { type: "ATM", amount: 3000, fee: 1,transaction_date : '14-01-2023'  }
        ],
      },
      {
        name: "Arav",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '13-12-2023' },
          { type: "RD", amount: 10000,transaction_date : '12-10-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '11-09-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '10-07-2023' }
        ],
      },
      {
        name: "Rekha",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '09-03-2023'  },
          { type: "RD", amount: 15000,transaction_date : '08-08-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '07-04-2023'  },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '06-10-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Reshma",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-12-2023' },
          { type: "RD", amount: 50000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 200, fee: 0 ,transaction_date : '22-01-2023' },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-05-2023' }
        ],
      },
      {
        name: "Shweta",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-07-2023'  },
          { type: "RD", amount: 10000 ,transaction_date : '22-03-2023' },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-01-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Mansi",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-02-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-09-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-10-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sharad",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Nikita",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Naira",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Prachi",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Roohi",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Rudra",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "Washington DC - George Town",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sakshi",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Pratima",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Sachin",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 15000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Shaw",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Manoj",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 50000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 200, fee: 0 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Akash",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Vijay",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Penn Quarter",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Kunal",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 50000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Karan",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Tarun",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sayli",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Bhagya",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Preet",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sneha",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Akankasha",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Neha",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Penn Quarter",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Dhruv",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 1,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Krupa",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Hamza",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Manhattan",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Gaurav",
        category: "Gold",
        transactions: [
          { type: "MF", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Gauri",
        category: "Exclusive",
        transactions: [
          { type: "MF", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Shubham",
        category: "Premium",
        transactions: [
          { type: "MF", amount: 15000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 300000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - George Town",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Omkar",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 200, fee: 0,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 1 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Aarya",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Kisna",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Lata",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Leena",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Karuna",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Manhattan",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Nandini",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 100000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 50000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Deepa",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Sania",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Olivia",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Ojas",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Poorvi",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Neelam",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Neesha",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Krutika",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Penn Quarter",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Nilesh",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Neeta",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Rita",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Kamal",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Niharika",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Aradhya",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "Washington DC - George town",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Harisundar",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Shalini",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Omkar",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023'  }
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Ganesh",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 100000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 50000 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023'  }
        ],
      },
      {
        name: "Ayush",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 10000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Muskan",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023'  },
          { type: "RD", amount: 15000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Ayuj",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023'  },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Kajal",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Chinmay",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 15000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Akshay",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Rahul",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 200000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Kisan",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "Washington DC - George Town",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Pranav",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Kartikeya",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Farah",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Francisco",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Nilambari",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Nitesh",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Arya",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Francisco",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Minakshi",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Meera",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Ram",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Shaw",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Ritika",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Rajesh",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Krushali",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "New York - Manhattan",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Shanaya",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Alia",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Katrina",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "New York - Manhattan",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Karina",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Ishika",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Isha",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Smita",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Ramesh",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Sarveh",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Gaurav",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Ashish",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Nilam",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Jagdish",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Om",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Kirtesh",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Penn Quarter",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Kritika",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Rupa",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Kirti",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Shaw",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Manasa",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Prerna",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Vishnu",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Krishna",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Radhika",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Radha",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "California - San Francisco",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Shubham",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Nirali",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Amar",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Gaurang",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Mogra",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Chafa",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "Washington DC - George Town",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Champa",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Chameli",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Pragati",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Megha",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Medha",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Deepika",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "California - San Francisco",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Shahrukh",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Varun",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Ryan",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "New York - Queens",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Harsha",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Teja",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Shruti",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "New York - Brooklyn",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Vaibhavi",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Sanskruti",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Veena",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Penn Quarter",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Velanka",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Janice",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Ancy",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "California - Los Angeles",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Mandira",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Srushti",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Sarvesh",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1500 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 500, fee: 4,transaction_date : '22-04-2023' }
        ],
      },
    ],
  },
  {
    location: "Washington DC - Shaw",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Sagar",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 30000, fee: 100,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Vaibhav",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3,transaction_date : '22-04-2023' }
        ],
      },
      {
        name: "Shubham",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 30000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 1500,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
  {
    location: "California - San Diego",
    branches: ["Branch - 1", "Branch - 2", "Branch - 3"],
    customers: [
      {
        name: "Pranjal",
        category: "Gold",
        transactions: [
          { type: "TD", amount: 10000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 5000,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 20000, fee: 70 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 30000, fee: 100 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Mitali",
        category: "Exclusive",
        transactions: [
          { type: "TD", amount: 20000,transaction_date : '22-04-2023' },
          { type: "RD", amount: 1000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 3000, fee: 2,transaction_date : '22-04-2023' },
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'}
        ],
      },
      {
        name: "Heera",
        category: "Premium",
        transactions: [
          { type: "TD", amount: 300000 ,transaction_date : '22-04-2023'},
          { type: "RD", amount: 15000 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 400, fee: 3 ,transaction_date : '22-04-2023'},
          { type: "ATM", amount: 500, fee: 4 ,transaction_date : '22-04-2023'}
        ],
      },
    ],
  },
];

export default branches;




