import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { toggleThemeColor } from "@/redux/reducers/Global";
import { useDispatch, useSelector } from "react-redux";
import { useGetTodosQuery, usePostTodosMutation } from "@/redux/apis/Todos";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  const session = useSession();
  const dispatch = useDispatch();
  const themeColor = useSelector((state: any) => state.global);
  console.log("themeColor:", themeColor);

  const { data: todos } = useGetTodosQuery({});
  const [postTodos] = usePostTodosMutation();

  const handleSubmit = async () => {
    const postTodosResult = await postTodos({ projectName: "Example" });
    console.log(postTodosResult);
  };

  return (
    <>
      <Head>
        <title>Example</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Box display={"flex"} justifyContent={"center"} gap={2} mb={2}>
        <Button onClick={() => dispatch(toggleThemeColor())}>
          Change Theme
        </Button>

        {session.status === "authenticated" ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}

        <Button onClick={handleSubmit}>Submit</Button>
      </Box>

      {todos?.map((item: any) => (
        <Box key={item?.id}>
          <Typography>{item?.title}</Typography>
        </Box>
      ))}
    </>
  );
}
