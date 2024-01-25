import ThreadItem from "./ThreadItem";
import Thread from "../types/Thread";
import { API_URL } from "../config";

import React, { useEffect, useState } from "react";

type Props = {
    styled: boolean;
    category: string;
};

const BasicPostList: React.FC<Props> = ({ styled, category }: Props) => {
    const [threads, setThreads] = useState<Thread[]>([]);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await fetch(`${API_URL}/${category}`);
                const data = await response.json();
                setThreads(data.posts);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchThreads();
    }, [threads]); // app re rerenders when threads is updated

    return (
        <ul>
            {threads.map((thread) => (
                <ThreadItem thread={thread} styled={styled} key={thread.ID} />
            ))}
        </ul>
    );
};

export default BasicPostList;
