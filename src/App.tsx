import {useState} from "react";
import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import {StudentPanel} from "./components/StudentPanel/StudentPanel";
import {HRPanel} from "./components/HRPanel/HRPanel";
import {AdminElement, HRElement, StudentElement} from "./components/RoleElement/RoleElement";
import {UserContext} from "./context/context";
import {PageNotFound} from "./components/common/PageNotFound/PageNotFound";
import './App.css';

interface userType {
    id: string | null;
    role: number;
}

function App() {
    const [user, setUser] = useState<userType>({
        id: '',
        role: 4,
    });

    return (
        <div className="app-container">
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path="/" element={<LogIn/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/admin" element={<AdminElement><AdminPanel/></AdminElement>}/>
                    <Route path="/student" element={<StudentElement><StudentPanel/></StudentElement>}/>
                    <Route path="/hr" element={<HRElement><HRPanel/></HRElement>}/>
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App;
