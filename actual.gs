const mockData = [
  {
    "ID": 1,
    "UserID": 1,
    "User": {
      "ID": 1,
      "UID": "foo",
      "Login": "tane",
      "Wallet": "0xA0D9F5854A77D4906906BCEDAAEBB3A39D61165A"
    },
    "M5StickID": 1,
    "M5Stick": {
      "ID": 1,
      "Mac": "00:00:00:00:00:00",
      "RoleId": 1,
      "Role": {
        "ID": 1,
        "Name": "Cleaning"
      },
      "LocationId": 1,
      "Location": {
        "ID": 1,
        "Name": "F1"
      }
    },
    "CreatedAt": 1714898553
  },
  {
    "ID": 1,
    "UserID": 1,
    "User": {
      "ID": 1,
      "UID": "foo",
      "Login": "syama",
      "Wallet": "0xA0D9F5854A77D4906906BCEDAAEBB3A39D61165A"
    },
    "M5StickID": 1,
    "M5Stick": {
      "ID": 1,
      "Mac": "00:00:00:00:00:00",
      "RoleId": 1,
      "Role": {
        "ID": 1,
        "Name": "Cleaning"
      },
      "LocationId": 1,
      "Location": {
        "ID": 1,
        "Name": "F1"
      }
    },
    "CreatedAt": 1714898553
  }
]

// Function to mock UrlFetchApp.fetch
function mockFetch(url, params) {
  // Simulate API response time
  Utilities.sleep(1000); // Simulating 1 second delay
  
  // Mock response data
  const mockResponse = {
    getContentText: function() {
      // Return mock JSON response as a string
      return JSON.stringify(mockData);
    },
    getResponseCode: function() {
      // Return mock response code
      return 200;
    }
  };

  return mockResponse;
}

// Example usage
function testMockFetch() {
  // Call mockFetch instead of UrlFetchApp.fetch
  const response = mockFetch("https://example.com/activities/cleanings?start=1714867200&end=1714910400", { method: "GET" });

  // Parse the mock JSON response
  const users = JSON.parse(response.getContentText());
  
  Logger.log(users);
}

function getCleanersActual() {
  const response = mockFetch("https://example.com/activities/cleanings?start=1714867200&end=1714910400", { method: "GET" });
  const users = JSON.parse(response.getContentText());
  var array_login = [];

  for (user of users) {
    Logger.log(user.User.Login);
    array_login.push(user.User.Login);
  }
  return array_login;
}

function test_getCleanersActual() {
  const array_login = getCleanersActual();
  Logger.log(array_login);
}