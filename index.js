// Code your solution here

function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  function matchName(driverList, query) {
    return driverList.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  