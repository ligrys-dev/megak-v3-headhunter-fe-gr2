import {EditStudentPersonalData} from "../common/EditStudent/EditStudentPersonalData/EditStudentPersonalData";
import { EditStudentEducation } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEducation/EditStudentEducation";
import { EditStudentEmploymentExpectations } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEmploymentExpectations/EditStudentEmploymentExpectations";
import { EditStudentExperience } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentExperience/EditStudentExperience";
import {StudentProfileInterface} from "types";
import { useState } from "react";
import './StudentData.css';


interface Props {
    user: StudentProfileInterface
}

export const EditStudentData = (props: Props) => {

    const [form, setForm] = useState<StudentProfileInterface>({
        id: ''
        initialData: null
        tel: null
        firstName: string;
        lastName: string;
        githubUsername: string;
        portfolioUrls: string[] | null;
        projectUrls: string[];
        bio: string;
        expectedTypeWork: TypeWork;
        targetWorkCity: string;
        expectedContractType: ContractType;
        expectedSalary: number | null;
        canTakeApprenticeship: boolean;
        monthsOfCommercialExp: number;
        education: string | null;
        workExperience: string | null;
        courses: string | null;
        status: StudentStatus;
        
    })


    return (
        <div className="student-data">
            <EditStudentPersonalData user={props.user}/>
            <div className="education-experience">
                <EditStudentEmploymentExpectations user={props.user}/>
                <EditStudentEducation user={props.user}/>
                <EditStudentExperience user={props.user}/>
            </div>
        </div>
    )
}