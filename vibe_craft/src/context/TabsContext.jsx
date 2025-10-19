import { createContext,useContext,useState } from "react";

const TabsContext = createContext();

export default function TabsProvider({ children }) {
const [activeTab, setActiveTab] = useState("Profile");

const value={ activeTab, setActiveTab };

return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>


}
export function useTabs() {
  return useContext(TabsContext);
}