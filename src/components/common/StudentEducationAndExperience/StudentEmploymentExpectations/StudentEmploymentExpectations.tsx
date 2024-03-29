import {StudentInitialInterface} from "types";
import './StudentEmploymentExpectations.css';

interface Props {
    user: StudentInitialInterface;
}

export const StudentEmploymentExpectations = (props: Props) => {
    const {profile} = props.user;

    const checkTypeOfWork = () => {
        switch (profile.expectedTypeWork) {
            case 0:
                return 'Biuro';
            case 1:
                return 'Gotowość do przeprowadzki';
            case 2:
                return 'Zdalnie';
            case 3:
                return 'Hybrydowo';
            case 4:
                return 'Brak preferencji';
            default:
                return null;
        }
    }

    const checkTypeOfContract = () => {
        switch (profile.expectedContractType) {
            case 0:
                return 'Umowa o prace';
            case 1:
                return 'B2B';
            case 2:
                return 'Umowa zlecenie/Umowa o dzieło';
            case 3:
                return 'Brak preferencji';
            default:
                return null;
        }
    }

    const checkMonthsOfCommercialExp = () => {
        const arrayOfMonths = [2, 3, 4];
        if (profile.monthsOfCommercialExp === 1) {
            return '1 miesiąc'
        } else if (arrayOfMonths.includes(profile.monthsOfCommercialExp)) {
            return `${profile.monthsOfCommercialExp} miesiące`
        } else {
            return `${profile.monthsOfCommercialExp} miesięcy`
        }
    }

    return (
        <>
            <h2>Oczekiwania w stosunku do zatrudnienia</h2>
            <div className="employment-expectations">
                <div className="employment-expectations-left-side">
                    <div className="place-of-work">
                        <h3>Preferowane miejse pracy</h3>
                        <p>{profile ? checkTypeOfWork() : 'Brak danych'}</p>
                    </div>
                    <div className="city-of-work">
                        <h3>Docelowe miasto, gdzie chce pracować kandydat</h3>
                        <p>{profile ? profile.targetWorkCity : 'Brak danych'}</p>
                    </div>
                    <div className="type-of-contract">
                        <h3>Oczekiwany typ kontraktu</h3>
                        <p>{profile ? checkTypeOfContract() : 'Brak danych'}</p>
                    </div>
                </div>
                <div className="employment-expectations-right-side">
                    <div className="place-of-work">
                        <h3>Oczekiwane wynagrodzenie netto miesięcznie</h3>
                        <p>{profile ? `${profile.expectedSalary} zł` : 'Brak danych'}</p>
                    </div>
                    <div className="can-take-apprenticeship">
                        <h3>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
                        <p>{profile ? (profile.canTakeApprenticeship ? 'TAK' : 'NIE') : 'Brak danych'}</p>
                    </div>
                    <div className="months-of-commercial-exp">
                        <h3>Komercyjne doświadczenie w programowaniu</h3>
                        <p>{profile ? checkMonthsOfCommercialExp() : 'Brak danych'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}