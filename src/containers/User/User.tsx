import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../components/Account/Account";
import "./User.css";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { addUser } from "../../features/userSlice";
import { getUser, postPut } from "../../http-service";

type User = { firstName: string; lastName: string };
const accounts = [
    {
        title: "Argent Bank Checking (x8349) ",
        amount: "2,082.79",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "10,928.42",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "184.30",
        description: "Current Balance",
    },
];
export const User = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state);
    const [isEdit, setIsEdit] = useState(false);

    const editUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;

        const { firstName, lastName } = target;

        const data: User = {
            firstName: firstName.value,
            lastName: lastName.value,
        };

        postPut("/user/profile", "PUT", data).then((res) => {
            if (res.status !== 200) {
                throw new Error(res.message);
            }
            setIsEdit(false);
        });
    };

    // GET USER
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getUser(signal).then((res) => {
            if (res.status === 200) {
                dispatch(addUser(res.body));
            } else {
                window.location.pathname = "/";
                throw new Error(res.message);
            }
        });

        return () => abortController.abort();
    }, [editUser]);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {/* NAME DISPLAY / INPUT */}
                    {isEdit ? (
                        <form onSubmit={editUser}>
                            <input
                                type="text"
                                id="firstName"
                                defaultValue={user.firstName}
                            />
                            <input
                                type="text"
                                id="lastName"
                                defaultValue={user.lastName}
                            />
                            <div>
                                <button className="edit-button" type="submit">
                                    Save
                                </button>
                                <button
                                    className="edit-button"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            {user.firstName} {user.lastName}
                            <div>
                                <button
                                    className="edit-button"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    Edit Name
                                </button>
                            </div>
                        </>
                    )}
                </h1>
            </div>
            {accounts.map((account) => (
                <Account
                    key={account.title}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};
