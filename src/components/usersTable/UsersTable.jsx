import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
const UsersTable = ({ userList }) => {
    return (
        <TableContainer mt={9} overflowY="auto" maxHeight="300px">
            <Table>
                <TableCaption>Users List</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userList.map((user) => {
                        return (
                            <Tr key={user.id}>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.phone}</Td>
                                <Td>{user.age}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
