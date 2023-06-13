function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
      
    let nextTakeOutToServe = 0;
    let nextDineInToServe = 0;
    
    for (let i = 0; i < servedOrders.length; i++) {
      const servedOrder = servedOrders[i];
      switch (servedOrder) {
        case takeOutOrders[nextTakeOutToServe]:
          nextTakeOutToServe++
          break;
        case dineInOrders[nextDineInToServe]:
          nextDineInToServe++
          break;
        default:
          return false;
      }
    }
    const allTakeOutOrdersServed = nextTakeOutToServe === takeOutOrders.length;
    const allDineInOrdersServed = nextDineInToServe === dineInOrders.length;
    if (!allTakeOutOrdersServed || !allDineInOrdersServed) return false;
    return true;
  }