import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../components/Account/Account";
import "./User.css";
import { RootState } from "../../store";
import { useEffect } from "react";
import { addUser } from "../../features/userSlice";

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

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(import.meta.env.VITE_API + "/user/profile", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            signal,
        })
            .then((res) => res.json())
            .then((res) => {
                res.status === 200
                    ? dispatch(addUser(res.body))
                    : console.log("error");
            });

        return () => abortController.abort();
    }, []);
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <button className="edit-button">Edit Name</button>
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
