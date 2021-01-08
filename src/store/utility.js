export const updateData = (oldObj, updatedObj) => {
    return {
        ...oldObj,
        ...updatedObj
    };
};
