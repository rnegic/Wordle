import React, { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Dashboard = () => {

    const [highScores, setHighScores] = useState<Score[]>([]);

    useEffect(() => {
        const fetchHighScores = async () => {
            const res = await fetch('/api/scores');
            const data = await res.json();
            setHighScores(data);
        };

        fetchHighScores();
    }, []);

    return (
        <section className="flex flex-col m-20">
            <Table>
                <TableCaption>top 5 scores of the day</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Username</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {highScores.map((user) => (
                        <TableRow key={user.username} className="text-lg">
                            <TableCell className="font-medium">{user.username}</TableCell>
                            <TableCell className="font-medium">{user.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </section>
    );
};

export default Dashboard;