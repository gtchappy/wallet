import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

export type RecordItem = {
    amount: string;
    category: '+' | '-';
    createAt: string;
    note: string;
    tagIds: string[];
};
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])

    const addRecord = (record: RecordItem) => {
        setRecords([...records, record])
    }

    return { records, addRecord }
}