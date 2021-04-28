// update data received from the server
export const updateData = ({ oldArray, data }) => {
  const { create_time, organization, payload: { reference, short, subtype, operator, description } } = data;
  const exist = oldArray.find(order => {
    return order.reference === reference;
  });
  if (exist) {
    return oldArray.map(order => {
      const { data } = order;
      return order.reference === reference
        ? { ...order, data: [...data, { time: create_time, short, subtype, operator, description } ]}
        : order;
      }
    );
  } else {
    const newOrder = { reference, organization, data: [{ time: create_time, short, subtype, operator, description }] };
    return [...oldArray, newOrder];
  }
};

// list of orders for each tab
export const getFilteredData = (data, list) => {
  if (!list) {
    return data;
  }

  const filterList = data.filter(({ data }) => {
    const { short } = data.filter(dat => dat.subtype === 'status_update').pop() || {};
    return list.includes(short);
  });
  return filterList;    
};