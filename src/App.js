import { useState, useEffect } from "react";
import "./App.css";
import { ChakraProvider, Center, Container, Button, ButtonGroup } from "@chakra-ui/react";
import UserProfile from "./components/userProfile/UserProfile";
import UsersTable from "./components/usersTable/UsersTable";
import axios from "axios";

function App() {
    const [currentUser, setCurrentUser] = useState(false);
    const [userList, setUserList] = useState([]);
    const [hover, setHover] = useState("name");
    const fetchUser = async () => {
        const url = "https://randomuser.me/api/";
        const response = await axios(url);

        console.log(response.data.results[0]);
        setCurrentUser({
            id: response.data.results[0].login.uuid,
            avatar: response.data.results[0].picture.large,
            name: response.data.results[0].name.first + " " + response.data.results[0].name.last,
            email: response.data.results[0].email,
            age: response.data.results[0].dob.age,
            phone: response.data.results[0].phone,
            location:
                response.data.results[0].location.city +
                " - " +
                response.data.results[0].location.country,
            password: response.data.results[0].login.password,
            gender: response.data.results[0].gender,
        });
        setHover(() => "name");
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <ChakraProvider>
            {Boolean(currentUser) && (
                <Center width={"100%"} height={"100%"}>
                    <Container
                        maxW={"850px"}
                        bg={"cyan.700"}
                        color={"white"}
                        centerContent
                        padding={"5"}
                        borderRadius={"lg"}
                    >
                        <UserProfile user={currentUser} hover={hover} setHover={setHover} />

                        <ButtonGroup spacing="6">
                            <Button colorScheme={"yellow"} onClick={() => fetchUser()}>
                                New User
                            </Button>
                            <Button
                                colorScheme={"yellow"}
                                disabled={
                                    Boolean(userList.length) &&
                                    Boolean(
                                        userList.filter((item) => item.id === currentUser.id).length
                                    )
                                }
                                onClick={() => setUserList((prev) => [...prev, currentUser])}
                            >
                                Add User
                            </Button>
                        </ButtonGroup>

                        {Boolean(userList.length) && <UsersTable userList={userList} />}
                    </Container>
                </Center>
            )}
        </ChakraProvider>
    );
}

export default App;
