import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

const DownloadHistory = () => {
    const [downloadData, setDownloadData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (downloadData.length > 0) {
            $(function () {
                $("#myTable").DataTable(
                    
                );
            });
        }
    }, [downloadData]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5001/api/downloads");
            const flattenedData = response.data.reduce((acc, item) => {
                return [...acc, ...item.downloads.map((detail) => ({
                    ...item,
                    username: detail.username,
                    downloadedtime: detail.downloadedtime
                }))];
            }, []);
            setDownloadData(flattenedData);
            console.log(flattenedData);
        } catch (error) {
            console.log(error);
        }
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const month = formattedDate.getMonth() + 1;
        const year = formattedDate.getFullYear();
        const hours = formattedDate.getHours();
        const minutes = formattedDate.getMinutes();
        const seconds = formattedDate.getSeconds();

        const formattedDateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        return formattedDateString;
    };

    return (
        <div className="container text-center p-3 border border-dark table-responsive ">
            <table id="myTable" className="table table-hover text-capitalize  ">
                <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>User</th>
                        <th>Software</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {downloadData.length > 0 ? (
                        downloadData.map((item, index) => (
                            // <tr className="table-primary" key={index}>
                            <tr key={index}>

                                <td>{index + 1}</td>
                                <td>{item.patchname}</td>
                                <td>{item.username}</td>
                                <td>{item.software}</td>
                                <td>{formatDate(item.downloadedtime)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DownloadHistory;