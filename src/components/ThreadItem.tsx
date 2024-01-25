import UpdateModal from "./UpdateThreads";
import DeleteFunc from "./DeleteThread";
import Thread from "../types/Thread";

import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Typography, CardHeader } from "@mui/material";

import "./ThreadItem.css";

type Props = {
    thread: Thread;
    styled: boolean;
};

const ThreadItem: React.FC<Props> = ({ thread, styled }) => {
    const [openCreateModal, setOpenCreateModal] = useState(false);

    const handleClickEdit = () => {
        setOpenCreateModal(true);
    };

    if (styled) {
        return (
            <Card className="commentCard">
                <CardHeader
                    title={thread.Title}
                    subheader={thread.Category}
                    className={`threadHeader ${
                        thread.Category === "Java"
                            ? "Java"
                            : thread.Category === "Python"
                            ? "Python"
                            : thread.Category === "Javascript"
                            ? "Javascript"
                            : thread.Category === "Golang"
                            ? "Golang"
                            : thread.Category === "Rust"
                            ? "Rust"
                            : thread.Category === "Kotlin"
                            ? "Kotlin"
                            : thread.Category === "Swift"
                            ? "Swift"
                            : thread.Category === "C#"
                            ? "CSharp"
                            : thread.Category === "C++"
                            ? "CPlus"
                            : thread.Category === "SQL"
                            ? "SQL"
                            : "default"
                    }`}
                />
                <CardContent>
                    <Typography variant="body1" color="textPrimary" className="threadContent" component="p">
                        {thread.Content}
                    </Typography>
                    <Typography color="textSecondary" className="metadata" gutterBottom>
                        {"Posted by " + thread.Username}
                    </Typography>
                </CardContent>
                <CardActions className="cardActions">
                    <Button color="inherit" onClick={handleClickEdit}>
                        Edit
                    </Button>
                    <UpdateModal thread={thread} open={openCreateModal} closeModal={() => setOpenCreateModal(false)} />
                    <DeleteFunc thread={thread} />
                </CardActions>
            </Card>
        );
    }

    // unstyled
    return (
        <li className="threadContent">
            {thread.Content}
            <br />
            <em>{"posted by " + thread.Title + " on " + thread.CreatedAt}</em>
        </li>
    );
};

export default ThreadItem;
