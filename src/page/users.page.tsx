import {NavBarComponent} from "@/components/NavBar.component.tsx";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {User} from "@/dto/User.ts";
import UserService from "@/service/auth/user.service.ts";
import {getRoleString} from "@/dto/RegisterRequest.ts";

const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getListUsers();
    }, []);

    const getListUsers = () => {
        UserService.all().then(resp => {
            setUsers(resp.data);
        }).catch(err => {
            console.log(err);

        })
    }


    return (
        <>
            <NavBarComponent/>
            <Table>
                <TableCaption>A list of users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Firstname</TableHead>
                        <TableHead>Lastname</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Role</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.email}>
                            <TableCell className="font-medium">{user.firstname}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="text-right">{getRoleString(user.role)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Nb users</TableCell>
                        <TableCell className="text-right">{users.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    )
}

export default UsersPage;