import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/getuser").then(async (res) => {
      const json = await res.json();
      console.log(json);
      if (!json.isLoggedIn) {
        router.push("/login");
      } else {
        setUser(json);
      }
    });
  }, []);

  const router = useRouter();

  const logout = async () => {
    const response = await fetch("/api/logout");
    router.push("/login");
  };

  // if (data.isLoggedIn) {
  return (
    <div className="container">
      <ul className="list-group mt-4">
        <li className="list-group-item">Name: {user?.name}</li>
        <li className="list-group-item">Age: {user?.age}</li>
        <li className="list-group-item">City: {user?.city}</li>
      </ul>
      <button className=" btn btn-danger mt-4" onClick={logout}>
        Logout
      </button>
    </div>
  );
  // }

  // return <h1>Loadig...</h1>;
}
