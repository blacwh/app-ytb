import Link from "next/link";

const Page = () => {

    return  (
        <div>
            <h1>Dashboard Users</h1>
        <ul>
            <li>
                <Link href={"/dashboard/users/1"}>User 1</Link>
                <Link href={"/dashboard/users/2"}>User 2</Link>
                <Link href={"/dashboard/users/3"}>User 3</Link>
                <Link href={"/dashboard/users/4"}>User 4</Link>
            </li>
        </ul>
        </div>
    )
};

export default Page