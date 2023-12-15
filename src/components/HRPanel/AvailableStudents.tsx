import { useEffect, useState } from 'react';
import {FilteredStudents, StudentFilters, StudentInitialInterface} from 'types';
import { getStudentsForRecruiter } from 'src/api/get-students-for-recruiter';
import { OneStudent } from './OneStudent';
import { Spinner } from '../common/Spinner/Spinner';
import { Btn } from '../common/Btn/Btn';
import { reserveStudentByHr } from 'src/api/reserve-student-by-hr';
import { Pagination } from './Pagination';
import './AvailableStudents.css';

interface Props {
    filteredUsers: StudentInitialInterface[];
    filteredUsersFromPopup: StudentFilters
}

export const AvailableStudents = (props: Props) => {
    const [students, setStudents] = useState<FilteredStudents | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [textInfo, setTextInfo] = useState<string | null>(null);

    // Tutaj w props.filteredUsersFromPopup jest obiekt z popupu
    console.log(props.filteredUsersFromPopup)

    useEffect(() => {
        (async () => {
            const studentArray = await getStudentsForRecruiter(
                currentPage,
                itemsPerPage,
            );
            setStudents(studentArray);
        })();
    }, [currentPage, itemsPerPage]);

    const onPageChange = (page: number, take: number) => {
        setCurrentPage(page);
        setItemsPerPage(take);
    };

    const reserveStudent = async (email: string) => {
        const student = await reserveStudentByHr(email);
        setTextInfo('Student został poprawnie zarezerwowany. Przejdź do zakładki "Do rozmowy".')
        return {
            expirationDate: student.reservationExpirationDate,
        };
    };

    if (!students) return <Spinner />;


    return (
        <>
            <div className="available-students">
                {textInfo ? <p className="text-info">{textInfo}</p> : ''}
                <ul>
                    {props.filteredUsers
                        ? (props.filteredUsers.length === 0
                            ?students.students.map(student => (
                                <li key={student.profile?.id}>
                                    <OneStudent student={student}>
                                        <Btn
                                            text="Zarezerwuj rozmowę"
                                            onClick={() => reserveStudent(student.email)}
                                        />
                                    </OneStudent>
                                </li>
                            ))
                            : props.filteredUsers.map(student => (
                                <li key={student.profile?.id}>
                                    <OneStudent student={student}>
                                        <Btn
                                            text="Zarezerwuj rozmowę"
                                            onClick={() => reserveStudent(student.email)}
                                        />
                                    </OneStudent>
                                </li>
                            )))
                        : ''}
                </ul>
            </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={students.studentsCount}
                totalPages={students.numberOfPages}
                onPageChange={onPageChange}
            />
        </>
    );
};