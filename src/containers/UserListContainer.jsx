import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";
import axios from "axios";

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

  const getUsers = useCallback(async () => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFail(err));
    }
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
