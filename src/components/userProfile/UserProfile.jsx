import React from "react";
import { Box, Center, Square, Flex, Image, Stack, Text } from "@chakra-ui/react";
import email from "../../assets/mail.svg";
import male from "../../assets/man.svg";
import female from "../../assets/woman.svg";
import phone from "../../assets/phone.svg";
import password from "../../assets/padlock.svg";
import ageMale from "../../assets/growing-up-man.svg";
import ageFemale from "../../assets/growing-up-woman.svg";
import location from "../../assets/map.svg";

const UserProfile = ({ user, hover, setHover }) => {
    const hoverHandler = (e) => {
        const { name } = e.target;
        setHover(() => name);
    };
    return (
        <Flex direction={"column"} width={"full"}>
            <Box>
                <Center>
                    <Image
                        src={user.avatar}
                        border={"3px"}
                        borderColor={"white"}
                        borderRadius={"full"}
                        alt={"avatar"}
                    />
                </Center>
            </Box>
            <Box mt={"5"}>
                <Stack textAlign={"center"}>
                    <Text fontSize={"2xl"}>My {hover} is:</Text>
                    <Text fontSize={"4xl"} as={"b"}>
                        {user[hover]}
                    </Text>
                </Stack>
            </Box>
            <Box m={"9"}>
                <Flex justify={"space-evenly"}>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image
                            src={user.gender === "male" ? male : female}
                            alt={"name"}
                            name="name"
                            onMouseOver={hoverHandler}
                        />
                    </Square>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image src={email} alt={"email"} name="email" onMouseOver={hoverHandler} />
                    </Square>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image
                            src={user.gender === "male" ? ageMale : ageFemale}
                            alt={"age"}
                            name="age"
                            onMouseOver={hoverHandler}
                        />
                    </Square>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image
                            src={location}
                            alt={"location"}
                            name="location"
                            onMouseOver={hoverHandler}
                        />
                    </Square>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image src={phone} alt={"phone"} name="phone" onMouseOver={hoverHandler} />
                    </Square>
                    <Square size="60px" bg="purple.700" color="white">
                        <Image
                            src={password}
                            alt={"password"}
                            name="password"
                            onMouseOver={hoverHandler}
                        />
                    </Square>
                </Flex>
            </Box>
        </Flex>
    );
};

export default UserProfile;
