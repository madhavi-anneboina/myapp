import React from "react";
/**
 * create context by using react.createContext
 * provide its value by <userprovider>
 * and receive it appropriately
 */

const UserContext = React.createContext("madhuraa")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export default UserContext
export {UserProvider,UserConsumer}


