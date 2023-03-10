import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersThunk } from "../redux/modules/users";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  // }, [dispatch]);

  // const success = useCallback(
  //   (data) => {
  //     dispatch(getUsersSuccess(data));
  //   },
  //   [dispatch]
  // );

  // const fail = useCallback(
  //   (err) => {
  //     dispatch(getUsersFail(err));
  //   },
  //   [dispatch]
  // );

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (err) {
  //     dispatch(getUsersFail(err));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  // const getUsers = useCallback(() => {
  //   dispatch(getUsersPromise());
  // }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
