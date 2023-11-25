import {Btn} from "../common/Btn/Btn";
import './SignIn.css';
import {AuthorizationInfo} from "../common/AuthorizationInfo/AuthorizationInfo";

export const SignIn = () => {
    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Hasło"/>
                    <input type="password" placeholder="Powtórz hasło"/>
                    <Btn text="Zarejestruj się"></Btn>
                </form>
                <AuthorizationInfo text="Poprawnie dodano użytkownika. - !! Do zrobienia !!"/>
            </div>
        </div>
    )
}